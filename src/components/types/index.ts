import { ReactElement } from "react";

export type AddButtonPropTypes = {
    text: string,
    buttonVariant: boolean,
    handleClick: () => void,
};

export type FilterButtonPropTypes = {
    text?: string,
    handleClick: () => void,
    children?: ReactElement,
};

export type ApartmentLabelPropTypes = {
    text: string,
};
