import {useEffect, useState} from 'react';
import {DurationInMs}        from '../Services/Dates';
import {ApiCurrencies} from '../Types/Api/Bank';
import useApiQueries   from './useApiQueries';

const useApiCurrencies = () => {

    const [extraData, setExtraData] = useState<object>({});

    const {data, isLoading, isFetching} = useApiQueries<ApiCurrencies[]>(
        {
            endpoint: '/currencies', parameters: {ids: 'all'}, queryConfig: {staleTime: DurationInMs({days: 7}), useErrorBoundary: true}
        });

    useEffect(() => {
        if (data) {
            setExtraData({...data});
        }
    }, [data]);

    return {data, isLoading, isFetching};
};

export default useApiCurrencies;
