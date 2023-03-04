export interface ApiItem<T> {
    id: number,
    chat_link: string,
    name: string,
    icon?: string,
    description?: string,
    type: ItemType,
    rarity: ItemRarity,
    level: number,
    vendor_value: number,
    default_skin?: number,
    flags?: ItemFlags[],
    game_types?: ItemGameTypes[],
    restrictions?: ItemRestrictions[],
    upgrades_into?: ItemUpgrades[],
    upgrades_from?: ItemUpgrades[],
    details?: T
}

export interface ItemUpgrades {
    upgrade: 'Attunement' | 'Infusion',
    item_id: number
}

export interface ItemInfixUpgrade {
    id?: number,
    attributes?: ItemInfixAttributes[],
    buff?: ItemInfixBuff
}

export interface ItemInfixAttributes {
    attribute: ItemInfixAttributeList,
    modifier: number
}

export interface ItemInfixBuff {
    skill_id: number,
    description?: string
}

export interface ItemInfusionSlots {
    flags: ItemInfusionFlagsList[],
    item_id?: number
}


interface ItemCombatAttributes {
    details: {
        infusion_slots: ItemInfusionSlots[],
        attribute_adjustment: number,
        infix_upgrade?: ItemInfixUpgrade,
        suffix_item_id?: number,
        secondary_suffix_item_id?: number,
        stat_choices?: number[]
    }
}

export interface ItemArmor extends ItemCombatAttributes {
    type: ItemArmorType,
    weight_class: ItemArmorWeightClass,
    defense: number
}

export interface ItemBack extends ItemCombatAttributes {
}

export interface ItemBag {
    size: number,
    no_sell_or_sort: boolean
}

export interface ItemConsumable {
    type: ItemConsumableType,
    description?: string,
    duration_ms?: number,
    unlock_type: ItemConsumableUnlockType,
    color_id?: number,
    recipe_id?: number,
    extra_recipe_ids?: number[],
    guild_upgrade_id?: number,
    apply_count?: number,
    name?: string,
    icon?: string,
    skins?: number[]
}

export interface ItemContainer {
    type: ItemContainerType;
}

export interface ItemGathering {
    type: ItemGatheringType;
}

export interface ItemGizmo {
    type: ItemGizmoType,
    guild_upgrade_id?: number,
    vendor_ids?: number[]
}

export interface ItemMiniature {
    minipet_id: number;
}

export interface ItemSalvageKits {
    type: string,
    charges: number
}

export interface ItemTrinket extends ItemCombatAttributes {
    type: ItemTrinketType;
}

export interface ItemUpgradeComponent {
    type: ItemUpgradeComponentType,
    flags: ItemUpgradeComponentFlags[],
    infusion_upgrade_flags: ItemInfusionFlagsList[],
    suffix: string,
    infix_upgrade: ItemInfixUpgrade,
    bonuses?: string[]
}

export interface ItemWeapons extends ItemCombatAttributes {
    type: ItemWeaponType,
    damage_type: ItemWeaponDamageType,
    min_power: number,
    max_power: number,
    defense: number
}

export interface ItemCraftingMaterials {
}

export interface ItemTrophies {
}

export interface ItemTraits {
}

export type ItemType =
    'Armor'
    | 'Back'
    | 'Bag'
    | 'Consumable'
    | 'Container'
    | 'CraftingMaterial'
    | 'Gizmo'
    | 'JadTechModule'
    | 'Key'
    | 'MiniPet'
    | 'PowerCore'
    | 'Toool'
    | 'Trait'
    | 'Trinket'
    | 'Trophy'
    | 'UpgradeComponent'
    | 'Weapon';
