import { useContext } from "react";

import { Typography, Box } from "@mui/material";
import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';
import { default as LyricsBody } from '@components/LyricsBody/StyledLyricsBody';

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function HomePage({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);

  function HandleSubmit(e) {
    e.preventDefault();
    let gsc_btn = document.querySelectorAll('.gsc-search-box button')[0];
    if (gsc_btn) {
      gsc_btn.dispatchEvent(new Event('click'));

      // clear gsc input

    } else {
      console.error("no gsc loaded");
    }

  }

  return (

    <div className={className}>
      {!currLyricsContext.currLyrics &&
        <div>
          <Typography variant="h2" className="page-h2">
            שירים מתורגמים
            <br></br>
            שורה אחר שורה
          </Typography>
          <Typography variant="h3" className="page-h3">
            לימוד אנגלית באמצעות מוזיקה
          </Typography>
        </div>
      }


      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={HandleSubmit}
      >
        <SearchBar></SearchBar>
      </Box>

      {currLyricsContext.currLyrics &&
        <LyricsBody className={'lyrics-body'}></LyricsBody>
      }

    </div >
  );

};

export default HomePage;