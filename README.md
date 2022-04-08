# spotify2image

## Disclaimer

これはFolkしたバージョンを[オリジナル](https://github.com/iamtakagi/spotify2image)の[作者の承諾](https://github.com/iamtakagi/spotify2image/issues/5)のもと引き継いだバージョンである．

Folk元はMIT Licenseで[ライセンスされている](https://github.com/iamtakagi/spotify2image/tree/bc1409ffea6c1fd5434d7b3778b45d89f2633ec9#license)．

## Usage

- Supported Url
  - https://open.spotify.com/embed/track/xxx
  - https://open.spotify.com/embed/album/xxx
  - https://open.spotify.com/embed/artist/xxx
  - https://open.spotify.com/embed/playlist/xxx

### HTML

```html
<img src="https://spotify2image.vercel.app/image/track/xxx" width="312" height="80">
```

```html
<img src="https://spotify2image.vercel.app/image/album/xxx" width="312" height="80">
```

```html
<img src="https://spotify2image.vercel.app/image/artist/xxx" width="312" height="80">
```

```html
<img src="https://spotify2image.vercel.app/image/playlist/xxx" width="312" height="80">
```

### Markdown

```markdown
[![spotify2image](https://spotify2image.vercel.app/image/track/xxx#.png)](https://open.spotify.com/track/xxx)
```

```markdown
[![spotify2image](https://spotify2image.vercel.app/image/album/xxx#.png)](https://open.spotify.com/album/xxx)
```

```markdown
[![spotify2image](https://spotify2image.vercel.app/image/artist/xxx#.png)](https://open.spotify.com/artist/xxx)
```

```markdown
[![spotify2image](https://spotify2image.vercel.app/image/playlist/xxx#.png)](https://open.spotify.com/playlist/xxx)
```

### Scrapbox

```
[https://spotify2image.vercel.app/image/track/xxx#.png https://open.spotify.com/track/xxx]
```

```
[https://spotify2image.vercel.app/image/album/xxx#.png https://open.spotify.com/album/xxx]
```

```
[https://spotify2image.vercel.app/image/album/xxx#.png https://open.spotify.com/artist/xxx]
```

```
[https://spotify2image.vercel.app/image/album/xxx#.png https://open.spotify.com/playlist/xxx]
```

## LICENSE

sno2wman/spotify2image is provided under the MIT license.
