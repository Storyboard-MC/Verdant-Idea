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

  function cuttingBoardRecipe(input, output) {
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": input
        }
      ],
      "result": [
        {
          "item": output
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      }
    })
  }

  event.remove({id: 'minecraft:red_dye_from_beetroot'})
  cuttingBoardRecipe('minecraft:beetroot', 'minecraft:red_dye')
})