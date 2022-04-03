import musixmatchAxios from '../apis/musixmatchUrls';

export function callLyrics(currSong){
     fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=d98598e033ac1e0ad0a3335990d12579&q_track=${encodeURI(currSong.songtName)}&q_artist=${encodeURI(currSong.artistName)}`)
      .then(response => response.json())
      .then(data => {
        if(data?.message?.body?.lyrics?.lyrics_body){
          let gsc_clear = document.querySelector('.gsst_a');
          if(gsc_clear){
            gsc_clear.dispatchEvent(new Event('click'));
          }
          
            let ly = data.message.body.lyrics.lyrics_body;
            ly = ly.substring( 0, ly.indexOf( "..." ) );
            document.querySelector('#no_lyrics').style.display = "none";
            document.querySelector('#lyrics').innerHTML = `
              <div>
                ${ly.replace(/(?:\r\n|\r|\n)/g, '<br>')}
              </div>
            `
        }
      }
      );
}