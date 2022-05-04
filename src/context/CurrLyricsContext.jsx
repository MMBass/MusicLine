import React, { useState, useContext, useEffect } from 'react';
import { LoadersContext } from '@context/LoadersContext';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider(props) {
    const loadersContext = useContext(LoadersContext);

    const [currLyrics, setCurrLyrics] = useState(sessionStorage.getItem('currLines') || false);
    const [singles, setSingles] = useState([]);
    const [lines, setLines] = useState(JSON.parse(sessionStorage.getItem('currLines')) || []);
    const [cou, setCou] = useState(0); // helps to force useEffect
    const [proccess, setProccess] = useState(false); // helps to block double-click

    const serverUri = 'https://musicline-backend-basssites.vercel.app';

    // const serverUri = 'http://localhost:5000';

    const getLines = (currSong) => {
        setProccess(true);
        loadersContext.openLoader('main');

        fetch(`${serverUri}/lyrics`, {
            method: 'post',
            // mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "currSong": currSong
            })
        })
            .then(response => response.json())
            .then(data => {
                loadersContext.closeLoader('main');
            
                if (data?.lyrics) {
                    let ly = data.lyrics;
                    // ly = ly.substring(0, ly.indexOf("..."));

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
                    setProccess(true);
                }
            }
            ).catch((e)=>{
                loadersContext.closeLoader('main');
                setProccess(true);
            });
    }

    const checkNextTrans = () => {
        let count = false;
        for (let index = 0; index < lines.length; index++) {
            let line = lines[index];
            if (count === true) {
                break;
            } else if (line.trans.length <= 1 || line.trans === 'טוען תרגום..') {
                count = true;
                getLinesTrans(line.src, index);
                break;
            } else {
                continue;
            }
        }
    }

    const getLinesTrans = (src, index) => {
        fetch(`${serverUri}/line-trans`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "lines": lines
            })
        })
            .then(response => response.json())
            .then(data => {
                let newLines = lines;

                if (data?.trans.length) {
                    data.trans.map((li,index) => {
                        newLines[index] = { src: newLines[index].src, trans: li};
                    })
 
                    setLines(newLines)
                    setCou(cou + 1)

                } else if (data?.trans) {
                    newLines[index] = { src: src, trans: data?.trans };
                    setLines(newLines);

                    let lastTrans = lines[lines.length - 1]?.trans;

                    if (lastTrans.length >= 1) {
                        sessionStorage.setItem('currLines', JSON.stringify(lines));
                    }

                    setCou(cou + 1)
                } else {
                    if (lines[index].trans === undefined) {
                        newLines[index] = { src: src, trans: 'טוען תרגום..' };
                    }
                    if (lines[index].trans === 'טוען תרגום..') {
                        newLines[index] = { src: src, trans: "[missing]" };
                    }

                    setLines(newLines);

                    let lastTrans = lines[lines.length - 1]?.trans;

                    if (lastTrans.length >= 1) {
                        sessionStorage.setItem('currLines', JSON.stringify(lines));
                    }

                    setCou(cou + 1);
                }
            }
            ).catch((e) => {
                let newLines = lines;

                if (lines[index].trans === '') {
                    newLines[index] = { src: src, trans: 'טוען תרגום..' };
                }
                if (lines[index].trans === 'טוען תרגום..') {
                    newLines[index] = { src: src, trans: "[missing]" };
                }

                setLines(newLines);

                let lastTrans = lines[lines.length - 1]?.trans;
                if (lastTrans.length >= 1) {
                    sessionStorage.setItem('currLines', JSON.stringify(lines));
                }

                setCou(cou + 1);
                console.log(e);
            });
    }

    const actions = { getLines, getLinesTrans, checkNextTrans };

    return (
        <CurrLyricsContext.Provider value={{ proccess, currLyrics, singles, lines, cou, ...actions }}>
            {props.children}
        </CurrLyricsContext.Provider>
    );
};
