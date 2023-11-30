import { SxProps } from '@mui/material';
import { ReactNode } from 'react';

// NavItemProps
export interface NavItemProps {
  title: string;
  path: string;
  icon?: JSX.Element;
  info?: string;
  
  item: NavItemProps;
  // data?: NavItemProps;
  open?: boolean;
  depth: number;
  active?: boolean;
  externalLink?: boolean;
  child?: NavItemProps[];
  disabled?: boolean;
  caption?: string;
  roles?: string[];
  hasChild?: boolean;
  config: NavConfigProps;

  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

// NavConfigProps
export interface NavConfigProps {
  itemPadding?: string | number;
  itemGap?: string | number;
  iconSize?: number;
  currentRole?: string;
  hiddenLabel?: boolean;
  itemRadius?: string | number;
  itemRootHeight?: string | number;
  itemSubHeight?: string | number;
  
}


export interface NavListProps  {
  subheader?: string;
  items: NavItemProps[];
};

export interface NavSectionProps {
  data: NavListProps[];
  config: NavConfigProps;
  sx?: SxProps;
};

export interface NavListRootProps {
  data: NavListProps[];
  config: NavConfigProps;
};

// // // // // // // // // // // // // // // 

export interface NavItemBaseProps {
  title: string;
  path: string;
  icon?: ReactNode;
  child?: NavItemBaseProps[];
  roles?: string[];
  info?: string;
}

export interface NavSectionBaseProps {
  data: {
    subheader?: string;
    items: NavItemBaseProps[];
  }[];
  config: NavConfigProps;
  sx?: SxProps;
};