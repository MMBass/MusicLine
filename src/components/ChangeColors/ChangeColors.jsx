import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import IconButton from '@mui/material/IconButton';


function ChangeColors({className}) {
  return (
    <div id="" className={className}>
      <IconButton>
        <ContrastRoundedIcon className='mui-rounded-icon'></ContrastRoundedIcon>
      </IconButton>
    </div>
  );
}

export default ChangeColors;
