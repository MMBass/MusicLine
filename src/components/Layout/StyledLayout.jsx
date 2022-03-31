import { styled } from '@mui/material/styles';
import Layout from './Layout';

const StyledLayout = styled(Layout)`
  height: 100vh;
  min-height: 700px;
  background-color: ${props => props.theme.palette.primary.light};
`;

export default StyledLayout;