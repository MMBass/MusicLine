import React, { useState, useContext, useEffect } from 'react';
import { LoadersContext } from '@context/LoadersContext';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider(props) {
    const loadersContext = useContext(LoadersContext);

    const [currLyrics, setCurrLyrics] = useState(false);
    const [singles, setSingles] = useState([]);
    const [lines, setLines] = useState([]);
    const [cou, setCou] = useState(0); // helps to force useEffect

    const getLines = (currSong) => {
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

                    let newLines = [];
                    ly.split(/(?:\r\n|\r|\n)/g).map((line) => { // TODO split also by commas?
                        if (line.length >= 2) newLines.push({ src: line, trans: '' });
                    });
                    setLines(newLines);
                    setCurrLyrics(ly);
                    setSingles(ly.split(' '));

                    let gsc_clear = document.querySelector('.gsst_a');
                    if (gsc_clear) {
                        gsc_clear.dispatchEvent(new Event('click'));
                    }
                }
            }
            );
    }

    const checkNextTrans = () => {
        console.log("check");
        let count = false;
        for (let index = 0; index < lines.length; index++) {
            let line = lines[index];
            if(count === true){
                break;
            }else if (line.trans.length <= 1) {
                count = true;
                getLinesTrans(line.src, index);
                break;
            } else {
                continue;
            }
        }
    }

    const getLinesTrans = (src, index) => {
        fetch(`http://localhost:5000/line-trans`, {
            method: 'post',
            // mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "line": encodeURI(src)
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data?.trans) {
                    let newLines = lines;
                    newLines[index] = { src: src, trans: data?.trans };
                    setLines(newLines);
                    setCou(cou+1)
                }
            }
            ).catch((e) => {
                let newLines = lines;
               
                newLines[index] = { src: src, trans: "[missing]" };
                
                setLines(newLines);
                setCou(cou+1)
                console.log(e);
            });
    }

    const actions = { getLines, getLinesTrans, checkNextTrans };

    return (
        <CurrLyricsContext.Provider value={{ currLyrics, singles, lines, cou, ...actions }}>
            {props.children}
        </CurrLyricsContext.Provider>
    );
};
