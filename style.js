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
      if (isBookCover) {
        console.log("Is Book Cover");
        //this.loadUserData();
        $('html').addClass('oaw-isBookCover');
        var updateHash = false;
        oawApp.loadSplash(data, updateHash);
      } else {
        console.log("Not Book Cover");
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

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
(function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
"top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});


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
oawApp.config.tagProjectName = 'name_project_';
oawApp.config.tagProjectNameProtection = '_project_project_';
oawApp.config.tagProjectNameProtection_2 = 'name_project_1_';
oawApp.config.tagProjectColor = 'color_project_';
oawApp.config.tagTopicName = 'name_topic_';
oawApp.config.tagTopicColor = 'color_topic_';
oawApp.config.tagTemplate = 'template_';
oawApp.config.tagBox = 'box'; //Former Box
oawApp.config.tagBoxColor = 'color_box_';
oawApp.config.tagBoxPosition = 'position_';
oawApp.config.tagResourceType = 'icon_';
oawApp.config.tagResourceHeadingType = 'type_';
oawApp.config.tagAuxColor = 'color_project_'; //Former color_
oawApp.config.tagHeadingProject = 'heading_project_';
oawApp.config.tagHeadingProjectName = '_name_project';
oawApp.config.tagHeadingTopic = '_topic_';
oawApp.config.tagHeadingHelloPoster = '_helloposter';
oawApp.config.tagHeadingProjectReview = '_projectreview';
oawApp.config.tagHeadingReviewStory = '_reviewstory';

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
    'class' : oawApp.config.bodyClasses[2]
  },
  3 : {
    'id' : 'lesson',
    'hash' : 'lesson_',
    'class' : oawApp.config.bodyClasses[3]
  }
}

oawApp.bookData = '';
oawApp.bookDataOAW = {};
oawApp.bookDataOAWAux = {
  home_aux : {},
  home_footer_aux : {}
};
oawApp.relationUnitsProjects = {};
oawApp.relationUnitsTopics = {};
oawApp.relationUnitsTemplates = {};

