import json

def maxed_seed(species):
    return {
        "id": "agricraft:seed",
        "Count": 1,
        "tag": {
            "genes": {
                "fertility": {"dom": 10, "rec": 10},
                "gain": {"dom": 10, "rec": 10},
                "growth": {"dom": 10, "rec": 10},
                "mutativity": {"dom": 10, "rec": 10},
                "resistance": {"dom": 10, "rec": 10},
                "species": {"dom": species, "rec": species},
                "strength": {"dom": 10, "rec": 10}
            }
        }
    }

def parse_input_item(item):
    if isinstance(item, str):
        count = 1
        if "x " in item:
            count, item_id = item.split("x ", 1)
            count = int(count)
        else:
            item_id = item

        return {"id": item_id, "Count": count}
    return item

def generate_rite(input_items, output_items, shapes):
    parsed_input_items = [
        parse_input_item(item) if isinstance(item, str) else item
        for item in input_items
    ]

    data = {
        "items": parsed_input_items,
        "shapes": shapes,
        "factory": {
            "type": "enchanted:create_item",
            "items": output_items
        }
    }

    # Use the id of the first species in output items for the file name
    output_filename = "output.json"
    if parsed_input_items:
        first_input_id = parsed_input_items[0]["id"].split(":")[1]
        output_filename = f"upgrade_{first_input_id}.json"

    # Save the JSON data to a file
    with open(output_filename, "w") as json_file:
        json.dump(data, json_file, indent=4)

    print(f"JSON file '{output_filename}' has been created.")
    return data

if __name__ == "__main__":
    shapes = {
        "wasteland:flower": "botania:blue_buried_petals"
    }

    generate_rite(["mysticalagriculture:inferium_seeds", maxed_seed("minecraft:sugar_cane"), maxed_seed("minecraft:pumpkin")], [maxed_seed("mysticalagriculture:inferium")], shapes)
    generate_rite(["mysticalagriculture:coal_seeds", maxed_seed("minecraft:melon"), maxed_seed("minecraft:cactus")], [maxed_seed("mysticalagriculture:coal")], shapes)
    generate_rite(["mysticalagriculture:copper_seeds", maxed_seed("minecraft:dandelion"), maxed_seed("minecraft:poppy")], [maxed_seed("mysticalagriculture:copper")], shapes)
    generate_rite(["mysticalagriculture:dye_seeds", maxed_seed("minecraft:blue_orchid"), maxed_seed("minecraft:sweet_berries")], [maxed_seed("mysticalagriculture:dye")], shapes)
    generate_rite(["mysticalagriculture:iron_seeds", maxed_seed("minecraft:dandelion"), maxed_seed("minecraft:pumpkin")], [maxed_seed("mysticalagriculture:iron")], shapes)
    generate_rite(["mysticalagriculture:nether_seeds", maxed_seed("minecraft:sweet_berries"), maxed_seed("farmersdelight:tomato")], [maxed_seed("mysticalagriculture:nether")], shapes)
    generate_rite(["mysticalagriculture:skeleton_seeds", maxed_seed("minecraft:sugar_cane"), maxed_seed("minecraft:pumpkin")], [maxed_seed("mysticalagriculture:skeleton")], shapes)
    generate_rite(["mysticalagriculture:zombie_seeds", maxed_seed("minecraft:cactus"), maxed_seed("immersiveengineering:hemp")], [maxed_seed("mysticalagriculture:zombie")], shapes)
