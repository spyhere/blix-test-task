import React from 'react'
import { SongT } from "../db-mock/types"

type Props = {
  song: SongT
}

const Player = ({ song }: Props) => {

  const handlePlay = () => {
    alert("Now playing " + song.name)
  }

  return (
    <>
      <div id="length" />
      <div id="controls">
        <div id="play" onClick={handlePlay}/>
      </div>
      <div id="track_details">
        {song.album} - {song.name}
      </div>
    </>
  )
}

export default Player