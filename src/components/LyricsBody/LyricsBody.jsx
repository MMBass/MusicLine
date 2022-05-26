import React, { useContext, useEffect } from "react";

import {
  Grid,
  Box,
  Typography
} from '@mui/material';

import { default as LyricToolTip } from '@components/LyricToolTip/StyledLyricToolTip'

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function LyricsBody({ className, ...props }) {
  const currLyricsContext = useContext(CurrLyricsContext);

  useEffect(() => {
    currLyricsContext.checkNextTrans();
  }, [currLyricsContext, currLyricsContext.cou]);

  return (
    <Box>
      <Grid container spacing={2}>
        {currLyricsContext.lines &&
          <div id="lyrics_body" className={className}>
            <Typography
              variant="h6"
              noWrap
              component="h3"
            >
              {currLyricsContext.title && currLyricsContext.title}
            </Typography>
            {currLyricsContext.lines.map((line, y) => {
              if (line.src.includes('[')) {
                line.trans = '   ';
              }
              return (
                <div>
                  {(y > 0 && line.src.includes('[')) && <><br></br><br></br></>}

                  <Grid className="lyrics-line en-line" item key={y.toString() + Math.floor(Math.random() * 30000)}>
                    {line.src.split(' ').map((word, i) => {
                      return (
                        <LyricToolTip key={i} lyric={word}></LyricToolTip>
                      )
                    })}
                  </Grid>

                  <Grid item className="lyrics-line he-line" key={y.toString() + Math.floor(Math.random() * 30000)}>
                    <>
                      {
                        line.trans?.length > 2 ?
                          line.trans.split(' ').map((word, i) => {
                            if (line.trans === '   ') return;
                            return (
                              <small onLoad={() => { currLyricsContext.checkNextTrans() }} className="single-trans" key={i}>{word} &nbsp;</small>
                            )
                          })
                          :
                          <small className="single-trans">טוען תרגום...</small>
                      }
                    </>
                  </Grid>
                </div>
              );
            })}
          </div>}
      </Grid>
    </Box>
  );
}

export default LyricsBody;
