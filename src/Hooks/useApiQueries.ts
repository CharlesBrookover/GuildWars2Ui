import {useQuery}        from '@tanstack/react-query';
import axios                              from 'axios';
import {ApiQueriesProps, ApiQueryFnProps} from '../Pages/Root/types';
import {msTillReset}                      from '../Services/Dates';

const useApiQueries = <ApiData, >({endpoint, parameters, headers, queryConfig}: ApiQueriesProps) => {

    function apiQueryFn<ApiData>({endpoint, headers, parameters}: ApiQueryFnProps): Promise<ApiData> {
        const config = {baseURL: 'https://api.guildwars2.com/v2', headers: {...headers}, params: {...parameters}}
        return axios.get(endpoint, config).then(response => response.data);
    }

    const {data, error, status, isLoading, isFetching} = useQuery<ApiData, Error>(
        {
            queryKey:         [endpoint, {...headers, ...parameters}],
            queryFn:          () => apiQueryFn<ApiData>({endpoint, headers, parameters}),
            staleTime:        msTillReset(),
            useErrorBoundary: true,
            ...queryConfig
        }
    );

    if (error != null) {
        console.log(JSON.stringify(error));
    }

    return {data, error, status, isLoading, isFetching};
};


export default useApiQueries;
