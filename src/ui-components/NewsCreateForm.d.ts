/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewsCreateFormInputValues = {
    title?: string;
    date?: string;
    imgPath?: string;
};
export declare type NewsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    imgPath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewsCreateFormOverridesProps = {
    NewsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    imgPath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewsCreateFormProps = React.PropsWithChildren<{
    overrides?: NewsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewsCreateFormInputValues) => NewsCreateFormInputValues;
    onSuccess?: (fields: NewsCreateFormInputValues) => void;
    onError?: (fields: NewsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewsCreateFormInputValues) => NewsCreateFormInputValues;
    onValidate?: NewsCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewsCreateForm(props: NewsCreateFormProps): React.ReactElement;
