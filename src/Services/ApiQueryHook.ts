import {createQuery} from "react-query-kit";
import axios, {AxiosRequestConfig} from "axios";

interface ApiQueryHookProps  {
    endpoint: string,
    axiosConfig?: AxiosRequestConfig
}

interface ApiQueryVariables {
    parameters?: {
        [key: string]: string | number
    },

}

const ApiQueryHook = <ApiData,>({endpoint, axiosConfig}: ApiQueryHookProps) => {
    const baseConfig = {baseURL: 'https://api.guildwars2.com/v2'};

    return createQuery<ApiData, ApiQueryVariables, Error>(endpoint, ({queryKey: [primaryKey, variables]}) => {
        const config = {...baseConfig, ...axiosConfig,  params: {...variables.parameters}};
        return axios
            .get(endpoint, config)
            .then(response => response.data);
    });
};

export default ApiQueryHook;
