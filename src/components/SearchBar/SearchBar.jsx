import { useState, useEffect, useContext } from "react";

import { TextField } from "@mui/material";

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';

function SearchBar({ className }) {
  const [currVal, setCurrVal] = useState('');

  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);

  useEffect(() => {
    window.onload = () => {
      const targetNode = document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0];
      const observerOptions = {
        childList: false,
        attributes: true,

        // Omit (or set to false) to observe only changes to the parent node
        subtree: false
      }

      function callback() {
        linesChange();
      }

      const observer = new MutationObserver(callback);
      observer.observe(targetNode, observerOptions);
    }
  }, []);

  useEffect(() => {
    setCurrVal(currLyricsContext.title);
  }, [currLyricsContext.title]);

  function setVal(e){
    setCurrVal(e.target.value);
    HandleSearch(e)
  }

  const linesChange = () => {
    setTimeout(() => {
      let lines = document.querySelectorAll(".gs-title");

      const gscAdBlocks = document.querySelectorAll('.gsc-adBlock');
      gscAdBlocks.forEach((ad)=>{
        ad.parentNode.appendChild(ad);
      });

      if (lines) {
        lines.forEach((line, i) => {
          if (line.innerText.includes("Lyrics")) {

            let songTitle = line.innerText.replace('Lyrics | Musixmatch', " ");
            line.innerText = songTitle;
            const currSong = {
              artistName: encodeURI(songTitle.split('-')[0]),
              songName: encodeURI(songTitle.split('-')[1])
            }
           
            line.addEventListener('click', (e) => {
              if (!currLyricsContext.proccess) {
                bannersContext.closeBanner('error');
                currLyricsContext.getLines(currSong, songTitle);
              }
            });

          } else if (!line.innerText.includes("Lyrics")) {

            if (line.parentElement.parentElement.parentElement.className.includes('gsc-webResult')) {
              line.parentElement.parentElement.parentElement.remove();
            }

          }

        });

      }
    }, 50);
  }

  function HandleSearch(event) {
    let gsc_input = document.querySelector('#gsc-i-id1');

    if (gsc_input) {
      if (event.target.value.length <= 1) {
        // clear gsc input
        let gsc_clear = document.querySelector('.gsst_a');
        if (gsc_clear) {
          gsc_clear.dispatchEvent(new Event('click'));
        }
      } else {
        gsc_input.value = event.target.value;

        let gsc_btn = document.querySelectorAll('.gsc-search-box button')[0];
        if (gsc_btn) {

          setTimeout(() => {
            gsc_btn.dispatchEvent(new Event('click'));
          }, 50 * Math.floor(Math.random() * 4));

        } else {
          bannersContext.createBanner('error', 'error', 'משהו השתבש, נסה לרענן את העמוד', '(no gsc loaded)');
          console.error("no gsc loaded, try reload the page");
        }
      }
    } else {
      bannersContext.createBanner('error', 'error', 'משהו השתבש, נסה לרענן את העמוד', '(no gsc loaded)');
      console.error("no gsc loaded, try reload the page");
    }
  }

  return (
    <div id="" className={className}>
      <TextField id="outlined-search" label="חפש שיר" type="search" className="main-input" onChange={setVal} autoFocus={false} autoComplete='off' value={currVal} />

      <div className="gcse-search"></div>

    </div>
  );

}


export default SearchBar;
