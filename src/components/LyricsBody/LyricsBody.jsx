import { useContext } from "react";

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function LyricsBody({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);

  return (
    <>
      {currLyricsContext.lines &&
        <div id="lyrics_body" className={className}>
          {currLyricsContext.lines.map((line,i)=>{
            return (<p key={line[0]+i.toString()}>{line}</p>);
          })}
        </div>}
    </>


  );
}

export default LyricsBody;
