import { useEffect, useState, useMemo, useCallback } from "react";

import {
  Tooltip,
  Typography,
  LinearProgress
} from '@mui/material';

function LyricToolTip({ className, ...props }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    // call here every word translation, or show loader and call and save just when using the tooltip 
  }

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
        if (data?.results) {
          setResults(data.results);
        } else {
          setResults(['no results']);
        }
      }
      ).catch((e) => {
        console.log(e);
      });
  }

  return (
    <Tooltip
      className={className}

      title={
        <>
          <Typography color="inherit"> תרגומים נוספים:</Typography>
          <div className="tt-body" style={{ textAlign: "center" }}>
            {results[0] ?
              results.map((r) => {
                return (<>
                  <p className="tt-p">{r}</p>
                  <hr></hr>
                </>)
              })
              :
              <LinearProgress sx={{ margin: '8px' }} color={"primary"} />
            }
          </div>

        </>}
      arrow sx={{ color: 'white' }}
      enterDelay={0}
      enterTouchDelay={5}
      leaveTouchDelay={60 * 1000}
      leaveDelay={0}
      onOpen={() => { handleCallResults() }}
    >
      <p className="single-lyric">{props.lyric}</p>
    </Tooltip>
  );
}

export default LyricToolTip;
