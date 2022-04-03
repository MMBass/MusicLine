import { useEffect, useState } from "react";

import { TextField } from "@mui/material";

function SearchBar({ className }) {

  function HandleSearch(event) {
    let gsc_input = document.querySelector('#gsc-i-id1');
    if (gsc_input) {
      if (event.target.value.length <= 1) {
        // clear gsc input
        let gsc_clear = document.querySelector('.gsst_a');
        if(gsc_clear){
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
          console.error("no gsc loaded");
        }
      }
    } else {
      console.error("no gsc loaded");
    }
  }

  return (
    <div id="" className={className}>
      <TextField id="outlined-search" label="חפש שיר" type="search" className="main-input" onChange={HandleSearch} autoFocus={false} autoComplete='on'/>
      {/* TODO search icon ? */}

      <div className="gcse-search"></div>

    </div>
  );

}


export default SearchBar;
