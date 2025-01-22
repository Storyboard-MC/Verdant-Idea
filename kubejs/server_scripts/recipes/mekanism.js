ServerEvents.recipes(event => {
  // Remove sawdust paper recipe (we have a better one)
  event.remove({id: 'mekanism:paper'})

  // Replace steel casing recipe
  event.remove({id: 'mekanism:steel_casing'})
  event.shaped(
    'mekanism:steel_casing',
    [
      'SCS',
      'GPG',
      'SCS'
    ],
    {
      C: 'mekanism:basic_control_circuit',
      G: '#forge:glass/silica',
      P: 'pncepcb:high_power_finished_pcb',
      S: '#forge:plates/steel'
    }
  )

  // Replace glowstone with lumium in refined glowstone recipe
  event.remove({id: 'mekanism:processing/refined_glowstone/ingot/from_dust'})
  event.custom({
    "type": "mekanism:compressing",
    "chemicalInput": {
      "amount": 1,
      "gas": "mekanism:osmium"
    },
    "itemInput": {
      "ingredient": {
        "item": "thermal:lumium_dust"
      }
    },
    "output": {
      "item": "mekanism:ingot_refined_glowstone"
    }
  })

  // Simplify configurator recipe
  event.remove({id: 'mekanism:configurator'})
  event.shaped(
    'mekanism:configurator',
    [
      ' L ',
      ' T ',
      ' S '
    ],
    {
      L: 'minecraft:lapis_lazuli',
      T: '#forge:ingots/tin',
      S: 'minecraft:stick'
    }
  )
})