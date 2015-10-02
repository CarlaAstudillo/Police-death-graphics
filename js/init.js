$(document).ready(function() {


	var windwidth= $(window).width();
	var first = 0;
	var second = 0;
	var third = 0;
	var regularnum = 0;
	var fourth = 0;
	var fifth = 0;
	var sixth = 0;
	var space = 19;
	var rowNum = Math.round(windwidth/26);
var containheight = $(".interactiveContainer").height(); 
	var counter = 0;
	start();
	organize();

	console.log(windwidth)

	

	


	function start() {
		for (i = 0; i < data.length; i++) {
			
			var cell = "<div class='circle " + data[i].manner_of_death +  "' style='background: " + data[i].color + "' id='circle" + i + "' rel='" + i + "' data='" + data[i].manner_of_death + "'><div class='cases'></div></div></a>";
			$(".circleContainer").append(cell);
			
		}
	}

	function organize() {

		first = 0;
		second = 0;
		third = 0;
		fourth = 0;
		fifth = 0;
		sixth = 0;
		regularnum = 0;
		for (i = 0; i < data.length; i++) {
			
			
			if (!data[i].manner_of_death) {
				firstgroup(i,first);
				first++;
			} else {
				regular(i,regularnum)
				regularnum++;
			}
		}
	}

	

	function firstgroup(node,n) {
	var windwidth= $(window).width();
	var rowNum = Math.round(windwidth/175);

	if (windwidth < 630) {
			var rowNum = Math.round(windwidth/20);
			$("#c1").css("width", "100%");
		}
	else {
		$("#c1").css("width", "15.3667%")

	}
	var mult = Math.floor(n/rowNum)+1;
	var leftShift = rowNum*space + space*n - (rowNum*space*mult);
  var responsiveheight = $(".interactiveContainer").height();
  var divheight = $("#c1").height();


	$("#circle" + node).css("left", leftShift + "px")
	.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		

if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}







		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			if (windwidth < 630) {
			var rowNum2 = Math.round(windwidth/20);
			$("#c1").css("width", "100%");
		}

		else {
			$("#c1").css("width", "15.3667%");

		}
	
			var mult = Math.floor(n/rowNum2)+1;
      var responsiveheight2 = $(".interactiveContainer").height()+ 2;
	var leftShift = rowNum2*space + space*n - (rowNum2*space*mult);
	var divheight = $("#c1").height();

		

	
		
		$("#circle" + node).css("left", leftShift + "px").css("top",mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
		
		


	if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}

               
                
            });
		
	}



	function secondgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		if (windwidth < 630) {
			var rowNum = Math.round(windwidth/20);
		}
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		var divheight = $("#c2").height();
		
		

		if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else if (divheight < 15) {
	$("#circle" + node).css("top", mult*space)


}

if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 64444/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	


		}

else {
	$("#c2").css("position", "static")
	$("#c2").css("width", "15.3667%")
	$("#circle" + node).css("left",rightShift +windwidth/6.43 +"px")
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");


}

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			if (windwidth < 630) {
			var rowNum2 = Math.round(windwidth/20);
		}
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		var divheight = $("#c2").height();
		if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}
if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 64444/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	
		}

		else {
	$("#c2").css("position", "static")
	.css("width", "15.3667%")
		
	$("#circle" + node).css("left",rightShift +windwidth/6.43 + "px")
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	}


		

               
                
            });

		
	}
	function thirdgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		if (windwidth < 630) {
			var rowNum = Math.round(windwidth/20);
		}
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		var divheight = $("#c3").height();

		if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 94444/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	
		}
		else {
			$("#c3").css("position", "static")
	.css("width", "15.3667%");
		
		$("#circle" + node).css("left",rightShift +windwidth/3.23 +"px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	}

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			if (windwidth < 630) {
			var rowNum2 = Math.round(windwidth/20);
		}
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);

		if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 94444/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	
		}

		else {
		$("#c3").css("position", "static")
	.css("width", "15.3667%");
		$("#circle" + node).css("left",rightShift +windwidth/3.23 + "px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
          }     
                
            });


		
	}



	function fourthgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		if (windwidth < 630) {
			var rowNum = Math.round(windwidth/20);
		}
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		var divheight = $("#c4").height();



		
if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}

