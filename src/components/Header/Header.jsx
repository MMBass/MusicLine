import { useContext } from 'react';

import { Menu as MenuIcon } from '@mui/icons-material';

import { default as ChangeSize } from '@components/ChangeSize/StyledChangeSize';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Alert,
  AlertTitle 

} from '@mui/material';

import { default as SidePagesList } from '../SidePagesList/StyledSidePagesList';
import { default as NavBar } from '@components/NavBar/StyledNavBar';
import { default as ChangeColors } from '@components/ChangeColors/StyledChangeColors';

import { DrawerContext } from '@context/DrawerContext';
import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';

import { NavLink } from 'react-router-dom';

const Header = ({ className, ...props }) => {
  const drawerContext = useContext(DrawerContext);
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);

  const handleOpenNavMenu = () => {
    drawerContext.openDrawer(true, 'left', 'temporary', SidePagesList);
  };

  const removeLsLines = function () {
    sessionStorage.removeItem('currLines');
  }

  return (
    <AppBar position="sticky" className={className}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <NavLink to={'/'} onClick={() => { removeLsLines() }}>
            <Typography
              variant="h6"
              noWrap
              component="h1"
              sx={{ mr: 2, display: 'flex' }}
            >
              מיוזיק ליין
            </Typography>
          </NavLink>

          {currLyricsContext.lines[0] && <ChangeSize></ChangeSize>}

          <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexGrow: 1 }}>
            <ChangeColors onClick={handleOpenNavMenu}></ChangeColors>
          </Box>

          {/* <NavBar className="nav-bar"></NavBar> */}

        </Toolbar>
      </Container>
      {(bannersContext.error?.open) &&
        <Alert severity="error" className='error-alert' onClose={() => { bannersContext.closeBanner('error') }}>
          <AlertTitle>{bannersContext.error?.title}</AlertTitle>
          {bannersContext.error?.message}
        </Alert>
      }
    </AppBar>
  );
};

export default Header;