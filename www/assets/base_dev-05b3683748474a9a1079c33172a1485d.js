window.Modernizr=function(e,t,n){function o(e){w.cssText=e}function r(e,t){return o(E.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var o in e){var r=e[o];if(!a(r,"-")&&w[r]!==n)return"pfx"==t?r:!0}return!1}function u(e,t,o){for(var r in e){var a=t[e[r]];if(a!==n)return o===!1?e[r]:i(a,"function")?a.bind(o||t):a}return!1}function s(e,t,n){var o=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+C.join(o+" ")+o).split(" ");return i(t,"string")||i(t,"undefined")?c(r,t):(r=(e+" "+S.join(o+" ")+o).split(" "),u(r,t,n))}function l(){m.input=function(n){for(var o=0,r=n.length;r>o;o++)M[n[o]]=!!(n[o]in y);return M.list&&(M.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var o,r,i,a=0,c=e.length;c>a;a++)y.setAttribute("type",r=e[a]),o="text"!==y.type,o&&(y.value=x,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&y.style.WebkitAppearance!==n?(b.appendChild(y),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,b.removeChild(y)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?y.checkValidity&&y.checkValidity()===!1:y.value!=x)),j[e[a]]=!!o;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.3",m={},h=!0,b=t.documentElement,v="modernizr",g=t.createElement(v),w=g.style,y=t.createElement("input"),x=":)",k={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",C=T.split(" "),S=T.toLowerCase().split(" "),P={svg:"http://www.w3.org/2000/svg"},N={},j={},M={},$=[],D=$.slice,L=function(e,n,o,r){var i,a,c,u,s=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(o,10))for(;o--;)c=t.createElement("div"),c.id=r?r[o]:v+(o+1),s.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),s.id=v,(l?s:d).innerHTML+=i,d.appendChild(s),l||(d.style.background="",d.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),a=n(s,e),l?s.parentNode.removeChild(s):(d.parentNode.removeChild(d),b.style.overflow=u),!!a},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var o;return L("@media "+t+" { #"+v+" { position: absolute; } }",function(t){o="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),o},F=function(){function e(e,r){r=r||t.createElement(o[e]||"div"),e="on"+e;var a=e in r;return a||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),a=i(r[e],"function"),i(r[e],"undefined")||(r[e]=n),r.removeAttribute(e))),r=null,a}var o={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),A={}.hasOwnProperty;f=i(A,"undefined")||i(A.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),o=function(){if(this instanceof o){var r=function(){};r.prototype=t.prototype;var i=new r,a=t.apply(i,n.concat(D.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(D.call(arguments)))};return o}),N.flexbox=function(){return s("flexWrap")},N.flexboxlegacy=function(){return s("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},N.canvastext=function(){return!(!m.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},N.webgl=function(){return!!e.WebGLRenderingContext},N.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",E.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},N.geolocation=function(){return"geolocation"in navigator},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!s("indexedDB",e)},N.hashchange=function(){return F("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!(!e.history||!history.pushState)},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},N.rgba=function(){return o("background-color:rgba(150,255,150,.5)"),a(w.backgroundColor,"rgba")},N.hsla=function(){return o("background-color:hsla(120,40%,100%,.5)"),a(w.backgroundColor,"rgba")||a(w.backgroundColor,"hsla")},N.multiplebgs=function(){return o("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(w.background)},N.backgroundsize=function(){return s("backgroundSize")},N.borderimage=function(){return s("borderImage")},N.borderradius=function(){return s("borderRadius")},N.boxshadow=function(){return s("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return r("opacity:.55"),/^0.55$/.test(w.opacity)},N.cssanimations=function(){return s("animationName")},N.csscolumns=function(){return s("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return o((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),a(w.backgroundImage,"gradient")},N.cssreflections=function(){return s("boxReflect")},N.csstransforms=function(){return!!s("transform")},N.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in b.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},N.csstransitions=function(){return s("transition")},N.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,o){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(o.split(" ")[0])}),e},N.generatedcontent=function(){var e;return L(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(o){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n},N.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(P.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==P.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(k.call(t.createElementNS(P.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(k.call(t.createElementNS(P.svg,"clipPath")))};for(var W in N)f(N,W)&&(d=W.toLowerCase(),m[d]=N[W](),$.push((m[d]?"":"no-")+d));return m.input||l(),m.addTest=function(e,t){if("object"==typeof e)for(var o in e)f(e,o)&&m.addTest(o,e[o]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(b.className+=" "+(t?"":"no-")+e),m[e]=t}return m},o(""),g=y=null,function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=v[e[h]];return t||(t={},b++,e[h]=b,v[b]=t),t}function i(e,n,o){if(n||(n=t),l)return n.createElement(e);o||(o=r(n));var i;return i=o.cache[e]?o.cache[e].cloneNode():m.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:o.frag.appendChild(i)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||r(e);for(var i=n.frag.cloneNode(),a=0,c=o(),u=c.length;u>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function u(e){e||(e=t);var o=r(e);return!g.shivCSS||s||o.hasCSS||(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,o),e}var s,l,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",b=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){s=!0,l=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:i,createDocumentFragment:a};e.html5=g,u(t)}(this,t),m._version=p,m._prefixes=E,m._domPrefixes=S,m._cssomPrefixes=C,m.mq=z,m.hasEvent=F,m.testProp=function(e){return c([e])},m.testAllProps=s,m.testStyles=L,m.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},b.className=b.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),m}(this,this.document),function(){var e,t,n,o,r,i,a,c,u,s;t=window.device,e={},window.device=e,o=window.document.documentElement,s=window.navigator.userAgent.toLowerCase(),e.ios=function(){return e.iphone()||e.ipod()||e.ipad()},e.iphone=function(){return!e.windows()&&r("iphone")},e.ipod=function(){return r("ipod")},e.ipad=function(){return r("ipad")},e.android=function(){return!e.windows()&&r("android")},e.androidPhone=function(){return e.android()&&r("mobile")},e.androidTablet=function(){return e.android()&&!r("mobile")},e.blackberry=function(){return r("blackberry")||r("bb10")||r("rim")},e.blackberryPhone=function(){return e.blackberry()&&!r("tablet")},e.blackberryTablet=function(){return e.blackberry()&&r("tablet")},e.windows=function(){return r("windows")},e.windowsPhone=function(){return e.windows()&&r("phone")},e.windowsTablet=function(){return e.windows()&&r("touch")&&!e.windowsPhone()},e.fxos=function(){return(r("(mobile;")||r("(tablet;"))&&r("; rv:")},e.fxosPhone=function(){return e.fxos()&&r("mobile")},e.fxosTablet=function(){return e.fxos()&&r("tablet")},e.meego=function(){return r("meego")},e.cordova=function(){return window.cordova&&"file:"===location.protocol},e.nodeWebkit=function(){return"object"==typeof window.process},e.mobile=function(){return e.androidPhone()||e.iphone()||e.ipod()||e.windowsPhone()||e.blackberryPhone()||e.fxosPhone()||e.meego()},e.tablet=function(){return e.ipad()||e.androidTablet()||e.blackberryTablet()||e.windowsTablet()||e.fxosTablet()},e.desktop=function(){return!e.tablet()&&!e.mobile()},e.television=function(){var e;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],e=0;e<television.length;){if(r(television[e]))return!0;e++}return!1},e.portrait=function(){return window.innerHeight/window.innerWidth>1},e.landscape=function(){return window.innerHeight/window.innerWidth<1},e.noConflict=function(){return window.device=t,this},r=function(e){return-1!==s.indexOf(e)},a=function(e){var t;return t=new RegExp(e,"i"),o.className.match(t)},n=function(e){var t=null;a(e)||(t=o.className.replace(/^\s+|\s+$/g,""),o.className=t+" "+e)},u=function(e){a(e)&&(o.className=o.className.replace(" "+e,""))},e.ios()?e.ipad()?n("ios ipad tablet"):e.iphone()?n("ios iphone mobile"):e.ipod()&&n("ios ipod mobile"):e.android()?n(e.androidTablet()?"android tablet":"android mobile"):e.blackberry()?n(e.blackberryTablet()?"blackberry tablet":"blackberry mobile"):e.windows()?n(e.windowsTablet()?"windows tablet":e.windowsPhone()?"windows mobile":"desktop"):e.fxos()?n(e.fxosTablet()?"fxos tablet":"fxos mobile"):e.meego()?n("meego mobile"):e.nodeWebkit()?n("node-webkit"):e.television()?n("television"):e.desktop()&&n("desktop"),e.cordova()&&n("cordova"),i=function(){e.landscape()?(u("portrait"),n("landscape")):(u("landscape"),n("portrait"))},c=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(c,i,!1):window.attachEvent?window.attachEvent(c,i):window[c]=i,i(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.device=e}.call(this),function(){}.call(this);