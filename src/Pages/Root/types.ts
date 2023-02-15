export interface DailyAchievementsProps {
    tomorrow?: true
}

export interface DailyAchievementItem {
    id: number,
    name: string,
    product?: 'PathOfFire' | 'HeartOfThorns' | undefined
}
