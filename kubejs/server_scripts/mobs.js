let chicken_rideables = [
  'minecraft:zombie',
  'minecraft:zombified_piglin',
  'minecraft:husk',
  'minecraft:zombie_villager',
  'minecraft:drowned'
]

EntityEvents.spawned(event => {
  const { entity, level, server } = event

  if (entity.type != 'minecraft:chicken') return
  if (entity.passengers.length == 0) return
  else if (chicken_rideables.includes(entity.passengers[0].type)) {
    entity.ejectPassengers()
    event.cancel()
  }
})