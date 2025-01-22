const BaseWateringCanItem = Java.loadClass('com.blakebr0.cucumber.item.BaseWateringCanItem')

StartupEvents.registry('item', event => {
  event.create('ender_alloy')

  event.createCustom('wooden_watering_can', () => new BaseWateringCanItem(3, 0.15))
})