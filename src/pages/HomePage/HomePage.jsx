import { Typography, Box } from "@mui/material";
import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';

function HomePage({ className }) {

  function HandleSubmit(e) {
    e.preventDefault();
    let gsc_btn = document.querySelectorAll('.gsc-search-box button')[0];
    if (gsc_btn) {
      gsc_btn.dispatchEvent(new Event('click'));

       // clear gsc input
      
    } else {
      console.error("no gsc loaded");
    }

  }

  return (

    <div className={className}>
      <div id="no_lyrics">
        <Typography variant="h2" className="page-h2">
          שירים מתורגמים
          <br></br>
          שורה אחר שורה
        </Typography>
        <Typography variant="h3" className="page-h3">
          לימוד אנגלית באמצעות מוזיקה
        </Typography>
        {/* todo disappear the headers when search  */}
      </div>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={HandleSubmit}
      >
        <SearchBar></SearchBar>
      </Box>
      
      <div id="lyrics">

      </div>
      <div className="gcse-search"></div>
    </div >
  );

};

export default HomePage;