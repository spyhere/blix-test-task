import React from 'react'
import { SongT } from "../db-mock/types"

type Props = {
  song: SongT
}

const Player = ({ song }: Props) => {

  return (
    <>
      {song.cover}
      {song.length}
    </>
  )
}

export default Player