import {ReactNode} from "react";
import {Variant} from "react-bootstrap/types";

export interface AlertMessageProps {
    message: ReactNode,
    type: Variant,
    reload?: true,
    reloadHandler?: () => void
}
