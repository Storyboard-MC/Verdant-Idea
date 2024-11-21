ServerEvents.recipes(event => {
  function mixer(energy, fluid, inputs, result) {
    event.custom({
      type: "immersiveengineering:mixer",
      energy: energy,
      fluid: fluid,
      inputs: inputs,
      result: result
    })
  }

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

  event.replaceInput({id: "immersiveengineering:crafting/manual"}, "minecraft:lever", "immersiveengineering:hammer")

  event.remove({id: "immersiveengineering:crafting/paper_from_sawdust"})
  event.shapeless('2x minecraft:paper', ['#forge:dusts/wood', '#forge:dusts/wood', '#forge:dusts/wood', '#forge:dusts/wood', {"type": "bucketlib:fluid", "fluid": "minecraft:water"}])

  let plate_types = ['bullet_casing', 'gear', 'packing_4', 'packing_9', 'plate', 'rod', 'unpacking', 'wire']
  for (let type in plate_types) {
    mold(plate_types[type])
  }
  

  // Leather
  event.replaceInput({input: "minecraft:leather"}, "minecraft:leather", "#forge:leather")
  event.replaceInput({id: "immersiveengineering:crafting/ersatz_leather"}, "minecraft:honeycomb", "productivebees:wax")

  // Remove some hammering recipes
  event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_constantan_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_electrum_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_lead_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_nickel_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_silver_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_uranium_hammering'})

  // Rebalance hammering recipes which weren't removed
  event.remove({id: 'immersiveengineering:crafting/plate_copper_hammering'})
  event.shapeless('immersiveengineering:plate_copper', ['#forge:ingots/copper', '#forge:ingots/copper', 'immersiveengineering:hammer'])
  event.remove({id: 'immersiveengineering:crafting/plate_iron_hammering'})
  event.shapeless('immersiveengineering:plate_gold', ['#forge:ingots/gold', '#forge:ingots/gold', 'immersiveengineering:hammer'])
  event.remove({id: 'immersiveengineering:crafting/plate_gold_hammering'})
  event.shapeless('immersiveengineering:plate_iron', ['#forge:ingots/iron', '#forge:ingots/iron', 'immersiveengineering:hammer'])

  // Make LV Capacitor possible to make early game
  event.replaceInput({id: "immersiveengineering:crafting/capacitor_lv"}, "#forge:plates/lead", "#forge:plates/gold")

  // Change blast brick recipe to require nether
  event.replaceInput({id: 'immersiveengineering:crafting/blastbrick'}, "minecraft:magma_block", "minecraft:blaze_powder")

  // Nitrate Slurry
  mixer(3200, {"amount": 500, "tag": "minecraft:water"}, [{"base_ingredient": {"item": "wasteland:compost"}, "count":2}, {"item": "minecraft:bone_meal"}], {"amount": 500,"fluid": "wasteland:nitrate_slurry"})
})