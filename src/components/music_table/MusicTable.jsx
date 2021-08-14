import React from 'react';
import'./MusicTable.css'

//display data (song title, album, artist, genre??, and release date)
const MusicTable = (props) => {
    return (
        <div>
            <h1>Welcome Music Lover</h1>

            <ul>
                {props.songs.map((song, index) => <li key={index}>{song.title}</li>)}
            </ul>
            {/* {Build table that will display song data} */}
        </div>
    )
}

export default MusicTable;