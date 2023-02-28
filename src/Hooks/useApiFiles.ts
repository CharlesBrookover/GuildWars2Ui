import {useEffect, useState} from 'react';
import {PageContextIcons}    from '../Contexts/types';
import {DurationInMs}        from '../Services/Dates';
import {ApiFiles}            from '../Types/Api/Files';
import useApiQueries         from './useApiQueries';

const useApiFiles = () => {
    const [coinIcons, setCoinIcons] = useState<PageContextIcons>({});

    const {data, isFetching, isLoading} = useApiQueries<ApiFiles[]>(
        {
            endpoint:    '/files',
            parameters:  {ids: 'all'},
            queryConfig: {staleTime: DurationInMs({days: 30}), useErrorBoundary: true}
        });

    useEffect(() => {
        if (data) {
            let icons = {
                goldCoin:   getIconFile('ui_coin_gold', data),
                silverCoin: getIconFile('ui_coin_silver', data),
                copperCoin: getIconFile('ui_coin_copper', data),
            }

            setCoinIcons(icons);
        }
    }, [data]);


    return {data, isLoading, isFetching, coinIcons};
};

const getIconFile = (name: string, data: ApiFiles[]) => {
    const file = data.find(item => item.id === name);
    return file ? file.icon : undefined;
}

export default useApiFiles;
