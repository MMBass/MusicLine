import { styled } from '@mui/material/styles';

import App from './App';

const StyledApp = styled(App)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${props => props.theme.palette.secondary.main};

  a{
    color: #fff;
    &hover{
      color: #fff;
    }
  }

  .page-h2{
    padding: 30px 0px 0px 0px;
    font-size: 80px; 
    font-weight: 400;
    color: ${props => props.theme.palette.secondary.main};
    @media (max-width: 600px) {
      margin-top: 0px;
      font-size: 46px;
    }
  }

  .page-h3{
    margin: 40px 0px 0px  0px;
    font-size: 38px; // 29
    font-weight: 500;
    color: ${props => props.theme.palette.secondary.main};

    small{
      letter-spacing: 1.4px;
    }

    @media (max-width: 600px) {
      margin: 15px 0px 0px  0px;
      font-size: 22px;

      small{
      letter-spacing: 0.7px;
    }
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
    z-index: 3000;
  }

  .main-alert{
    color: #fff;
    background-color: #2D4260;
    border-radius: unset;

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
      padding: 20px;
  }
`;

export default StyledApp;