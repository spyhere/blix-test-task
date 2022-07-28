import React from 'react'
import { SongT } from "../db-mock/types"

type Props = {
  handleChoose: (song: SongT) => void
  meta: SongT
  order: number
  selected: SongT | null
}

const Song = ({ handleChoose, meta, order, selected }: Props) => {

  const selectedStyle = (selected && selected.name === meta.name) ? " song--selected" : ""
  return (
    <>
      <div className={"song" + selectedStyle} onClick={() => handleChoose(meta)}>
        <span className="song__order">{order + 1}</span>
        <span className="song__name">{meta.name}</span>
        <span className="song__length">{meta.length}</span>
      </div>
    </>
  )
}

export default Song