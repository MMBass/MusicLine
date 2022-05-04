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

  return (

    <div className={className}>
      {!currLyricsContext.currLyrics &&
        <div>
          <Typography variant="h2" className="page-h2">
            שירים מתורגמים
            <br></br>
            שורה בשורה
          </Typography>
          <Typography variant="h3" className="page-h3">
          שירים באנגלית מתורגמים לעברית
          <br></br>
          <small>
          לחיצה על מילה תציג תרגומים נוספים   
          </small>
       </Typography>
        </div>
      }


      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <SearchBar></SearchBar>
      </Box>

      {currLyricsContext.currLyrics &&
        <LyricsBody className={'lyrics-body'} fontSize={settingsContext.fontSize}></LyricsBody>
      }

    </div >
  );

};

export default HomePage;