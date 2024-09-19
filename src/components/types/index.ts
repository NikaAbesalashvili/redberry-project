import { ReactElement } from "react";

export type AddButtonPropTypes = {
    text: string,
    primary?: boolean | null,
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

export type FileUploadPropTypes = {
    filePath?: string,
    handleFileUpload: () => void,
};
