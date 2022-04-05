import { styled } from '@mui/material/styles';
import LyricsBody from './LyricsBody';

const StyledLyricsBody = styled(LyricsBody)`
   /* max-width: 90%; */
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  font-size: 20px;
  padding: 10px;
  padding-inline-start: 50px;
  margin-top: 50px;

  @media (max-width: 600px) {
      padding-inline-start: 15px;
  }

  .en-line{
    /* overflow: hidden; // todo remove after grid fixed? */
  }

  .en-line p{
    margin: unset;
    display: inline-block;
  }

  .lyrics-line{
    padding: 6px 0px;
    max-width: 98%;
  }

  .single-lyric, .single-trans{
     
          display: inline;
          min-width:unset;
          padding: 0px 5px;
          text-transform: none;
          font-size: 14px;
  }

  .single-lyric{
    cursor: pointer;
          font-size: 25px;
  }

`;

export default StyledLyricsBody;