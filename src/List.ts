import { FormatTypes } from './Util/Formats.ts';
import { DataItemTypes } from './Util/Item.ts';
import { NewList } from './Util/List.ts';

/**
 * A class for interacting with the List API.
 */
export class List {
    /**
     * Returns submissions or entities matching the start of a field.
     * @param itemType The item type.
     * @param field Field to match.
     * @param match Start of the field value.
     * @param format The format to get the information.
     * @returns Promise<string>
     */
    async like(itemType: "Game" | "Member", field: string, match: string, format?: keyof FormatTypes): Promise<string> {
        // Save params in json
        const params = {
            itemtype: itemType,
            field: field,
            match: match,
            format: format
        };
        // Convert to query string and filter out undefined values
        const query = Object.entries(params).map(e => e.join('=')).filter(e => {
            console.log(e.split('=')[1]);
            if (e.split('=')[1] === '') {
                return false;
            }
            return true;
        }).join('&');
        const target = `https://api.gamebanana.com/Core/List/Like?${query}`;
        // Return the text of the response.
        return await fetch(target).then(res => res.text());
    }

    /**
     * Returns submission or entity IDs by section.
     * @param itemType The item type.
     * @param sort Field to sort by.
     * @param direction "asc" for ascending, "desc" for descending.
     * @param page Result page.
     * @param format The format to get the information.
     * @returns Promise<string>
     */
    async section(itemType: keyof DataItemTypes, sort: string, direction: "asc" | "desc", page: number, format?: keyof FormatTypes): Promise<string> {
        // Save params in json
        const params = {
            itemtype: itemType,
            sort: sort,
            direction: direction,
            page: page,
            format: format
        };
        // Convert to query string and filter out undefined values
        const query = Object.entries(params).map(e => e.join('=')).filter(e => {
            console.log(e.split('=')[1]);
            if (e.split('=')[1] === '') {
                return false;
            }
            return true;
        }).join('&');
        const target = `https://api.gamebanana.com/Core/List/Section?${query}`;
        // Return the text of the response.
        return await fetch(target).then(res => res.text());
    }

    /**
     * Get new submissions.
     * @param settings The settings for the list.
     * @returns Promise<string>
     */
    async new(settings: NewList): Promise<string> {
        // Save params in json
        const params = {
            page: settings.page,
            itemtype: settings.itemType,
            gameid: settings.gameId,
            userid: settings.userId,
            studioid: settings.studioId,
            max_age: settings.maxAge,
            include_updated: settings.includeUpdated ? 1 : 0,
            format: settings.format
        };
        // Convert to query string and filter out undefined values
        const query = Object.entries(params).map(e => e.join('=')).filter(e => {
            console.log(e.split('=')[1]);
            if (e.split('=')[1] === '') {
                return false;
            }
            return true;
        }).join('&');
        const target = `https://api.gamebanana.com/Core/List/New?${query}`;
        // Return the text of the response.
        return await fetch(target).then(res => res.text());
    }
}