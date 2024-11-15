ServerEvents.recipes(event => {
  event.remove({id: 'productivebees:upgrades/base'})
  event.shaped(
    'productivebees:upgrade_base',
    [
      "SGS",
      "GWG",
      "STS"
    ],
    {
      G: 'minecraft:gold_ingot',
      S: 'immersiveengineering:stick_treated',
      T: 'productivebees:honey_treat',
      W: 'minecraft:white_wool'
    }
  )

  event.replaceInput({id: 'productivebees:upgrades/productivity'}, 'productivebees:draconic_chunk', 'minecraft:emerald')
})