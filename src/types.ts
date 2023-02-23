import {AxiosRequestConfig} from 'axios';
import {ReactNode}          from "react";

export interface PropsChildren {
    children?: NonNullable<ReactNode>
}

export interface DefaultQueryProps  {
    endpoint: string,
    axiosConfig?: AxiosRequestConfig
}
