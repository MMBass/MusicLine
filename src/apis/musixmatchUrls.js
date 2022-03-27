import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search', // todo remove the cors-anywhere while on the server 
    // timeout: 25000,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    params: {
        'apikey': 'd98598e033ac1e0ad0a3335990d12579', // todo move to node server + config var
        'page_size': '10',
        'page': '1',
        'format': 'json',
        // 'q': // add the query from user input 
    }
});

// hard to implement, sha1 secure. macro results from the website, works but can be illegale
// results in: data.message.body.macro_result_list.track_list
// https://cors-anywhere.herokuapp.com/https://www.musixmatch.com/ws/1.1/macro.search?page_size=4&track_fields_set=community_track_search&artist_fields_set=community_artist_search&part=artist_image&format=json&cache_key=c0b6cb985845f9415b5674546f25ba34eb09de88&app_id=community-app-v1.0&guid=4851901a-4671-4bcd-81db-6c9de7cef3de&signature=hPgPhM0P1YV7CH0DAciswxMlgGU%3D&signature_protocol=sha1&q=


// official api .search - brings bad results
// results in: data.message.body.track_list
// https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=d98598e033ac1e0ad0a3335990d12579&format=json&page=1&page_size=10&q=Second%20Chanse%20


// fetch('https://cors-anywhere.herokuapp.com/https://www.musixmatch.com/ws/1.1/macro.search?q=shinedown&page_size=4&track_fields_set=community_track_search&artist_fields_set=community_artist_search&part=artist_image&format=json&cache_key=c0b6cb985845f9415b5674546f25ba34eb09de88&app_id=community-app-v1.0&guid=4851901a-4671-4bcd-81db-6c9de7cef3de&signature=hPgPhM0P1YV7CH0DAciswxMlgGU%3D&signature_protocol=sha1')
    //   .then(response => response.json())
    //   .then(data => {
    //     data.message.body.macro_result_list.track_list.map((track, i) => {
    //       track = track.track
    //       if (track.has_lyrics) {
    //         console.log(track.artist_name + " - " + track.track_name + " (" + track.album_name + ")")
    //       }
    //     });
    //   }
    //   );

    // fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=d98598e033ac1e0ad0a3335990d12579&format=json&page=1&page_size=10&q=shinedown')
    //   .then(response => response.json())
    //   .then(data => {
    //     data.message.body.track_list.map((track, i) => {
    //       track = track.track
    //       if (track.has_lyrics) {
    //         console.log(track.artist_name + " - " + track.track_name + " (" + track.album_name + ")")
    //       }
    //     });
    //   }
    //   );