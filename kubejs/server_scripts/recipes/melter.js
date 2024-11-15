ServerEvents.recipes(event => {
  event.remove({id: 'melter:crafting/melter_block'})
  event.shaped(
    'melter:melter',
    [
      "D D",
      "D D",
      "DSD"
    ],
    {
      D: 'minecraft:polished_deepslate',
      S: 'minecraft:polished_deepslate_slab'
    }
  )
})