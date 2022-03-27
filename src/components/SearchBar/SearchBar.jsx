import { TextField } from "@mui/material";

function SearchBar({className}) {

  function HandleSearch(event){
    let gsc_input = document.querySelector('#gsc-i-id1');
    if(gsc_input){
      gsc_input.value = event.target.value;
      gsc_input.dispatchEvent(new Event('keyup'))
      // let gsc_input = document.querySelector('#gsc-i-id1');
    }else{
      console.error("no gsc loaded");
    }
  }

  return (
    <div id="" className={className}>
          <TextField id="outlined-search" label="חפש שיר" type="search" className="main-input" onChange={HandleSearch} autoFocus={true} />
          {/* TODO search icon */}
          <div className="gcse-search"></div>
    </div>
  );
}

export default SearchBar;
