import {PropsChildren} from "../../Pages/Layout/types";

export interface DataCardProps extends PropsChildren {
    title: string,
    error?: string | undefined
}
