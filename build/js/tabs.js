$(function(){$(".mobile-tabs");const a=$(".tab"),t=$(".mobile-tabs__info");function c(i){t.each(function(t){i!==t?$(this).removeClass("active"):$(this).addClass("active")})}a.each(function(s){$(this).on("click",t=>{t.preventDefault();const i=this;a.each(function(){this!==i&&$(this).removeClass("active")}),$(this).addClass("active"),c(s)})}),c(0)});