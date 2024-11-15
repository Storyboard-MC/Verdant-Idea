function agri_seed(id) {
  return Item.of('agricraft:seed', `{genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:1,rec:1},species:{dom:"${id}", rec:"${id}"},strength:{dom:1,rec:1}}}`)
}

let grass_loot = [
  agri_seed('minecraft:wheat'),
  agri_seed('minecraft:potato'),
  agri_seed('minecraft:beetroot')
]

LootJS.modifiers((event) => {
  event.addBlockLootModifier('minecraft:grass').removeLoot(/.*/);
  event.addBlockLootModifier('minecraft:grass').not((n) => {
    n.matchMainHand(Ingredient.of("#forge:shears"))
  }).randomChance(0.1).addWeightedLoot(grass_loot);
  event.addBlockLootModifier('minecraft:grass').matchMainHand(Ingredient.of("#forge:shears")).addLoot('minecraft:grass');

  event.addBlockLootModifier('minecraft:tall_grass').removeLoot(/.*/);
  event.addBlockLootModifier('minecraft:tall_grass').not((n) => {
    n.matchMainHand(Ingredient.of("#forge:shears"))
  }).randomChance(0.1).addWeightedLoot(grass_loot);
  event.addBlockLootModifier('minecraft:tall_grass').matchMainHand(Ingredient.of("#forge:shears")).addLoot('2x minecraft:grass');
})