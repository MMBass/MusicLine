import { useState, useEffect, useContext, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';
import HeadTags from '@components/HeadTags/HeadTags';

import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Footer } from '@components/Footer/StyledFooter';
import { default as Drawer } from '@components/Drawer/StyledDrawer';
import { default as Dialog } from '@components/Dialog/StyledDialog';
import { default as Modal } from '@components/Modal/StyledModal';
import { default as HiddenGetLyricsForm } from '@components/HiddenGetLyricsForm/StyledHiddenGetLyricsForm';
import { LinearProgress, CircularProgress, Snackbar, Alert, AlertTitle } from '@mui/material';

import { default as HomePage } from '@pages/HomePage/StyledHomePage';
import { default as NoMatchPage } from '@pages/NoMatchPage/StyledNoMatchPage';


function App({ className }) {
  const drawerContext = useContext(DrawerContext);
  const loadersContext = useContext(LoadersContext);
  const bannersContext = useContext(BannersContext);

  const appElement = useRef(null);

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  function init() {

    loadScript();
  }

  const loadScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cse.google.com/cse.js?cx=a85c2374ffc8b8898";
    script.defer = true;
    document.body.appendChild(script);
    // 0d8465f607b0b1227 // MusixMatch2 id
    // <script defer src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898"></script>
    // <script defer src="/src/services/google-search-a85c2374ffc8b8898.js"></script>
    // ./assets/google-search-a85c2374ffc8b8898.js
  };

  useEffect(() => {
    init();

  }, []);

  const handleCloseSnackbar = (name) => {
    bannersContext.closeBanner(name);
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className={className}>
      {/* <ThemeProvider theme={darkTheme}> */}
        <CacheProvider value={cacheRtl}>
          <Router>
            <HeadTags></HeadTags>
            <Header className="header"></Header>
            {(bannersContext.main.open) &&
              <Alert severity="warning" className='main-alert'>
                <AlertTitle>{bannersContext.main.title}</AlertTitle>
                {bannersContext.main.message}
              </Alert>
            }
            {(bannersContext.error?.open) &&
              <Alert severity="error" className='error-alert' onClose={() => { bannersContext.closeBanner('error') }}>
                <AlertTitle>{bannersContext.error?.title}</AlertTitle>
                {bannersContext.error?.message}
              </Alert>
            }
            <Layout>
              <Routes>
                <Route path={"/"} element={<HomePage className={'page'} />} />
                <Route path="*" element={<NoMatchPage className={'page'} />} />
              </Routes>
            </Layout>

            {/*dynamic global elements*/}
            {(drawerContext.open && drawerContext.child) &&
              <Drawer className="drawer"></Drawer>
            }
            {(loadersContext.main.open) &&
              <LinearProgress color={loadersContext.main.color || "primary"} />
            }
            {(loadersContext.circular.open) &&
              <CircularProgress color={loadersContext.main.color || "primary"} />
              // use in specific component, or remove
            }
            {(bannersContext.snackbar.open) &&
              <Snackbar open={bannersContext.snackbar.open} autoHideDuration={6000} onClose={() => { }}>
                <Alert onClose={() => { handleCloseSnackbar('snackbar') }} severity={bannersContext.snackbar.severity} sx={{ width: '100%' }}>
                  {bannersContext.snackbar.message}
                </Alert>
              </Snackbar>
            }
            {/* <Dialog></Dialog> */}
            {/* <Modal> */}
            {/* Modal must have a children */}
            {/* </Modal> */}
            {/*end dynamic global elements*/}

            <Footer></Footer>
          </Router>
        </CacheProvider>
        <HiddenGetLyricsForm></HiddenGetLyricsForm>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;