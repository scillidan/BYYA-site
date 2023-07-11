# BYYA-site

[![hugo deploy](https://github.com/scillidan/BYYA-site/actions/workflows/hugo.yml/badge.svg)](https://github.com/scillidan/BYYA-site/actions/workflows/hugo.yml)
[![lychee](https://github.com/scillidan/BYYA-site/actions/workflows/links.yml/badge.svg)](https://github.com/scillidan/BYYA-site/actions/workflows/links.yml)

[![GitHub Pages](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub+Pages&color=222222&logo=GitHub+Pages&logoColor=FFFFFF&label=)](https://scillidan.github.io/BYYA-site)
[![Vercel](https://img.shields.io/static/v1?style=for-the-badge&message=Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=)](https://byya-markt.vercel.app)
[![Netlify](https://img.shields.io/static/v1?style=for-the-badge&message=Netlify&color=222222&logo=Netlify&logoColor=00C7B7&label=)](https://byya-markt.netlify.app)

## build with

- [hugo](https://gohugo.io/)
- [hugo-book](https://github.com/alex-shpak/hugo-book)
- [hugo-shortcode-gallery](https://github.com/mfg92/hugo-shortcode-gallery)
- [hugo-picture-optimization](https://github.com/b-m-f/hugo-picture-optimization)

## note (tbd)

fork https://github.com/alex-shpak/hugo-book, then:

```cmd
hugo new site hugo-book
cd hugo-book
git init
git submodule add https://github.com/username/hugo-book themes/hugo-book
hugo server --minify --theme hugo-book
```

## todo

- [ ] deploy to vps
- [ ] reduce the volume of .git