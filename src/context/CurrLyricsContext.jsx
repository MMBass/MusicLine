import React, { useState } from 'react';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider(props) {
    const [currLyrics, setCurrLyrics] = useState({});

    const handleSet = () => {
        setCurrLyrics();
    }

    const actions = { handleSet };

    return (
        <CurrLyricsContext.Provider value={{ ...currLyrics, ...actions }}>
            {props.children}
        </CurrLyricsContext.Provider>
    );
}; //todo Important Add the ContextProvider to Composer
