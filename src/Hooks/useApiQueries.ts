import {useQuery}           from '@tanstack/react-query';
import {AxiosRequestConfig} from 'axios';
import axios                from 'axios/index';
import {msTillReset}        from '../Services/Dates';

interface ApiQueriesProps {
    endpoint: string,
    parameters?: {
        [key: string]: string | number
    },
    config?: AxiosRequestConfig
}

interface ApiQueryFnProps {
    endpoint: string,
    axiosConfig?: AxiosRequestConfig
}

const useApiQueries = <ApiData, >({endpoint, parameters, config}: ApiQueriesProps) => {

    const axiosConfig = {...config, params: {...parameters}};

    function apiQueryFn<ApiData>({endpoint, axiosConfig}: ApiQueryFnProps): Promise<ApiData> {
        const config = {baseURL: 'https://api.guildwars2.com/v2', ...axiosConfig}
        return axios.get(endpoint, config).then(response => response.data);
    }

    const out = useQuery<ApiData, Error>(
        {
            queryKey:  [endpoint, {...axiosConfig}],
            queryFn:   () => apiQueryFn<ApiData>({endpoint, axiosConfig}),
            staleTime: msTillReset()
        }
    );
    return {
        data: out.data, error: out.error, status: out.status, isLoading: out.isLoading, isFetching: out.isFetching
    };
};


export default useApiQueries;
