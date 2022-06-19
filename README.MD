# Gamebanana API for Deno

[![Mad with Deno](https://img.shields.io/badge/Deno-464647?style=for-the-badge&logo=deno&logoColor=white)](https://deno.land)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An API Wrapper for [`gamebanana.com`](https://gamebanana.com)

## Setup

### Import

Import the library using [`Deno`](https://deno.land)

```ts
import * as gamebanana from "https://deno.land/x/gamebanana@1.0.4/mod.ts";
```

If you want to login your app and get your API key, you can use the [`login`](#login) method.

### Client Methods

#### <a name="login"></a>gamebanana.login(options: [`ClientConfig`](#clientconfig), format?: keyof [`FormatTypes`](#formattypes)): Promise&lt;string&gt;

Validates your app's API password, App ID and user ID and returns an authentication token on success.

* `options`: The options to use for the login. See [`ClientConfig`](#clientconfig) for more information.
* `format?`: The format to use for the response. See [`FormatTypes`](#formattypes) for more information.

```ts
var token = gamebanana.login({
    apiPassword: "<YOUR API PASSWORD>",
    appId: "<YOUR APP ID>",
    userId: "<YOUR USER ID>",
})
console.log(token) // -> <YOU API TOKEN>
```

#### <a name="item"></a>gamebanana.Item

A class for interacting with the Item API.
Init with `new gamebanana.Item();`

```ts
const item = new gamebanana.Item();
```

##### <a name="item-data"></a>Item.data(item: [`ItemData`](#itemdata) | [`ItemData[]`](#itemdata), format?: keyof [`FormatTypes`](#formattypes)): Promise&lt;string&gt;

Get the data of an item.

* `item`: The item to get the data of. Can be a single item or an array of items. See [`ItemData`](#itemdata) for more information.
* `format?`: The format to use for the response. See [`FormatTypes`](#formattypes) for more information.

```ts
item.data({
    type: "Member"
    id: "1832",
    fields: [
        "name",
        "Buddies().Count().nCount()",
        "Modgroup().bIsInAnyModgroup()",
        "Modgroup().aModgroupsMemberIsPartOf()"
    ]
}); // ->
/*
[
    "tom",
    1580,
    true,
    [
        "super",
        "treehouse"
    ]
]
*/
```

##### <a name="item-id"></a>idetifyById(item: [`ItemByID`](#itembyid) | [`ItemByID[]`](#itembyid), format?: keyof [`FormatTypes`](#formattypes)): Promise&lt;string&gt;

Returns a boolean indicating if the item with the id exists.

* `item`: The item to check the id of. Can be a single item or an array of items. See [`ItemByID`](#itembyid) for more information.
* `format?`: The format to use for the response. See [`FormatTypes`](#formattypes) for more information.

```ts
item.identifyById({
    id: "1832"
}); // -> true
```

#### <a name="list"></a>gamebanana.List

A class for interacting with the List API.
Init with `new gamebanana.List();`

```ts
const list = new gamebanana.List();
```

##### <a name="list-like"></a> List.like(itemType: "Game" | "Member", field: string, match: string, format?: keyof [`FormatTypes`](#formattypes)): Promise&lt;string&gt;

Returns submissions or entities matching the start of a field.

* `itemType`: The type of item to search.
* `field`: The field to search.
* `match`: The string to match.
* `format?`: The format to use for the response. See [`FormatTypes`](#formattypes) for more information.

```ts
list.like("Game", "name", "game"); // ->
/*
[
    {
        "id": 6408,
        "name": "Game Boy"
    },
    {
        "id": 14021,
        "name": "Game Builder Garage"
    },
    {
        "id": 7772,
        "name": "Game Dev Tycoon"
    },
    {
        "id": 7178,
        "name": "Game of Thrones"
    },
    {
        "id": 8,
        "name": "GameBanana"
    },
    {
        "id": 4981,
        "name": "GameMaker"
    }
]
*/
```

##### <a name="list-section"></a>List.section(itemType: keyof [`DataItemTypes`](#dataitemtypes), sort: string, direction: "asc" | "desc", page: number, format?: keyof FormatTypes): Promise&lt;string&gt;

Returns submission or entity IDs by section.

* `itemType`: The type of item to search. See [`DataItemTypes`](#dataitemtypes) for more information.
* `sort`: The field to sort by.
* `direction`: The direction to sort by.
* `page`: The page to return.
* `format?`: The format to use for the response. See [`FormatTypes`](#formattypes) for more information.

```ts
list.section("Game", "name", "asc", 1); // ->
/*
[
    5708,
    6026,
    5412,
    5732,
    9277,
    5538,
    9152,
    6219,
    15603,
    8453,
    5991,
    6484,
    5245,
    7701,
    6628,
    4637,
    5244,
    1218,
    2464,
    7786
]
*/
```

##### <a name="list-new"></a>List.new(settings: [`NewList`](#newlist)): Promise&lt;string&gt;

Returns a list of new submissions or entities.

* `settings`: The settings to use for the list. See [`NewList`](#newlist) for more information.

```ts
list.new({
    page: 1
}); // ->
/*
[
    [
        "Mod",
        384390
    ],
    [
        "Mod",
        384389
    ],
    [
        "Mod",
        384388
    ],
    [
        "Mod",
        384387
    ],
    [
        "Mod",
        384386
    ],
    [
        "Request",
        37923
    ],
    [
        "Wip",
        68404
    ],
    [
        "Request",
        37922
    ],
    [
        "Mod",
        384384
    ],
    [
        "Mod",
        384383
    ],
    [
        "Mod",
        384382
    ],
    [
        "Question",
        29393
    ],
    [
        "Question",
        29392
    ],
    [
        "Wip",
        68403
    ],
    [
        "Question",
        29391
    ],
    [
        "Mod",
        384381
    ],
    [
        "Mod",
        384380
    ],
    [
        "Request",
        37921
    ],
    [
        "Mod",
        332609
    ],
    [
        "Mod",
        384379
    ]
]
*/
```

#### <a name="member"></a>Client.Member

A class for interacting with the Member API.
Init with `new gamebanana.Member();`

```ts
const member = new gamebanana.Member();
```

##### <a name=member-identify></a>Member.identify(userName: string | string[], format?: keyof [`FormatTypes`](#formattypes)): Promise&lt;string&gt;

Returns the user's ID if found, or false if not.

* `userName`: The user name to search for. Can be a single user name or an array of user names.
* `format?`: The format to use for the response. See [`FormatTypes`](#formattypes) for more information.

```ts
member.identify("tom"); // ->
// [ 1382 ]
```

##### <a name=member-identifybyid></a>Member.identifyById(userId: number | number[], format?: keyof [`FormatTypes`](#formattypes)): Promise&lt;string&gt;

Returns the user's name if found, or false if not.

* `userId`: The user id to search for. Can be a single user id or an array of user ids.
* `format?`: The format to use for the response. See [`FormatTypes`](#formattypes) for more information.

```ts
member.identifyById(1382); // ->
// [ "tom" ]
```

### Types

#### <a name="clientconfig"></a>ClientConfig {}

* `apiPassword`: You API password.
* `apiId`: Your API ID.
* `userId`: Your User ID.

#### <a name="formattypes"></a>FormatTypes

* `json`: Returns the response as JSON.
* `json_min`: Returns the response as JSON, but with minimal formatting.
* `xml`: Returns the response as XML.
* `yaml`: Returns the response as YAML.
* `php_serialized`: Returns the response as a PHP serialized string.

#### <a name="itemdata"></a>ItemData {}

* `type`: The type of item.
* `id`: The ID of the item.
* `fields`: The fields of the item.

#### <a name="itembyid"></a>ItemById {}

* `type`: The type of item.
* `id`: The ID of the item.

#### <a name="dataitemtypes"></a>DataItemTypes

Any value inside this array

```json
[
    "App",
    "Article",
    "ArticleCategory",
    "BlogCategory",
    "Bug",
    "Blog",
    "Club",
    "Clan",
    "Contest",
    "Concept",
    "ConceptCategory",
    "ContestCategory",
    "ContestWinner",
    "Event",
    "EventCategory",
    "Forum",
    "File",
    "Feature",
    "GeneratorCategory",
    "Game",
    "Generator",
    "Idea",
    "Initiative",
    "Jam",
    "JamCategory",
    "Mod",
    "Medal",
    "ModCategory",
    "Model",
    "ModelCategory",
    "Member",
    "News",
    "NewsCategory",
    "Poll",
    "PollCategory",
    "Project",
    "ProjectCategory",
    "PositionAvailable",
    "Question",
    "QuestionCategory",
    "Review",
    "Request",
    "RequestCategory",
    "Staff",
    "Script",
    "ScriptCategory",
    "Sound",
    "SoundCategory",
    "Spray",
    "SprayCategory",
    "Studio",
    "StatusUpdate",
    "Support",
    "Thread",
    "Tool",
    "ToolCategory",
    "Tutorial",
    "TutorialCategory",
    "Todo",
    "Update",
    "Wiki",
    "WikiCategory",
    "WareCategory",
    "Wip",
    "Ware",
    "WareOrder",
    "WipCategory"
]
```

#### <a name="newlist"></a>NewList {}

* `page`: The page of the list to return.
* `itemType?`: The type of item to return. 
* `gameId?`: GameID of submission or entity. Separate multiple IDs with commas.
* `userId?`: UserID of submission or entity.
* `studioId?`: StudioID of submission or entity.
* `maxAge`: Maximum age of submissions, in seconds.
* `includeUpdated?`: Include updated submissions.
* `format?`: The format to use for the response. See [`FormatTypes`](#formattypes) for more information.

## License

This module is licensed under the [`MIT license`](https://opensource.org/licenses/MIT)