if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 124444/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	
}

else {
		$("#c4").css("position", "static")
	.css("width", "15.3667%");
		$("#circle" + node).css("left",rightShift +windwidth/2.16 +"px")
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
		}


		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			if (windwidth < 630) {
			var rowNum2 = Math.round(windwidth/20);
		}
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		var divheight = $("#c4").height();
		if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}
		
		
		if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 124444/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	
}

else {
		$("#c4").css("position", "static")
	.css("width", "15.3667%");
	
		$("#circle" + node).css("left",rightShift +windwidth/2.16 +"px")
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
		}
		
               
                
            });

		
	}
	function fifthgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		if (windwidth < 630) {
			var rowNum = Math.round(windwidth/20);
		}
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		var divheight = $("#c5").height();



		

		if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 153333/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	
}

else {
		$("#c5").css("position", "static")
		.css("width", "15.3667%");

		$("#circle" + node).css("left",rightShift +windwidth/1.62 +"px")
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}
		}

		
		
		

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			if (windwidth < 630) {
			var rowNum2 = Math.round(windwidth/20);
		}
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		var divheight = $("#c5").height();



		

		
		if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 153333/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	
}

else {
		$("#c5").css("position", "static")
	.css("width", "15.3667%");
		$("#circle" + node).css("left",rightShift +windwidth/1.62 +"px")
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}



		}

		
               
                
            });

		
	}
	function sixthgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		if (windwidth < 630) {
			var rowNum = Math.round(windwidth/20);
		}
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		var divheight = $("#c6").height();



		

		if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 182222/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	$("#c6").css("top", mult*space + 172222/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");
}

else {
		$("#c6").css("position", "static")
		.css("width", "15.3667%");

		$("#circle" + node).css("left",rightShift +windwidth/1.294 +"px")
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}
		}

		
		
		

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			if (windwidth < 630) {
			var rowNum2 = Math.round(windwidth/20);
		}
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		var divheight = $("#c6").height();



		

		
		if (windwidth < 630){
	$("#circle" + node).css("top", mult*space + 182222/windwidth)
	.css("left", rightShift + "px")
	.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
	
}

