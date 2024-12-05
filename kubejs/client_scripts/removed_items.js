JEIEvents.hideItems(jei => {
    Object.keys(global.removed_items).forEach(modid => {
        global.removed_items[modid].forEach(item => {
            jei.hide(`${modid}:${item}`);
        })
    })
})