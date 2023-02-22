export interface ApiWallet {
    id: number,
    value: number
}

export interface ApiCurrencies {
    id: number,
    name: string,
    description : string,
    icon: string,
    order: number
}

export interface ApiBank {
    id: number,
    count: number,
    charges?: number,
    skin?: number,
    dyes?: number[],
    upgrades?: number[],
    upgrade_slot_indices?: number[],
    infusions?: number[],
    binding?: 'Account' | 'Character' | undefined,
    bound_to?: string,
    stats?: {
        id: number,
        attributes?: {
            AgonyResistance?: number,
            BoonDuration?: number,
            ConditionDamage?: number,
            ConditionDuration?:number,
            CritDamage?: number,
            Healing?: number,
            Power?: number,
            Precision?: number,
            Toughness?: number,
            Vitality?: number
        }
    }

}
