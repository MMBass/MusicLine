import { Typography, Box } from "@mui/material";
import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';

import { linesInterval } from '../../services/gscModalEditor.service.js';

function HomePage({ className }) {

  function HandleSubmit(e) {
    e.preventDefault();
    let gsc_btn = document.querySelectorAll('.gsc-search-box button')[0];
    if (gsc_btn) {
      gsc_btn.dispatchEvent(new Event('click'));
      linesInterval();
    } else {
      console.error("no gsc loaded");
    }

  }

  return (

    <div className={className}>
      <Typography variant="h2" className="page-h2">
        שירים מתורגמים
        <br></br>
        שורה אחר שורה
      </Typography>
      <Typography variant="h3" className="page-h3">
        לימוד אנגלית באמצעות מוזיקה
      </Typography>
      {/* todo disappear the headers when search  */}

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={HandleSubmit}
      >
        <SearchBar></SearchBar>
      </Box>
    </div >
  );

};

export default HomePage;