$(function(){const n=[];let o=[],t=0,l=!1;$(window).on("load",()=>{o=$("h2");const e=$(".edit__nav > ul");o.each((o,t)=>{html=$.parseHTML(`
				 	<li>
				 		<a href="#${t.id}">${$(t).html()}</a>
				 	</li>`),$(e).append(html),n.push(html)}),$(n).each((o,t)=>{$(t).on("click",function(){l=!0;var o=$(t).find("a[href]").attr("href").slice(1);c(o)})}),$(window).on("scroll",()=>{t,window.scrollY;t=window.scrollY,l||(console.log(l),i())}),i()});const c=o=>{btn=$(`a[href$="#${o}"]`).parent("li"),$(n).each((o,t)=>{$(t)!==btn&&$(t).removeClass("active")}),btn.addClass("active"),setTimeout(()=>l=!1,200)},i=()=>{const l=$(document).height()-$(o)[$(o).length-1].offsetTop-50;let i=0,a;$(o).each((o,t)=>{var e=$(t).offset().top,n=$(window).scrollTop()+$(window).height();i<n-l&&e>i&&e<n-l&&(i=e,a=t)}),c(a.id)}});