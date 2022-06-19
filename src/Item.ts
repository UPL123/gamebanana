import { FormatTypes } from './Util/Formats.ts';
import { ItemByID, ItemData } from './Util/Item.ts';


/**
 * A class for interacting with the Item API.
 */
export class Item {
    /**
     * Get the data of an item.
     * @param item The item data.
     * @param format [Optional] The format to get the information.
     * @returns Promise<string>
     */
    async data(item: ItemData | Array<ItemData>, format?: keyof FormatTypes): Promise<string> {
        let target = `https://api.gamebanana.com/Core/Item/Data?`;
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                // Calculate types
                const type = item[i].type;
                const id = item[i].id;
                const fields = item[i].fields.join(",");
                target += `itemtype[${i}]=${type}&itemid[${i}]=${id}&fields[${i}]=${fields}&`;
            }
        } else {
            target += `itemtype=${item.type}&itemid=${item.id}&fields=${item.fields.join(",")}`;
        }
        target += `&format=${format}`;
        // Return the text of the response.
        return await fetch(target).then(res => res.text());
    }

    /**
     * Test if the given item id is of selected type.
     * @param item The item data. (can be an array)
     * @param format [Optional] The format to get the information.
     * @returns Promise<string>
     */
    async idetifyById(item: ItemByID | Array<ItemByID>, format?: keyof FormatTypes): Promise<string> {
        let target = `https://api.gamebanana.com/Core/Item/IdentifyById?`;
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                // Calculate types
                const type = item[i].type;
                const id = item[i].id;
                target += `itemtype[${i}]=${type}&itemid[${i}]=${id}&`;
            }
        } else {
            target += `itemtype=${item.type}&itemid=${item.id}`;
        }
        target += `&format=${format}`;
        // Return the text of the response.
        return await fetch(target).then(res => res.text());
    }
}