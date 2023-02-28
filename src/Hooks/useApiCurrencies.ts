import {DurationInMs}  from '../Services/Dates';
import {ApiCurrencies} from '../Types/Api/Bank';
import useApiQueries   from './useApiQueries';

const useApiCurrencies = () => {
    const {data, isLoading, isFetching} = useApiQueries<ApiCurrencies[]>(
        {
            endpoint: '/currencies', parameters: {ids: 'all'}, queryConfig: {staleTime: DurationInMs({days: 7}), useErrorBoundary: true}
        });

    return {data, isLoading, isFetching};
};

export default useApiCurrencies;
