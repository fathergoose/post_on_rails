/*!
 * # Semantic UI - Sidebar
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,i,n,t){"use strict";e.fn.sidebar=function(o){var r,s=e(this),a=e(i),l=e(n),c=e("html"),u=e("head"),d=s.selector||"",f=(new Date).getTime(),b=[],m=arguments[0],h="string"==typeof m,g=[].slice.call(arguments,1),v=i.requestAnimationFrame||i.mozRequestAnimationFrame||i.webkitRequestAnimationFrame||i.msRequestAnimationFrame||function(e){setTimeout(e,0)};return s.each(function(){var s,p,y,C,k,w,T=e.isPlainObject(o)?e.extend(!0,{},e.fn.sidebar.settings,o):e.extend({},e.fn.sidebar.settings),x=T.selector,S=T.className,A=T.namespace,F=T.regExp,O=T.error,P="."+A,E="module-"+A,H=e(this),D=e(T.context),R=H.children(x.sidebar),j=D.children(x.fixed),M=D.children(x.pusher),z=this,B=H.data(E);w={initialize:function(){w.debug("Initializing sidebar",o),w.create.id(),k=w.get.transitionEvent(),w.is.ios()&&w.set.ios(),T.delaySetup?v(w.setup.layout):w.setup.layout(),v(function(){w.setup.cache()}),w.instantiate()},instantiate:function(){w.verbose("Storing instance of module",w),B=w,H.data(E,w)},create:{id:function(){y=(Math.random().toString(16)+"000000000").substr(2,8),p="."+y,w.verbose("Creating unique id for element",y)}},destroy:function(){w.verbose("Destroying previous module for",H),H.off(P).removeData(E),w.is.ios()&&w.remove.ios(),D.off(p),a.off(p),l.off(p)},event:{clickaway:function(e){var i=M.find(e.target).length>0||M.is(e.target),n=D.is(e.target);i&&(w.verbose("User clicked on dimmed page"),w.hide()),n&&(w.verbose("User clicked on dimmable context (scaled out page)"),w.hide())},touch:function(e){},containScroll:function(e){z.scrollTop<=0&&(z.scrollTop=1),z.scrollTop+z.offsetHeight>=z.scrollHeight&&(z.scrollTop=z.scrollHeight-z.offsetHeight-1)},scroll:function(i){0===e(i.target).closest(x.sidebar).length&&i.preventDefault()}},bind:{clickaway:function(){w.verbose("Adding clickaway events to context",D),T.closable&&D.on("click"+p,w.event.clickaway).on("touchend"+p,w.event.clickaway)},scrollLock:function(){T.scrollLock&&(w.debug("Disabling page scroll"),a.on("DOMMouseScroll"+p,w.event.scroll)),w.verbose("Adding events to contain sidebar scroll"),l.on("touchmove"+p,w.event.touch),H.on("scroll"+P,w.event.containScroll)}},unbind:{clickaway:function(){w.verbose("Removing clickaway events from context",D),D.off(p)},scrollLock:function(){w.verbose("Removing scroll lock from page"),l.off(p),a.off(p),H.off("scroll"+P)}},add:{inlineCSS:function(){var i,n=w.cache.width||H.outerWidth(),t=w.cache.height||H.outerHeight(),o=w.is.rtl(),r=w.get.direction(),a={left:n,right:-n,top:t,bottom:-t};o&&(w.verbose("RTL detected, flipping widths"),a.left=-n,a.right=n),i="<style>","left"===r||"right"===r?(w.debug("Adding CSS rules for animation distance",n),i+=" .ui.visible."+r+".sidebar ~ .fixed, .ui.visible."+r+".sidebar ~ .pusher {   -webkit-transform: translate3d("+a[r]+"px, 0, 0);           transform: translate3d("+a[r]+"px, 0, 0); }"):("top"===r||"bottom"==r)&&(i+=" .ui.visible."+r+".sidebar ~ .fixed, .ui.visible."+r+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+a[r]+"px, 0);           transform: translate3d(0, "+a[r]+"px, 0); }"),w.is.ie()&&("left"===r||"right"===r?(w.debug("Adding CSS rules for animation distance",n),i+=" body.pushable > .ui.visible."+r+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+a[r]+"px, 0, 0);           transform: translate3d("+a[r]+"px, 0, 0); }"):("top"===r||"bottom"==r)&&(i+=" body.pushable > .ui.visible."+r+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+a[r]+"px, 0);           transform: translate3d(0, "+a[r]+"px, 0); }"),i+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),i+="</style>",s=e(i).appendTo(u),w.debug("Adding sizing css to head",s)}},refresh:function(){w.verbose("Refreshing selector cache"),D=e(T.context),R=D.children(x.sidebar),M=D.children(x.pusher),j=D.children(x.fixed),w.clear.cache()},refreshSidebars:function(){w.verbose("Refreshing other sidebars"),R=D.children(x.sidebar)},repaint:function(){w.verbose("Forcing repaint event"),z.style.display="none";z.offsetHeight;z.scrollTop=z.scrollTop,z.style.display=""},setup:{cache:function(){w.cache={width:H.outerWidth(),height:H.outerHeight(),rtl:"rtl"==H.css("direction")}},layout:function(){0===D.children(x.pusher).length&&(w.debug("Adding wrapper element for sidebar"),w.error(O.pusher),M=e('<div class="pusher" />'),D.children().not(x.omitted).not(R).wrapAll(M),w.refresh()),(0===H.nextAll(x.pusher).length||H.nextAll(x.pusher)[0]!==M[0])&&(w.debug("Moved sidebar to correct parent element"),w.error(O.movedSidebar,z),H.detach().prependTo(D),w.refresh()),w.clear.cache(),w.set.pushable(),w.set.direction()}},attachEvents:function(i,n){var t=e(i);n=e.isFunction(w[n])?w[n]:w.toggle,t.length>0?(w.debug("Attaching sidebar events to element",i,n),t.on("click"+P,n)):w.error(O.notFound,i)},show:function(i){if(i=e.isFunction(i)?i:function(){},w.is.hidden()){if(w.refreshSidebars(),T.overlay&&(w.error(O.overlay),T.transition="overlay"),w.refresh(),w.othersActive())if(w.debug("Other sidebars currently visible"),T.exclusive){if("overlay"!=T.transition)return void w.hideOthers(w.show);w.hideOthers()}else T.transition="overlay";w.pushPage(function(){i.call(z),T.onShow.call(z)}),T.onChange.call(z),T.onVisible.call(z)}else w.debug("Sidebar is already visible")},hide:function(i){i=e.isFunction(i)?i:function(){},(w.is.visible()||w.is.animating())&&(w.debug("Hiding sidebar",i),w.refreshSidebars(),w.pullPage(function(){i.call(z),T.onHidden.call(z)}),T.onChange.call(z),T.onHide.call(z))},othersAnimating:function(){return R.not(H).filter("."+S.animating).length>0},othersVisible:function(){return R.not(H).filter("."+S.visible).length>0},othersActive:function(){return w.othersVisible()||w.othersAnimating()},hideOthers:function(e){var i=R.not(H).filter("."+S.visible),n=i.length,t=0;e=e||function(){},i.sidebar("hide",function(){t++,t==n&&e()})},toggle:function(){w.verbose("Determining toggled direction"),w.is.hidden()?w.show():w.hide()},pushPage:function(i){var n,t,o,r=w.get.transition(),s="overlay"===r||w.othersActive()?H:M;i=e.isFunction(i)?i:function(){},"scale down"==T.transition&&w.scrollToTop(),w.set.transition(r),w.repaint(),n=function(){w.bind.clickaway(),w.add.inlineCSS(),w.set.animating(),w.set.visible()},t=function(){w.set.dimmed()},o=function(e){e.target==s[0]&&(s.off(k+p,o),w.remove.animating(),w.bind.scrollLock(),i.call(z))},s.off(k+p),s.on(k+p,o),v(n),T.dimPage&&!w.othersVisible()&&v(t)},pullPage:function(i){var n,t,o=w.get.transition(),r="overlay"==o||w.othersActive()?H:M;i=e.isFunction(i)?i:function(){},w.verbose("Removing context push state",w.get.direction()),w.unbind.clickaway(),w.unbind.scrollLock(),n=function(){w.set.transition(o),w.set.animating(),w.remove.visible(),T.dimPage&&!w.othersVisible()&&M.removeClass(S.dimmed)},t=function(e){e.target==r[0]&&(r.off(k+p,t),w.remove.animating(),w.remove.transition(),w.remove.inlineCSS(),("scale down"==o||T.returnScroll&&w.is.mobile())&&w.scrollBack(),i.call(z))},r.off(k+p),r.on(k+p,t),v(n)},scrollToTop:function(){w.verbose("Scrolling to top of page to avoid animation issues"),C=e(i).scrollTop(),H.scrollTop(0),i.scrollTo(0,0)},scrollBack:function(){w.verbose("Scrolling back to original page position"),i.scrollTo(0,C)},clear:{cache:function(){w.verbose("Clearing cached dimensions"),w.cache={}}},set:{ios:function(){c.addClass(S.ios)},pushed:function(){D.addClass(S.pushed)},pushable:function(){D.addClass(S.pushable)},dimmed:function(){M.addClass(S.dimmed)},active:function(){H.addClass(S.active)},animating:function(){H.addClass(S.animating)},transition:function(e){e=e||w.get.transition(),H.addClass(e)},direction:function(e){e=e||w.get.direction(),H.addClass(S[e])},visible:function(){H.addClass(S.visible)},overlay:function(){H.addClass(S.overlay)}},remove:{inlineCSS:function(){w.debug("Removing inline css styles",s),s&&s.length>0&&s.remove()},ios:function(){c.removeClass(S.ios)},pushed:function(){D.removeClass(S.pushed)},pushable:function(){D.removeClass(S.pushable)},active:function(){H.removeClass(S.active)},animating:function(){H.removeClass(S.animating)},transition:function(e){e=e||w.get.transition(),H.removeClass(e)},direction:function(e){e=e||w.get.direction(),H.removeClass(S[e])},visible:function(){H.removeClass(S.visible)},overlay:function(){H.removeClass(S.overlay)}},get:{direction:function(){return H.hasClass(S.top)?S.top:H.hasClass(S.right)?S.right:H.hasClass(S.bottom)?S.bottom:S.left},transition:function(){var e,i=w.get.direction();return e=w.is.mobile()?"auto"==T.mobileTransition?T.defaultTransition.mobile[i]:T.mobileTransition:"auto"==T.transition?T.defaultTransition.computer[i]:T.transition,w.verbose("Determined transition",e),e},transitionEvent:function(){var e,i=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(i.style[e]!==t)return o[e]}},is:{ie:function(){var e=!i.ActiveXObject&&"ActiveXObject"in i,n="ActiveXObject"in i;return e||n},ios:function(){var e=navigator.userAgent,i=e.match(F.ios),n=e.match(F.mobileChrome);return i&&!n?(w.verbose("Browser was found to be iOS",e),!0):!1},mobile:function(){var e=navigator.userAgent,i=e.match(F.mobile);return i?(w.verbose("Browser was found to be mobile",e),!0):(w.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!w.is.visible()},visible:function(){return H.hasClass(S.visible)},open:function(){return w.is.visible()},closed:function(){return w.is.hidden()},vertical:function(){return H.hasClass(S.top)},animating:function(){return D.hasClass(S.animating)},rtl:function(){return w.cache.rtl===t&&(w.cache.rtl="rtl"==H.css("direction")),w.cache.rtl}},setting:function(i,n){if(w.debug("Changing setting",i,n),e.isPlainObject(i))e.extend(!0,T,i);else{if(n===t)return T[i];T[i]=n}},internal:function(i,n){if(e.isPlainObject(i))e.extend(!0,w,i);else{if(n===t)return w[i];w[i]=n}},debug:function(){T.debug&&(T.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,T.name+":"),w.debug.apply(console,arguments)))},verbose:function(){T.verbose&&T.debug&&(T.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,T.name+":"),w.verbose.apply(console,arguments)))},error:function(){w.error=Function.prototype.bind.call(console.error,console,T.name+":"),w.error.apply(console,arguments)},performance:{log:function(e){var i,n,t;T.performance&&(i=(new Date).getTime(),t=f||i,n=i-t,f=i,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":n})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500)},display:function(){var i=T.name+":",n=0;f=!1,clearTimeout(w.performance.timer),e.each(b,function(e,i){n+=i["Execution Time"]}),i+=" "+n+"ms",d&&(i+=" '"+d+"'"),(console.group!==t||console.table!==t)&&b.length>0&&(console.groupCollapsed(i),console.table?console.table(b):e.each(b,function(e,i){console.log(i.Name+": "+i["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,n,o){var s,a,l,c=B;return n=n||g,o=z||o,"string"==typeof i&&c!==t&&(i=i.split(/[\. ]/),s=i.length-1,e.each(i,function(n,o){var r=n!=s?o+i[n+1].charAt(0).toUpperCase()+i[n+1].slice(1):i;if(e.isPlainObject(c[r])&&n!=s)c=c[r];else{if(c[r]!==t)return a=c[r],!1;if(!e.isPlainObject(c[o])||n==s)return c[o]!==t?(a=c[o],!1):(w.error(O.method,i),!1);c=c[o]}})),e.isFunction(a)?l=a.apply(o,n):a!==t&&(l=a),e.isArray(r)?r.push(l):r!==t?r=[r,l]:l!==t&&(r=l),a}},h?(B===t&&w.initialize(),w.invoke(m)):(B!==t&&w.invoke("destroy"),w.initialize())}),r!==t?r:this},e.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document);