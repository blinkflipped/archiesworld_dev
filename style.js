(function (blink) {
  'use strict';

  var OxfordArchiesworldDevStyle = function () {
    blink.theme.styles.basic.apply(this, arguments);
  };

  OxfordArchiesworldDevStyle.prototype = {
    parent: blink.theme.styles.basic.prototype,
    bodyClassName: 'content_type_clase_archiesworld',
    ckEditorStyles: {
      name: 'oxford-archies-world',
      styles: [
        { name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
        { name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title2'} },
        { name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title3'} },

        { name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis' }},
        { name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},

        { name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
        { name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },

        { name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
        { name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
        { name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } }
      ]
    },

    init: function (scope) {
      var that = scope || this;
      this.parent.init.call(that);
      this.fetchData();
      console.log("test");
    },
    removeFinalSlide: function () {
      if(!checkModoCorreccion() && !checkModoRevision()){
        (typeof this.Slider !== 'undefined' && this.Slider.removeLastItem) && this.Slider.removeLastItem();
      }
    },
    showBookIndexInClass: function () {
      return true;
    },
    onCourseDataLoaded: function(data) {
      oawApp.config.bookcover = oawApp.getCover(data);
      var isBookCover = idclase.toString() === oawApp.config.bookcover.id;
      console.log("Test 2");
      if (isBookCover) {
        //this.loadUserData();
        $('html').addClass('oaw-isBookCover');
        var updateHash = false;
        oawApp.loadSplash(data, updateHash);
      } else {
        $('html').removeClass('oaw-isBookCover');
      }

    },

    fetchData: function() {
      blink.getCourse(idcurso).done((function(data) {
        this.onCourseDataLoaded(data);
      }).bind(this));
    },


    /*loadUserData: function() {
      var urlSeguimiento = '/include/javascript/seguimientoCurso.js.php?idcurso=' + idcurso;
      loadScript(urlSeguimiento, true, (function(data) {
        window.actividades = actividades;
      }).bind(this));
    },*/
  };


  OxfordArchiesworldDevStyle.prototype = _.extend({}, new blink.theme.styles.basic(), OxfordArchiesworldDevStyle.prototype);

  blink.theme.styles['oxford-archiesworld-dev'] = OxfordArchiesworldDevStyle;



})( blink );



// ████░██▄░▄██░████░████░████▄░██▄░██░░▄███▄░░██░░
// ██▄░░░▀███▀░░░██░░██▄░░██░██░███▄██░██▀░▀██░██░░
// ██▀░░░▄███▄░░░██░░██▀░░████▀░██▀███░███████░██░░
// ████░██▀░▀██░░██░░████░██░██░██░░██░██░░░██░████

//----------------------------------//
//                                  //
//  Vendors                         //
//                                  //
//----------------------------------//

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),h.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?f(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function d(){var e=n.body;return e||(e=l(w?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var i,s,a,f,u="modernizr",p=l("div"),c=d();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=l("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!s}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),m("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,o,i){function f(){p&&(delete P.style,delete P.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=v(e,o);if(!r(u,"undefined"))return u}for(var p,c,d,m,y,g=["modernizr","tspan","samp"];!P.style&&g.length;)p=!0,P.modElem=l(g.shift()),P.style=P.modElem.style;for(d=e.length,c=0;d>c;c++)if(m=e[c],y=P.style[m],a(m,"-")&&(m=s(m)),P.style[m]!==t){if(i||r(o,"undefined"))return f(),"pfx"==n?m:!0;try{P.style[m]=o}catch(h){}if(P.style[m]!=y)return f(),"pfx"==n?m:!0}return f(),!1}function g(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?y(a,n,o,i):(a=(e+" "+j.join(s+" ")+s).split(" "),u(a,n,t))}var h=[],C=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",b=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};S.atRule=E;var j=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=j;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};Modernizr._q.unshift(function(){delete P.style}),S.testAllProps=g;var N=S.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=s(e)),n?g(e,n,t):g(e,"pfx"))};Modernizr.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),o(),i(h),delete S.addTest,delete S.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);


//----------------------------------//
//                                  //
//  Config                          //
//                                  //
//----------------------------------//

var oawApp = window.oawApp || {};
oawApp.config = {};
oawApp.config.isDEV = (ENTORNO === 'DEV');
oawApp.config.coverName = 'Portada';
oawApp.config.auxUnitName = 'Portada';
oawApp.config.bookcover = '';
oawApp.config.isStudent = false;
oawApp.config.tagProjectIndex = 'project';
oawApp.config.tagProjectName = 'Name_Project_';
oawApp.config.tagProjectColor = 'Color_Project_';
oawApp.config.tagTopicName = 'Name_Topic_';
oawApp.config.tagTopicColor = 'Color_Topic_';
oawApp.config.tagTemplate = 'Template_';

oawApp.config.bodyClasses = ['oaw-body-splash', 'oaw-body-home', 'oaw-body-project', 'oaw-body-lesson'];

oawApp.config.tree = {
  0 : {
    'id' : 'splash',
    'hash' : 'splash',
    'class' : oawApp.config.bodyClasses[0]
  },
  1 : {
    'id' : 'home',
    'hash' : 'home',
    'class' : oawApp.config.bodyClasses[1]
  },
  2 : {
    'id' : 'project',
    'hash' : 'project_',
    'class' : oawApp.config.bodyClasses[2],
    //'suffix' : ['_studentarea', '_teacherarea']
  }
}

oawApp.bookData = '';
oawApp.bookDataOAW = {};

oawApp.text = {
  enter : 'Enter'
}

//----------------------------------//
//                                  //
//  Utils                           //
//                                  //
//----------------------------------//


// Object fit support
oawApp.objectFitSupport = function() {

  if ( ! Modernizr.objectfit ) {
    $('.oaw-unit-content-background').each(function () {
      var $container = $(this),
          imgUrl = $container.find('img').prop('src');
      if (imgUrl && !$container.hasClass('compat-object-fit')) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('compat-object-fit');
      }
    });
  }
}


// DEV Console
oawApp.console = function(logValue) {
  if (oawApp.config.isDEV) {
    console.log(logValue);
  }
}


// Remove unused class
oawApp.removeUnusedClass = function(currentClass) {

  var possibleClasses = oawApp.config.bodyClasses.slice(0),
      index = possibleClasses.indexOf(currentClass);

  possibleClasses.splice(index, 1);

  var $body = $('body');
  $.each(possibleClasses, function(i, v){
    $body.removeClass(v);
  });

}


// Get Auxiliary Unit oawApp.config.auxUnitName
oawApp.getAuxUnit = function(data) {
  var auxUnit =  0;
  $.each(data.units, function(i, unit) {
    if (unit.title === oawApp.config.auxUnitName) {
      auxUnit = i;
    }
  });
  return auxUnit;
}


// Get General background
oawApp.getCover = function(data) {
  var cover =  data.units[0].subunits[0];
  $.each(data.units, function(i, unit) {
    $.each(unit.subunits, function(ind, subunit) {
      if (subunit.title === oawApp.config.coverName) {
        cover = data.units[i].subunits[ind];
      }
    });
  });
  return cover;
}


oawApp.openActivity = function(url,subunitID) {

  if (blink.isApp) {
    blink.rest.openUrl('fullscreen', url);
  } else {
    blink.goToActivity(idcurso,subunitID);
  }

}

oawApp.startsWith = function(string1,string2) {

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(string2, position) {
      position = position || 0;
      return string1.indexOf(searchString, position) === position;
    }
  } else {
    return string1.startsWith(string2)
  }

}

//----------------------------------//
//                                  //
//  Hash navigation                 //
//                                  //
//----------------------------------//

// Get Parameter By Hash
oawApp.getParameterByHash = function(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[#&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get ID by hash
oawApp.getIDByHash = function(hash) {
  var unitID = hash.replace(oawApp.config.tree[1].hash, '');
  /*$.each(oawApp.config.tree[1].suffix, function(i, suffix){
    unitID = unitID.replace(suffix, '');
  });*/

  return unitID;
}


// Hash distributor
var hashDistributorTimeout;
oawApp.hashDistributor = function(currentHash,data,updateHash) {

  clearTimeout(hashDistributorTimeout);

  var timeToWait = 500;
  if (currentHash === oawApp.config.tree[0].hash) { //Splash
    hashDistributorTimeout = setTimeout(function() {oawApp.loadSplash(data,updateHash)}, timeToWait);
  } else if (currentHash.startsWith(oawApp.config.tree[1].hash)) { // Home
    hashDistributorTimeout = setTimeout(function() {oawApp.loadHomepage(data,updateHash)}, timeToWait);
  } else if (currentHash.startsWith(oawApp.config.tree[2].hash)) { // Unit and ID

    // This works different because we need an ID to load the Unit
    var oawunit = oawApp.getIDByHash(currentHash),
        unitExists = (oawApp.config.unitsIDs.indexOf(oawunit) >= 0),
        activeAreaTeacher = currentHash.includes(oawApp.config.tree[2].suffix[1]);

    if (oawunit !== '' && oawunit !== null && unitExists) {
      var currentUnit = oawunit;

      hashDistributorTimeout = setTimeout(function() {oawApp.loadUnit(data,currentUnit,activeAreaTeacher,updateHash)}, timeToWait);

    } else {

      oawApp.console("Not Unit ID given, redirecting to Units");
      var hash = oawApp.config.tree[0].hash;
      oawApp.updateHashWithListener(hash);
    }

  } else { // Incorrect hash

    oawApp.console("Incorrect hash, redirecting to Home");

    if (currentHash !== '') {
      var hash = '';
      oawApp.updateHashWithListener(hash);
      var updateHash = true;
    } else {
      var updateHash = false;
      $(oawApp.config.buttonGoHome).addClass('disabled');
    }
    hashDistributorTimeout = setTimeout(function() {oawApp.loadHomepage(data,updateHash)}, timeToWait);

  }

}

oawApp.loadByHash = function(currentHash,data) {

  oawApp.console('Load by hash');

  var currentHash = currentHash.replace('#',''),
      updateHash = false;

  oawApp.hashDistributor(currentHash, data, updateHash);
}

oawApp.onChangeHash = function() {

  oawApp.console('Hash changed');

  var currentHash = window.location.hash.replace('#',''),
      data = oawApp.bookData,
      updateHash = false;

  $(oawApp.config.buttonGoHome).removeClass('disabled');

  oawApp.hashDistributor(currentHash, data, updateHash);

}


oawApp.updateHashWithListener = function(hash) {

  //oawApp.onChangeHashListener();
  window.location.hash = hash;

  oawApp.onChangeHash();
  //oawApp.removeOnChangeHashListener();

}



//----------------------------------//
//                                  //
//  Templates                       //
//                                  //
//----------------------------------//


// Splash
oawApp.loadSplash = function(data,updateHash) {

  oawApp.console('Loading Splash');

  var isLoaded = $('#oaw-splash').length;

  var currentIndex = 0;
  var currentPage = oawApp.config.tree[currentIndex].id,
      bodyClass = oawApp.config.tree[currentIndex].class,
      hash = oawApp.config.tree[currentIndex].hash,
      currentHash = window.location.hash;
      currentHash = currentHash.replace('#','');

  if (!isLoaded) {
    oawApp.config.isStudent = blink.user.esAlumno();
    oawApp.bookData = data;

    var backgroundImageSrc = oawApp.config.bookcover.image,
        backgroundImage = (backgroundImageSrc !== '' && typeof backgroundImageSrc !== 'undefined') ? 'background-image: url('+backgroundImageSrc+');' : '';

    var sectionSplashHTML = '<div id="oaw-splash" style="'+backgroundImage+'"><div class="oaw-inner"><button class="oaw-button oaw-button_1 oaw-js--loadHomepage"><span>'+oawApp.text.enter+'</span></button></div></div>';

    $('body').prepend(sectionSplashHTML);

    var userBodyClass = (oawApp.config.isStudent) ? 'oaw-body oaw-body-user-student' : 'oaw-body oaw-body-user-not-student';

    $('body').imagesLoaded({background: 'div, a, span, button'}, function(){
      $('html').addClass('htmlReady');
      $('body').addClass(userBodyClass);
      $('html, body').animate({ scrollTop: 0 }, 1);
      if (currentHash !== '' && currentHash !== hash) {
        oawApp.loadByHash(currentHash,data);
      } else {
        $('body').addClass(bodyClass);
        oawApp.removeUnusedClass(bodyClass);
        if (updateHash) {
          oawApp.updateHashWithListener(hash);
        }
      }

    });

  } else {
    // Home already loaded
    if (currentHash !== '' && currentHash !== hash) {
      oawApp.loadByHash(currentHash,data);
    } else {
      $('body').addClass(bodyClass);
      oawApp.removeUnusedClass(bodyClass);
      if (updateHash) {
        oawApp.updateHashWithListener(hash);
      }
    }
    $('html, body').animate({ scrollTop: 0 }, 1);

  }

  // Object Fit support
  oawApp.objectFitSupport();


}

// Homepage
oawApp.loadHomepage = function(data,updateHash) {

  oawApp.console('Loading Homepage');
  oawApp.unitAlreayLoaded = false;

  var currentIndex = 1;
  var currentPage = oawApp.config.tree[currentIndex].id,
      bodyClass = oawApp.config.tree[currentIndex].class,
      hash = oawApp.config.tree[currentIndex].hash,
      currentHash = window.location.hash;
      currentHash = currentHash.replace('#','');

  var bookTitle = data.title,
      bookDescription = data.description;


  var isLoaded = $('.oaw-page_home').length;
  //$('.navbar .libro-left .title').text(bookTitle);

  if (!isLoaded) {

    oawApp.config.isStudent = blink.user.esAlumno();
    oawApp.bookData = data;

    $.each(data.units, function(i, unit){
      var isAux = (i === oawApp.getAuxUnit(data));
      if (!isAux) {

        var unitID = unit.id,
            unitTags = unit.tags,
            unitTagsArray = (typeof unitTags !== 'undefined') ? unitTags.split(" ") : [];

        if (unitTagsArray.length) {
          var projectColor, projectNameTextWeb, topicColor, topicNameTextWeb, unitTemplate;

          $.each(unitTagsArray, function(index, value) {

            if (oawApp.startsWith(value,oawApp.config.tagProjectColor)) {
              projectColor = value.replace(oawApp.config.tagProjectColor, '');
            } else if (oawApp.startsWith(value,oawApp.config.tagProjectName)) {
              projectNameTextWeb = value;
            } else if (oawApp.startsWith(value,oawApp.config.tagTopicName)) {
              topicNameTextWeb = value;
            } else if (oawApp.startsWith(value,oawApp.config.tagTopicColor)) {
              topicColor = value.replace(oawApp.config.tagTopicColor, '');
            } else if (oawApp.startsWith(value,oawApp.config.tagTemplate)) {
              unitTemplate = value.replace(oawApp.config.tagTemplate, '');
            }
          });

          var dataOAW = oawApp.bookDataOAW;
          var projectExists = false;
          var currentProject = 0;
          $.each(dataOAW, function(ind, val) {
            var projectTextweb = val['project_textweb'];
            if (projectTextweb === projectNameTextWeb) {
              currentProject = ind;
              projectExists = true;
              return false;
            }
          });

          if (!projectExists) {
            oawApp.console("Project to add");
            var lastKey = (Object.keys(oawApp.bookDataOAW).length > 0 ) ? Object.keys(oawApp.bookDataOAW).length : 0;
            oawApp.bookDataOAW[lastKey] = {
              'project_textweb' : projectNameTextWeb,
              'project_color' : projectColor,
              'project_title' : '',
              'project_image': '',
              'topics' : {}
            };
          } else {
            //oawApp.console("Add color and textweb to Project");
            //oawApp.bookDataOAW[currentProject].project_textweb = projectNameTextWeb;
            //oawApp.bookDataOAW[currentProject].project_color = projectColor;
          }

          // Topic Exists?

          var topicExists = false;
          var topics = dataOAW[currentProject].topics;
          var currentTopic = 0;

          $.each(topics, function(ind, val) {
            var topicTextweb = topics[ind].topic_textweb;
            if (topicTextweb === topicNameTextWeb) {
              topicExists = true;
              currentTopic = ind;
              return false;
            }
          });

          if (!topicExists) {
            oawApp.console("Topic to add");
            var lastKey = (Object.keys(topics).length > 0 ) ? Object.keys(topics).length : 0;
            topics[lastKey] = {
              'topic_textweb' : topicNameTextWeb,
              'topic_color' : topicColor,
              'topic_units' : {
                unitID : {
                  'unit_template': unitTemplate
                }
              }
            };
          } else {
            oawApp.console("Add Unit to topic");
            topics[currentTopic].topic_units[unitID] = {'unit_template': unitTemplate};
          }

        }

      }
    });

    $.each(data.units, function(i, unit){
      var isAux = (i === oawApp.getAuxUnit(data));
      if (isAux) {

        $.each(unit.resources, function(ind, resource){

          var resourceTags = resource.tags,
              resourceTagsArray = (typeof resourceTags !== 'undefined') ? resourceTags.split(" ") : [];

          if (resourceTagsArray.length) {
            var projectIndex, projectTitle;

            $.each(resourceTagsArray, function(index, value) {
              if (oawApp.startsWith(value,oawApp.config.tagProjectIndex)) {
                var projectNumber = value.replace(oawApp.config.tagProjectIndex, '');
                projectIndex = projectNumber - 1;
              }
            });

            if (typeof projectIndex !== 'undefined' && projectIndex >= 0) {
              var dataOAW = oawApp.bookDataOAW;
              var projectExists = false;
              $.each(dataOAW, function(ind, val) {
                console.log(ind);
                if (Number(ind) === projectIndex) {
                  projectExists = true;
                  return false;
                }
              });
              console.log(projectExists);

              var projectTitle = resource.title,
                  projectImage = resource.fileurl;

              if (projectExists) {
                oawApp.bookDataOAW[projectIndex].project_title = projectTitle;
                oawApp.bookDataOAW[projectIndex].project_image = projectImage;
              } else {
                oawApp.bookDataOAW[projectIndex] = {
                  'project_textweb' : '',
                  'project_color' : '',
                  'project_title' : projectTitle,
                  'project_image': projectImage,
                  'topics' : {}
                };
              }
            }
          }

        });

      }

    });


    //HTML STRUCTURE
    var gridTopMenu = document.createDocumentFragment();

    $.each(oawApp.bookDataOAW, function(i, project) {
      console.log(project);

      var projectImage = project.project_image,
          projectColor = project.project_color,
          projectTitle = project.project_title;

      var projectItem = document.createElement('div'),
          gridItem = i + 1;
      projectItem.className = 'oaw-grid-item oaw-grid-item_'+gridItem;
      projectItem.innerHTML = '<article class="oaw-card oaw-card_project" style="background-color: #'+projectColor+'"><a href="javascript:void(0)" class="oaw-card-inner "> <div class="oaw-card-image"> <div class="oaw-card-image-inner"> <img src="'+projectImage+'" alt="'+projectTitle+'"> </div> </div> </a></article>';
      gridTopMenu.appendChild(projectItem);
    });


    var homeStructure = '<section class="oaw-page oaw-page_home"> <header class="oaw-page-header"> <div class="oaw-inner"> <div class="oaw-page-header-image"> <div class="oaw-page-header-image-inner"> <img src=""> </div> </div> </div> </header> <div class="oaw-page-content"> <div class="oaw-inner"> <div class="oaw-grid oaw-grid_1">  </div> </div> </div> <footer class="oaw-page-footer"> <div class="oaw-inner"> <div class="oaw-menu oaw-menu_1"> <nav class="oaw-menu-nav"> <ul> <li> <a href="#" class="oaw-button oaw-button_2 oaw-button_a"> <span>Icon guide</span> </a> </li> <li> <a href="#" class="oaw-button oaw-button_2 oaw-button_a"> <span>Help / How to</span> </a> </li> <li> <a href="#" class="oaw-button oaw-button_2 oaw-button_a"> <span>Teacher Notes</span> </a> </li> </ul> </nav> </div> </div> </footer> </section>';

    $('body').prepend(homeStructure);

    var $gridWrapper = $('.oaw-page_home .oaw-grid_1');
    $gridWrapper[0].appendChild(gridTopMenu);

    // Add real content

    //<article class="oaw-card oaw-card_project" style="background-color: #94CEF2"> <a href="javascript:void(0)" class="oaw-card-inner"> <div class="oaw-card-image"> <div class="oaw-card-image-inner"> <img src="img/menutop/Festivals.png" alt="Festivals"> </div> </div> </a> </article>
    //<article class="oaw-card oaw-card_project" style="background-color: #0EB0E7"> <a href="javascript:void(0)" class="oaw-card-inner"> <div class="oaw-card-image"> <div class="oaw-card-image-inner"> <img src="img/menutop/Seasons.png" alt="Seasons"> </div> </div> </a> </article>



/*    var unitTitle = unit.title,
        unitDescription = unit.description,
        unitNumberBase = unit.number - 1,
        unitNumber = ('0' + unitNumberBase).slice(-2),
        unitImage = unit.image;
    var unitListItem = document.createElement('div');
    unitListItem.className = 'oaw-units-slider-item';
    unitListItem.innerHTML = '<article class="oaw-unit"><a href="javascript:void(0)" class="oaw-js-load-unit oaw-unit-inner" data-unit="'+unitNumberBase+'"><div class="oaw-unit-number oaw-unit-number"><div class="oaw-unit-number-inner"><span>'+unitNumber+'</span></div></div><header class="oaw-unit-header"> <h2 class="oaw-title-4">'+unitTitle+'</h2> </header> <div class="oaw-unit-content"> <div class="oaw-unit-content-description">'+unitDescription+'</div> <div class="oaw-unit-content-background"> <img src="'+unitImage+'"></div></div></a></article>';
    unitList.appendChild(unitListItem);*/


/*
    // Create Units slider
    var $unitsWrapper = $('.oaw-units-slider');

    if ($unitsWrapper.hasClass('slick-initialized')) {
      $unitsWrapper.slick('unslick');
    }
    $unitsWrapper.empty();
    $unitsWrapper[0].appendChild(unitList);

    $unitsWrapper.slick(oawApp.config.carouselOpt);


    var $unitsWrapperContent = $unitsWrapper.closest('.oaw-section-content');
    $unitsWrapperContent.addClass('slider--toleft');
    $unitsWrapper.on('afterChange', function(event, slick, currentSlide) {
      if (currentSlide > 0) {
        $unitsWrapperContent.removeClass('slider--toleft');
      } else {
        $unitsWrapperContent.addClass('slider--toleft');
      }

      if (slick.currentLeft >= 0) {
        $unitsWrapperContent.addClass('slider--toright');
      } else {
        $unitsWrapperContent.removeClass('slider--toright');
      }

    });
*/

    $('body').imagesLoaded({background: 'div, a, span, button'}, function(){
      $('html, body').animate({ scrollTop: 0 }, 1);
      if (currentHash !== '' && currentHash !== hash) {
        oawApp.loadByHash(currentHash,data);
      } else {
        $('body').addClass(bodyClass);
        oawApp.removeUnusedClass(bodyClass);
        if (updateHash) {
          oawApp.updateHashWithListener(hash);
        }
      }

    });

  } else {

    // Home already loaded
    if (currentHash !== '' && currentHash !== hash) {
      oawApp.loadByHash(currentHash,data);
    } else {
      $('body').addClass(bodyClass);
      oawApp.removeUnusedClass(bodyClass);
      if (updateHash) {
        oawApp.updateHashWithListener(hash);
      }
    }
    $('html, body').animate({ scrollTop: 0 }, 1);

  }

  // Object Fit support
  oawApp.objectFitSupport();

}


//----------------------------------//
//                                  //
//  Document Ready                  //
//                                  //
//----------------------------------//


$(document).ready(function() {

  console.log("Test DOC Ready");

  $('body').on('click', '.oaw-js--loadHomepage', function(e) {
    e.preventDefault();
    var hash = oawApp.config.tree[1].hash;
    oawApp.updateHashWithListener(hash);
  });

});
