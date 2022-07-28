import React, { useState } from 'react'
import { library } from "../db-mock/songs"
import { Albums } from "../enums/Albums"
import { SongT } from "../db-mock/types"
import Album from "./Album"
import Song from "./Song"
import { Player } from "./index"

const albums: Albums[] = (() => {
  const keys: Albums[] = []
  for (const it in library) {
    keys.push(it as Albums)
  }
  return keys
})()

const MusicPlayer = () => {
  const [album, setAlbum] = useState<Albums | null>(null)
  const [song, setSong] = useState<SongT | null>(null)

  const handleAlbumClick = (album: Albums) => {
    setAlbum(album)
    setSong(null)
  }

  const handleSongClick = (song: SongT) => {
    setSong(song)
  }

  return (
    <div className="music-player">
      <div className="albums">
        {albums.map(it => <Album key={it} album={it} handleChoose={handleAlbumClick} meta={library[it].meta}/>)}
      </div>


      {album && (
        <div className="songs">
          {
            library[album].data.map((it, index) =>
            <Song key={it.album + it.name} handleChoose={handleSongClick} meta={it} order={index}/>)
          }
        </div>
      )}

      {song && (
        <div className="player">
          <Player song={song}/>
        </div>
      )}
    </div>
  )
}

export default MusicPlayer