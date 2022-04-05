import React, { useContext } from "react";

import {
  Grid,
  Box
} from '@mui/material';

import { default as LyricToolTip } from '@components/LyricToolTip/StyledLyricToolTip'

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function LyricsBody({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);

  // function ToolTipTitle() {
  //   return (
  //     <React.Fragment>
  //       <Typography color="inherit">Tooltip with HTML</Typography>
  //       <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
  //       {"It's very engaging. Right?"}
  //     </React.Fragment>
  //   )
  // }

  return (
    <Box>
      <Grid container spacing={2}>
        {currLyricsContext.lines &&
          <div id="lyrics_body" className={className}>
            {currLyricsContext.lines.map((line, i) => {
              return (
                <>
                  <Grid className="lyrics-line en-line" item key={i.toString() + Math.floor(Math.random() * 30000)}>
                    {line.split(' ').map((word, i) => {
                      return (
                        <LyricToolTip key={i} lyric={word}></LyricToolTip>
                      )
                    })}
                  </Grid>

                  <Grid item className="lyrics-line he-line" key={i.toString() + Math.floor(Math.random() * 30000)}>
                    {line.split(' ').map((word, i) => {
                      if(i === 0){
                        return (
                          <small className="single-trans" key={i}>{word && 'טוען תרגום..'}</small>
                        )
                      }
                    })}
                  </Grid>
                </>
              );
            })}
          </div>}
      </Grid>
    </Box>
  );
}

export default LyricsBody;
