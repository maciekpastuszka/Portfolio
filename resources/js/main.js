import Navigation from './components/nav';
import SmoothScroll from './components/smoothscroll';


let nav = new Navigation(document.querySelector('.js-main-nav'));
nav.init();

window.smoothscroll = new SmoothScroll();
// smoothscroll.scrollTo('about');