import MainNav from './components/main-nav';
import SmoothScroll from './components/smoothscroll';
import Layers from './components/layers';
import Vr from './components/vr';

const mainNAv = new MainNav(document.querySelector('.js-main-nav'));
mainNAv.init();

const smoothScroll = new SmoothScroll();
smoothScroll.init();

const layers = new Layers(document.querySelector('.js-layers'));
layers.init();

const vr = new Vr(document.querySelector('.js-vr'));
vr.init();