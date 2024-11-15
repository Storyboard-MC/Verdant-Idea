JEIEvents.hideItems(event => {
    event.hide('farmersdelight:organic_compost')
    event.hide(Item.of('ae2:facade', '{item:"farmersdelight:organic_compost"}'))

    event.hide('pneumaticcraft:biodiesel_bucket')
    event.hide('pneumaticcraft:ethanol_bucket')
    event.hide('pneumaticcraft:vegetable_oil_bucket')

    event.hide('mysticalagriculture:seed_reprocessor')
    event.hide('mysticalagriculture:harvester')
})

JEIEvents.hideFluids(event => {
    event.hide('pneumaticcraft:biodiesel')
    event.hide('pneumaticcraft:ethanol')
    event.hide('pneumaticcraft:vegetable_oil')
})