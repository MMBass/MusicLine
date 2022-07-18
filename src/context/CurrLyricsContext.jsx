import React, { useState, useContext } from 'react';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider(props) {
    const loadersContext = useContext(LoadersContext);
    const bannersContext = useContext(BannersContext);

    const [title, setTitle] = useState((sessionStorage.getItem('currLines') && sessionStorage.getItem('cuurSongTitle')) || '');
    const [currLyrics, setCurrLyrics] = useState(sessionStorage.getItem('currLines') || false);
    const [singles, setSingles] = useState([]);
    const [lines, setLines] = useState(JSON.parse(sessionStorage.getItem('currLines')) || []);
    const [cou, setCou] = useState(0); // helps to force useEffect
    const [proccess, setProccess] = useState(false); // helps to block double-click

    const serverUri = 'https://musicline-backend.vercel.app';

    // const serverUri = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'http://localhost:5000' : 'https://musicline-backend.vercel.app';
     
    const getLines = (currSong, songTitle) => {
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
                sessionStorage.removeItem('currLines');

                if (data?.lyrics) {

                    setTitle(songTitle);
                    let ly = data.lyrics;
                    // ly = ly.substring(0, ly.indexOf("..."));

                    let newLines = [];
                    let newPlused = [[]];
                    let lengthCounter = 0;
                    let round = 0;
                    ly.split(/(?:\r\n|\r|\n)/g).map((line) => { // TODO split also by commas?
                        if (line.length >= 2) {
                            newLines.push({ src: line.replace('.', ''), trans: '' }); // todo remove the replace if dont need
                        }
                    });
                    setLines(newLines);
                    setCurrLyrics(ly);
                    setSingles(ly.split(' '));

                    let gsc_clear = document.querySelector('.gsst_a');
                    if (gsc_clear) {
                        gsc_clear.dispatchEvent(new Event('click'));
                    }
                    setProccess(true);
                } else {
                    bannersContext.createBanner('error', 'error', 'לא נמצא, נסה שוב או חפש שיר אחר', '');
                }
            }
            ).catch((e) => {
                console.log('ERRORR ' + e);
                console.log(e);
                loadersContext.closeLoader('main');
                bannersContext.createBanner('error', 'error', 'לא נמצא, נסה שוב או חפש שיר אחר', '');
                setProccess(true);
            });
    }

    const checkNextTrans = () => {
        let count = false;

        for (let index = 0; index < lines.length; index++) {

            let line = lines[index];
            if (count === true) {
                break;
            } else if (line.trans.length <= 1 || line.trans === 'טוען תרגום...') {
                count = true;

                if (window.location.origin.includes('github')) getFullTrans(line.src, index); // dev
                // else getPartlyTrans(line.src, index); // prod
                else getSingleLineTrans(line.src, index); // prod

                break;
            } else {
                continue;
            }
        }
    }

    const getPartlyTrans = (src, index) => { // doesnt work properly

        let plusedLines = '';
        for (let innerIdx = index; innerIdx < lines.length; innerIdx++) {
            const line = lines[innerIdx];
            if (plusedLines.length >= 1600) {
                break;
            }
            if (line.trans === "   ") plusedLines += line.src + " $. ";
            if (line.trans != "   ") plusedLines += ` ${innerIdx} ${line.src} . `;
        }

        fetch(`${serverUri}/trans/single-line`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "line": encodeURI(plusedLines)
            })
        })
            .then(response => response.json())
            .then(data => {

                if (data?.trans.length >= 1) {
                    let newLines = lines;

                    // data.trans = data.trans.replaceAll("++", '+');
                    // data.trans = data.trans.replaceAll("+++", '+');

                    data.trans.split('.').map((e) => {
                        try {
                            console.log(e);
                            if(e.includes("$") || e.includes("[")){
                                newLines[index].trans = '   ';
                            }else{
                                let extractIndex = Number(e.match(/\d+/)[0].replaceAll('.',''));
                                newLines[extractIndex].trans = e.replace(extractIndex, '');
                            }
                        } catch {
                            if(e.includes("$")) newLines[index].trans = '   ';
                        }
                        index++;
                    })
                    setLines(newLines);

                    let lastTrans = lines[lines.length - 1]?.trans;

                    if (lastTrans.length >= 1) {
                        sessionStorage.setItem('currLines', JSON.stringify(lines));
                        sessionStorage.setItem('cuurSongTitle', (title));
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
                        sessionStorage.setItem('cuurSongTitle', (title));
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

    const getSingleLineTrans = (src, index) => {
        fetch(`${serverUri}/trans/single-line`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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

                    let lastTrans = lines[lines.length - 1]?.trans;

                    if (lastTrans.length >= 1) {
                        sessionStorage.setItem('currLines', JSON.stringify(lines));
                        sessionStorage.setItem('cuurSongTitle', (title));
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
                        sessionStorage.setItem('cuurSongTitle', (title));
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

    const getFullTrans = (src, index) => {
        fetch(`${serverUri}/trans/lines`, {
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
                    data.trans.map((li, index) => {
                        newLines[index] = { src: newLines[index].src, trans: li };
                    })

                    setLines(newLines);
                    sessionStorage.setItem('currLines', JSON.stringify(lines));
                    sessionStorage.setItem('cuurSongTitle', (title));

                    setCou(cou + 1)

                } else if (data?.trans) {
                    newLines[index] = { src: src, trans: data?.trans };
                    setLines(newLines);

                    let lastTrans = lines[lines.length - 1]?.trans;

                    if (lastTrans.length >= 1) {
                        sessionStorage.setItem('currLines', JSON.stringify(lines));
                        sessionStorage.setItem('cuurSongTitle', (title));
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
                        sessionStorage.setItem('cuurSongTitle', (title));
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

    const actions = { getLines, getFullTrans, getPartlyTrans, getSingleLineTrans, checkNextTrans };

    return (
        <CurrLyricsContext.Provider value={{ title, proccess, currLyrics, singles, lines, cou, ...actions }}>
            {props.children}
        </CurrLyricsContext.Provider>
    );
};
