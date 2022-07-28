import React from 'react'
import { AlbumT } from "../db-mock/types"
import { Albums } from "../enums/Albums"

type Props = {
  album: Albums
  handleChoose: (album: Albums) => void
  meta: AlbumT["meta"]
  selected: Albums | null
}

const Album = ({ album, handleChoose, meta, selected }: Props) => {

  const selectedStyle = selected === album ? " album--selected" : ""
  return (
    <>
      <div title={String(meta.year)} className={"album" + selectedStyle} onClick={() => handleChoose(album)}>
        {album}
      </div>
    </>
  )
}

export default Album