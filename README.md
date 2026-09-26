# MirrorPulse

MirrorPulse is the public home for small, thoughtful infrastructure projects.

The site is a deliberately independent React application. Generated project documentation lives
under `content/<project>/` and is copied into the matching URL during the Pages build. The main site
does not import generated documentation source, so either side can evolve and roll back on its own.

## Local development

```powershell
npm install
npm run dev
```

Build the static site with `npm run build`. Before the generated CfSharp documentation is synced,
the repository contains a small placeholder under `content/cfsharp/`.

## Deployment

`.github/workflows/pages.yml` builds the React site, copies the generated documentation bundle to
`dist/cfsharp/`, verifies the bundle, and deploys the complete static output to GitHub Pages.
