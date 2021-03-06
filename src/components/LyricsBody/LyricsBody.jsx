import React, { useContext, useEffect } from "react";

import {
  Grid,
  Box,
  Typography
} from '@mui/material';

import { default as LyricToolTip } from '@components/LyricToolTip/StyledLyricToolTip'

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import { LoadersContext } from '@context/LoadersContext';

function LyricsBody({ className, ...props }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);
  const loadersContext = useContext(LoadersContext);

  useEffect(() => {
    currLyricsContext.checkNextTrans();
  }, [ currLyricsContext.cou]);

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
                {currLyricsContext.title &&
                  currLyricsContext.title.split(' ').map((word, i) => {
                    return (
                      <LyricToolTip key={i} lyric={word}></LyricToolTip>
                    )
                  })
                }
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
                          <small className="single-trans">???????? ??????????...</small>
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
