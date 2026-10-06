# Cloudflare R2 download setup

The website is ready to use a direct Cloudflare R2 installer URL through `NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL`.

The bucket is `zhuageping-releases`, with the production custom domain:

```text
https://zhuageping.aeback.com
```

The managed `r2.dev` URL remains available for testing, but production downloads use the custom domain above.

## Recommended bucket layout

```text
windows/v0.1.22/zhuageping-Setup-0.1.22-x64.exe
windows/v0.1.22/latest.yml
windows/v0.1.22/zhuageping-Setup-0.1.22-x64.exe.blockmap
```

Use a production custom domain such as:

```text
https://download.zhuageping.com/windows/v0.1.22/zhuageping-Setup-0.1.22-x64.exe
```

Cloudflare recommends a custom domain for production R2 traffic. The managed `r2.dev` URL is intended for development and is rate-limited. A custom domain also enables Cloudflare caching and security controls.

## Cloudflare steps

1. Create an R2 bucket named `zhuageping-releases`.
2. Upload the installer, `latest.yml`, and blockmap under the versioned object keys above.
3. In the bucket settings, connect the custom domain `download.zhuageping.com`.
4. Enable public read access for the download domain and keep the bucket root listing disabled.
5. Verify the installer URL returns `200` directly and does not redirect.
6. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL` to the direct R2 URL.
7. Rebuild the website with `npm run build` before deployment.

The website buttons use the configured R2 URL. If the environment variable is not set, they temporarily fall back to the GitHub Releases page.
