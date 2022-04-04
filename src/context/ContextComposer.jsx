import React from 'react';

import DrawerContextProvider from './DrawerContext';
import BannersContextProvider from './BannersContext';
import LoadersContextProvider from './LoadersContext';
import CurrLyricsContext from './CurrLyricsContext';

const components = [DrawerContextProvider, BannersContextProvider, LoadersContextProvider, CurrLyricsContext];

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