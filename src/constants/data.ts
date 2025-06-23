
import CaptchaDesctop from '../assets/2Captcha/2Captcha_desk.svg'
import CaptchaMobile from '../assets/2Captcha/2Captcha_mobile.svg'
import type { ProductType } from '../types/product_types'
import PuppDesctop from '../assets/pupp/pupp_desk.svg'
import PuppMobile from '../assets/pupp/pupp_mobile.svg'
import JSDesctop from '../assets/js_logo/js_desk.svg'
import JSMobile from '../assets/js_logo/js_desk.svg'




export const DATA_FOR_PRODUCT_CARD: ProductType[] = [
  {
    title: '2Captcha solver',
    rating: 4.6,
    reviews: 456,
    isOfficial: true,
    anySite: 'This software is designed to work with any site',
    description: `Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.`,
    price: 'free',
    icon: {
      desctop: CaptchaDesctop,
      mobile: CaptchaMobile
    }
  },
  {
    title: 'Puppeteer plugin to solve \n reCAPTCHAs \n automatically',
    rating: 4.6,
    reviews: 456,
    isOfficial: false,
    anySite: 'This software is designed to work with any site',
    description: `Solves reCAPTCHAs automatically, using a single line of code.`,
    price: '$67',
    icon: {
      desctop: PuppDesctop,
      mobile: PuppMobile
    }
  },
  {
    title: '2captcha-javascript',
    rating: 4.6,
    reviews: 456,
    isOfficial: false,
    anySite: 'This software is designed to work with any site',
    description: `JavaScript npm package for easy integration with the API of 2captcha captcha solving service to bypass recaptcha, funcaptcha, geetest and solve any other captchas.`,
    price: 'free',
    icon: {
      desctop: JSDesctop,
      mobile: JSMobile
    }
  },
  {
    title: 'Puppeteer plugin to solve \n reCAPTCHAs \n automatically',
    rating: 4.6,
    reviews: 456,
    isOfficial: false,
    anySite: 'This software is designed to work with any site',
    description: `Solves reCAPTCHAs automatically, using a single line of code.`,
    price: '$67',
    icon: {
      desctop: PuppDesctop,
      mobile: PuppMobile
    }
  },
  {
    title: 'Puppeteer plugin to solve \n reCAPTCHAs \n automatically',
    rating: 4.6,
    reviews: 456,
    isOfficial: false,
    anySite: 'This software is designed to work with any site',
    description: `Solves reCAPTCHAs automatically, using a single line of code.`,
    price: '$67',
    icon: {
      desctop: PuppDesctop,
      mobile: PuppMobile
    }
  }

]

