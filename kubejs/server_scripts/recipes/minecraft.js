ServerEvents.tags('block', event => {
  event.add('minecraft:enderman_holdable', ['wasteland:cracked_sand'])
})

ServerEvents.compostableRecipes(event => {
  event.add('minecraft:rotten_flesh', 0.5)
  event.add('minecraft:spider_eye', 0.5)
  event.add('minecraft:poisonous_potato', 0.3)
  event.add('thermal:sawdust', 0.3)
})