ServerEvents.tags('item', event => {  
  //Fix multiple same ingots in tags
  event.remove('forge:ingots/nickel', 'immersiveengineering:ingot_nickel')
  //Fix multiple same blocks in tags
  event.remove('forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel')
}),
// Remove Block Tags from Specific Storage Blocks
ServerEvents.tags('block', event => {
  // Remove Tags from Duplicate blocks
  event.remove('forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel')
}),


//Remove the Recipes for Immersive Storage blocks - Using Thermal for it as EMI uses Thermal
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/ingot_nickel_to_nugget_nickel' })
  event.remove({ id: 'immersiveengineering:crafting/ingot_nickel_to_storage_nickel' })
  event.remove({ id: 'immersiveengineering:crafting/nugget_nickel_to_ingot_nickel' })
})