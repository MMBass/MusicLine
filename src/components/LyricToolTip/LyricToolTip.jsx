import { useEffect, useState } from "react";

import {
  Tooltip,
  Typography
} from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function LyricToolTip({ className, ...props }) {
  const [open, setOpen] = useState(false);

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  
  const handleTooltipClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    // call here every word translation, or show loader and call and save just when using the tooltip 
  }


  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        className={className}

        title={
          <>
            <Typography color="inherit"> תרגומים נוספים:</Typography>
            <div className="tt-body" style={{ textAlign: "center" }}>
              {
                ["", "", ""].map(() => {
                  return (<>
                    <p className="tt-p">{"תרגום"}</p>
                    <hr></hr>
                  </>)
                })
              }
            </div>

          </>}
        arrow sx={{ color: 'white' }}
        enterDelay={0}
        enterTouchDelay={200}
        leaveTouchDelay={60 * 1000}
        leaveDelay={0}

        PopperProps={{
          disablePortal: false,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableTouchListener
        // disableHoverListener
      >
        <p className="single-lyric" onClick={handleTooltipOpen}>{props.lyric}</p>
      </Tooltip>
    </ClickAwayListener>
  );
}

export default LyricToolTip;
