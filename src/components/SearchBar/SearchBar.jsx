import { useEffect, useState } from "react";

import { TextField, Autocomplete } from "@mui/material";

function SearchBar({ className }) {
  const [gscResults, setGscResults] = useState([]);
  // const [inputValue, setInputValue] = useState('');

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
        updateResults();
      }

      const observer = new MutationObserver(callback);
      observer.observe(targetNode, observerOptions);
    }
  }, []);

  let updateResults = () => {
    setTimeout(() => {
      let lines = document.querySelectorAll(".gs-title");

      if (lines) {
        let newGscResults = [];
        
        lines.forEach((line, i) => {
          console.log(line.innerText)
          if (line.innerText.includes("Lyrics")) {
            newGscResults.push(line.innerText.replace('Lyrics | Musixmatch', " "));
          }
        });
        setGscResults(newGscResults);
      }
    }, 50);
  }

  function HandleSearch(value) {
    // setInputValue(value);
    let gsc_input = document.querySelector('#gsc-i-id1');

    if (gsc_input) {
      if (value.length <= 1) {
        // clear gsc input
        let gsc_clear = document.querySelector('.gsst_a');
        if (gsc_clear) {
          gsc_clear.dispatchEvent(new Event('click'));
        }
      } else {

        gsc_input.value = value;

        let gsc_btn = document.querySelectorAll('.gsc-search-box button')[0];
        if (gsc_btn) {
          setTimeout(() => {
            gsc_btn.dispatchEvent(new Event('click'));
          }, 100 * Math.floor(Math.random() * 4));

        } else {
          console.error("no gsc loaded");
        }
      }
    } else {
      console.error("no gsc loaded");
    }
  }

  return (
    <div id="" className={className}>
      <Autocomplete
        //  value={value}
        //  onChange={(event, newValue) => {
        //   //  handleSubmit(newValue);
        //  }}// onChange will be the callLyics

        // inputValue={inputVal}
        onInputChange={(event, newValue) => {
          HandleSearch(newValue);
        }}

        disablePortal
        id="combo-box-demo"
        options={gscResults}
        sx={{ width: 300 }}
        popupIcon=''
        renderInput={(params) => <TextField {...params} label="חפש שיר" />}
      />
      {/* <TextField id="outlined-search" label="חפש שיר" type="search" className="main-input" onChange={HandleSearch} autoFocus={false} autoComplete='on' /> */}
      {/* TODO search icon ? */}


    </div>
  );

}


export default SearchBar;
