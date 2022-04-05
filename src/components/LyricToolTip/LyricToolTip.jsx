import { useEffect } from "react";

import {
  Grid,
  Tooltip,
  Typography
} from '@mui/material';

function LyricToolTip({ className, ...props }) {

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    // call here every word translation, or show loader and call and save just when using the tooltip 
  }


  return (
    <Tooltip
      className={className}

      title={
        <>
          <Typography color="inherit"> תרגומים נוספים:</Typography>
          <div className="tt-body" >
            <p className="tt-p">{"תרגום"}</p>
            <hr></hr>
            <p className="tt-p">{"תרגום"}</p>
            <hr></hr>
            <p className="tt-p">{"תרגום"}</p>
          </div>

        </>}
      arrow sx={{ color: 'white' }}
      enterDelay={0}
      enterTouchDelay={0}
      leaveTouchDelay={60*1000}
    >
      <p className="single-lyric">{props.lyric}</p>
    </Tooltip>
  );
}

export default LyricToolTip;
