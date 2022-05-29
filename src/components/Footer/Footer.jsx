import { NavLink } from "react-router-dom";

import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Link
} from '@mui/material';

const pages = [{ name: 'היסטוריה', url: '/history' }];
const social = [{ name: 'פייסבוק', url: 'https://facebook.com' }];
const contact = [{ name: 'example@gmail.com', url: 'mailto:example@gmail.com' }];

function Footer({ className }) {
  return (
    <div id="FOOTER" className={className}>
      <Grid container rowSpacing={6} columnSpacing={2}>
        <Grid item xs={12} sm={4}>
          <List>
            <ListSubheader
              variant="h5"
              component="h5"
            >
              לדיווח על תקלות:
            </ListSubheader>
            <ListItem>
                  <ListItemText primary={'musicline@mail.com'} />
                </ListItem>
          </List>

        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
