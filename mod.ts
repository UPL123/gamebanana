import { login } from "./src/login.ts";
import { Item } from "./src/Item.ts";
import { List } from "./src/List.ts";
import { Member } from "./src/Member.ts";

/**
 * An API Wrapper for gamebanana.com
 */
export const Client = {
    login,
    Item,
    List,
    Member  
};