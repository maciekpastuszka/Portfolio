define("ajax",function(){return function(e){function t(e){try{return e.status>=200&&e.status<300||304==e.status||navigator.userAgent.indexOf("Safari")>=0&&"undefined"==typeof e.status}catch(t){return!1}}e={type:e.type||"POST",url:e.url||"",data:e.data,onComplete:e.onComplete||function(){},onError:e.onError||function(){},onSuccess:e.onSuccess||function(){},dataType:e.dataType||"text"};var n=new XMLHttpRequest;n.open(e.type,e.url,!0),n.onreadystatechange=function(){if(4==n.readyState){if(t(n)){var o="xml"==e.dataType?n.responseXML:n.responseText;e.onSuccess(o)}else e.onError();e.onComplete(),n=null}},n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(e.data)}}),require(["ajax"]),require(["menu"]),require(["paralax"]),require(["smoothscroll"]),require(["portfolio"]),require(["vr"]),define("menu",function(){var e=document.querySelector(".main-nav"),t=e.querySelector(".main-nav__toggle"),n=e.querySelector(".main-nav__colapse"),o=e.querySelector(".main-nav__circle"),i=function(){var t=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;t>=20?e.classList.add("is-move"):e.classList.remove("is-move")},a=function(){t.classList.toggle("is-open"),n.classList.toggle("is-open"),o.classList.toggle("is-open")},r=function(){var e=!1;window.addEventListener("scroll",function(){e=!0}),setInterval(function(){e&&(e=!1,i())},250)},l=function(){r(),t.addEventListener("click",a)},c=function(){l()};return c(),{init:c}}),define("paralax",function(){var e=window.innerWidth,t=e/2,n=document.getElementById("header"),o=[{id:"layer0",maxrange:-3},{id:"layer1",maxrange:5},{id:"layer2",maxrange:7},{id:"layer3",maxrange:10},{id:"layer4",maxrange:12},{id:"layer5",maxrange:16}],a=function(n){var a=n.pageX;for(i=0;i<o.length;i++){var r=o[i],l=0,c=document.getElementById(r.id);objectRange=e*(r.maxrange/100),l=(a-t)/t*-objectRange-e/10,c.style.transform="translateX("+l+"px)"}},r=function(){var e=!1,t=null;n.addEventListener("mousemove",function(n){t=n,e=!0}),setInterval(function(){e&&(e=!1,a(t))},200)},l=function(){r()},c=function(){l()};return c(),{init:c}}),define("portfolio",["ajax"],function(e){function t(t){e({type:"GET",url:"realizations.php?realization="+t,dataType:"text",onError:function(e){console.warn(e)},onSuccess:function(e){var o=JSON.parse(e),a="";for(i=0;i<o.technologies.length;i++)a+="<li>"+o.technologies[i]+"</li>";n.id="is-"+t,r.innerHTML=o.name,l.innerHTML='<a href="http://'+o.url+'" target="_blank">'+o.url+"</a>",c.src="/img/projects/"+t+"/1.jpg",s.src="/img/projects/"+t+"/2.jpg",u.innerHTML=a}})}var n=document.querySelector(".realization"),o=document.getElementById("realization__close"),a=document.querySelectorAll(".icon--more"),r=document.getElementById("realization_title"),l=document.getElementById("realization_url"),c=document.getElementById("realization_desktop"),s=document.getElementById("realization_phone"),u=(document.getElementById("realization_description"),document.getElementById("realization_technologies")),d=document.querySelector(".realization__switcher"),m=document.querySelector(".screen");d.addEventListener("click",function(){d.classList.toggle("is-phone"),m.classList.toggle("is-phone")});var p=document.getElementById("portfolio__more"),f=document.querySelectorAll(".portfolio__element");for(p.addEventListener("click",function(){for(i=0;i<f.length;i++)f[i].classList.remove("is-display-none");this.style.display="none"}),o.addEventListener("click",function(){n.classList.remove("is-visible"),n.id=""}),i=0;i<a.length;i++)a[i].addEventListener("click",function(){t(this.id),n.classList.add("is-visible")})}),define("smoothscroll",function(){var e=document.querySelectorAll('a[href*="#"]');for(i=0;i<e.length;i++)e[i].addEventListener("click",function(e){function t(){o+=.3,actual_position<target_position?(actual_position+=10+o,document.documentElement.scrollTop=actual_position,document.body.scrollTop=actual_position,actual_position>target_position&&clearInterval(a)):(actual_position-=10+o,document.documentElement.scrollTop=actual_position,document.body.scrollTop=actual_position,actual_position<target_position&&clearInterval(a))}e.preventDefault();var n=this.hash.substr(1),o=0,i=document.getElementById(n),a=setInterval(t,1);actual_position=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,target_position=i.offsetTop-100})}),define("vr",["ajax"],function(e){function t(){e({type:"GET",url:"aframe/portfolio.html",dataType:"text",onError:function(e){console.warn(e)},onSuccess:function(e){var t=document.getElementById("vr__container"),n=document.querySelector(".header__container");n.classList.add("is-vr"),t.classList.add("is-loading"),t.innerHTML='<div class="loader"><span></span><span></span><span></span></div>',setTimeout(function(){t.innerHTML=e},1e3),setTimeout(function(){t.classList.remove("is-loading")},2e3)}})}var n=document.getElementById("vrversion");n.addEventListener("click",t)});