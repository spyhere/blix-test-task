import { Albums } from "../enums/Albums"
import { AlbumT } from "./types"

export type Library = Record<Albums, AlbumT>

export const library: Library = {
  [Albums.SHOWBIZ]: {
    meta: {
      year: 1999,
      formats: ["CD", "LPS"]
    },
    data: [
      { album: Albums.SHOWBIZ, name: "Sunburn", length: "3:54", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.SHOWBIZ, name: "Muscle Museum", length: "3:54", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.SHOWBIZ, name: "Falling Down", length: "3:54", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
    ]
  },
  [Albums.ORIGIN]: {
    meta: {
      year: 2001,
      formats: ["CD", "LPS"]
    },
    data: [
      { album: Albums.ORIGIN, name: "New born", length: "6:03", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.ORIGIN, name: "Bliss", length: "4:09", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.ORIGIN, name: "Space Dementia", length: "6:11", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
    ]
  },
  [Albums.Absolution]: {
    meta: {
      year: 2003,
      formats: ["CD", "LPS"]
    },
    data: [
      { album: Albums.Absolution, name: "Apocalypse Please", length: "4:22", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.Absolution, name: "Time is Running out", length: "4:22", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.Absolution, name: "Sing for Absolution", length: "4:22", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
    ]
  },
  [Albums.BLACK_HOLES]: {
    meta: {
      year: 2006,
      formats: ["CD", "LPS"]
    },
    data: [
      { album: Albums.BLACK_HOLES, name: "Take a Bow", length: "4:35", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.BLACK_HOLES, name: "Starlight", length: "4:35", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.BLACK_HOLES, name: "Supermassive Black Hole", length: "4:35", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
    ]
  },
  [Albums.RESISTANCE]: {
    meta: {
      year: 2009,
      formats: ["CD", "LPS"]
    },
    data: [
      { album: Albums.RESISTANCE, name: "Uprising", length: "5:03", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.RESISTANCE, name: "Resistance", length: "5:03", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
      { album: Albums.RESISTANCE, name: "Undisclosed Desires", length: "5:03", cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg"},
    ]
  },
}

