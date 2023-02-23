import axios, {AxiosRequestConfig} from 'axios';

interface ApiQueryFnProps {
    endpoint: string,
    axiosConfig?: AxiosRequestConfig
}

export function apiQueryFn<ApiData>({endpoint, axiosConfig}: ApiQueryFnProps): Promise<ApiData> {
    const config = {baseURL: 'https://api.guildwars2.com/v2', ...axiosConfig}
    return axios.get(endpoint, config).then(response => response.data);
}
