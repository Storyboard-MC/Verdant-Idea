ServerEvents.recipes(event => {
  function explosion_crafting(input, loss_rate, output) {
    event.custom({
      type: "pneumaticcraft:explosion_crafting",
      input: {
        "tag": input
      },
      loss_rate: loss_rate,
      results: [{
        item: output
      }]
    })
  }

  function pressure_chamber(input, pressure, output) {
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: [{
        tag: input
      }],
      pressure: pressure,
      results: [{
        item: output
      }]
    })
  }

  // Compressed Iron
  event.remove({id: "pneumaticcraft:explosion_crafting/compressed_iron_ingot"})
  event.remove({id: "pneumaticcraft:explosion_crafting/compressed_iron_block"})
  event.remove({id: "pneumaticcraft:pressure_chamber/compressed_iron_ingot"})
  event.remove({id: "pneumaticcraft:pressure_chamber/compressed_iron_block"})

  explosion_crafting("forge:ingots/steel", 20, "pneumaticcraft:ingot_iron_compressed")
  explosion_crafting("forge:storage_blocks/steel", 20, "pneumaticcraft:compressed_iron_block")
  pressure_chamber("forge:ingots/steel", 2.0, "pneumaticcraft:ingot_iron_compressed")
  pressure_chamber("forge:storage_blocks/steel", 2.0, "pneumaticcraft:compressed_iron_block")

  // Nitrate
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    exothermic: false,
    fluid_input: {
      "type": "pneumaticcraft:fluid",
      "amount": 1000,
      "fluid": "wasteland:nitrate_slurry"
    },
    "item_output": {
      "item": "immersiveengineering:dust_saltpeter"
    },
    "temperature": {
      "min_temp": 373
    }
  })

  // Remove duplicate fluids
  event.remove({id: 'pneumaticcraft:fluid_mixer/biodiesel'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_sugar'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_potato'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_sweet_berries'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_apple'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_melon'})
  event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_crops'})
  event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds'})


  // Amadron
  event.remove({id: 'pneumaticcraft:amadron/emerald_to_oil'})
  event.remove({id: 'pneumaticcraft:amadron/emerald_to_lubricant'})
})