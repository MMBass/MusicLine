import { useContext, useEffect } from "react";

import { Typography, Box } from "@mui/material";
import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';
import { default as LyricsBody } from '@components/LyricsBody/StyledLyricsBody';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { SettingsContext } from '@context/SettingsContext';

function HomePage({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {

  }, [settingsContext]);


  function HandleSubmit(e) {
    e.preventDefault();

  }

  return (

    <div className={className}>

      <div className="home-top">
        {!currLyricsContext.currLyrics &&
          <div>
            <Typography variant="h2" className="page-h2">
              שירים מתורגמים
              <br></br>
              שורה בשורה
            </Typography>
            <Typography variant="h3" className="page-h3">
              חפש בין מיליוני שירים באנגלית
              <br></br>
              וקבל את השיר מתורגם לעברית
              <br></br>
              <p className="small-one">
                לא מצאת? נסה לחפש עם שם האמן
              </p>
              <div className="small-two">
                <small >
                  לחיצה על מילה תציג תרגומים נוספים
                </small>
              </div>

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
      </div>


      {currLyricsContext.currLyrics &&
        <LyricsBody className={'lyrics-body'} fontSize={settingsContext.fontSize}></LyricsBody>
      }

    </div >
  );

};

export default HomePage;