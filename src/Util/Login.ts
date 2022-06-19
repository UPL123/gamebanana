/**
 * The Gamebanana client configuration
 */
type ClientConfig = {
    /**
     * Your app's API password.
     */
    apiPassword: string;

    /**
     * Your app's ID.
     */
    appId: string;

    /**
     * The app user's ID.
     */
    userId: string;
}

export type {
    ClientConfig
};