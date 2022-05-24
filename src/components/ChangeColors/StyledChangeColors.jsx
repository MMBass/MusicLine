import { styled } from '@mui/material/styles';
import ChangeColors from './ChangeColors';

const StyledChangeColors = styled(ChangeColors)`
  .mui-rounded-icon{
    background-color: white;
    color: ${props => '#595959' || props.theme.palette.primary.main};
    border-radius: 12px;
  }
`;

export default StyledChangeColors;