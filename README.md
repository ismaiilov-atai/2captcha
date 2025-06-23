# 2Captcha

Displaying a product card with support for both **mobile** and **desktop** layouts, designed according to the provided **Figma specifications**.

A custom **hook** is used to handle responsive behavior based on screen width (I just used to sync `tailwind` small breakpoint to be able to get icon according to users device size):

- **Mobile version**: when the viewport width is `< 800px`
  
- **Desktop version**: when the viewport width is `≥ 800px`

## CLSX & tailwind-merge

Benefited from combining this 2 beatifyl libs, which makes easy to conditinaly apply the stylesThis component benefits from the combination of two great libraries — one for class name manipulation and one for responsive design — making it easy to apply styles conditionally based on screen size or state.

## Run Projects

get into the projects root folder

```sh
bun i

bun run dev
```