import {useEffect, useState}         from 'react';
import {usePageContext}              from '../../../Contexts/PageContext';
import useApiCurrencies              from '../../../Hooks/useApiCurrencies';
import useApiQueries                 from '../../../Hooks/useApiQueries';
import {DurationInMs}                from '../../../Services/Dates';
import {ApiCurrencies, ApiWallet}    from '../../../Types/Api/Bank';
import {CurrencyGroups, WalletTable} from '../types';

const oldDungeonCurrencies = [5, 6, 9, 10, 11, 12, 13, 14,];

const currencyGroups: CurrencyGroups = {
    general:     [1, 2, 3, 4, 16, 18, 23],
    competitive: [15, 26, 30, 31, 33, 36, 46, 65],
    map:         [19, 20, 22, 25, 27, 28, 29, 32, 34, 35, 39, 45, 47, 50, 52, 53, 57, 60, 70],
    keys:        [37, 38, 40, 41, 42, 43, 51, 54, 55, 56],
    dungeon:     [24, 59, 69],
    black_lion:  [4, 18]
};

const useGetWallet = () => {
    const [combined, setCombined] = useState<WalletTable[]>([]);
    const context = usePageContext();

    const {data: currencies} = useApiCurrencies();

    const {data: wallet} = useApiQueries<ApiWallet[]>(
        {
            endpoint:    '/account/wallet',
            parameters:  {
                access_token: context.user?.apiKey || ''
            },
            queryConfig: {staleTime: DurationInMs({minutes: 5})}
        });

    useEffect(() => {
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
                                    const groups = Object.keys(currencyGroups).filter(key => currencyGroups[key].includes(data.id));

                                    return {...data, total: walletData?.value || 0, groups: groups || []};
                                })
            );
        }
    }, [currencies, wallet]);

    return {data: combined};
};

export default useGetWallet;
