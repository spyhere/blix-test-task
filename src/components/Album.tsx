import React from 'react'
import { AlbumT } from "../db-mock/types"
import { Albums } from "../enums/Albums"

type Props = {
  album: Albums
  handleChoose: (album: Albums) => void
  meta: AlbumT["meta"]
}

const Album = ({ album, handleChoose, meta }: Props) => {

  return (
    <>
      <div className="album" onClick={() => handleChoose(album)}>
        {album}
      </div>
    </>
  )
}

export default Album