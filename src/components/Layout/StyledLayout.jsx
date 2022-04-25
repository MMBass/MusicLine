import { styled } from '@mui/material/styles';
import Layout from './Layout';

const StyledLayout = styled(Layout)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  padding: 25px;
  background-color: ${props => props.theme.palette.primary.light};
`;

export default StyledLayout;