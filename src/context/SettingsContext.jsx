import { pink } from '@mui/material/colors';
import React, { useState } from 'react';

export const SettingsContext = React.createContext(undefined);

export default function SettingsContextProvider(props) {
    const [settings, setSettings] = useState({
        fontSize: { sm: Number(localStorage.getItem('font_sm')) || 15, md: Number(localStorage.getItem('font_md')) || 25 },
        colors: 'pink', // pink | light | dark 
    });

    const increaseFontSize = () => {
        if (settings.fontSize.md < 60) {
            setSettings({ ...settings, fontSize: { sm: settings.fontSize.sm + 1, md: settings.fontSize.md + 1 } });
            updatefontSizeLs();
        }
    }

    const reduceFontSize = () => {
        if (settings.fontSize.sm > 2) {
            setSettings({ ...settings, fontSize: { sm: settings.fontSize.sm - 1, md: settings.fontSize.md - 1 } });
            updatefontSizeLs();
        }
    }

    function updatefontSizeLs() {
        localStorage.setItem('font_md', settings.fontSize.md);
        localStorage.setItem('font_sm', settings.fontSize.sm);
    }

    
    function updateColorsLs() {
        localStorage.setItem('colors_mode', settings.colors);
    }
    
    function setColors(mode) {
        setSettings({ ...settings, colors: mode });
        updateColorsLs();
    }

    const actions = { reduceFontSize, increaseFontSize, setColors };

    return (
        <SettingsContext.Provider value={{ ...settings, ...actions }}>
            {props.children}
        </SettingsContext.Provider>
    );
};
