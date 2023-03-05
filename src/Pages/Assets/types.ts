import {ApiCurrencies} from "../../Types/Api/Bank";

export interface WalletTable extends ApiCurrencies {
    total: number,
    groups: string[]
}

export interface CurrencyGroups  {
    [key: string]: number[]
}
