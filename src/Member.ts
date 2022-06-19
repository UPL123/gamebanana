import { FormatTypes } from './Util/Formats.ts'

/**
 * A class for interacting with the Member API.
 */
export class Member {
    /**
     * Returns the user's ID if found, or false if not.
     * @param userName The user name.
     * @param format The format to get the information.
     * @returns Promise<string>
     */
    identify(userName: string | Array<string>, format?: keyof FormatTypes): Promise<string> {
        let target = `https://api.gamebanana.com/Core/Member/Identify?`;
        if (Array.isArray(userName)) {
            for (let i = 0; i < userName.length; i++) {
                target += `username[${i}]=${userName[i]}&`;
            }
        } else {
            target += `username=${userName}`;
        }
        target += `&format=${format}`;
        return fetch(target).then(res => res.text());
    }

    /**
     * Returns the user's username if found, or false if not found.
     * @param userId The user ID.
     * @param format The format to get the information.
     * @returns Promise<string>
     */
    identifyById(userId: number | Array<number>, format?: keyof FormatTypes): Promise<string> {
        let target = `https://api.gamebanana.com/Core/Member/IdentifyById?`;
        if (Array.isArray(userId)) {
            for (let i = 0; i < userId.length; i++) {
                target += `userid[${i}]=${userId[i]}&`;
            }
        } else {
            target += `userid=${userId}`;
        }
        target += `&format=${format}`;
        return fetch(target).then(res => res.text());
    }
}