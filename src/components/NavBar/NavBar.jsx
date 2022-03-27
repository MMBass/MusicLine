import { NavLink } from "react-router-dom";

import {Box, Button} from '@mui/material';

function NavBar({className}) {
  
  const pages = [{ name: 'היסטוריה', url: '/history' }];

  return (
    <Box className={className} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <NavLink to={page.url} key={page.name}>
        <Button
          sx={{ my: 2 }}
        >
          {page.name}
        </Button>
      </NavLink>
    ))}
  </Box>
  );
}

export default NavBar;
