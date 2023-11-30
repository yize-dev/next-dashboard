import { HTMLAttributes, ReactNode } from "react";
import { SxProps } from "@mui/material";

export type LabelColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
export type LabelVariant = 'filled' | 'outlined' | 'soft';

export type LabelProps = {
    children: ReactNode;
    color?: LabelColor;
    variant?: LabelVariant;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    sx?: SxProps;
};