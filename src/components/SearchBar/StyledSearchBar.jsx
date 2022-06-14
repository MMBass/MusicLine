import { styled } from '@mui/material/styles';
import SearchBar from './SearchBar';

const StyledSearchBar = styled(SearchBar)`
  padding-inline-start: 10px;

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: white !important;
   border-color: white !important;
  }

`;

export default StyledSearchBar;