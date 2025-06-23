# 2Captcha

Displaying a product card with support for both **mobile** and **desktop** layouts, designed according to the provided **Figma specifications**.

A custom **hook** is used to handle responsive behavior based on screen width (I just used to sync `tailwind` small breakpoint to be able to get icon according to users device size):

- **Mobile version**: when the viewport width is `< 800px`
  
- **Desktop version**: when the viewport width is `≥ 800px`
