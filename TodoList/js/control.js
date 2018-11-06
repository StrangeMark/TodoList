

$(function(){
	//on("触发的事件","选择器名字","要执行的函数方法")
	//id选择器:#id	class选择器:.class
	$(document).on("click",".done",function(){
		if ($(this).is(":checked")) {
			$(this).parent().css("text-decoration","line-through");
		}else{
			$(this).parent().css("text-decoration","none");
		}
			
		
	});
	//添加待办事项
	$("#add-txt").click(function(){
		//.val-->获取输入框中的文字
		var addTxt = $("#txt").val();
		//追加内容,就不用自己去添加
		$("#todolist").append("<li>"+"<input type='checkbox' class='done'>"+addTxt+" <button class='dele'>delete</button>"+"</li>")
		$("#txt").val("");
	});
	
	//document-->起到了页面加载完后新添加的元素也能及时删除的重要角色
	//删除待办事项
	$(document).on("click",".dele",function(){
		$(this).parent().remove();
		alert("Deleted!");
	});
	
});