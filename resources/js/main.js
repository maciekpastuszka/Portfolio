import MainNav from './components/main-nav';
import SmoothScroll from './components/smoothscroll';

let mainNAv = new MainNav(document.querySelector('.js-main-nav'));
mainNAv.init();

let smoothScroll = new SmoothScroll();
smoothScroll.init();