import {ReactElement, ReactNode} from "react";

export default interface DataListGroupProps<TData> {
    data: TData[] | undefined,
    variant?: string,
    renderItem: (item: TData) => ReactNode
}
