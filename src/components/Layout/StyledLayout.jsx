import { styled } from '@mui/material/styles';
import Layout from './Layout';

const StyledLayout = styled(Layout)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${props => props.theme.palette.primary.main};
`;

export default StyledLayout;