oawApp.text = {
  enter : 'Enter',
  back : 'Back'
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


oawApp.openActivity = function(type,url,subunitID) {
  if (type === 'img') {
    blink.rest.image(url);
  } else if (type === 'audio' || type === 'musica') {
    blink.rest.audio(url);
  } else if (type === 'video') {
    blink.rest.video(url);
  } else {
    if (blink.isApp) {
      blink.rest.openUrl('fullscreen', url);
    } else {
      blink.goToActivity(idcurso,subunitID);
    }
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

// Images size in Units/Lessons

oawApp.unitImageSize = function() {

  $('.oaw-page_lesson .oaw-card-inner').each(function(i,e) {

    var isColumn = ($('.oaw-card-header_titlepos_up').length || $('.oaw-card-header_titlepos_down').length),
        totalHeight = $(e).outerHeight(),
        contentHeight = $(e).find('.oaw-title_image').outerHeight(),
        titleHeight = $(e).find('.oaw-card-content').outerHeight(),
        diffHeight = (isColumn) ? totalHeight - titleHeight - contentHeight : totalHeight - contentHeight;
    $(e).find('.oaw-card-header-image').css('height', diffHeight);
  });

  $('body').addClass('oaw-body-lesson-inview');

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
oawApp.getIDByHash = function(indexTree,hash) {
  var currentID = hash.replace(oawApp.config.tree[indexTree].hash, '');
  return currentID;
}


// Hash distributor
var hashDistributorTimeout;
oawApp.hashDistributor = function(currentHash,data,updateHash) {

  clearTimeout(hashDistributorTimeout);

  var timeToWait = 500;
  if (currentHash === oawApp.config.tree[0].hash) { // Splash
    hashDistributorTimeout = setTimeout(function() {oawApp.loadSplash(data,updateHash)}, timeToWait);
  } else if (currentHash.startsWith(oawApp.config.tree[1].hash)) { // Home
    hashDistributorTimeout = setTimeout(function() {oawApp.loadHomepage(data,updateHash)}, timeToWait);
  } else if (currentHash.startsWith(oawApp.config.tree[2].hash)) { // Project and ID

    // This works different because we need an ID to load the Project
    var oawproject = oawApp.getIDByHash(2,currentHash),
        projectExists = (Object.keys(oawApp.bookDataOAW).length > 0); //TODO REVIEW

    if (oawproject !== '' && oawproject !== null && projectExists) {
      var currentProject = oawproject;

      hashDistributorTimeout = setTimeout(function() {oawApp.loadProject(data,currentProject,updateHash)}, timeToWait);

    } else {

      oawApp.console("Not Unit ID given, redirecting to Home");
      var hash = oawApp.config.tree[1].hash;
      oawApp.updateHashWithListener(hash);
    }
  } else if (currentHash.startsWith(oawApp.config.tree[3].hash)) { // Lesson and Index

    // This works different because we need an ID to load the Project
    var oawlesson = oawApp.getIDByHash(3,currentHash),
        lessonExists = (Object.keys(oawApp.bookData.units).length > 0); //TODO REVIEW

    if (oawlesson !== '' && oawlesson !== null && lessonExists) {
      var currentLesson = oawlesson;

      hashDistributorTimeout = setTimeout(function() {oawApp.loadUnit(data,currentLesson,updateHash)}, timeToWait);

    } else {

      oawApp.console("Not Lesson ID given, redirecting to Home");
      var hash = oawApp.config.tree[1].hash;
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

    $.each(data.units, function(i, unit){
      var isAux = (i === oawApp.getAuxUnit(data));
      if (!isAux) {

        var unitID = unit.id,
            unitNumber = unit.number,
            unitIndex = Number(unit.number) - 1,
            unitTitle = unit.title,
            unitDescription = unit.description,
            unitTags = unit.tags,
            unitTagsArray = (typeof unitTags !== 'undefined') ? unitTags.split(" ") : [];

        if (unitTagsArray.length) {
          var projectColor, projectNameTextWeb, topicColor, topicNameTextWeb, unitTemplate;

          $.each(unitTagsArray, function(index, value) {
            value = value.toLowerCase();
            if (oawApp.startsWith(value,oawApp.config.tagProjectColor)) {
              projectColor = value.replace(oawApp.config.tagProjectColor, '');
            } else if (oawApp.startsWith(value,oawApp.config.tagProjectName) && value.indexOf(oawApp.config.tagProjectNameProtection) === -1) {
              console.log('HERE', value.replace(oawApp.config.tagProjectNameProtection_2,'').length);
              if (value.replace(oawApp.config.tagProjectNameProtection_2,'').length > 0) projectNameTextWeb = value;
            } else if (oawApp.startsWith(value,oawApp.config.tagTopicName)) {
              topicNameTextWeb = value;
            } else if (oawApp.startsWith(value,oawApp.config.tagTopicColor)) {
              topicColor = value.replace(oawApp.config.tagTopicColor, '');
            } else if (oawApp.startsWith(value,oawApp.config.tagTemplate)) {
              unitTemplate = value.replace(oawApp.config.tagTemplate, '');
            }
            if (typeof projectNameTextWeb === 'undefined') projectNameTextWeb = 'no_project';
            if (typeof unitTemplate === 'undefined') unitTemplate = '1';

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
          if (projectNameTextWeb !== 'no_project') {
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
              oawApp.relationUnitsProjects[unitIndex] = lastKey;

            } else {
              oawApp.relationUnitsProjects[unitIndex] = currentProject;
              //oawApp.console("Add color and textweb to Project");
              //oawApp.bookDataOAW[currentProject].project_textweb = projectNameTextWeb;
              //oawApp.bookDataOAW[currentProject].project_color = projectColor;
            }

          }

          // Topics

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
              'topic_units' : {}
            };
            var lastTopicKey = (Object.keys(topics[lastKey].topic_units).length > 0 ) ? Object.keys(topics[lastKey].topic_units).length : 0;
            topics[lastKey].topic_units[lastTopicKey] = {
              'unit_template': unitTemplate,
              'unit_title' : unitTitle,
              'unit_description' : unitDescription,
              'unit_id' : unitID,
              'unit_number': unitNumber
            };
            oawApp.relationUnitsTopics[unitIndex] = lastKey;
          } else {
            oawApp.console("Add Unit to topic");
            var lastTopicKey = (Object.keys(topics[currentTopic].topic_units).length > 0 ) ? Object.keys(topics[currentTopic].topic_units).length : 0;
            topics[currentTopic].topic_units[lastTopicKey] = {
              'unit_template': unitTemplate,
              'unit_title' : unitTitle,
              'unit_id' : unitID,
              'unit_number': unitNumber
            };
            oawApp.relationUnitsTopics[unitIndex] = currentTopic;

          }
          oawApp.relationUnitsTemplates[unitIndex] = unitTemplate;

        }

      }
    });

    $.each(data.units, function(i, unit){
      var isAux = (i === oawApp.getAuxUnit(data));
      if (isAux) {

        $.each(unit.resources, function(ind, resource){
          var isHeading = false,
              isHeadingTopic = false,
              isHeadingProject = false,
              isHeadingHelloPoster = false,
              isHeadingProjectReview = false,
              isHeadingReviewStory = false,
              currentProjectNumber,
              currentTopicNumber;

          var resourceTags = resource.tags,
              resourceTagsArray = (typeof resourceTags !== 'undefined') ? resourceTags.split(" ") : [];

          if (resourceTagsArray.length) {
            var projectIndex, projectTitle, homeAuxColor;

            $.each(resourceTagsArray, function(index, value) {
              value = value.toLowerCase();
              if (oawApp.startsWith(value,oawApp.config.tagProjectIndex)) {
                var projectNumber = value.replace(oawApp.config.tagProjectIndex, '');
                projectIndex = projectNumber - 1;
              } else if (oawApp.startsWith(value,oawApp.config.tagAuxColor)) {
                homeAuxColor = value.replace(oawApp.config.tagAuxColor, '');
              }

              // Get headings
              var string1;
              if (oawApp.startsWith(value,oawApp.config.tagHeadingProject)) {
                isHeading = true;
                string1 = value.replace(oawApp.config.tagHeadingProject, '');
                currentProjectNumber = string1.slice(0,1);
                if (value.indexOf(oawApp.config.tagHeadingProjectName) >= 0) {
                  isHeadingProject = true;
                } else if (value.indexOf(oawApp.config.tagHeadingTopic) >= 0) {
                  isHeadingTopic = true;
                  var string2 = string1.replace(currentProjectNumber+oawApp.config.tagHeadingTopic, '');
                  currentTopicNumber = string2.slice(0,1);
                } else if (value.indexOf(oawApp.config.tagHeadingHelloPoster) >= 0) {
                  isHeadingHelloPoster = true;
                } else if (value.indexOf(oawApp.config.tagHeadingProjectReview) >= 0) {
                  isHeadingProjectReview = true;
                } else if (value.indexOf(oawApp.config.tagHeadingReviewStory) >= 0) {
                  isHeadingReviewStory = true;
                }

              }

            });

            if (typeof projectIndex !== 'undefined' && projectIndex >= 0 && !isHeading) {
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
            } else {
              if (!isHeading) {
                // Auxiliary items
                var homeAuxTitle = resource.title,
                    homeAuxID = resource.id,
                    homeAuxUrl = resource.url,
                    homeAuxImage = resource.fileurl;
                oawApp.bookDataOAWAux.home_aux[homeAuxID] = {
                  'id' : homeAuxID,
                  'color' : homeAuxColor,
                  'title' : homeAuxTitle,
                  'image': homeAuxImage,
                  'url' : homeAuxUrl
                }
              }
            }


            // Is heading
            if (isHeadingProject) {
              var currentProjectIndex = currentProjectNumber -1;
              oawApp.bookDataOAW[currentProjectIndex].project_title_image = resource.fileurl;
            }

            if (isHeadingTopic) {
              var currentProjectIndex = currentProjectNumber -1;
              var currentTopicIndex = currentTopicNumber -1;
              oawApp.bookDataOAW[currentProjectIndex].topics[currentTopicIndex].topic_title_image = resource.fileurl;
            }

            if (isHeadingHelloPoster) {
              var currentProjectIndex = currentProjectNumber -1;
              oawApp.bookDataOAW[currentProjectIndex].topics[2].topic_title_image = resource.fileurl;
            }
            if (isHeadingProjectReview) {
              var currentProjectIndex = currentProjectNumber -1;
              oawApp.bookDataOAW[currentProjectIndex].topics[3].topic_title_image = resource.fileurl;
            }
            if (isHeadingReviewStory) {
              var currentProjectIndex = currentProjectNumber -1;
              oawApp.bookDataOAW[currentProjectIndex].topics[4].topic_title_image = resource.fileurl;
            }

          }

        });

        $.each(unit.subunits, function(ind, subunit) {
          // Auxiliary items
          var homeFooterAuxTitle = subunit.title,
              homeFooterAuxURL = subunit.url,
              homeFooterAuxID = subunit.id;
          if (homeFooterAuxID !== oawApp.config.bookcover.id) {
            oawApp.bookDataOAWAux.home_footer_aux[homeFooterAuxID] = {
              'id' : homeFooterAuxID,
              'title' : homeFooterAuxTitle,
              'url' : homeFooterAuxURL
            }
          }
        });
      }
    });


    var backgroundImageSrc = oawApp.config.bookcover.image,
        backgroundImage = (backgroundImageSrc !== '' && typeof backgroundImageSrc !== 'undefined') ? 'background-image: url('+backgroundImageSrc+');' : '';

    var sectionSplashHTML = '<div id="oaw-splash" style="'+backgroundImage+'"><div class="oaw-inner"><div class="oaw-button-wrapper"><button class="oaw-button oaw-button_1 oaw-js--loadHomepage"><span>'+oawApp.text.enter+'</span></button></div></div></div>';

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
    // Splash already loaded
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

    //HTML STRUCTURE
    var gridTopMenu = document.createDocumentFragment();
    var gridItem = 0;
    $.each(oawApp.bookDataOAW, function(i, project) {
      console.log(project);

      var projectImage = project.project_image,
          projectColor = project.project_color,
          projectTitle = project.project_title;

      gridItem = Number(i) + 1;
      var projectItem = document.createElement('div'),
          projectAction = (gridItem < 4) ? 'oaw-js--loadProject' : '';
      projectItem.className = 'oaw-grid-item oaw-grid-item_'+gridItem;
      projectItem.innerHTML = '<article class="oaw-card oaw-card_project" style="background-color: #'+projectColor+'"><a href="javascript:void(0)" class="oaw-card-inner '+ projectAction +'" data-project-index="'+i+'"> <div class="oaw-card-image"> <div class="oaw-card-image-inner"> <img src="'+projectImage+'" alt="'+projectTitle+'"> </div> </div> </a></article>';
      gridTopMenu.appendChild(projectItem);
    });

    $.each(oawApp.bookDataOAWAux.home_aux, function(i, auxUnit) {
      gridItem++;
      var auxUnitItem = document.createElement('div'),
          title = auxUnit.title,
          image = auxUnit.image,
          url = auxUnit.url,
          type = auxUnit.type,
          isImg = (type === 'img'),
          backgroundColor = auxUnit.color,
          onclick = auxUnit.onclickTitle,
          auxUnitID = auxUnit.id;
      auxUnitItem.className = 'oaw-grid-item oaw-grid-item_'+gridItem;
      auxUnitItem.innerHTML = '<article class="oaw-card oaw-card_project" style="background-color: #'+backgroundColor+'"><a href="javascript:void(0)" onclick="'+onclick+'" class="oaw-card-inner oaw-js--openActivity" data-id="'+auxUnitID+'" data-url="'+url+'" data-type="'+type+'"> <div class="oaw-card-image"> <div class="oaw-card-image-inner"> <img src="'+image+'" alt="'+title+'"> </div> </div> </a></article>';

      gridTopMenu.appendChild(auxUnitItem);
    });

    var homeFooterAux = '';
    $.each(oawApp.bookDataOAWAux.home_footer_aux, function(i, auxFooterUnit) {
      var title = auxFooterUnit.title,
          url = auxFooterUnit.url,
          onclick = auxFooterUnit.onclickTitle,
          type = auxFooterUnit.type,
          isImg = (type === 'img'),
          id = auxFooterUnit.id;
      homeFooterAux += ' <a href="javascript:void(0)" onclick="'+onclick+'" class="oaw-button oaw-button_2 oaw-button_a oaw-js--openActivity" data-id="'+id+'" data-url="'+url+'" data-type="'+type+'"> <span>'+title+'</span> </a> </li> ';
    });


    var auxUnit = oawApp.getAuxUnit(oawApp.bookData),
        headerImage = oawApp.bookData.units[auxUnit].image;
    var homeStructure = '<section class="oaw-page oaw-page_home"> <header class="oaw-page-header"> <div class="oaw-inner"> <div class="oaw-page-header-image"> <div class="oaw-page-header-image-inner"> <img src="'+headerImage+'"> </div> </div> </div> </header> <div class="oaw-page-content"> <div class="oaw-inner"> <div class="oaw-grid oaw-grid_1">  </div> </div> </div> <footer class="oaw-page-footer"> <div class="oaw-inner"> <div class="oaw-menu oaw-menu_1"> <nav class="oaw-menu-nav"> <ul>'+homeFooterAux+'</ul> </nav> </div> </div> </footer> </section>';

    $('body').prepend(homeStructure);

    var $gridWrapper = $('.oaw-page_home .oaw-grid_1');
    $gridWrapper[0].appendChild(gridTopMenu);


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
    //if (currentHash !== '' && currentHash !== hash) {
    //  oawApp.loadByHash(currentHash,data);
    //} else {
      $('body').addClass(bodyClass);
      oawApp.removeUnusedClass(bodyClass);
      if (updateHash) {
        oawApp.updateHashWithListener(hash);
      }
    //}
    $('html, body').animate({ scrollTop: 0 }, 1);

  }

  // Object Fit support
  oawApp.objectFitSupport();

}

// Load Project
oawApp.loadProject = function(data,currentProject,updateHash) {

  var currentIndex = 2;
  var currentPage = oawApp.config.tree[currentIndex].id,
      bodyClass = oawApp.config.tree[currentIndex].class,
      hash = oawApp.config.tree[currentIndex].hash,
      hashWithID = hash+currentProject;

  oawApp.console("Load Project Index "+currentProject);

  var projectTitleImage =  oawApp.bookDataOAW[currentProject].project_title_image,
      projectTitle =  oawApp.bookDataOAW[currentProject].project_title,
      projectColor =  oawApp.bookDataOAW[currentProject].project_color,
      projectTopics =  oawApp.bookDataOAW[currentProject].topics;

  $('.oaw-page_project').remove();

  var projectStructureHTML = '<section class="oaw-page oaw-page_project"> <header class="oaw-page-header" style="background-color: #'+projectColor+'"> <div class="oaw-inner"> <h1 class="oaw-page-header-title"> <div class="oaw-page-header-title-inner"> <img src="'+projectTitleImage+'" alt="'+projectTitle+'"> </div> </h1> <div class="oaw-page-header-button"> <button class="oaw-button oaw-button_4 oaw-js--goback" style="color: #'+projectColor+'"> <i class="icon" aria-hidden="true" style="border-right-color: #'+projectColor+'"></i> <span>'+oawApp.text.back+'</span> </button> </div> </div> </header><div class="oaw-page-content"><div class="oaw-inner"><div class="oaw-grid oaw-grid_2"></div></div></div><footer class="oaw-page-footer"><div class="oaw-inner"><div class="oaw-grid oaw-grid_3"></div></div></footer></section>';

  $('body').prepend(projectStructureHTML);


  var topicWrapper = document.createDocumentFragment();
  var auxWrapper = document.createDocumentFragment();

  var auxGridItem = 1;

  $.each(projectTopics, function(i, topic){
    var topicTextweb = topic.topic_textweb,
        topicColor = topic.topic_color,
        topicTitleImage = topic.topic_title_image,
        topicUnits = topic.topic_units;

    if (i < 2) { //Main topics
      var gridItem = Number(i) + 1,
          topicItem = document.createElement('div');

      var topicList = '';

      $.each(topicUnits, function(i, unit){
        var template = unit.unit_template,
            unitID = unit.unit_id,
            unitNumber = unit.unit_number,
            title = unit.unit_title;

        var topicListItem = '<li><a href="javascript:void(0)" class="oaw-button oaw-button_3 oaw-js--loadUnit" data-unit-id="'+unitID+'" data-unit-number="'+unitNumber+'" data-unit-template="'+template+'"><span>'+title+'</span></a></li>';
        topicList += topicListItem;

      });

      topicItem.className = 'oaw-grid-item oaw-grid-item_'+gridItem;
      topicItem.innerHTML = '<div class="oaw-projects-list" style="background-color: #'+topicColor+'"><div class="oaw-projects-list-inner"><h2 class="oaw-title oaw-title_image oaw-title_2"><img src="'+topicTitleImage+'"></h2><style>.oaw-grid-item_'+gridItem+' .oaw-projects-list .oaw-button_3:hover, .oaw-grid-item_'+gridItem+' .oaw-projects-list .oaw-button_3:active, .oaw-grid-item_'+gridItem+' .oaw-projects-list .oaw-button_3:focus {color: #'+topicColor+'}</style><ul>'+topicList+'</ul></div></div>';

      topicWrapper.appendChild(topicItem);
    } else { // Aux topics
      var unitAuxID = topicUnits[0].unit_id,
          unitAuxTemplate = topicUnits[0].unit_template;

      var topicAuxItem = document.createElement('div');

      topicAuxItem.className = 'oaw-grid-item oaw-grid-item_'+auxGridItem;
      topicAuxItem.innerHTML = '<article class="oaw-card oaw-card_project" style="background-color: #'+topicColor+'"><a href="javascript:void(0)" class="oaw-card-inner oaw-js--loadUnit" data-unit-id="'+unitAuxID+'" data-unit-template="'+unitAuxTemplate+'"><div class="oaw-card-image"><div class="oaw-card-image-inner"><img src="'+topicTitleImage+'"></div></div></a></article>';

      auxGridItem++;

      auxWrapper.appendChild(topicAuxItem);
    }
  });

  var $gridWrapper = $('.oaw-page_project .oaw-grid_2');
  $gridWrapper[0].appendChild(topicWrapper);

  var $gridWrapper2 = $('.oaw-page_project .oaw-grid_3');
  $gridWrapper2[0].appendChild(auxWrapper);



  /*  $('.oaw-page_project').imagesLoaded({background: 'div, a, span, button'}, function(){
      if (updateHash) {
        oawApp.updateHashWithListener(hashWithID);
      }

    });
*/


  $('.oaw-page_project').imagesLoaded({background: 'div, a, span, button'}, function(){
    // Object Fit support
    oawApp.objectFitSupport();
    oawApp.removeUnusedClass(bodyClass);
    $('body').addClass(bodyClass);
    $('html, body').animate({ scrollTop: 0 }, 1);
  });

}

// Load Project
oawApp.loadUnit = function(data,currentUnit,updateHash) {

  var currentIndex = 3;
  var currentPage = oawApp.config.tree[currentIndex].id,
      bodyClass = oawApp.config.tree[currentIndex].class,
      hash = oawApp.config.tree[currentIndex].hash,
      hashWithID = hash+currentUnit;

  oawApp.console("Load Unit Index "+currentUnit);


  var currentProject = oawApp.relationUnitsProjects[currentUnit],
      currentTopic = oawApp.relationUnitsTopics[currentUnit],
      topicColor = oawApp.bookDataOAW[currentProject].topics[currentTopic].topic_color,
      lessonTemplate = oawApp.relationUnitsTemplates[currentUnit],
      lessonTitle =  oawApp.bookData.units[currentUnit].title,
      lessonID =  oawApp.bookData.units[currentUnit].id;

  $('body').removeClass('oaw-body-lesson-inview');
  $('.oaw-page_lesson').remove();

  var topicUnitsHTML = '',
      topicUnits = oawApp.bookDataOAW[currentProject].topics[currentTopic].topic_units;

  $.each(topicUnits, function(i, unit){
    var topicUnitTitle = unit.unit_description,
        topicUnitID = unit.unit_id,
        topicUnitNumber = unit.unit_number,
        topicUnitTemplate = unit.unit_template,
        currentClass = (topicUnitID === lessonID) ? 'oaw-current' : '';

    topicUnitsHTML += '<div><a href="javascript:void(0)" class="oaw-button oaw-button_2 oaw-button_a oaw-js--loadUnit '+currentClass+'" data-unit-id="'+topicUnitID+'" data-unit-number="'+topicUnitNumber+'" data-unit-template="'+topicUnitTemplate+'"><span>'+topicUnitTitle+'</span></a></div>';

  });

  var customHash = oawApp.config.tree[2].hash+currentProject;
  var lessonStructureHTML = '<section class="oaw-page oaw-page_lesson"> <header class="oaw-page-header" style="background-color: #'+topicColor+'"> <div class="oaw-inner"> <h1 class="oaw-page-header-title"> <div class="oaw-page-header-title-inner"><span>'+lessonTitle+'</span></div> </h1> <div class="oaw-page-header-button"> <button class="oaw-button oaw-button_4 oaw-js--goback" data-custom-hash="'+customHash+'" style="color: #'+topicColor+'"> <i class="icon" aria-hidden="true" style="border-right-color: #'+topicColor+'"></i> <span>'+oawApp.text.back+'</span> </button> </div> </div> </header><div class="oaw-page-content"><div class="oaw-inner"><div class="oaw-grid oaw-grid_lesson oaw-grid_lesson_'+lessonTemplate+'"></div></div></div><footer class="oaw-page-footer" style="background-color: #'+topicColor+'"><style>.oaw-page_lesson .oaw-page-footer .oaw-button {color: #'+topicColor+'}</style><div class="oaw-inner">  <div class="oaw-menu oaw-menu_2"><nav class="oaw-menu-nav">'+topicUnitsHTML+'</nav></div></div></footer></section>';

  $('body').prepend(lessonStructureHTML);

  var $unitsWrapper = $('.oaw-page_lesson .oaw-menu_2 .oaw-menu-nav');
  $unitsWrapper.slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }]
  });
  var slickGoToCurrent = $unitsWrapper.find('.oaw-current').closest('[data-slick-index]').data('slick-index');
  $unitsWrapper.slick('slickGoTo', slickGoToCurrent, true);

  var $lessonGrid = $('.oaw-page_lesson .oaw-grid_lesson');

  var boxesArray = [];
  var resourcesList = '';

  var resources = oawApp.bookData.units[currentUnit].resources;
  $.each(resources, function(i, resource){
    var resourceTags = resource.tags,
        resourceTagsArray = (typeof resourceTags !== 'undefined') ? resourceTags.split(" ") : [];
    if (resourceTagsArray.length) {
      var resourceBox, resourceBoxColor, resourceBoxPosition, resourceBoxIcon, resourceHeadingType;

      $.each(resourceTagsArray, function(index, value) {
        value = value.toLowerCase();
        if (oawApp.startsWith(value,oawApp.config.tagBox)) {
          resourceBox = value.replace(oawApp.config.tagBox, '');
        } else if (oawApp.startsWith(value,oawApp.config.tagBoxColor)) {
          resourceBoxColor = value.replace(oawApp.config.tagBoxColor, '');
        } else if (oawApp.startsWith(value,oawApp.config.tagBoxPosition)) {
          resourceBoxPosition = value.replace(oawApp.config.tagBoxPosition, '');
        } else if (oawApp.startsWith(value,oawApp.config.tagResourceType)) {
          resourceBoxIcon = value.replace(oawApp.config.tagResourceType, '');
        } else if (oawApp.startsWith(value,oawApp.config.tagResourceHeadingType)) {
          resourceHeadingType = value.replace(oawApp.config.tagResourceHeadingType, '');
        }
      });

      if (typeof resourceBoxColor === 'undefined') resourceBoxColor = '';
      if (typeof resourceBoxPosition === 'undefined') resourceBoxPosition = '';
      if (typeof resourceBoxIcon === 'undefined') resourceBoxIcon = '';

      console.log(resourceBox, resourceBoxColor, resourceBoxPosition, resourceBoxIcon)

      if($.inArray(resourceBox, boxesArray) === -1 && typeof resourceBox !== 'undefined') {
        var newBox = '<div class="oaw-grid-item oaw-grid-item_'+resourceBox+'"><article class="oaw-card oaw-card_lessonsection" style="background-color: #'+resourceBoxColor+'"><div class="oaw-card-inner"> <header class="oaw-card-header"> <div class="oaw-card-header-image"> <div class="oaw-card-header-image-inner"> </div> </div> <h2 class="oaw-title oaw-title_image oaw-title_2"> </h2> </header> <div class="oaw-card-content"> <div class="oaw-resources-list"> <ul> </ul> </div> </div> </div></article></div>';
        $lessonGrid.append(newBox);
        boxesArray.push(resourceBox);
      }
      console.log(boxesArray);

      var resourceType = resource.type,
          resourceIsImg = (resourceType === 'img'),
          resourceID = resource.id,
          resourceUrl = resource.url,
          resourceOnclick = resource.onclickTitle,
          resourceTitle = resource.title;
      if (resourceIsImg) {
        var resourceImage = resource.fileurl,
            $boxHeader = $lessonGrid.find('.oaw-grid-item_'+resourceBox+' .oaw-card-header');
        console.log("Is title or character");
        if (resourceHeadingType === 'heading') {
          $boxHeader.find('.oaw-title_image').append('<img src="'+resourceImage+'">');
          $boxHeader.addClass('oaw-card-header_titlepos_'+resourceBoxPosition);
        } else {
          $boxHeader.find('.oaw-card-header-image-inner').append('<img src="'+resourceImage+'">');
        }
      } else {
        var $boxList = $lessonGrid.find('.oaw-grid-item_'+resourceBox+' .oaw-resources-list ul');
        resourcesList = '<li class="oaw-resources-list-item oaw-resources-list-item_'+resourceBoxIcon+'"><a href="javascript:void(0)" onclick="'+resourceOnclick+'" class="oaw-resources-list-item-inner oaw-js--openActivity" data-id="'+resourceID+'" data-url="'+resourceUrl+'" data-type="'+resourceType+'"><i class="oaw-resources-list-item-icon"></i><span>'+resourceTitle+'</span></a></li>';
        $boxList.append(resourcesList);
      }

    }

  });



  $('.oaw-page_lesson').imagesLoaded({background: 'div, a, span, button'}, function(){
    // Object Fit support
    oawApp.objectFitSupport();
    oawApp.removeUnusedClass(bodyClass);
    $('body').addClass(bodyClass);
    $('html, body').animate({ scrollTop: 0 }, 1);

    // Height in Lessons/Units
    oawApp.unitImageSize();
  });

}


