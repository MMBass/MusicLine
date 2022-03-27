import { styled } from '@mui/material/styles';

import App from './App';

const StyledApp = styled(App)`
  height: 100vh;
  color: ${props => props.theme.palette.secondary.main};

  .page-h2{
    padding: 30px 0px 0px 0px;
    font-size: 80px; 
    font-weight: 400;
    color: ${props => props.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 55px;
    }
  }

  .page-h3{
    margin: 15px 0px 0px  0px;
    font-size: 40px; // 29
    font-weight: 500;
    color: ${props => props.theme.palette.secondary.main};
    @media (max-width: 600px) {
      font-size: 29px;
    }
  }

  a {
    text-decoration: none;
  }

  .MuiLinearProgress-root{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .main-alert{
    color: #fff;
    background-color: #2D4260;
    border-radius: unset;
  }
`;

export default StyledApp;