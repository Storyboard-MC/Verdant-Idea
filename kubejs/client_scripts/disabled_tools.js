ItemEvents.tooltip(event => {
    global.disabled_tools.forEach(item => {
        event.addAdvanced(item, (item, advanced, text) => {
            text.add(1, Text.red("This item will be disabled in the next update. Please move to Tinkers' variants."))
        })
    })
})