//----------------------------------//
//                                  //
//  Document Ready                  //
//                                  //
//----------------------------------//


$(document).ready(function() {

  $('body').on('click', '.oaw-js--loadHomepage', function(e) {
    e.preventDefault();
    var hash = oawApp.config.tree[1].hash;
    oawApp.updateHashWithListener(hash);
  });

  $('body').on('click', '.oaw-js--loadProject', function(e) {
    e.preventDefault();
    var projectIndex = $(this).attr('data-project-index'),
        hash = oawApp.config.tree[2].hash + projectIndex;
    oawApp.updateHashWithListener(hash);
  });

  $('body').on('click', '.oaw-js--loadUnit', function(e) {
    e.preventDefault();
    var unitIndex = Number($(this).attr('data-unit-number')) - 1,
        hash = oawApp.config.tree[3].hash + unitIndex;
    oawApp.updateHashWithListener(hash);
  });

  // Open Activities
  /*$('body').on('click', '.oaw-js--openActivity', function(e) {
    e.preventDefault();
    var type = $(this).attr('data-type'),
        id = $(this).attr('data-id'),
        url = $(this).attr('data-url');
    oawApp.openActivity(type,url,id);
  });*/

  // DEMO ONLY
  $('body').on('click', '.oaw-js--goback', function(e) {
    e.preventDefault();
    var customHash = $(this).attr('data-custom-hash'),
        hash = (typeof customHash !== 'undefined') ? customHash : oawApp.config.tree[1].hash;
    oawApp.updateHashWithListener(hash);
  });

});

$(window).on('orientationchange resize', function() {
  oawApp.unitImageSize();
});
