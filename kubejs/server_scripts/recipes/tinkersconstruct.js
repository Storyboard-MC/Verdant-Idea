ServerEvents.recipes(event => {
  event.remove({id: 'tconstruct:smeltery/alloys/molten_enderium'})
  event.remove({id: 'tconstruct:smeltery/alloys/molten_lumium'})
  event.remove({id: 'tconstruct:smeltery/alloys/molten_refined_obsidian'})
  event.remove({id: 'tconstruct:smeltery/alloys/molten_signalum'})
  event.remove({mod: 'tconstruct', output: '#forge:plates'})
  event.remove({mod: 'tconstruct', output: '#forge:gears'})
  event.remove({mod: 'tconstruct', output: '#forge:wires'})
  event.remove({mod: 'tconstruct', output: '#forge:coins'})

  // Remove skeletons to milk recipes
  event.remove({id: 'tconstruct:smeltery/entity_melting/skeletons'})
  event.remove({id: 'tconstruct:smeltery/entity_melting/heads/skeleton'})
})