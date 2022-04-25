import { styled } from '@mui/material/styles';
import LyricsBody from './LyricsBody';

const StyledLyricsBody = styled(LyricsBody)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* text-align: center; */
  /* padding: 10px; */
  /* max-width: 90%; */
  font-size: 20px;
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

  .he-line small{
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
  }

  .single-lyric{
    cursor: pointer;
  }

  .he-line{
      /* font-size: 14px; */
      font-size: ${props => (props.fontSize.md - 5) + 'px'};
  }

  .en-line{
      /* font-size: 20px; */
      direction: rtl;
      text-align: left;
      font-size: ${props => props.fontSize.md + 'px'};
  }

  @media (max-width: 600px) {
      .he-line{
        /* font-size: 14px; */
        font-size: ${props => (props.fontSize.md - 5) + 'px'};
      }

      .en-line{
        /* font-size: 20px; */
        font-size: ${props => props.fontSize.md + 'px'};
      }
  }

`;

export default StyledLyricsBody;