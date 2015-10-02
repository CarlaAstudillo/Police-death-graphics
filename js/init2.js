


$(function() {


	var windwidth= $(window).width();
	console.log("This is the width of the interactive: " + windwidth);
	var first = 0;
	var second = 0;
	var third = 0;
	var regularnum = 0;
	var fourth = 0;
	var fifth = 0;
	var sixth = 0;
	var space = 19;
	var rowNum = Math.round(windwidth/26);
var containheight = $(".circleContainer").height(); 
	var counter = 0;
	start();
	organize();
	

	$(window).resize(function(){
		var responsiveheight = $(".circleContainer").height()+ 0.85;
		$(".circleContainer").height(responsiveheight);
		console.log("responsiveheight " + responsiveheight  )
		 var rowNum = Math.round(windwidth/26);

               
                if(responsiveheight < 767) {
                }
            });


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

	$(".button").on("click",function(e) {
		var theRel = $(this).attr("rel");

		     // set button active/non-active

    setContent($(this));


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

		}

		if (theRel == "mannerofdeath") {
				
				
	var amount = "<div class='amount'>Manner of Death</div>";			
	var descrip = "<div class='descrip'>In most cases, the deceased was killed by a police officers and labeled as a homicide.</div>";
	$( "div" ).add( "#c6" );
	$(".explainer").html( amount+ descrip);
	$("#c1").html( "Killed by Police");
	$("#c2").html( "Excited Delirium");
	$("#c3").html( "Natural");
	$("#c4").html( "Accident");
	$("#c5").html( "Suicide");
	$("#c6").html( "Unknown");
	reorganize();

				
			
		}

		if (theRel == "race") {
				
				
	var amount = "<div class='amount'>Race</div>";			
	var descrip = "<div class='descrip'>In most cases, the person killed was a black male</div>";
	
	$(".explainer").html( amount+ descrip);

	$("#c1").html( "Black");
	$("#c2").html( "Hispanic");
	$("#c3").html( "White");
	$("#c4").html( "Asian");
	$("#c5").html( "Native American");
	$("#c6").html( "Unknown");
	byrace();

				
			
		}
		if (theRel == "police") {
			
			var amount = "<div class='amount'>Police Agencies (Top Five)</div>"; 
			var descrip = "<div class='descrip'>Newark Police Department had more people die in its custody than State Police. Twice more than Jersey City.</div>";
	
	$(".explainer").html( amount + descrip);
	$("#c6").html( "Other Police Depts");
	$("#c1").html( "Newark");
	$("#c2").html( "NJ State Police");
	$("#c3").html( "Jersey City");
	$("#c4").html( "Elizabeth");
	$("#c5").html( "Trenton");
	bypolice();
}

		
		if (theRel == "armed") {
			
			var amount = "<div class='amount'>Were they armed?</div>"; 
			var descrip = "<div class='descrip'>Maybe. More explaination here TK </div>";
			$(".explainer").html( amount + descrip);
			$("#c6").html( "");
	$("#c1").html( "Discharged firearm");
	$("#c2").html( "Used knife or other weapons");
	$("#c3").html( "Carried firearm");
	$("#c4").html( "Carried knife or other weapons");
	$("#c5").html( "No weapon found");
byarmed();
		}
		if (theRel == "Unknown") {
			reorganize();
			var amount = "<div class='amount'>Unknown</div>"; 
			var descrip = "<div class='descrip'>About <b>46.1 percent</b> of the funds have neither been approved nor distributed to applicants. </div>";
			$(".explainer").html( amount + descrip);
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


	var windheight= $(document).height();

	var intContain = Number($( ".interactiveContainer" ).innerHeight());

	

	var verticaldiff = windheight - event.clientY;


	if (event.clientX > 500 && verticaldiff < 175){
		$('.cases').css('left', e.pageX - 180).css('top', event.clientY - 100).css('display', 'block');
	}
	else if (event.clientX > 500 && verticaldiff > 175){
		$('.cases').css('left', e.pageX - 180).css('top', event.clientY + 10).css('display', 'block');
	}
	else if (event.clientX < 500 && verticaldiff < 175){
		$('.cases').css('left', e.pageX + 10).css('top', event.clientY -100).css('display', 'block');
	}
	else {
	$('.cases').css('left', e.pageX + 10).css('top', event.clientY + 10).css('display', 'block');
}
}).on("mouseout",function() {
	$(".cases").css('display', 'none');
});

function firstgroup(node,n) {
	var windwidth= $(window).width();
	var rowNum = Math.round(windwidth/175);
	var mult = Math.floor(n/rowNum)+1;
	var leftShift = rowNum*space + space*n - (rowNum*space*mult);
  var responsiveheight = $(".circleContainer").height();
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
			var mult = Math.floor(n/rowNum2)+1;
      var responsiveheight2 = $(".circleContainer").height()+ 2;
	var leftShift = rowNum2*space + space*n - (rowNum2*space*mult);

		$("#circle" + node).css("left", leftShift + "px")
	.css("top",mult*space)
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
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		var divheight = $("#c2").height();
		
		$("#circle" + node).css("left",rightShift +windwidth/6.15 +"px")
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
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		var divheight = $("#c2").height();
		
		$("#circle" + node).css("left",rightShift +windwidth/6.15 + "px")
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
	function thirdgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		
		$("#circle" + node).css("left",rightShift +windwidth/3.10 +"px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		
		$("#circle" + node).css("left",rightShift +windwidth/3.10 + "px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
               
                
            });


		
	}



	function fourthgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		var divheight = $("#c4").height();


		
		$("#circle" + node).css("left",rightShift +windwidth/2.073 +"px")
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
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		var divheight = $("#c4").height();
		
		
		$("#circle" + node).css("left",rightShift +windwidth/2.073 + "px")
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
	function fifthgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		
		$("#circle" + node).css("left",rightShift +windwidth/1.548 +"px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		
		$("#circle" + node).css("left",rightShift +windwidth/1.548 + "px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
               
                
            });

		
	}
	function sixthgroup(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/175);
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		
		$("#circle" + node).css("left",rightShift +windwidth/1.240 +"px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/175);
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		
		$("#circle" + node).css("left",rightShift +windwidth/1.240 + "px")
		.css("top", mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
               
                
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

});