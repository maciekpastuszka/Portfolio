import MainNav from './components/main-nav';
import SmoothScroll from './components/smoothscroll';
import Layers from './components/layers';

const mainNAv = new MainNav(document.querySelector('.js-main-nav'));
mainNAv.init();

const smoothScroll = new SmoothScroll();
smoothScroll.init();

const layers = new Layers(document.querySelector('.js-layers'));
layers.init();
