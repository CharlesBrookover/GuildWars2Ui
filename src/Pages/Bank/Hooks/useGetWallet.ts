import {useEffect, useState}      from 'react';
import {usePageContext}           from "../../../Contexts/PageContext";
import useApiQueries              from '../../../Hooks/useApiQueries';
import {ApiCurrencies, ApiWallet} from "../../../Types/Api/Bank";
import {WalletTable}              from "../types";

const oldDungeonCurrencies = [5, 6, 9, 10, 11, 12, 13, 14,];
/*
    Wallet groups
    General - Gems, Coins, Karma, Spirit Shards, Laurels, Transmutation, Guild
    Competitive - Honor, Pvp,shards of GLory, WvW, Heroics (all)
    Map - Geiodes, Crests, parts, aurillium, crystals, provisioner tokens, unbound, contracts, mosiacs, volatile, festival tokens, magnetit shards, legendary insights, racing, prophet shards, seals
     Keys - lockpicks, keys, crowbards, acid, machetes, blue prophet crystals
    Dungeon - Dungeon, relics, unstable essences
    Black lion - Gems, transmutation
 */
const useGetWallet = () => {
    const [combined, setCombined] = useState<WalletTable[]>([]);
    const context = usePageContext();

    const {data: currencies, status: currencyStatus} = useApiQueries<ApiCurrencies[]>(
        {
            endpoint: '/currencies', parameters: {ids: 'all'}
        });
    const {
              data:   wallet,
              status: walletStatus
          } = useApiQueries<ApiWallet[]>(
        {
            endpoint:   '/account/wallet',
            parameters: {
                access_token: context.user?.apiKey || ''
            }
        });

    useEffect(() => {
        if (currencyStatus === 'success' && walletStatus === 'success') {
            if (currencies !== undefined) {
                setCombined(() =>
                                currencies
                                    .filter(data => !oldDungeonCurrencies.includes(data.id))
                                    .sort((a: ApiCurrencies, b: ApiCurrencies) => {
                                        if (a.order < b.order) {
                                            return -1;
                                        }
                                        if (a.order > b.order) {
                                            return 1;
                                        }
                                        return 0;
                                    })
                                    .map(data => {
                                        const walletData = wallet?.find(row => row.id === data.id);
                                        return {...data, total: walletData?.value || 0}
                                    }));
            }
        }
    }, [currencies, wallet, currencyStatus, walletStatus]);

    return {data: combined};
};

export default useGetWallet;
