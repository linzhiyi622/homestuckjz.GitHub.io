var ddimgtooltip={tiparray:function(){var t=[];return t[0]=["http://www.mspaintadventures.com/storyfiles/hs2/scraps/LEtext1.gif"],t[1]=["http://www.mspaintadventures.com/storyfiles/hs2/scraps/LEtext2.gif"],t[2]=["http://www.mspaintadventures.com/storyfiles/hs2/scraps/LEtext3.gif"],t[3]=["http://www.mspaintadventures.com/storyfiles/hs2/scraps/LEtext4.gif"],t[4]=["http://www.mspaintadventures.com/storyfiles/hs2/scraps/LEtext5.gif"],t[5]=["http://www.mspaintadventures.com/storyfiles/hs2/scraps/LEtext6.gif"],t}(),tooltipoffsets:[20,30],tipprefix:"imgtip",createtip:function(t,i,o){return 0==t("#"+i).length?t('<div id="'+i+'" class="ddimgtooltip" />').html('<div style="text-align:center"><img src="'+o[0]+'" /></div>'+(o[1]?'<div style="text-align:left; margin-top:5px">'+o[1]+"</div>":"")).css(o[2]||{}).appendTo(document.body):null},positiontooltip:function(t,i,o){var e=o.pageX+this.tooltipoffsets[0],s=o.pageY+this.tooltipoffsets[1],p=i.outerWidth(),n=i.outerHeight();e=e+p>t(document).scrollLeft()+t(window).width()?e-p-2*ddimgtooltip.tooltipoffsets[0]:e;s=s+n>t(document).scrollTop()+t(window).height()?t(document).scrollTop()+t(window).height()-n-10:s,i.css({left:e,top:s})},showbox:function(t,i,o){i.show(),this.positiontooltip(t,i,o)},hidebox:function(t,i){i.hide()},init:function(i){jQuery(document).ready(function(s){var p=ddimgtooltip.tiparray,t=s(i);if(0!=t.length){t.each(function(){var t=s(this);t.attr("rel").match(/\[(\d+)\]/);var i=parseInt(RegExp.$1),o=this._tipid=ddimgtooltip.tipprefix+i,e=ddimgtooltip.createtip(s,o,p[i]);t.mouseenter(function(t){var i=s("#"+this._tipid);ddimgtooltip.showbox(s,i,t)}),t.mouseleave(function(){var t=s("#"+this._tipid);ddimgtooltip.hidebox(s,t)}),t.mousemove(function(t){var i=s("#"+this._tipid);ddimgtooltip.positiontooltip(s,i,t)}),e&&e.mouseenter(function(){ddimgtooltip.hidebox(s,s(this))})})}})}};ddimgtooltip.init("*[rel^=imgtip]");