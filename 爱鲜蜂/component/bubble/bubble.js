define(['jquery','underscore','text!component/bubble/bubble.html','css!component/bubble/bubble.css'],function($,_,html){
	return {
		render:function(){
			var num = 1;
			
			$("#box").html(html);
			
			$.getJSON("json/category.json",function(reg){
				categories(reg.data.categories);
				var arr = reg.data.products[$(".categories>li:first-child").val()];
				bubbleList(arr);
				
				$(".categories>li").click(function(){
					$(".categories>li>span").removeClass("spanY");
					$(this).children("span").addClass("spanY");
					arr = px(reg.data.products[$(this).val()]);
					bubbleList(arr);
				})
				
				$(".titles-flpx>span").click(function(){
					$(".titles-flpx>span").removeClass("spanY");
					$(this).addClass("spanY");
					$(".titles-sort").html($(this).html());
					$(".titles-flpx-box").hide();
					num = 1;
					arr = px(arr);
					bubbleList(arr);
				})
			})
			function categories(arr){
				for(var i=0;i<arr.length;i++){
					var li = $("<li>").appendTo(".categories");
					li[0].value = arr[i].id;
					li.text(arr[i].name);
					if(arr[i].flag){
						li.css({
							background:"url("+arr[i].flag+") no-repeat right top #f8f8f8",
							backgroundSize:".32rem .32rem",
						})
					}
					var span = $("<span>").appendTo(li);
				}
				$($(".categories>li>span")[0]).addClass("spanY");
			}
			
			function bubbleList(arr){
				$(".bubble-list>ul").empty();
				for(var i=0;i<arr.length;i++){
					var li = $("<li class='bubble-list-item'>").appendTo(".bubble-list>ul");
					var a = $("<a href='javascript:viod(0)'>").appendTo(li);
					var div1 = $("<div class='list-item-img'>").appendTo(a);
					var img = $("<img>").appendTo(div1);
					img.attr("src",arr[i].img);
					var div2 = $("<div class='list-item-warp'>").appendTo(a);
					var p1 = $("<p class='p1'>").appendTo(div2);
					p1.text(arr[i].name);
					var div3 = $("<div class='item-div'>").appendTo(div2);
					var p2 = $("<p class='p2'>").appendTo(div2);
					p2.text(arr[i].specifics);
					var p3 = $("<p class='p3'>").appendTo(div2);
					p3.text("￥"+arr[i].price+" ");
					if(arr[i].price!=arr[i].market_price){
						var span = $("<span>").appendTo(p3);
						span.text("￥"+arr[i].market_price);
					}
					var div4 = $("<div class='item-add'>").appendTo(div2);
					div4.text("+");
				}
			}
			//排序
			function px(arr){
				var arrList = arr;
				if($(".titles-sort").html()=="综合排序"){
					
				}else if($(".titles-sort").html()=="销量最高"){
					
				}else if($(".titles-sort").html()=="价格最高"){
					for(var i=0;i<arrList.length;i++){
						for(var j=i+1;j<arrList.length;j++){
							if(parseFloat(arrList[i].price)<parseFloat(arrList[j].price)){
								var str = arrList[i];
								arrList[i] = arrList[j];
								arrList[j] = str;
							}
						}
					}
				}else if($(".titles-sort").html()=="价格最低"){
					for(var i=0;i<arrList.length;i++){
						for(var j=i+1;j<arrList.length;j++){
							if(parseFloat(arrList[i].price)>parseFloat(arrList[j].price)){
								var str = arrList[i];
								arrList[i] = arrList[j];
								arrList[j] = str;
							}
						}
					}
				}
				return arrList;
			}
			
			$(".titles-sort").click(function(){
				if(num){
					$(".titles-flpx-box").show();
					num = 0;
				}else{
					$(".titles-flpx-box").hide();
					num = 1;
				}
			})
			
		}
	}
})
