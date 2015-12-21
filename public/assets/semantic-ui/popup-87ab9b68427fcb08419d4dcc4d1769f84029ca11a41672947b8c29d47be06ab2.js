/*!
 * # Semantic UI - Popup
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(t,e,o,n){"use strict";t.fn.popup=function(i){var r,a=t(this),s=t(o),p=t(e),l=t("body"),u=a.selector||"",c=!0,d=(new Date).getTime(),f=[],g=arguments[0],h="string"==typeof g,m=[].slice.call(arguments,1);return a.each(function(){var o,a,v,b,w,y=t.isPlainObject(i)?t.extend(!0,{},t.fn.popup.settings,i):t.extend({},t.fn.popup.settings),T=y.selector,P=y.className,C=y.error,k=y.metadata,x=y.namespace,S="."+y.namespace,A="module-"+x,D=t(this),E=t(y.context),O=y.target?t(y.target):D,j=0,F=!1,R=!1,H=this,W=D.data(A);w={initialize:function(){w.debug("Initializing",D),w.createID(),w.bind.events(),!w.exists()&&y.preserve&&w.create(),w.instantiate()},instantiate:function(){w.verbose("Storing instance",w),W=w,D.data(A,W)},refresh:function(){y.popup?o=t(y.popup).eq(0):y.inline&&(o=O.nextAll(T.popup).eq(0),y.popup=o),y.popup?(o.addClass(P.loading),a=w.get.offsetParent(),o.removeClass(P.loading),y.movePopup&&w.has.popup()&&w.get.offsetParent(o)[0]!==a[0]&&(w.debug("Moving popup to the same offset parent as activating element"),o.detach().appendTo(a))):a=y.inline?w.get.offsetParent(O):w.has.popup()?w.get.offsetParent(o):l,a.is("html")&&a[0]!==l[0]&&(w.debug("Setting page as offset parent"),a=l),w.get.variation()&&w.set.variation()},reposition:function(){w.refresh(),w.set.position()},destroy:function(){w.debug("Destroying previous module"),o&&!y.preserve&&w.removePopup(),clearTimeout(w.hideTimer),clearTimeout(w.showTimer),p.off(v),D.off(S).removeData(A)},event:{start:function(e){var o=t.isPlainObject(y.delay)?y.delay.show:y.delay;clearTimeout(w.hideTimer),R||(w.showTimer=setTimeout(w.show,o))},end:function(){var e=t.isPlainObject(y.delay)?y.delay.hide:y.delay;clearTimeout(w.showTimer),w.hideTimer=setTimeout(w.hide,e)},touchstart:function(t){R=!0,w.show()},resize:function(){w.is.visible()&&w.set.position()},hideGracefully:function(e){e&&0===t(e.target).closest(T.popup).length?(w.debug("Click occurred outside popup hiding popup"),w.hide()):w.debug("Click was inside popup, keeping popup open")}},create:function(){var e=w.get.html(),n=w.get.title(),i=w.get.content();e||i||n?(w.debug("Creating pop-up html"),e||(e=y.templates.popup({title:n,content:i})),o=t("<div/>").addClass(P.popup).data(k.activator,D).html(e),y.inline?(w.verbose("Inserting popup element inline",o),o.insertAfter(D)):(w.verbose("Appending popup element to body",o),o.appendTo(E)),w.refresh(),w.set.variation(),y.hoverable&&w.bind.popup(),y.onCreate.call(o,H)):0!==O.next(T.popup).length?(w.verbose("Pre-existing popup found"),y.inline=!0,y.popups=O.next(T.popup).data(k.activator,D),w.refresh(),y.hoverable&&w.bind.popup()):y.popup?(t(y.popup).data(k.activator,D),w.verbose("Used popup specified in settings"),w.refresh(),y.hoverable&&w.bind.popup()):w.debug("No content specified skipping display",H)},createID:function(){b=(Math.random().toString(16)+"000000000").substr(2,8),v="."+b,w.verbose("Creating unique id for element",b)},toggle:function(){w.debug("Toggling pop-up"),w.is.hidden()?(w.debug("Popup is hidden, showing pop-up"),w.unbind.close(),w.show()):(w.debug("Popup is visible, hiding pop-up"),w.hide())},show:function(t){if(t=t||function(){},w.debug("Showing pop-up",y.transition),w.is.hidden()&&(!w.is.active()||!w.is.dropdown())){if(w.exists()||w.create(),y.onShow.call(o,H)===!1)return void w.debug("onShow callback returned false, cancelling popup animation");y.preserve||y.popup||w.refresh(),o&&w.set.position()&&(w.save.conditions(),y.exclusive&&w.hideAll(),w.animate.show(t))}},hide:function(t){if(t=t||function(){},w.is.visible()||w.is.animating()){if(y.onHide.call(o,H)===!1)return void w.debug("onHide callback returned false, cancelling popup animation");w.remove.visible(),w.unbind.close(),w.restore.conditions(),w.animate.hide(t)}},hideAll:function(){t(T.popup).filter("."+P.visible).each(function(){t(this).data(k.activator).popup("hide")})},exists:function(){return o?y.inline||y.popup?w.has.popup():o.closest(E).length>=1?!0:!1:!1},removePopup:function(){w.has.popup()&&!y.popup&&(w.debug("Removing popup",o),o.remove(),o=n,y.onRemove.call(o,H))},save:{conditions:function(){w.cache={title:D.attr("title")},w.cache.title&&D.removeAttr("title"),w.verbose("Saving original attributes",w.cache.title)}},restore:{conditions:function(){return w.cache&&w.cache.title&&(D.attr("title",w.cache.title),w.verbose("Restoring original attributes",w.cache.title)),!0}},animate:{show:function(e){e=t.isFunction(e)?e:function(){},y.transition&&t.fn.transition!==n&&D.transition("is supported")?(w.set.visible(),o.transition({animation:y.transition+" in",queue:!1,debug:y.debug,verbose:y.verbose,duration:y.duration,onComplete:function(){w.bind.close(),e.call(o,H),y.onVisible.call(o,H)}})):w.error(C.noTransition)},hide:function(e){return e=t.isFunction(e)?e:function(){},w.debug("Hiding pop-up"),y.onHide.call(o,H)===!1?void w.debug("onHide callback returned false, cancelling popup animation"):void(y.transition&&t.fn.transition!==n&&D.transition("is supported")?o.transition({animation:y.transition+" out",queue:!1,duration:y.duration,debug:y.debug,verbose:y.verbose,onComplete:function(){w.reset(),e.call(o,H),y.onHidden.call(o,H)}}):w.error(C.noTransition))}},change:{content:function(t){o.html(t)}},get:{html:function(){return D.removeData(k.html),D.data(k.html)||y.html},title:function(){return D.removeData(k.title),D.data(k.title)||y.title},content:function(){return D.removeData(k.content),D.data(k.content)||D.attr("title")||y.content},variation:function(){return D.removeData(k.variation),D.data(k.variation)||y.variation},popup:function(){return o},popupOffset:function(){return o.offset()},calculations:function(){var t,n=O[0],i=y.inline||y.popup&&y.movePopup?O.position():O.offset(),r={};return r={target:{element:O[0],width:O.outerWidth(),height:O.outerHeight(),top:i.top,left:i.left,margin:{}},popup:{width:o.outerWidth(),height:o.outerHeight()},parent:{width:a.outerWidth(),height:a.outerHeight()},screen:{scroll:{top:p.scrollTop(),left:p.scrollLeft()},width:p.width(),height:p.height()}},y.setFluidWidth&&w.is.fluid()&&(r.container={width:o.parent().outerWidth()},r.popup.width=r.container.width),r.target.margin.top=y.inline?parseInt(e.getComputedStyle(n).getPropertyValue("margin-top"),10):0,r.target.margin.left=y.inline?w.is.rtl()?parseInt(e.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(e.getComputedStyle(n).getPropertyValue("margin-left"),10):0,t=r.screen,r.boundary={top:t.scroll.top,bottom:t.scroll.top+t.height,left:t.scroll.left,right:t.scroll.left+t.width},r},id:function(){return b},startEvent:function(){return"hover"==y.on?"mouseenter":"focus"==y.on?"focus":!1},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==y.on?"mouseleave":"focus"==y.on?"blur":!1},distanceFromBoundary:function(t,e){var o,n,i={};return t=t||w.get.offset(),e=e||w.get.calculations(),o=e.popup,n=e.boundary,t&&(i={top:t.top-n.top,left:t.left-n.left,right:n.right-(t.left+o.width),bottom:n.bottom-(t.top+o.height)},w.verbose("Distance from boundaries determined",t,i)),i},offsetParent:function(e){var o=e!==n?e[0]:D[0],i=o.parentNode,r=t(i);if(i)for(var a="none"===r.css("transform"),s="static"===r.css("position"),p=r.is("html");i&&!p&&s&&a;)i=i.parentNode,r=t(i),a="none"===r.css("transform"),s="static"===r.css("position"),p=r.is("html");return r&&r.length>0?r:t()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(t){var e=t.split(" "),o=e[0],n=e[1],i={top:"bottom",bottom:"top",left:"right",right:"left"},r={left:"center",center:"right",right:"left"},a={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"},s="top"==o||"bottom"==o,p=!1,l=!1,u=!1;return F||(w.verbose("All available positions available"),F=w.get.positions()),w.debug("Recording last position tried",t),F[t]=!0,"opposite"===y.prefer&&(u=[i[o],n],u=u.join(" "),p=F[u]===!0,w.debug("Trying opposite strategy",u)),"adjacent"===y.prefer&&s&&(u=[o,r[n]],u=u.join(" "),l=F[u]===!0,w.debug("Trying adjacent strategy",u)),(l||p)&&(w.debug("Using backup position",u),u=a[t]),u}},set:{position:function(t,e){if(0===O.length||0===o.length)return void w.error(C.notFound);var i,r,a,s,p,l,u,c;if(e=e||w.get.calculations(),t=t||D.data(k.position)||y.position,i=D.data(k.offset)||y.offset,r=y.distanceAway,a=e.target,s=e.popup,p=e.parent,0===a.width&&0===a.height&&!(a.element instanceof SVGGraphicsElement))return w.debug("Popup target is hidden, no action taken"),!1;switch(y.inline&&(w.debug("Adding margin to calculation",a.margin),"left center"==t||"right center"==t?(i+=a.margin.top,r+=-a.margin.left):"top left"==t||"top center"==t||"top right"==t?(i+=a.margin.left,r-=a.margin.top):(i+=a.margin.left,r+=a.margin.top)),w.debug("Determining popup position from calculations",t,e),w.is.rtl()&&(t=t.replace(/left|right/g,function(t){return"left"==t?"right":"left"}),w.debug("RTL: Popup position updated",t)),j==y.maxSearchDepth&&"string"==typeof y.lastResort&&(t=y.lastResort),t){case"top left":l={top:"auto",bottom:p.height-a.top+r,left:a.left+i,right:"auto"};break;case"top center":l={bottom:p.height-a.top+r,left:a.left+a.width/2-s.width/2+i,top:"auto",right:"auto"};break;case"top right":l={bottom:p.height-a.top+r,right:p.width-a.left-a.width-i,top:"auto",left:"auto"};break;case"left center":l={top:a.top+a.height/2-s.height/2+i,right:p.width-a.left+r,left:"auto",bottom:"auto"};break;case"right center":l={top:a.top+a.height/2-s.height/2+i,left:a.left+a.width+r,bottom:"auto",right:"auto"};break;case"bottom left":l={top:a.top+a.height+r,left:a.left+i,bottom:"auto",right:"auto"};break;case"bottom center":l={top:a.top+a.height+r,left:a.left+a.width/2-s.width/2+i,bottom:"auto",right:"auto"};break;case"bottom right":l={top:a.top+a.height+r,right:p.width-a.left-a.width-i,left:"auto",bottom:"auto"}}if(l===n&&w.error(C.invalidPosition,t),w.debug("Calculated popup positioning values",l),o.css(l).removeClass(P.position).addClass(t).addClass(P.loading),u=w.get.popupOffset(),c=w.get.distanceFromBoundary(u,e),w.is.offstage(c,t)){if(w.debug("Position is outside viewport",t),j<y.maxSearchDepth)return j++,t=w.get.nextPosition(t),w.debug("Trying new position",t),o?w.set.position(t,e):!1;if(!y.lastResort)return w.debug("Popup could not find a position to display",o),w.error(C.cannotPlace,H),w.remove.attempts(),w.remove.loading(),w.reset(),!1;w.debug("No position found, showing with last position")}return w.debug("Position is on stage",t),w.remove.attempts(),w.remove.loading(),y.setFluidWidth&&w.is.fluid()&&w.set.fluidWidth(e),!0},fluidWidth:function(t){t=t||w.get.calculations(),w.debug("Automatically setting element width to parent width",t.parent.width),o.css("width",t.container.width)},variation:function(t){t=t||w.get.variation(),t&&w.has.popup()&&(w.verbose("Adding variation to popup",t),o.addClass(t))},visible:function(){D.addClass(P.visible)}},remove:{loading:function(){o.removeClass(P.loading)},variation:function(t){t=t||w.get.variation(),t&&(w.verbose("Removing variation",t),o.removeClass(t))},visible:function(){D.removeClass(P.visible)},attempts:function(){w.verbose("Resetting all searched positions"),j=0,F=!1}},bind:{events:function(){w.debug("Binding popup events to module"),"click"==y.on&&D.on("click"+S,w.toggle),"hover"==y.on&&c&&D.on("touchstart"+S,w.event.touchstart),w.get.startEvent()&&D.on(w.get.startEvent()+S,w.event.start).on(w.get.endEvent()+S,w.event.end),y.target&&w.debug("Target set to element",O),p.on("resize"+v,w.event.resize)},popup:function(){w.verbose("Allowing hover events on popup to prevent closing"),o&&w.has.popup()&&o.on("mouseenter"+S,w.event.start).on("mouseleave"+S,w.event.end)},close:function(){(y.hideOnScroll===!0||"auto"==y.hideOnScroll&&"click"!=y.on)&&(s.one(w.get.scrollEvent()+v,w.event.hideGracefully),E.one(w.get.scrollEvent()+v,w.event.hideGracefully)),"hover"==y.on&&R&&(w.verbose("Binding popup close event to document"),s.on("touchstart"+v,function(t){w.verbose("Touched away from popup"),w.event.hideGracefully.call(H,t)})),"click"==y.on&&y.closable&&(w.verbose("Binding popup close event to document"),s.on("click"+v,function(t){w.verbose("Clicked away from popup"),w.event.hideGracefully.call(H,t)}))}},unbind:{close:function(){(y.hideOnScroll===!0||"auto"==y.hideOnScroll&&"click"!=y.on)&&(s.off("scroll"+v,w.hide),E.off("scroll"+v,w.hide)),"hover"==y.on&&R&&(s.off("touchstart"+v),R=!1),"click"==y.on&&y.closable&&(w.verbose("Removing close event from document"),s.off("click"+v))}},has:{popup:function(){return o&&o.length>0}},is:{offstage:function(e,o){var n=[];return t.each(e,function(t,e){e<-y.jitter&&(w.debug("Position exceeds allowable distance from edge",t,e,o),n.push(t))}),n.length>0?!0:!1},active:function(){return D.hasClass(P.active)},animating:function(){return o&&o.hasClass(P.animating)},fluid:function(){return o&&o.hasClass(P.fluid)},visible:function(){return o&&o.hasClass(P.visible)},dropdown:function(){return D.hasClass(P.dropdown)},hidden:function(){return!w.is.visible()},rtl:function(){return"rtl"==D.css("direction")}},reset:function(){w.remove.visible(),y.preserve?t.fn.transition!==n&&o.transition("remove transition"):w.removePopup()},setting:function(e,o){if(t.isPlainObject(e))t.extend(!0,y,e);else{if(o===n)return y[e];y[e]=o}},internal:function(e,o){if(t.isPlainObject(e))t.extend(!0,w,e);else{if(o===n)return w[e];w[e]=o}},debug:function(){y.debug&&(y.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,y.name+":"),w.debug.apply(console,arguments)))},verbose:function(){y.verbose&&y.debug&&(y.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),w.verbose.apply(console,arguments)))},error:function(){w.error=Function.prototype.bind.call(console.error,console,y.name+":"),w.error.apply(console,arguments)},performance:{log:function(t){var e,o,n;y.performance&&(e=(new Date).getTime(),n=d||e,o=e-n,d=e,f.push({Name:t[0],Arguments:[].slice.call(t,1)||"",Element:H,"Execution Time":o})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500)},display:function(){var e=y.name+":",o=0;d=!1,clearTimeout(w.performance.timer),t.each(f,function(t,e){o+=e["Execution Time"]}),e+=" "+o+"ms",u&&(e+=" '"+u+"'"),(console.group!==n||console.table!==n)&&f.length>0&&(console.groupCollapsed(e),console.table?console.table(f):t.each(f,function(t,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),f=[]}},invoke:function(e,o,i){var a,s,p,l=W;return o=o||m,i=H||i,"string"==typeof e&&l!==n&&(e=e.split(/[\. ]/),a=e.length-1,t.each(e,function(o,i){var r=o!=a?i+e[o+1].charAt(0).toUpperCase()+e[o+1].slice(1):e;if(t.isPlainObject(l[r])&&o!=a)l=l[r];else{if(l[r]!==n)return s=l[r],!1;if(!t.isPlainObject(l[i])||o==a)return l[i]!==n?(s=l[i],!1):!1;l=l[i]}})),t.isFunction(s)?p=s.apply(i,o):s!==n&&(p=s),t.isArray(r)?r.push(p):r!==n?r=[r,p]:p!==n&&(r=p),s}},h?(W===n&&w.initialize(),w.invoke(g)):(W!==n&&W.invoke("destroy"),w.initialize())}),r!==n?r:this},t.fn.popup.settings={name:"Popup",debug:!1,verbose:!1,performance:!0,namespace:"popup",onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onHidden:function(){},on:"hover",addTouchEvents:!0,position:"top left",variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",prefer:"opposite",lastResort:!1,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(t){var e=/[&<>"'`]/g,o=/[&<>"'`]/,n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=function(t){return n[t]};return o.test(t)?t.replace(e,i):t},popup:function(e){var o="",i=t.fn.popup.settings.templates.escape;return typeof e!==n&&(typeof e.title!==n&&e.title&&(e.title=i(e.title),o+='<div class="header">'+e.title+"</div>"),typeof e.content!==n&&e.content&&(e.content=i(e.content),o+='<div class="content">'+e.content+"</div>")),o}}}}(jQuery,window,document);