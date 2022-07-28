import React from 'react'
import { SongT } from "../db-mock/types"

type Props = {
  handleChoose: (song: SongT) => void
  meta: SongT
  order: number
}

const Song = ({ handleChoose, meta, order }: Props) => {
  return (
    <>
      <div className="song" onClick={() => handleChoose(meta)}>
        <span className="song__order">{order + 1}</span>
        <span className="song__name">{meta.name}</span>
        <span className="song__length">{meta.length}</span>
      </div>
    </>
  )
}

export default Song