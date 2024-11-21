let unused = [
    'productivebees:bamboo_hive',
    'productivebees:dragon_egg_hive',
    'productivebees:sugarbag_nest',
    'productivebees:warped_bee_nest',
    'productivebees:crimson_bee_nest',
    'productivebees:nest_locator'
]

JEIEvents.hideItems(jei => {
    unused.forEach(item => {
        jei.hide(item)
    })
})

ClientEvents.lang('en_us', (event) => {
    event.add("entity.productivebees.milky_bee", "Milky Bee")
})