else {
		$("#c6").css("position", "static")
	.css("width", "15.3667%");
		$("#circle" + node).css("left",rightShift +windwidth/1.294 +"px")
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		if (divheight > 15){
	$("#circle" + node).css("top", mult*space+windwidth/65)
		}

else {
	$("#circle" + node).css("top", mult*space)


}



		}

		
               
                
            });

		
	}
	function regular(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/20);
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		
		$("#circle" + node).css("left",rightShift + "px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/20);
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		
		$("#circle" + node).css("left",rightShift + "px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
               
                
            });

		
	}

	$(".button").on("click",function(e) {
		var theRel = $(this).attr("rel");
var respheight= $(".interactiveContainer").height();
var windwidth= $(window).width();

		     // set button active/non-active

    setContent($(this));

if (windwidth < 630)  {

	$("#c2").css("top", 64444/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");
	$("#c3").css("top", 93333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c6").css("top", 182222/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");

$("#c5").css("top", 153333/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");

$("#c4").css("top", 123333/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");
		
	}		


	$(window).resize(function(){

		var windwidth= $(window).width();

		if (windwidth < 630)  {
			var respheight= $("body").height();
			$("body").css("height", respheight + 5);
	$("#c2").css("top", 64444/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");
	$("#c3").css("top", 93333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c6").css("top", 182222/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");

$("#c5").css("top", 153333/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");

$("#c4").css("top", 123333/windwidth)
	.css("left", "0px")
	.css("position", "absolute")
	.css("width", "100%");
		
	}

	});

 


$('.button.active').length && setContent($('.button.active'));

function setContent($el) {
    $('.button').removeClass('active');
    
    
    $el.addClass('active');
}
// if different situations

		if (theRel == "reset") {
			
			var amount = "<b>Legend</b>";			
	var descrip = "<div class='descrip'>Every circle = 1 death<br> Hover over for more details</div>";
	
	$(".explainer").html( amount+ descrip);
	$("#c6").html( "");
	$("#c1").html( "");
	$("#c2").html( "");
	$("#c3").html( "");
	$("#c4").html( "");
	$("#c5").html( "");
	organize();
	$("body").css("height", "600px");
	pym.Child();
	

		}

		if (theRel == "mannerofdeath") {

				
	var amount = "<div class='amount'>Manner of Death</div>";			
	var descrip = "<div class='descrip'>In most cases, the deceased was killed by a police officer and labeled as a homicide.</div>";
	$( "div" ).add( "#c6" );
	
	

	

	

	
if (windwidth < 400) {
		$("body").css("height", respheight+350);
		
	}
	
	  else if (windwidth < 630) {
		$("body").css("height", respheight + 150);
		
	}		

 else if (windwidth < 950) {
			$("body").css("height", respheight + windwidth/4);

		}

		else if (windwidth < 1030) {
			$("body").css("height", respheight + windwidth/9);

		}
		

		else if (windwidth > 1030) {
			$("body").css("height", respheight + windwidth/12);

		}

		
var bodyheight = $("body").height();


		
	
	$(".explainer").html( amount+ descrip);
	$("#c1").html( "Killed by Police");
	$("#c2").html( "Excited Delirium");
	$("#c3").html( "Natural");
	$("#c4").html( "Accident");
	$("#c5").html( "Suicide");
	$("#c6").html( "Unknown");
	reorganize();
	pym.Child();

	
}
		if (theRel == "race") {
			
				
	var amount = "<div class='amount'>Race</div>";			
	var descrip = "<div class='descrip'>African-Americans made up 55 percent of deaths. Most were killed by police.</div>";
	
	$(".explainer").html( amount+ descrip);

	$("#c1").html( "Black");
	$("#c2").html( "Hispanic");
	$("#c3").html( "White");
	$("#c4").html( "Asian");
	$("#c5").html( "Native American");
	$("#c6").html( "Unknown");
	
	

	byrace();

	if (windwidth < 400) {
		$("body").css("height", respheight+300);
		$("#c2").css("top", 53333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c3").css("top", 93333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c2").css("top", 63333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c4").css("top", 124444/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		
		
	}
	
	  else if (windwidth < 630) {
		$("body").css("height", respheight + 200);
		$("#c2").css("top", 53333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c3").css("top", 93333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c2").css("top", 63333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c4").css("top", 127777/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		
	}		

 else if (windwidth < 950) {
			$("body").css("height", respheight + windwidth/6);

		}

		else if (windwidth < 1030) {
			$("body").css("height", respheight + windwidth/11);

		}
		

		else if (windwidth > 1030) {
			$("body").css("height", respheight + windwidth/13);

		}
		

		pym.Child();


		$(window).resize(function(){
			var windwidth= $(window).width();
			pym.Child();
		if (windwidth < 400) {
		$("body").css("height", respheight+300);
		$("#c2").css("top", 53333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c3").css("top", 93333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c2").css("top", 63333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c4").css("top", 124444/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		
		
	}
	
	  else if (windwidth < 630) {
		$("body").css("height", respheight + 100);
		$("#c2").css("top", 53333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c3").css("top", 93333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c2").css("top", 63333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c4").css("top", 127777/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		
	}		

 else if (windwidth < 950) {
			$("body").css("height", respheight + windwidth/6);

		}

		else if (windwidth < 1030) {
			$("body").css("height", respheight + windwidth/11);

		}
		

		else if (windwidth > 1030) {
			$("body").css("height", respheight + windwidth/13);

		}
		

		

	});


				
			
		}
		if (theRel == "police") {

			
			var amount = "<div class='amount'>Police Agencies (Top Five)</div>"; 
			var descrip = "<div class='descrip'>Newark Police Department had the most, with 19 deaths, more than twice as many as Jersey City and Elizabeth. The State Police, with a larger force and coverage area, had 15 deaths.</div>";
	
	$(".explainer").html( amount + descrip);
	$("#c6").html( "Other Police Depts");
	$("#c1").html( "Newark");
	$("#c2").html( "NJ State Police");
	$("#c3").html( "Jersey City");
	$("#c4").html( "Elizabeth");
	$("#c5").html( "Trenton");
	
	bypolice();
	
	if (windwidth < 400) {
		$("body").css("height", respheight+550);
		$("#c6").css("top", 182222/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		
	}
	
	  else if (windwidth < 630) {
		$("body").css("height", respheight + 320);
		$("#c6").css("top", 182222/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		
	}		

 else if (windwidth < 950) {
			$("body").css("height", respheight + windwidth/6);

		}

		else if (windwidth < 1030) {
			$("body").css("height", respheight + windwidth/11);

		}
		

		else if (windwidth > 1030) {
			$("body").css("height", respheight + windwidth/13);

		}

		pym.Child();

		

}

		
		if (theRel == "armed") {
			
			var amount = "<div class='amount'>Were they armed?</div>"; 
			var descrip = "<div class='descrip'>In most cases where police killed a suspect, the person either discharged or displayed some kind of weapon. There were 15 incidents in which the person killed by police was unarmed.</div>";
			$(".explainer").html( amount + descrip);
			$("#c6").html( "");
	$("#c1").html( "Discharged firearm");
	$("#c2").html( "Used knife or other weapons");
	$("#c3").html( "Carried firearm");
	$("#c4").html( "Carried knife or other weapons");
	$("#c5").html( "No weapon found");
byarmed();

	if (windwidth < 400) {
		$("body").css("height", respheight+300);
		$("#c3").css("top", 93333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c4").css("top", 123333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c5").css("top", 152222/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		
	}
	
	  else if (windwidth < 630) {
		$("body").css("height", respheight + 150);
		$("#c3").css("top", 93333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c4").css("top", 123333/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
		$("#c5").css("top", 152222/windwidth).css("left", "0px").css("position", "absolute").css("width", "100%");
	
	}		

 else if (windwidth < 950) {
			$("body").css("height", respheight + windwidth/15);

		}

		else if (windwidth < 1030) {
			$("body").css("height", respheight + windwidth/20);

		}
		

		else if (windwidth > 1030) {
			$("body").css("height", respheight + windwidth/22);

		}
	pym.Child();
		}
		
function reorganize() {

	first = 0;
		second = 0;
		third = 0;
		fourth = 0;
		fifth = 0;
		sixth = 0;
		for (i = 0; i < data.length; i++) {
			
		
			
     

			if (data[i].manner_of_death == "Excited delirium" || data[i].manner_of_death == "Unknown*" || data[i].manner_of_death == "Homicide by law enforcement*" ) {
				secondgroup(i,second)
				second++;
			} 
			else if (data[i].manner_of_death == "Natural") {
				thirdgroup(i,third)
				third++;
			}
			else if (data[i].manner_of_death == "Accident") {
				fourthgroup(i,fourth)
				fourth++;
			} 
			else if (data[i].manner_of_death == "Suicide") {
				fifthgroup(i,fifth)
				fifth++;
			}
			else if (data[i].manner_of_death == "Unknown") {
				sixthgroup(i,sixth)
				sixth++;
			}

			else {
				firstgroup(i,first);
				first++;
			}
		}
	}


function byrace() {

	first = 0;
		second = 0;
		third = 0;
		fourth = 0;
		fifth = 0;
		sixth = 0;
		for (i = 0; i < data.length; i++) {
			
		
			
     

			if (data[i].race == "Hispanic") {
				secondgroup(i,second)
				second++;
			} 
			else if (data[i].race == "White") {
				thirdgroup(i,third)
				third++;
			}
			else if (data[i].race == "Asian") {
				fourthgroup(i,fourth)
				fourth++;
			} 
			else if (data[i].race == "American Indian or Alaska Native") {
				fifthgroup(i,fifth)
				fifth++;
			}
			else if (data[i].race == "Unknown") {
				sixthgroup(i,sixth)
				sixth++;
			}

			else {
				firstgroup(i,first);
				first++;
			}
		}
	}

	function bypolice() {

	first = 0;
		second = 0;
		third = 0;
		fourth = 0;
		fifth = 0;
		sixth = 0;
		for (i = 0; i < data.length; i++) {
			
		
			
     

			if (~data[i].police_agency.indexOf("Newark Police Department")) {
				firstgroup(i,first)
				first++;
			} 
			else if (~data[i].police_agency.indexOf("New Jersey State Police")) {
				secondgroup(i,second)
				second++;
			}
			else if (~data[i].police_agency.indexOf("Jersey City Police Department")) {
				thirdgroup(i,third)
				third++;
			} 
			else if (~data[i].police_agency.indexOf("Elizabeth Police Department")) {
				fourthgroup(i,fourth)
				fourth++;
			}
			else if (~data[i].police_agency.indexOf("Trenton Police Department")) {
				fifthgroup(i,fifth)
				fifth++;
			}

			else {
				sixthgroup(i,sixth);
				sixth++;
			}
		}
	}

	function byarmed() {

	first = 0;
		second = 0;
		third = 0;
		fourth = 0;
		fifth = 0;
		sixth = 0;
		for (i = 0; i < data.length; i++) {
			
		
			
     

			if (data[i].weapon2 == "Yes, discharged firearm") {
				firstgroup(i,first)
				first++;
			} 
			else if (data[i].weapon2 == "Yes, discharged") {
				secondgroup(i,second)
				second++;
			}
			else if (data[i].weapon2 == "Yes, carried firearm") {
				thirdgroup(i,third)
				third++;
			} 
			else if (data[i].weapon2 == "Yes, carried") {
				fourthgroup(i,fourth)
				fourth++;
			}
			else if (data[i].weapon2 == "No") {
				fifthgroup(i,fifth)
				fifth++;
			}

			else {
				sixthgroup(i,sixth);
				sixth++;
			}
		}
	}

	});



 


function makeExplainer(node) {
	var name = "<div class='descrip'><b>" + data[node].name + "</b></div>";
	var manner = "<div class='explainerSchool'>" + data[node].manner_of_death + "</div>";
	var race = "<div class='explainerSchool'><b>Race:</b> " + data[node].race + "</div>";
	var weapon = "<div class='explainerSchool'><b>Weapon?</b> " + data[node].weapon + "</div>";
	var police = "<div class='explainerSchool'> " + data[node].police_agency + "</div>";
	
	$(".cases").html('<div class="descrip">' + name + manner + race + weapon + '</div>');
}
$(".circle").on("mousemove",function(e) {
	var num = Number($(this).attr("rel"));
	makeExplainer(num);



	

	var verticaldiff =  e.clientY;
	var horizontaldiff =  e.clientX;



	if (horizontaldiff > 200 && verticaldiff > 550){
		$('.cases').css('left', horizontaldiff - 180).css('top', verticaldiff - 100).css('display', 'block');
	}
	else if (horizontaldiff > 200 && verticaldiff < 550){
		$('.cases').css('left', horizontaldiff - 180).css('top', verticaldiff + 10).css('display', 'block');
	}
	else if (horizontaldiff < 200 && verticaldiff > 575){
	
		$('.cases').css('left', horizontaldiff + 10).css('top', verticaldiff -100).css('display', 'block');
	}
	else if (horizontaldiff < 200 && verticaldiff < 575) {
	$('.cases').css('left', horizontaldiff + 10).css('top', verticaldiff + 10).css('display', 'block');
}

else 
{
	$(".cases").css('display', 'none');
}
});
	$(".circle").on("mouseout",function() {
	$(".cases").css('display', 'none');

});




});