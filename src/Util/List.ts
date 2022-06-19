import { NewItemTypes } from './Item.ts';
import { FormatTypes } from './Formats.ts';

/**
 * Configurations for List.new()
 */
type NewList = {
    /**
     * Result page.
     */
    page: number

    /**
     * The item type.
     */
    itemType?: keyof NewItemTypes;

    /**
     * GameID of submission or entity. Separate multiple IDs with commas.
     */
    gameId?: number;

    /**
     * UserID of submission or entity.
     */
    userId?: number;

    /**
     * StudioID of submission or entity.
     */
    studioId?: number;

    /**
     * Maximum age of submissions, in seconds.
     */
    maxAge?: number;

    /**
     * True to include updated submissions.
     */
    includeUpdated?: boolean;

    /**
     * The format to get the information.
     */
    format?: keyof FormatTypes;
}

export type {
    NewList
}