export type ItemRarity = 'Junk' | 'Basic' | 'Fine' | 'Masterwork' | 'Rare' | 'Exotic' | 'Ascended' | 'Legendary';
export type ItemFlags =
    'AccountBindOnUse'
    | 'AccountBound'
    | 'Attuned'
    | 'BulkConsume'
    | 'DeleteWarning'
    | 'HideSuffix'
    | 'Infused'
    | 'MonsterOnly'
    | 'NoMysticForge'
    | 'NoSalvage'
    | 'NoSell'
    | 'NotUpgradeable'
    | 'NoUnderwater'
    | 'SoulbindOnAcquire'
    | 'SoulBindOnUse'
    | 'Tonic'
    | 'Unique';
export type ItemGameTypes = 'Activity' | 'Dungeon' | 'Pve' | 'Pvp' | 'PvpLobby' | 'Wvw';
export type ItemRestrictions =
    'Asura'
    | 'Charr'
    | 'Female'
    | 'Human'
    | 'Norn'
    | 'Sylvari'
    | 'Elementalist'
    | 'Engineer'
    | 'Guardian'
    | 'Mesmer'
    | 'Necromancer'
    | 'Ranger'
    | 'Thief'
    | 'Warrior';
export type ItemInfixAttributeList =
    'AgonyResistance'
    | 'BoonDuration'
    | 'ConditionDamage'
    | 'ConditionDuration'
    | 'CritDamage'
    | 'Healing'
    | 'Power'
    | 'Precision'
    | 'Toughness'
    | 'Vitality;'
export type ItemInfusionFlagsList = 'Enrichment' | 'Infusion';
export type ItemArmorType = 'Boots' | 'Coat' | 'Gloves' | 'Helm' | 'HelmAquatic' | 'Leggings' | 'Shoulders';
export type ItemArmorWeightClass = 'Heavy' | 'Medium' | 'Light' | 'Clothing';
export type ItemConsumableType =
    'AppearanceChange'
    | 'Booze'
    | 'ContractNpc'
    | 'Currency'
    | 'Food'
    | 'Generic'
    | 'Halloween'
    | 'Immediate'
    | 'MountRandomUnlock'
    | 'RandomUnlock'
    | 'Transmutation'
    | 'Unlock'
    | 'UpgradeRemoval'
    | 'Utility'
    | 'TeleportToFriend';
export type ItemConsumableUnlockType =
    'BagSlot'
    | 'BankTab'
    | 'Champion'
    | 'CollectibleCapacity'
    | 'Content'
    | 'CraftingRecipe'
    | 'Dye'
    | 'GliderSkin'
    | 'Minipet'
    | 'Ms'
    | 'Outfit'
    | 'RandomUnlock'
    | 'SharedSlot';
export type ItemContainerType = 'Default' | 'GiftBox' | 'Immediate' | 'OpenUI';
export type ItemGatheringType = 'Foraging' | 'Logging' | 'Mining' | 'Bait' | 'Lure';
export type ItemGizmoType = 'Default' | 'ContainerKey' | 'RentableContractNpc' | 'UnlimitedConsumable';
export type ItemTrinketType = 'Accessory' | 'Amulet' | 'Ring';
export type ItemUpgradeComponentType = 'Default' | 'Gem' | 'Rune' | 'Sigil';
export type ItemUpgradeComponentFlags = ItemBaseWeaponType & 'HeavyArmor' | 'MediumArmor' | 'LightArmor' | 'Trinket';
export type ItemWeaponType = ItemBaseWeaponType & 'LargeBundle' | 'SmallBundle' | 'Toy' | 'ToyTwoHanded';
export type ItemWeaponDamageType = 'Fire' | 'Ice' | 'Lightning' | 'Physical' | 'Choking';

type ItemBaseWeaponType =
    'Axe'
    | 'Dagger'
    | 'Focus'
    | 'Greatsword'
    | 'Hammer'
    | 'Harpoon'
    | 'LongBow'
    | 'Mace'
    | 'Pistol'
    | 'Rifle'
    | 'Scepter'
    | 'Shield'
    | 'ShortBow'
    | 'Speargun'
    | 'Staff'
    | 'Sword'
    | 'Torch'
    | 'Trident'
    | 'Warhorn'


