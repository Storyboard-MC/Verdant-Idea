ServerEvents.recipes(event => {
  event.remove({id: 'mekanism:paper'})

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
      P: 'pneumaticcraft:printed_circuit_board',
      S: '#forge:plates/steel'
    }
  )
})