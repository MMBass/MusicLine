import { useEffect, useContext } from "react";

import { TextField } from "@mui/material";

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function SearchBar({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);

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


  let linesChange = () => {
    setTimeout(() => {
      let lines = document.querySelectorAll(".gs-title");

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
              currLyricsContext.getLines(currSong);
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
          }, 100 * Math.floor(Math.random() * 4));

        } else {
          console.error("no gsc loaded, try reload the page");
        }
      }
    } else {
      console.error("no gsc loaded, try reload the page");
    }
  }

  return (
    <div id="" className={className}>
      <TextField id="outlined-search" label="חפש שיר" type="search" className="main-input" onChange={HandleSearch} autoFocus={false} autoComplete='off' />
      {/* TODO search icon ? */}

      <div className="gcse-search"></div>

    </div>
  );

}


export default SearchBar;
