import {PropsChildren} from "../../types";

export interface DataCardProps extends PropsChildren {
    title: string,
    error?: string | undefined
}
