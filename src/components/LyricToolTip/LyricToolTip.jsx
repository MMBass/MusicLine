import { useState, useCallback, useEffect, useContext } from "react";

import {
  Tooltip,
  Typography,
  LinearProgress
} from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function LyricToolTip({ className, ...props }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const [open, setOpen] = useState(false);
  const [ttDelay, setTtDelay] = useState(50000);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let lastTrans = currLyricsContext.lines[currLyricsContext.lines.length - 1]?.trans;
    if (lastTrans.length >= 1) {
      setTtDelay(0);
    } // allows open only when lyricsContext finish render 
  }, [currLyricsContext.lines]);

  
  const handleTooltipOpen = () => {
    let lastTrans = currLyricsContext.lines[currLyricsContext.lines.length - 1]?.trans;
    if (lastTrans.length >= 1) {
      setOpen(true);
      handleCallResults()
    } // allows open only when lyricsContext finish render 

  };
  
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleCallResults = useCallback(() => {
    callResults();
  }, []);

  function callResults() {

    const serverUri = 'https://musicline-backend-basssites.vercel.app';
    // const serverUri = 'http://localhost:5000';

    fetch(`${serverUri}/single-trans`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "single": encodeURI(props.lyric)
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data?.results[0]) {
          setResults(data.results);
        } else {
          setResults(['לא נמצא']);
        }
      }
      ).catch((e) => {
        console.log(e);
      });
  }

  const Results = () => {
    if (results[1]) {
      return (
        results.map((r, i) => {
          return (<>
            {i > 0 && <hr></hr>}
            <p className="tt-p">{r}</p>
          </>)
        })
      )
    } else {
      return (
        <p className="tt-p">לא נמצא</p>
      )
    }

  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
    <Tooltip
      className={className}

      title={
        <>
          <Typography color="inherit"> תרגומים נוספים:</Typography>
          <div className="tt-body" style={{ textAlign: "center", maxHeight: '110px', overflowY: 'auto', direction: 'ltr' }}>
            {results[0] ?
              <Results></Results>
              :
              <LinearProgress sx={{ margin: '8px' }} color={"primary"} />
            }
          </div>

        </>}
      arrow
      enterDelay={ttDelay}
      enterTouchDelay={ttDelay}
      leaveTouchDelay={60 * 1000}
      leaveDelay={0}
      onOpen={() => { handleCallResults() }}

      PopperProps={{
        disablePortal: false,
      }}
      onClose={handleTooltipClose}
      open={open}
      disableFocusListener
      disableTouchListener
      disableHoverListener
    >
      <p className="single-lyric" onClick={handleTooltipOpen}>&nbsp; {props.lyric} </p>
    </Tooltip>
   </ClickAwayListener>
  );
}

export default LyricToolTip;
