import {ApiDailyAchievementItem} from "../../Types/Api/Achievements";

export interface DailyAchievementsProps {
    tomorrow?: true
}

export interface DailyAchievementItem {
    id: number,
    name: string,
    product?: 'PathOfFire' | 'HeartOfThorns' | undefined
}
export interface CardDailyAchievementsListProps {
    cardData: ApiDailyAchievementItem[]
}

export interface CardDailyAchievementDataListItem {
    id: number,
    name: string,
    description: string,
    maxLevel: number,
    minLevel: number,
    requiredProduct: 'PathOfFire' | 'HeartOfThorns' | undefined,
    noProduct: 'PathOfFire' | 'HeartOfThorns' | undefined,
}


export interface ApiQueriesProps extends ApiAxiosConfig {
    endpoint: string,
    queryConfig?: {
        staleTime?: number,
        useErrorBoundary?: boolean
    }

}

export interface ApiQueryFnProps extends Omit<ApiQueriesProps, 'queryConfig'> {
}

export interface ApiAxiosConfig {
    parameters?: {
        [key: string]: string | number
    },
    headers?: {
        [key: string]: string | number
    },
}
