require.config({
	paths:{
		'jquery':'js/jquery',
		'css':'js/css',
		'text':'js/text',
		'swiper':'js/swiper-3.4.2.min',
		'backbone':'js/backbone',
		'underscore':'js/underscore',
		'zepto-min':'js/zepto-min',
		'zipto-touch':'js/zipto-touch',
		'home':'component/home/home',
		'bubble':'component/bubble/bubble',
	}
});
require(["jquery","backbone"],function($,Backbone){
	$('html').css("fontSize",$(window).width()/3.2+"px");
	$(window).resize(function(){
		$("html").css("fontSize",innerWidth/4+"px");
	})
	
	var Router = Backbone.Router.extend({
		routes:{
			"":"home",
			"home":"home",
			"bubble":"bubble",
			"shopcar":"shopcar",
			"mine":"mine"
		},
		home:function(){
			require(['home'],function(home){
				home.render();
			})
		},
		bubble:function(){
			require(['bubble'],function(bubble){
				bubble.render();
			})
		},
		shopcar:function(){
			console.log(3)
//			require(['shopcar'],function(shopcar){
//				
//			})
		},
		mine:function(){
			console.log(4)
//			require(['mine'],function(mine){
//				
//			})
		}
	})
	
	var router = new Router();
	
	Backbone.history.start();
})

