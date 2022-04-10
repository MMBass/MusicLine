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

} from '@mui/material';

import { default as SidePagesList } from '../SidePagesList/StyledSidePagesList';
import { default as NavBar } from '@components/NavBar/StyledNavBar';

import { DrawerContext } from '@context/DrawerContext';
import { CurrLyricsContext } from '@context/CurrLyricsContext';

import { NavLink } from 'react-router-dom';

const Header = ({ className, ...props }) => {
  const drawerContext = useContext(DrawerContext);
  const currLyricsContext = useContext(CurrLyricsContext)

  const handleOpenNavMenu = () => {
    drawerContext.openDrawer(true, 'left', 'temporary', SidePagesList);
  };

  return (
    <AppBar position="static" className={className}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <NavLink to={'/'} >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: 'flex' }}
            >
              מיוזיק ליין
            </Typography>
          </NavLink>

          {currLyricsContext.lines[0] && <ChangeSize></ChangeSize>} 

          <NavBar className="nav-bar"></NavBar>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;