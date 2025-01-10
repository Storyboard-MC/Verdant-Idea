ServerEvents.recipes(event => {
  const seedTypes = [
    'inferium',
    'coal',
    'copper',
    'dye',
    'iron',
    'nether',
    'skeleton',
    'zombie',
    'experience',
    'lapis_lazuli',
    'nether_quartz',
    'redstone',
    'tin',
    'spider',
    'air',
    'earth',
    'fire',
    'water',
    'diamond',
    'emerald',
    'end',
    'gold',
    'nickel',
    'silver',
    'blaze',
    'creeper',
    'enderman',
    'aluminum',
    'certus_quartz',
    'fluorite',
    'lead',
    'netherite',
    'osmium',
    'ghast',
    'slime',
    'wither_skeleton'
  ]

  function multi(item, count) {
    return Array(count).fill(item)
  }

  function comb(name) {
    return {
      type: 'forge:partial_nbt',
      item: 'productivebees:configurable_honeycomb',
      nbt: {
        EntityTag: {
          type: `productivebees:${name}`
        }
      }
    }
  }

  function combBlock(name) {
    return {
      type: 'forge:partial_nbt',
      item: 'productivebees:configurable_comb',
      nbt: {
        EntityTag: {
          type: `productivebees:${name}`
        }
      }
    }
  }

  function agri_seed(name) {
    return {
      type: 'forge:partial_nbt',
      item: 'agricraft:seed',
      nbt: {
        genes: {
          mutativity: {
            rec: 1,
            dom: 1
          },
          strength: {
            rec: 1,
            dom: 1
          },
          species: {
            rec: `${name}`, 
            dom: `${name}`
          },
          fertility: {
            rec: 1,
            dom: 1
          },
          growth: {
            rec: 1,
            dom: 1
          },
          resistance: {
            rec: 1,
            dom: 1
          },
          gain: {
            rec: 1,
            dom: 1
          }
        }
      }
    }
  }

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

  //
  // Mystical Seeds
  //

  // Prosperity seed base
  event.shaped(
    'mysticalagriculture:prosperity_seed_base',
    [
      " P ",
      "PSP",
      " P "
    ],
    {
      P: 'mysticalagriculture:prosperity_shard',
      S: agri_seed_partial('minecraft:wheat')
    }
  )

  //
  // Inferium
  //
  var essence = 'mysticalagriculture:inferium_essence'
  var manaCost = 3125

  event.remove({id: 'mysticalagriculture:inferium_seeds'})
  event.recipes.botania.mana_infusion('mysticalagriculture:inferium_seeds', 'minecraft:wheat_seeds', manaCost)
  event.recipes.botania.mana_infusion('mysticalagriculture:inferium_seeds', agri_seed_partial('minecraft:wheat'), manaCost)

  //
  // Prudentium
  //

  essence = 'mysticalagriculture:prudentium_essence'
  manaCost = 6250

  event.recipes.botania.runic_altar('mysticalagriculture:coal_seeds', ['mysticalagriculture:prosperity_seed_base', '#forge:storage_blocks/charcoal', 'botania:black_petal_block', 'botania:gray_petal_block'].concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:copper_seeds', ['mysticalagriculture:prosperity_seed_base', 'minecraft:terracotta', 'minecraft:sand', 'botania:orange_petal_block'].concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:dye_seeds', ['mysticalagriculture:prosperity_seed_base'].concat(multi('mysticalagriculture:dye_agglomeratio', 3)).concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:iron_seeds', ['mysticalagriculture:prosperity_seed_base', 'minecraft:gravel', 'botania:light_gray_petal_block', 'mysticalagriculture:copper_essence'].concat(multi(essence, 4)), manaCost)
  
  event.remove({id: 'mysticalagriculture:nether_agglomeratio'})
  event.shapeless('mysticalagriculture:nether_agglomeratio', [{"type": "bucketlib:fluid", "fluid": "minecraft:lava"}, 'minecraft:basalt', 'minecraft:blackstone', 'minecraft:magma_block'])
  event.shapeless('mysticalagriculture:nether_agglomeratio', [{"type": "bucketlib:fluid", "fluid": "minecraft:lava"}, 'minecraft:netherrack', 'minecraft:nether_bricks', 'minecraft:gravel'])
  event.recipes.botania.runic_altar('mysticalagriculture:nether_seeds', ['mysticalagriculture:prosperity_seed_base'].concat(multi('mysticalagriculture:nether_agglomeratio', 3)).concat(multi(essence, 4)), manaCost)

  event.recipes.botania.runic_altar('mysticalagriculture:skeleton_seeds', ['mysticalagriculture:soulium_seed_base'].concat(multi(comb('skeletal'), 3)).concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:zombie_seeds', ['mysticalagriculture:soulium_seed_base'].concat(multi(comb('zombie'), 3)).concat(multi(essence, 4)), manaCost)
  
  //
  // Tertium
  //
  essence = 'mysticalagriculture:tertium_essence'
  manaCost = 12500
  
  event.recipes.botania.runic_altar('mysticalagriculture:experience_seeds', ['mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:skeleton_essence', 'mysticalagriculture:zombie_essence', 'mysticalagriculture:spider_essence'].concat(multi('botania:rune_mana', 2)).concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:lapis_lazuli_seeds', ['mysticalagriculture:prosperity_seed_base', 'botania:blue_petal_block', 'minecraft:warped_wart_block', 'botania:cyan_petal_block'].concat('botania:rune_air').concat('botania:rune_water').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:nether_quartz_seeds', ['mysticalagriculture:prosperity_seed_base', 'botania:mana_quartz', 'botania:light_blue_petal_block', combBlock('crystalline')].concat('botania:rune_air').concat('botania:rune_fire').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:redstone_seeds', ['mysticalagriculture:prosperity_seed_base', 'minecraft:nether_wart_block', 'botania:red_petal_block', 'mysticalagriculture:fire_essence'].concat('botania:rune_earth').concat('botania:rune_fire').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:tin_seeds', ['mysticalagriculture:prosperity_seed_base', '#forge:storage_blocks/coal_coke', 'minecraft:iron_block', 'botania:white_petal_block'].concat('botania:rune_earth').concat('botania:rune_water').concat(multi(essence, 4)), manaCost)

  event.recipes.botania.runic_altar('mysticalagriculture:spider_seeds', ['mysticalagriculture:soulium_seed_base'].concat(multi(comb('silky'), 3)).concat('botania:rune_air').concat('botania:rune_earth').concat(multi(essence, 4)), manaCost)

  //
  // Elemental
  //
  
  event.remove({id: 'mysticalagriculture:air_agglomeratio'})
  event.shapeless('mysticalagriculture:air_agglomeratio', ['minecraft:glass_bottle', 'minecraft:string', 'minecraft:snowball', 'botania:white_petal'])
  event.recipes.botania.runic_altar('mysticalagriculture:air_seeds', ['mysticalagriculture:prosperity_seed_base'].concat(multi('mysticalagriculture:air_agglomeratio', 2)).concat('botania:rune_air').concat(multi(essence, 4)), manaCost)

  event.remove({id: 'mysticalagriculture:earth_agglomeratio'})
  event.shapeless('mysticalagriculture:earth_agglomeratio', ['botania:grass_seeds', 'minecraft:gravel', 'minecraft:dirt', 'botania:green_petal'])
  event.recipes.botania.runic_altar('mysticalagriculture:earth_seeds', ['mysticalagriculture:prosperity_seed_base'].concat(multi('mysticalagriculture:earth_agglomeratio', 2)).concat('botania:rune_earth').concat(multi(essence, 4)), manaCost)

  event.remove({id: 'mysticalagriculture:fire_agglomeratio'})
  event.shapeless('mysticalagriculture:fire_agglomeratio', [{"type": "bucketlib:fluid", "fluid": "minecraft:lava"}, '#minecraft:coals', 'minecraft:gunpowder', 'botania:orange_petal'])
  event.recipes.botania.runic_altar('mysticalagriculture:fire_seeds', ['mysticalagriculture:prosperity_seed_base'].concat(multi('mysticalagriculture:fire_agglomeratio', 2)).concat('botania:rune_fire').concat(multi(essence, 4)), manaCost)

  event.remove({id: 'mysticalagriculture:water_agglomeratio'})
  event.shapeless('mysticalagriculture:water_agglomeratio', [{"type": "bucketlib:fluid", "fluid": "minecraft:water"}, 'minecraft:clay_ball', 'minecraft:mud', 'botania:blue_petal'])
  event.recipes.botania.runic_altar('mysticalagriculture:water_seeds', ['mysticalagriculture:prosperity_seed_base'].concat(multi('mysticalagriculture:water_agglomeratio', 2)).concat('botania:rune_water').concat(multi(essence, 4)), manaCost)

  //
  // Imperium
  //
  essence = 'mysticalagriculture:imperium_essence'
  manaCost = 25000

  event.recipes.botania.runic_altar('mysticalagriculture:diamond_seeds', ['mysticalagriculture:prosperity_seed_base', '#forge:storage_blocks/tin', 'botania:light_blue_petal_block', 'minecraft:diamond', 'minecraft:diamond'].concat('botania:rune_water').concat('botania:rune_summer').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:emerald_seeds', ['mysticalagriculture:prosperity_seed_base', 'minecraft:emerald_block', 'minecraft:emerald_block', 'botania:lime_petal_block', 'botania:green_petal_block'].concat('botania:rune_earth').concat('botania:rune_autumn').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:end_seeds', ['mysticalagriculture:prosperity_seed_base', 'botania:yellow_petal_block', 'minecraft:end_stone', 'minecraft:chorus_flower', 'mysticalagriculture:enderman_essence'].concat('botania:rune_earth').concat('botania:rune_winter').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:gold_seeds', ['mysticalagriculture:prosperity_seed_base', 'minecraft:copper_block', 'botania:orange_petal_block', 'minecraft:gold_block', 'botania:yellow_petal_block'].concat('botania:rune_water').concat('botania:rune_autumn').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:nickel_seeds', ['mysticalagriculture:prosperity_seed_base', 'botania:brown_petal_block', 'botania:brown_petal_block', 'botania:white_petal_block', 'minecraft:iron_block'].concat('botania:rune_air').concat('botania:rune_winter').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:silver_seeds', ['mysticalagriculture:prosperity_seed_base', 'minecraft:copper_block', 'botania:light_gray_petal_block', 'minecraft:iron_block', 'botania:light_blue_petal_block'].concat('botania:rune_fire').concat('botania:rune_spring').concat(multi(essence, 4)), manaCost)

  event.recipes.botania.runic_altar('mysticalagriculture:blaze_seeds', ['mysticalagriculture:soulium_seed_base', combBlock('blazing'), 'botania:brown_petal_block', 'minecraft:glowstone', 'minecraft:magma_block'].concat('botania:rune_fire').concat('botania:rune_autumn').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:creeper_seeds', ['mysticalagriculture:soulium_seed_base', 'productivebees:comb_powdery', 'botania:gray_petal_block', 'botania:green_petal_block', '#minecraft:leaves'].concat('botania:rune_earth').concat('botania:rune_spring').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:enderman_seeds', ['mysticalagriculture:soulium_seed_base', 'botania:purple_petal_block', 'botania:magenta_petal_block', 'botania:mana_pearl', 'botania:mana_pearl'].concat('botania:rune_air').concat('botania:rune_summer').concat(multi(essence, 4)), manaCost)

  //
  // Supremium
  //
  essence = 'mysticalagriculture:supremium_essence'
  manaCost = 50000

  event.recipes.botania.runic_altar('mysticalagriculture:aluminum_seeds', ['mysticalagriculture:prosperity_seed_base', 'minecraft:iron_block', 'botania:white_petal_block', 'mysticalagriculture:dye_essence', 'mysticalagriculture:dye_essence'].concat('botania:rune_winter').concat('botania:rune_greed').concat('botania:rune_sloth').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:certus_quartz_seeds', ['mysticalagriculture:prosperity_seed_base', 'botania:mana_quartz', 'pneumaticcraft:smooth_plastic_brick_white', 'botania:white_petal_block', 'minecraft:redstone_block'].concat('botania:rune_winter').concat('botania:rune_pride').concat('botania:rune_lust').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:fluorite_seeds', ['mysticalagriculture:prosperity_seed_base', 'botania:mana_quartz', 'botania:light_blue_petal_block', 'mysticalagriculture:lead_essence', 'mysticalagriculture:silver_essence'].concat('botania:rune_winter').concat('botania:rune_gluttony').concat('botania:rune_greed').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:lead_seeds', ['mysticalagriculture:prosperity_seed_base', 'minecraft:diamond_block', 'botania:blue_petal_block', combBlock('sulfur'), 'botania:yellow_petal_block'].concat('botania:rune_winter').concat('botania:rune_envy').concat('botania:rune_wrath').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:netherite_seeds', ['mysticalagriculture:prosperity_seed_base', 'botania:brown_petal_block', 'minecraft:ancient_debris', 'minecraft:ancient_debris', 'minecraft:gold_block'].concat('botania:rune_winter').concat('botania:rune_envy').concat('botania:rune_pride').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:osmium_seeds', ['mysticalagriculture:prosperity_seed_base', 'botania:light_gray_petal_block', 'botania:light_blue_petal_block', '#forge:storage_blocks/nickel', 'minecraft:copper_block'].concat('botania:rune_winter').concat('botania:rune_greed').concat('botania:rune_lust').concat(multi(essence, 4)), manaCost)

  event.recipes.botania.runic_altar('mysticalagriculture:ghast_seeds', ['mysticalagriculture:soulium_seed_base', 'botania:light_gray_petal_block', 'botania:white_petal_block', 'minecraft:ghast_tear', 'minecraft:ghast_tear'].concat('botania:rune_winter').concat('botania:rune_envy').concat('botania:rune_wrath').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:slime_seeds', ['mysticalagriculture:soulium_seed_base', combBlock('slimy'), 'botania:lime_petal_block', 'minecraft:slime_block', 'minecraft:slime_block'].concat('botania:rune_summer').concat('botania:rune_gluttony').concat('botania:rune_sloth').concat(multi(essence, 4)), manaCost)
  event.recipes.botania.runic_altar('mysticalagriculture:wither_skeleton_seeds', ['mysticalagriculture:soulium_seed_base', 'mysticalagriculture:skeleton_essence', 'minecraft:wither_rose', 'productivebees:wither_skull_chip', 'productivebees:wither_skull_chip'].concat('botania:rune_spring').concat('botania:rune_pride').concat('botania:rune_wrath').concat(multi('mysticalagriculture:supremium_essence', 4)), 25000)

  // AgriCraft seeds into MA seeds
  seedTypes.forEach(type => {
    event.shapeless(`mysticalagriculture:${type}_seeds`, [agri_seed_partial(`mysticalagriculture:${type}`)])
  })
})