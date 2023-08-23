import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {CustomSelect} from './modules/select/custom-select';
import {Burger} from './modules/menu/menu.js';
import {initSlider} from './modules/slider/init-slider.js';
import {initUpload} from './modules/upload/init-upload.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    const menu = new Burger();
    menu.init();
    initSlider();
    initUpload();
    const select = new CustomSelect();
    select.init();
  });
});
