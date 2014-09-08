


$(function() {



	

	var windwidth= $(window).width();
	var left = 0;
	var right = 0;
	var middle = 0;
	var space = 25;
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
			
			var cell = "<div class='circle " + data[i].classadd +  "' style='background: " + data[i].color + "' id='circle" + i + "' rel='" + i + "' data='" + data[i].amount + "'></div></a>";
			$(".circleContainer").append(cell);
			
		}
	}

	function organize() {
		left = 0;
		right = 0;
		middle = 0;
		for (i = 0; i < data.length; i++) {
			
			var yes = false;
			

			if (!data[i].amount) {
				yes = true;
			}
			if (yes) {
				leftMove(i,left);
				left++;
			} else {
				rightMove(i,right)
				right++;
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
			organize();
			var amount = "<b>Legend</b>";			
	var descrip = "<div class='descrip'>Every circle = 10 million dollars</div>";
	
	$(".explainer").html( amount+ descrip);

		}

		if (theRel == "obligated") {
				reorganize();
				
	var amount = "<div class='amount'>$361.9 million dollars</div>";			
	var descrip = "<div class='descrip'>This is money has been approved but not distributed yet-- making up about <b>32.9 percent</b> of available funds. It could be for a number of reasons: they haven't found a contractor, inspections aren't done, etc. The applicant has shown that they fit the criteria, and the state has agreed to give them the money, but they haven't gotten to the point where the work is gonna start just yet.</div>";
	
	$(".explainer").html( amount+ descrip);

				
			
		}
		if (theRel == "disbursed") {
			reorganize();
			var amount = "<div class='amount'>$121 million</div>"; 
			var descrip = "<div class='descrip'>This is the money that has been approved and distributed to applicants-- making up about <b>11 percent</b> of available funds.</div>";
	
	$(".explainer").html( amount + descrip);
}

		if (theRel == "operations") {
			reorganize();
			var amount = "<div class='amount'>$110 million</div>"; 
			var descrip = "<div class='descrip'>About <b>10 percent</b> of the funds received are set aside for the cost of running the disbursement program. These operations costs include payroll, building costs, among other things. </div>";
			$(".explainer").html( amount + descrip);
		}
		if (theRel == "notdisbursed") {
			reorganize();
			var amount = "<div class='amount'>$507.1 million</div>"; 
			var descrip = "<div class='descrip'>About <b>46.1 percent</b> of the funds have neither been approved nor distributed to applicants. </div>";
			$(".explainer").html( amount + descrip);
		}
function reorganize() {
	left = 0;
		right = 0;
		middle = 0;
		for (i = 0; i < data.length; i++) {
			
		
			

			if (data[i].classadd == theRel) {
				
				leftMove(i,left);
				left++;
			} else {
				rightMove(i,right)
				right++;
			}
		}
	}
	});






$(".button").on("mouseenter",function() {
	var num = $(this).attr("rel");
	
	if (num == "obligated") {
		$('.obligated').removeClass("fade");
		 $('.disbursed').addClass("fade");
		 $('.operations').addClass("fade");
		 $('.notdisbursed').addClass("fade");
		 
		 
	}
	if (num == "disbursed") {
		$('.obligated').addClass("fade");
		 $('.disbursed').removeClass("fade");
		 $('.operations').addClass("fade");
		 $('.notdisbursed').addClass("fade");
	}
	if (num == "operations") {
		$('.obligated').addClass("fade");
		 $('.disbursed').addClass("fade");
		 $('.operations').removeClass("fade");
		 $('.notdisbursed').addClass("fade");
	}
	if (num == "notdisbursed") {
		$('.obligated').addClass("fade");
		 $('.disbursed').addClass("fade");
		 $('.operations').addClass("fade");
		 $('.notdisbursed').removeClass("fade");
	}
	


	
}).on("mouseleave",function() {
	$('.obligated').removeClass("fade");
		 $('.disbursed').removeClass("fade");
		 $('.operations').removeClass("fade");
		 $('.notdisbursed').removeClass("fade");
	
});





function makeExplainer(node) {
	var title = "<div class='descrip'>" + data[node].title + "</div>";
	var school = "<div class='explainerSchool'>" + data[node].amount + "</div>";
	
	$(".explainer").html(school + title);
}

function leftMove(node,n) {
	var windwidth= $(window).width();
	var rowNum = Math.round(windwidth/26);
	var mult = Math.floor(n/rowNum)+1;
	var leftShift = rowNum*space + space*n - (rowNum*space*mult);
	$("#circle" + node).css("left", leftShift+25 + "px")
	.css("top",mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/26);
			var mult = Math.floor(n/rowNum2)+1;
	var leftShift = rowNum2*space + space*n - (rowNum2*space*mult);
		$("#circle" + node).css("left", leftShift+25 + "px")
	.css("top",mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
               
                
            });
		
	}

	function rightMove(node,n) {
		var windwidth= $(window).width();
		var rowNum = Math.round(windwidth/26);
		var mult = Math.floor(n/rowNum)+1;
		var rightShift = rowNum*space + space*n - (rowNum*space*mult);
		var responsiveheight = $(".circleContainer").height();
		$("#circle" + node).css("left",rightShift + 25 + "px")
		.css("top", responsiveheight - mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");

		$(window).resize(function(){
			var windwidth= $(window).width();
			var rowNum2 = Math.round(windwidth/26);
			var mult = Math.floor(n/rowNum2)+1;
		var rightShift = rowNum2*space + space*n - (rowNum2*space*mult);
		var responsiveheight2 = $(".circleContainer").height()+ 2;
		$("#circle" + node).css("left",rightShift + 25 + "px")
		.css("top", responsiveheight2 - mult*space)
		.css("transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-webkit-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-moz-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-o-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out")
		.css("-ms-transition","all " + (Math.round(Math.random()*1500) + 200) + "ms ease-out");
               
                
            });

		
	}

});