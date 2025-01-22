ServerEvents.recipes(event => {
  function agri_seed_partial(name) {
    return {
      type: 'forge:partial_nbt',
      item: 'agricraft:seed',
      nbt: {
        genes: {
          species: {
            rec: `${name}`, 
            dom: `${name}`
          }
        }
      }
    }
  }

  event.custom({
    "type": "enchanted:witch_cauldron",
    "cookingColor": [
      92,
      35,
      0
    ],
    "finalColor": [
      153,
      52,
      0
    ],
    "ingredients": [
      {
        "item": "minecraft:netherrack"
      },
      {
        "item": "minecraft:crimson_fungus"
      },
      {
        "item": "minecraft:bone_meal"
      }
    ],
    "power": 0,
    "result": {
      "item": "minecraft:crimson_nylium"
    }
  })

  event.custom({
    "type": "enchanted:witch_cauldron",
    "cookingColor": [
      92,
      35,
      0
    ],
    "finalColor": [
      153,
      52,
      0
    ],
    "ingredients": [
      {
        "item": "minecraft:netherrack"
      },
      {
        "item": "minecraft:warped_fungus"
      },
      {
        "item": "minecraft:bone_meal"
      }
    ],
    "power": 0,
    "result": {
      "item": "minecraft:warped_nylium"
    }
  })
})