ServerEvents.recipes(event => {
  Object.keys(global.removed_items).forEach(modid => {
    global.removed_items[modid].forEach(item => {
        event.remove({input: `${modid}:${item}`})
        event.remove({output: `${modid}:${item}`})
    })
  })
})