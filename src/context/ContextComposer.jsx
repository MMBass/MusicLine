import React from 'react';

import DrawerContextProvider from './DrawerContext';
import BannersContextProvider from './BannersContext';
import LoadersContextProvider from './LoadersContext';
import SettingsContextProvider from './SettingsContext';
import CurrLyricsContextProvider from './CurrLyricsContext';

const components = [SettingsContextProvider, DrawerContextProvider, BannersContextProvider, LoadersContextProvider, CurrLyricsContextProvider];

export default function ContextComposer(props) {
  return (
    <>
      {
        components.reduceRight((acc, Comp) => {
          return <Comp>{acc}</Comp>;
        }, props.children)
      }
    </>
  );
};