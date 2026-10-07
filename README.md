# Zhuageping Web

The official Zhuageping website built with Next.js.

## Development

```powershell
npm install
npm run dev
```

Open `http://localhost:3000/zh` for the Chinese page or `http://localhost:3000/en` for the English page.

## Production

Set `NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL` to the direct Cloudflare R2 installer URL. The default production URL is:

```text
https://xz.aeback.com/windows/v0.1.27/zhuageping-Setup-0.1.27-x64.exe
```

```powershell
npm run build
npm run start
```

The R2 layout and deployment notes are in [`docs/CLOUDFLARE-R2.md`](docs/CLOUDFLARE-R2.md).
