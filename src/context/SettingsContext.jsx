import React, { useState } from 'react';

export const SettingsContext = React.createContext(undefined);

export default function SettingsContextProvider(props) {
    const [settings, setSettings] = useState({
        fontSize: { sm: Number(localStorage.getItem('font_sm')) || 15, md: Number(localStorage.getItem('font_md')) || 25 }
    });

    const increaseFontSize = () => {
        if (settings.fontSize.md < 60) {
            setSettings({ ...settings, fontSize: { sm: settings.fontSize.sm + 1, md: settings.fontSize.md + 1 } });
            updateLs();
        }
    }

    const reduceFontSize = () => {
        if (settings.fontSize.sm > 2) {
            setSettings({ ...settings, fontSize: { sm: settings.fontSize.sm - 1, md: settings.fontSize.md - 1 } });
            updateLs();
        }
    }

    function updateLs() {
        localStorage.setItem('font_md', settings.fontSize.md);
        localStorage.setItem('font_sm', settings.fontSize.sm);
    }

    const actions = { reduceFontSize, increaseFontSize };

    return (
        <SettingsContext.Provider value={{ ...settings, ...actions }}>
            {props.children}
        </SettingsContext.Provider>
    );
};
