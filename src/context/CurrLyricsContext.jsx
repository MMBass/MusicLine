import React, { useState, useContext } from 'react';
import { LoadersContext } from '@context/LoadersContext';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider(props) {
    const loadersContext = useContext(LoadersContext);

    const [currLyrics, setCurrLyrics] = useState(false);
    const [singles, setSingles] = useState([]);
    const [lines, setLines] = useState([]);

    const handleSet = (currSong) => {
        loadersContext.openLoader('main');

        let cors = `https://cors-anywhere.herokuapp.com/`;
        let musixMatch = `http://api.musixmatch.com/ws/1.1/`;

        fetch(cors + musixMatch + `matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(currSong.songtName)}&q_artist=${encodeURI(currSong.artistName)}`)
            .then(response => response.json())
            .then(data => {
                loadersContext.closeLoader('main');

                if (data?.message?.body?.lyrics?.lyrics_body) {
                    let ly = data.message.body.lyrics.lyrics_body;
                    ly = ly.substring(0, ly.indexOf("..."));

                    setCurrLyrics(ly);
                    setSingles(ly.split(' '));

                    let newLines = [];
                    ly.split(/(?:\r\n|\r|\n)/g).map((line) => { // TODO split also by commas?
                        newLines.push({ src: line, trans: 'טוען תרגום..' });
                    });
                    setLines(newLines);

                    setLinesTrans();

                    let gsc_clear = document.querySelector('.gsst_a');
                    if (gsc_clear) {
                        gsc_clear.dispatchEvent(new Event('click'));
                    }
                }
            }
            );
    }

    const setLinesTrans = (currSong) => {

    }

    const actions = { handleSet };

    return (
        <CurrLyricsContext.Provider value={{ currLyrics, singles, lines, ...actions }}>
            {props.children}
        </CurrLyricsContext.Provider>
    );
};
