!function(e){e.fn.waitMe=function(t){return this.each(function(){var a,i,o,r,s,c,n,d,l=e(this),w=!1,b="background-color",f="",u="",v={init:function(){function v(e){p.css({top:"auto",transform:"translateY("+e+"px) translateZ(0)"})}n=e.extend({effect:"bounce",text:"",bg:"rgba(255,255,255,0.7)",color:"#000",sizeW:"",sizeH:"",source:""},t),d=(new Date).getMilliseconds(),r=e('<div class="waitMe" data-waitme_id="'+d+'"></div>');var h="width:"+n.sizeW+";height:"+n.sizeH;switch(n.effect){case"none":o=0;break;case"bounce":o=3,s="",c=h;break;case"rotateplane":o=1,s="",c=h;break;case"stretch":o=5,s="",c=h;break;case"orbit":o=2,s=h,c="";break;case"roundBounce":o=12,s=h,c="";break;case"win8":o=5,w=!0,c=s=h;break;case"win8_linear":o=5,w=!0,s=h,c="";break;case"ios":o=12,s=h,c="";break;case"facebook":o=3,s="",c=h;break;case"rotation":o=1,b="border-color",s="",c=h;break;case"timer":o=2,f="border-color:"+n.color,s=h,c="";break;case"pulse":o=1,b="border-color",s="",c=h;break;case"progressBar":o=1,s="",c=h;break;case"bouncePulse":o=3,s="",c=h;break;case"img":o=1,s="",c=h}if(""===n.sizeW&&""===n.sizeH&&(s=c=""),""!==s&&""!==f&&(f=";"+f),o>0){if(i=e('<div class="waitMe_progress '+n.effect+'"></div>'),"img"==n.effect)u='<img src="'+n.source+'" style="'+c+'">';else for(h=1;o>=h;++h)u=w?u+('<div class="waitMe_progress_elem'+h+'" style="'+c+'"><div style="'+b+":"+n.color+'"></div></div>'):u+('<div class="waitMe_progress_elem'+h+'" style="'+b+":"+n.color+";"+c+'"></div>');i=e('<div class="waitMe_progress '+n.effect+'" style="'+s+f+'">'+u+"</div>")}n.text&&(a=e('<div class="waitMe_text" style="color:'+n.color+'">'+n.text+"</div>")),(h=l.find("> .waitMe"))&&h.remove(),h=e('<div class="waitMe_content"></div>'),h.append(i,a),r.append(h),"HTML"==l[0].tagName&&(l=e("body")),l.addClass("waitMe_container").attr("data-waitme_id",d).append(r);var h=l.find("> .waitMe"),p=l.find(".waitMe_content");if(h.css({background:n.bg}),p.css({marginTop:-p.outerHeight()/2+"px"}),l.outerHeight()>e(window).height()){var h=e(window).scrollTop(),g=p.outerHeight(),m=l.offset().top,M=l.outerHeight(),_=h-m+e(window).height()/2;0>_&&(_=Math.abs(_)),_-g>=0&&M>=_+g?m-h>e(window).height()/2&&(_=g):_=h>m+M-g?h-m-g:h-m+g,v(_),e(document).scroll(function(){var t=e(window).scrollTop()-m+e(window).height()/2;t-g>=0&&M>=t+g&&v(t)})}},hide:function(){var e=l.attr("data-waitme_id");l.removeClass("waitMe_container").removeAttr("data-waitme_id"),l.find('.waitMe[data-waitme_id="'+e+'"]').remove()}};return v[t]?v[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void(e.event.special.destroyed={remove:function(e){e.handler&&e.handler()}}):v.init.apply(this,arguments)})},e(window).load(function(){e("body.waitMe_body").addClass("hideMe"),setTimeout(function(){e("body.waitMe_body").find(".waitMe_container:not([data-waitme_id])").remove(),e("body.waitMe_body").removeClass("waitMe_body hideMe")},200)})}(jQuery);