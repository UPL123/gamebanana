/**
 * The item data class.
 */
 type ItemData = {
    /**
     * The item type.
     */
    type: keyof DataItemTypes;

    /**
     * The item ID.
     */
    id: string;

    /**
     * The fields to match.
     */
    fields: string[];
}

/**
 * The item id class.
 */
type ItemByID = {
    /**
     * The item type.
     */
    type: keyof DataItemTypes;

    /**
     * The item ID.
     */
    id: string
}

interface DataItemTypes {
    "App:": "App";
    "Article": "Article";
    "ArticleCategory": "ArticleCategory";
    "BlogCategory": "BlogCategory";
    "Bug": "Bug";
    "Blog": "Blog";
    "Club": "Club";
    "Clan": "Clan";
    "Contest": "Contest";
    "Concept": "Concept";
    "ConceptCategory": "ConceptCategory";
    "ContestCategory": "ContestCategory";
    "ContestWinner": "ContestWinner";
    "Event": "Event";
    "EventCategory": "EventCategory";
    "Forum": "Forum";
    "File": "File";
    "Feature": "Feature";
    "GeneratorCategory": "GeneratorCategory";
    "Game": "Game";
    "Generator": "Generator";
    "Idea": "Idea";
    "Initiative": "Initiative";
    "Jam": "Jam";
    "JamCategory": "JamCategory";
    "Mod": "Mod";
    "Medal": "Medal";
    "ModCategory": "ModCategory";
    "Model": "Model";
    "ModelCategory": "ModelCategory";
    "Member": "Member";
    "News": "News";
    "NewsCategory": "NewsCategory";
    "Poll": "Poll";
    "PollCategory": "PollCategory";
    "Project": "Project";
    "ProjectCategory": "ProjectCategory";
    "PositionAvailable": "PositionAvailable";
    "Question": "Question";
    "QuestionCategory": "QuestionCategory";
    "Review": "Review";
    "Request": "Request";
    "RequestCategory": "RequestCategory";
    "Staff": "Staff";
    "Script": "Script";
    "ScriptCategory": "ScriptCategory";
    "Sound": "Sound";
    "SoundCategory": "SoundCategory";
    "Spray": "Spray";
    "SprayCategory": "SprayCategory";
    "Studio": "Studio";
    "StatusUpdate": "StatusUpdate";
    "Support": "Support";
    "Thread": "Thread";
    "Tool": "Tool";
    "ToolCategory": "ToolCategory";
    "Tutorial": "Tutorial";
    "TutorialCategory": "TutorialCategory";
    "Todo": "Todo";
    "Update": "Update";
    "Wiki": "Wiki";
    "WikiCategory": "WikiCategory";
    "WareCategory": "WareCategory";
    "Wip": "Wip";
    "Ware": "Ware";
    "WareOrder": "WareOrder";
    "WipCategory": "WipCategory";
}

interface NewItemTypes {
    "App": "App";
    "Article": "Article";
    "Blog": "Blog";
    "Club": "Club";
    "Contest": "Contest";
    "Concept": "Concept";
    "Event": "Event";
    "Idea": "Idea";
    "Jam": "Jam";
    "Mod": "Mod";
    "Model": "Model";
    "News": "News";
    "Poll": "Poll";
    "Project": "Project";
    "PositionAvailable": "PositionAvailable";
    "Question": "Question";
    "Review": "Review";
    "Request": "Request";
    "Script": "Script";
    "Sound": "Sound";
    "Spray": "Spray";
    "Studio": "Studio";
    "Thread": "Thread";
    "Tool": "Tool";
    "Tutorial": "Tutorial";
    "Wiki": "Wiki";
    "Wip": "Wip";
    "Ware": "Ware";
}

export type {
    DataItemTypes,
    NewItemTypes,
    ItemData,
    ItemByID
}