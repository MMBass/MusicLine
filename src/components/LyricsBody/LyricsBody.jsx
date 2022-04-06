import React, { useContext } from "react";

import {
  Grid,
  Box
} from '@mui/material';

import { default as LyricToolTip } from '@components/LyricToolTip/StyledLyricToolTip'

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function LyricsBody({ className, ...props }) {
  const currLyricsContext = useContext(CurrLyricsContext);

  return (
    <Box>
      <Grid container spacing={2}>
        {currLyricsContext.lines &&
          <div id="lyrics_body" className={className}>
            {currLyricsContext.lines.map((line, y) => {
              return (
                <div>
                  <Grid className="lyrics-line en-line" item key={y.toString() + Math.floor(Math.random() * 30000)}>
                    {line.src.split(' ').map((word, i) => {
                      return (
                        <LyricToolTip key={i} lyric={word}></LyricToolTip>
                      )
                    })}
                  </Grid>

                  <Grid item className="lyrics-line he-line" key={y.toString() + Math.floor(Math.random() * 30000)}>
                    {line.trans.split(' ').map((word, i) => {
                        return (
                          <small className="single-trans" key={i}>{word && word}</small>
                        )
                    })}
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
