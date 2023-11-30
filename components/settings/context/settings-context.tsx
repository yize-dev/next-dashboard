"use client"

import { createContext, useContext } from 'react';

type SettingsContextProps = {
    themeMode: "light" | "dark",
    themeDirection: "ltr" | "rtl",
    themeContrast: string,
    themeLayout: string,
    themeColorPresets: string,
    themeStretch: boolean,
    canReset: boolean,
    open: boolean,
    onCloseDrawer: VoidFunction,
    onReset: VoidFunction,
    onToggle: VoidFunction,
    onUpdate:  (arg1: string, arg2: any) => void;
    onClose:  VoidFunction;
    onChangeDirectionByLang: (newlang: string) => void;
};


export const SettingsContext = createContext({} as SettingsContextProps);

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);

    if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');
  
    return context;
};