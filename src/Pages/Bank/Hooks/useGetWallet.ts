import {useEffect, useState} from 'react';
import ApiQueryHook from "../../../Services/ApiQueryHook";
import {ApiCurrencies, ApiWallet} from "../../../Types/Api/Bank";
import {usePageContext} from "../../../Contexts/PageContext";
import {WalletTable} from "../types";

const oldDungeonCurrencies = [5,6,9,10,11,12,13,14,];

const useGetWallet = () => {
    const [combined, setCombined] = useState<WalletTable[]>([]);
    const context = usePageContext();

    const useCurrencies = ApiQueryHook<ApiCurrencies[]>({endpoint: '/currencies'});
    const {data: currencies, status: currencyStatus} = useCurrencies({variables: {parameters: {ids: 'all'}}});

    const useWallet = ApiQueryHook<ApiWallet[]>({endpoint: '/account/wallet'});
    const {
        data: wallet,
        status: walletStatus
    } = useWallet({variables: {parameters: {access_token: context.user?.apiKey || ''}}});

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
                                const walletData = wallet.find(row => row.id === data.id);
                                return {...data, total: walletData?.value || 0}
                        }));
            }
        }
    }, [currencies, wallet, currencyStatus, walletStatus]);

    return {data: combined};
};

export default useGetWallet;
