// priority: -1

ServerEvents.tags('item', event => {
  Object.keys(global.removed_items).forEach(modid => {
    global.removed_items[modid].forEach(item => {
        event.removeAllTagsFrom(`${modid}:${item}`)
    })
  })
})

ServerEvents.tags('block', event => {
  Object.keys(global.removed_items).forEach(modid => {
    global.removed_items[modid].forEach(item => {
        event.removeAllTagsFrom(`${modid}:${item}`)
    })
  })
})

ServerEvents.recipes(event => {
  Object.keys(global.removed_items).forEach(modid => {
    global.removed_items[modid].forEach(item => {
        event.remove({input: `${modid}:${item}`})
        event.remove({output: `${modid}:${item}`})
    })
  })
})