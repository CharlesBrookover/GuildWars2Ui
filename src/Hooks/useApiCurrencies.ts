import {useEffect, useState} from 'react';
import {DurationInMs}        from '../Services/Dates';
import {ApiCurrencies} from '../Types/Api/Bank';
import useApiQueries   from './useApiQueries';

export interface ContextData {
    [key: number]: {
        name: string,
        icon: string,
        description: string
    }
}

export interface ApiCurrenciesOutput {
    data: ApiCurrencies[] | undefined,
    isLoading: boolean,
    isFetching: boolean
}

const useApiCurrencies = (): ApiCurrenciesOutput => {


    const {data, isLoading, isFetching} = useApiQueries<ApiCurrencies[]>(
        {
            endpoint: '/currencies', parameters: {ids: 'all'}, queryConfig: {staleTime: DurationInMs({days: 7}), useErrorBoundary: true}
        });


    return {data, isLoading, isFetching};
};

export default useApiCurrencies;
