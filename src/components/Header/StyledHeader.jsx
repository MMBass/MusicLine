import { styled } from '@mui/material/styles';
import { theme } from '@/theme';
import Header from './Header';

const StyledHeader = styled(Header)`
  background-color: ${props => props.theme.palette.primary.dark};
  color: ${props => props.theme.palette.secondary.main};

  button{
    color: ${props => props.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-inline-start: 0;
  }

  .error-alert{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    border-radius: unset;

    button{
      color: rgb(95, 33, 32);
    }
  }
`;

export default StyledHeader;