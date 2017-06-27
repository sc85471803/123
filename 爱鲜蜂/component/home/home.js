define(['jquery','swiper','text!component/home/home.html','css!component/home/home.css'],function($,swiper,html){
	return {
		render:function(){
			$('#box').html(html);
			
			$.getJSON("json/home.json",function(reg){
				slideShow(reg.data.act_info[0].act_rows);
				homeIcon(reg.data.act_info[1].act_rows);
				homeBrand(reg.data.act_info[3].act_rows);
				homeBusiness(reg.data.act_info[4].act_rows);
				homeCategory(reg.data.act_info[5].act_rows);
			})
			
			function slideShow(arr){
				for(var i=0;i<arr.length;i++){
					var div = $("<div class='swiper-slide'></div>").appendTo(".swiper-wrapper");
					var imgs = $("<img>").appendTo(div);
					imgs.attr("src",arr[i].activity.img);
				}
				var mySwiper = new Swiper('.swiper-container', {
					autoplay: 5000,//可选选项，自动滑动
					autoplayDisableOnInteraction:false,
					loop:true,
					loopAdditionalSlides : 0,
				    // 如果需要分页器
				    pagination: '.swiper-pagination',
				})
			}
			function homeIcon(arr){
				for(var i=0;i<arr.length;i++){
					var div = $("<div></div>").appendTo(".home-icon");
					var img = $("<img>").appendTo(div);
					img.attr("src",arr[i].activity.img);
					var p = $("<p></p>").appendTo(div);
					p.text(arr[i].activity.name);
				}
			}
			function homeBrand(arr){
				for(var i=0;i<arr.length;i++){
					var div = $("<div></div>").appendTo(".home-brand");
					var img = $("<img>").appendTo(div);
					img.attr("src",arr[i].activity.img);
				}
			}
			function homeBusiness(arr){
				for(var i=0;i<arr.length;i++){
					var arrlist = arr[i].act_rows;
					var div = $("<div class='clearfix'>").appendTo(".home-business");
					if(i==0){
						div.addClass("chead");
						var img = $("<img>").appendTo(div);
						img.attr("src",arrlist[0].chead_detail.img);
					}else if(i==1){
						div.addClass("cactivity");
						for(var j=0;j<arrlist.length;j++){
							var div1 = $("<div>").appendTo(div);
							var img = $("<img>").appendTo(div1);
							img.attr("src",arrlist[j].cactivity_detail.img);
						}
					}else if(i==2){
						for(var j=0;j<arrlist.length;j++){
							var div1 = $("<div class='cicons'>").appendTo(div);
							var img = $("<img>").appendTo(div1);
							img.attr("src",arrlist[j].cicons_detail.img);
							var p = $("<p>").appendTo(div1);
							p.text(arrlist[j].cicons_detail.name);
						}
					}else if(i==3){
						for(var j=0;j<arrlist.length;j++){
							var div1 = $("<div class='cscene'>").appendTo(div);
							var img = $("<img>").appendTo(div1);
							img.attr("src",arrlist[j].cscene_detail.img);
						}
					}
				}
			}
			function homeCategory(arr){
				for(var i=0;i<arr.length;i++){
					var li = $("<li class='home-category-item'>").appendTo(".home-category");
					var div1 = $("<div class='home-category-item-head'>").appendTo(li);
					var span1 = $("<span>").appendTo(div1);
					span1.text(arr[i].category_detail.name);
					span1.css({
						borderLeft:".1rem solid #"+arr[i].category_detail.category_color,
						color:"#"+arr[i].category_detail.category_color,
					})
					var a1 = $("<a href='javascript:viod(0)'>").appendTo(div1);
					a1.text("更多");
					var div2 = $("<div class='home-category-item-img'>").appendTo(li);
					var img1 = $("<img>").appendTo(div2);
					img1.attr("src",arr[i].activity.img);
					var ul = $("<ul class='clearfix'>").appendTo(li);
					var arrlist = arr[i].category_detail.goods;
					for(var j=0;j<arrlist.length;j++){
						var li1 = $("<li class='home-category-item-good'>").appendTo(ul);
						var a2 = $("<a href='javascript:viod(0)'>").appendTo(li1);
						var img2 = $("<img>").appendTo(a2);
						img2.attr("src",arrlist[j].img);
						var p1 = $("<p class='p1'>").appendTo(li1);
						p1.text(arrlist[j].keywords);
						var div3 = $("<div class='item-div'>").appendTo(li1);
						var p2 = $("<p class='p2'>").appendTo(li1);
						p2.text(arrlist[j].specifics);
						var p3 = $("<p class='p3'>").appendTo(li1);
						p3.text("￥"+arrlist[j].price+" ");
						if(arrlist[j].price!=arrlist[j].market_price){
							var span = $("<span>").appendTo(p3);
							span.text("￥"+arrlist[j].market_price);
						}
						var div4 = $("<div class='item-add'>").appendTo(li1);
						div4.text("+");
					}
				}
			}
		}
	}
})