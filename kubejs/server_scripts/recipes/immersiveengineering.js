ServerEvents.recipes(event => {
  function mold(type) {
    event.remove({id: `immersiveengineering:blueprint/mold_${type}`})

    event.custom({
      "type": "immersiveengineering:blueprint",
      "category": "molds",
      "inputs": [
        {
          "base_ingredient": {
            "tag": "forge:ingots/steel"
          },
          "count": 3
        },
        {
          "item": "immersiveengineering:wirecutter"
        }
      ],
      "result": {
        "item": `immersiveengineering:mold_${type}`
      }
    })
  }

  let plate_types = ['bullet_casing', 'gear', 'packing_4', 'packing_9', 'plate', 'rod', 'unpacking', 'wire']
  for (let type in plate_types) {
    mold(plate_types[type])
  }
  
  // Make Engineer's Manual require iron, so players don't start IE too early
  event.replaceInput({id: "immersiveengineering:crafting/manual"}, "minecraft:lever", "immersiveengineering:hammer")

  // Update paper recipe so that it allows ceramic buckets
  event.remove({id: "immersiveengineering:crafting/paper_from_sawdust"})
  event.shapeless('2x minecraft:paper', ['#forge:dusts/wood', '#forge:dusts/wood', '#forge:dusts/wood', '#forge:dusts/wood', {"type": "bucketlib:fluid", "fluid": "minecraft:water"}])

  // Leather
  event.replaceInput({input: "minecraft:leather"}, "minecraft:leather", "#forge:leather")
  event.replaceInput({id: "immersiveengineering:crafting/ersatz_leather"}, "minecraft:honeycomb", "productivebees:wax")

  // Make LV Capacitor possible to make early game
  event.replaceInput({id: "immersiveengineering:crafting/capacitor_lv"}, "#forge:plates/lead", "#forge:plates/gold")

  // Change blast brick recipe to require nether
  event.replaceInput({id: 'immersiveengineering:crafting/blastbrick'}, "minecraft:magma_block", "minecraft:blaze_powder")

  // Remove silver from heavy engineering block recipe
  event.replaceInput({id: 'immersiveengineering:crafting/heavy_engineering'}, "#forge:ingots/electrum", "minecraft:gold_ingot")
})