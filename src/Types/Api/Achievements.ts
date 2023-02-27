/*
    Guild Wars 2 API Types
 */
// ENDPOINT: /achievement/daily && /achievement/daily/tomorrow
export type ApiDailyAchievement = {
    [key in 'pve' | 'pvp' | 'wvw' | 'fractals' | 'special']: ApiDailyAchievementItem[];
};

export interface ApiDailyAchievementItem {
    id: number,
    level: {
        min: number,
        max: number
    },
    required_access: {
        product: 'PathOfFire' | 'HeartOfThorns',
        condition: 'HasAccess' | 'NoAccess'
    }
}

// ENDPOINT: /achievement
export interface ApiAchievement {
    id: number,
    icon?: string,
    name: string,
    description: string,
    requirement: string,
    locked_text: string,
    type: 'Default' | 'ItemSet',
    flags: ApiAchievementFlags[],
    tiers: ApiAchievementTiers[],
    prerequisites: number[],
    rewards?: ApiAchievementRewards[],
    bits?: ApiAchievementBits[],
    point_cap?: number
}

export type ApiAchievementFlags =
    'Pvp'
    | 'CategoryDisplay'
    | 'MoveToTop'
    | 'IgnoreNearlyComplete'
    | 'Repeatable'
    | 'Hidden'
    | 'RequiresUnlock'
    | 'RepairOnLogin'
    | 'Daily'
    | 'Weekly'
    | 'Monthly'
    | 'Permanent';

export type ApiAchievementTiers = {
    count: number,
    points: number
}

export type ApiAchievementRewards = {
    type: 'Coins' | 'Item' | 'Mastery' | 'Title',
    id?: number,
    count?: number
    region?: 'Tyria' | 'Magumma' | 'Desert' | 'Tundra'
}

export type ApiAchievementBits = {
    type: 'Text' | 'Item' | 'Minipet' | 'Skin',
    id?: number,
    text?: string
}

