const EmiTexture = Java.loadClass("dev.emi.emi.api.render.EmiTexture")
let compostingRecipeType = null

JEIAddedEvents.registerCategories((event) => {
    const guiHelper = event.data.jeiHelpers.guiHelper

    event.custom("wasteland:composting", (category) => {
        compostingRecipeType = category.recipeType
        category.title("Composting")
                .background(guiHelper.createBlankDrawable(108, 18))
                .icon(guiHelper.createDrawableItemStack(Item.of('minecraft:composter')))
                .isRecipeHandled(recipe => !!recipe?.data?.item && !!recipe?.data?.chance)
                .handleLookup((builder, recipe, focuses) => {
                    builder.addInvisibleIngredients("CATALYST").addItemStack(Item.of('minecraft:composter'))

                    builder.addSlot("INPUT", 1, 1)
                        .addItemStack(Item.of(recipe.data.item))
                        .setBackground(guiHelper.getSlotDrawable(), -1, -1)
                    
                    builder.addSlot("OUTPUT", 91, 1)
                        .addItemStack(Item.of('wasteland:compost'))
                        .setBackground(guiHelper.getSlotDrawable(), -1, -1)
                })
                .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                    guiGraphics.drawWordWrap(Client.font, Text.darkGray('x7'), 74, 6, 100, 0)
                    guiGraphics.drawWordWrap(Client.font, Text.darkGray(`${Math.round(recipe.data.chance * 100)}%`), recipe.data.chance == 1 ? 20 : 24, 6, 100, 0)
                    EmiTexture.EMPTY_ARROW.render(guiGraphics, 46, 1, 0)
                })
    })
})

JEIAddedEvents.registerRecipes((event) => {
    const {COMPOSTABLES} = Java.loadClass("net.minecraft.world.level.block.ComposterBlock")
    COMPOSTABLES.forEach((item, chance) => {  
        event.custom("wasteland:composting").add({item: item, chance: chance})
    })
})