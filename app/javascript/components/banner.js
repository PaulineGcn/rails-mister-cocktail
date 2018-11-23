import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Unique taste from the Roaring Twenties"],
    typeSpeed: 50,
    loop: true
  });
};

export { loadDynamicBannerText };
