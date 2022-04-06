import React, { useState } from 'react';

export const SettingsContext = React.createContext(undefined);

export default function SettingsContextProvider(props) {
    const [settings, setSettings] = useState({
        fontSize: { sm: 15, md: 25 }// get from ls item first, by useEffect
    });

    const increaseFontSize = () => {
        if (settings.fontSize.md < 60) {
            setSettings({ ...settings, fontSize: { sm: settings.fontSize.sm + 0.5, md: settings.fontSize.md + 0.5 } });
            // update ls item here
        }
    }

    const reduceFontSize = () => {
        if (settings.fontSize.sm > 2) {
            setSettings({ ...settings, fontSize: { sm: settings.fontSize.sm - 0.5, md: settings.fontSize.md - 0.5 } });
            // update ls item here
        }
    }

    const actions = { reduceFontSize, increaseFontSize };

    return (
        <SettingsContext.Provider value={{ ...settings, ...actions }}>
            {props.children}
        </SettingsContext.Provider>
    );
};
