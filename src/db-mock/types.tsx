import { Albums } from "../enums/Albums"

export type AlbumMetaT = {
  year: number
  formats: Array<string>
}
export type SongT = {
  album: Albums
  name: string
  length: string
  cover: string
}
export type AlbumT = {
  meta: AlbumMetaT,
  data: Array<SongT>
}