ServerEvents.tags('item', event => {
  event.add('wasteland:bee_flowering/coal', ['#forge:storage_blocks/coal', '#forge:storage_blocks/charcoal'])


})

ServerEvents.recipes(event => {
  let unused = [
    {
      namespace: 'ae2',
      honeycombs: [
        'fluix'
      ]
    },
    {
      namespace: 'botania',
      honeycombs: [
        'elementium',
        'manasteel',
        'terrasteel'
      ]
    },
    {
      namespace: 'dusts',
      honeycombs: [
        'niter',
        'saltpeter'
      ]
    },
    {
      namespace: 'gems',
      honeycombs: [
        'amethyst',
        'apatite',
        'cinnabar_dust',
        'fluorite',
        'ruby',
        'sapphire'
      ]
    },
    {
      namespace: 'materials',
      honeycombs: [
        'silicon'
      ]
    },
    {
      namespace: 'mekanism',
      honeycombs: [
        'refined_glowstone',
        'refined_obsidian'
      ]
    },
    {
      namespace: 'mysticalagriculture',
      honeycombs: [
        'inferium',
        'prudentium',
        'tertium',
        'imperium',
        'supremium',
        'awakened_supremium',
        'prosperity'
      ]
    },
    {
      namespace: 'pneumaticcraft',
      honeycombs: [
        'compressed_iron'
      ]
    },
    {
      namespace: 'shroom',
      honeycombs: [
        'brown_shroom',
        'crimson',
        'red_shroom',
        'warped'
      ]
    },
    {
      namespace: 'tconstruct',
      honeycombs: [
        'rose_gold'
      ]
    },
    {
      namespace: 'thermal',
      honeycombs: [
        'basalz',
        'blitz',
        'blizz',
        'destabilized_redstone',
        'energized_glowstone',
        'resonant_ender'
      ]
    }
  ]

  // Remove unused centrifuge recipes

  unused.forEach(element => {
    element.honeycombs.forEach(comb => {
      event.remove({ id: `productivebees:centrifuge/${element.namespace}/honeycomb_${comb}` })
    })
  })

  event.remove({ id: 'productivebees:centrifuge/honeycomb_frosty' })

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
  event.replaceInput({id: 'productivebees:upgrades/filter'}, 'minecraft:writable_book', 'minecraft:hopper')

  // Update powered centrifuge recipe
  event.remove({id: 'productivebees:powered_centrifuge/mekanism'})
  event.remove({id: 'productivebees:powered_centrifuge/thermal'})
  event.shaped(
    'productivebees:powered_centrifuge',
    [
      "S S",
      "SCS",
      "STS"
    ],
    {
      C: 'productivebees:centrifuge',
      S: '#forge:plates/steel',
      T: 'thermal:machine_centrifuge'
    }
  )
})