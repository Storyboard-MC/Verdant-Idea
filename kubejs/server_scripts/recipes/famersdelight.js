ServerEvents.tags('item', event => {
  event.add('minecraft:planks', ['farmersdelight:tree_bark'])
})

ServerEvents.recipes(event => {
  event.remove({output: 'farmersdelight:organic_compost'})
  event.remove({id: 'farmersdelight:paper_from_tree_bark'})

  event.shaped(
    'minecraft:composter',
    [
      "B B",
      "B B",
      "BBB"
    ],
    {
      B: 'farmersdelight:tree_bark'
    }
  )
})