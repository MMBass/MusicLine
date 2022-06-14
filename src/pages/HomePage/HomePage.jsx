import { useContext, useEffect } from "react";

import { Typography, Box, Grid } from "@mui/material";
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
          <Grid container className="home-t-container">

            <Grid item xs={12} sm={6}>
              <Typography variant="h2" className="page-h2">
                שירים מתורגמים
                <br></br>
                שורה בשורה
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h3" className="page-h3">

                <span className="h3-start h3-s-one">
                  חפש בין מיליוני שירים באנגלית
                </span>
                <br></br>
                <span className="h3-start h3-s-two">
                  וקבל את השיר מתורגם לעברית
                </span>
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


              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={HandleSubmit}
              >
                <SearchBar></SearchBar>
              </Box>
            </Grid>
          </Grid>
        }
      </div>

      {currLyricsContext.currLyrics &&
          <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={HandleSubmit}
        >
          <SearchBar></SearchBar>
        </Box>
      }

      {currLyricsContext.currLyrics &&
        <LyricsBody className={'lyrics-body'} fontSize={settingsContext.fontSize}></LyricsBody>
      }

    </div >
  );

};

export default HomePage;