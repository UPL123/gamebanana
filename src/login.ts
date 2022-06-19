import { FormatTypes } from './Util/Formats.ts';
import { ClientConfig } from './Util/Login.ts';

/**
 * Validates your app's API password, App ID and user ID and returns an authentication token on success.
 * @param config The app cerdentials.
 * 
 */
export async function login(options: ClientConfig, format?: keyof FormatTypes): Promise<string> {
    // Save params in json
    const params = {
        api_password: options.apiPassword,
        app_id: options.appId,
        user_id: options.userId,
        format: format
    };
    // Convert to query string
    const query = Object.entries(params).map(e => e.join('=')).filter(e => {
        console.log(e.split('=')[1]);
        if (e.split('=')[1] === '') {
            return false;
        }
        return true;
    }).join('&');
    const target = `https://api.gamebanana.com/Core/App/Authenticate?${query}`;
    // Return the text of the response.
    return await fetch(target).then(res => res.text());
}