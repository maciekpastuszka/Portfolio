import MainNav from './components/main-nav';
import SmoothScroll from './components/smoothscroll';
import Layers from './components/layers';
import Vr from './components/vr';

const mainNAv = new MainNav(document.querySelector('.main-nav'));
mainNAv.init();

const smoothScroll = new SmoothScroll();
smoothScroll.init();

const layers = new Layers(document.querySelector('.hero__layers'));
layers.init();

const vr = new Vr(document.querySelector('.hero__vr-container'));
vr.init();
