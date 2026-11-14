# How to Add Background Music

1. Copy your music file into this folder.
2. Rename it `birthday-song.mp3` (or any name you prefer).
3. Open `data/birthday-content.ts` and update the music path:

```ts
music: {
  src: "/music/your-song-name.mp3",
  title: "Song Title",
  artist: "Artist Name",
},
```

## Supported audio formats
- `.mp3` (recommended)
- `.ogg`
- `.wav`

> Note: Audio will only play after the user clicks the play button — browsers block autoplay until a user interacts with the page.
