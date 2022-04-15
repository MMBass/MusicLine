import { useState, useCallback, useEffect, useContext } from "react";

import {
  Tooltip,
  Typography,
  LinearProgress
} from '@mui/material';

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function LyricToolTip({ className, ...props }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const [ttDelay, setTtDelay] = useState(50000);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let lastTrans = currLyricsContext.lines[currLyricsContext.lines.length - 1]?.trans;
    if (lastTrans.length >= 1) {
      setTtDelay(0);
    } // allows open only when lyricsContext finish render 
  }, [currLyricsContext.lines]);

  const handleCallResults = useCallback(() => {
    callResults();
  }, [])

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
    >
      <p className="single-lyric">{props.lyric}</p>
    </Tooltip>
  );
}

export default LyricToolTip;
