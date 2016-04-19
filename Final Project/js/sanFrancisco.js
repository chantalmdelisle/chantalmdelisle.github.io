$(document).ready(function() {
  $(document).scrollTop(0);
});

//BEGINNING PROMPT 1: SAN FRANCISCO//
$("#sanFrancisco").on("click", function(){
	$(document).scrollTop(0);
	$("#wrapper").removeClass("active");
	$(".sanFrancisco").addClass("active");
});
//PREVIOUS - RETURN TO BEGINNING//
$("#sanFranciscoPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".sanFrancisco").removeClass("active");
	$(".beginning").addClass("active");
});


// San Francisco Prompt 1: Find an Apartment

//SAN FRANCISCO PROMPT 1: APARTMENT//
$("#findApartment").on("click", function(){
	$(document).scrollTop(0);
	$("#wrapper").removeClass("active");
	$(".findApartment").addClass("active");
});
//PREVIOUS - RETURN TO SAN FRANCISCO//
$("#findApartmentPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".findApartment").removeClass("active");
	$(".sanFrancisco").addClass("active");
});

//APARTMENT PROMPT 1: FULL HOUSE//
$("#fullHouse").on("click", function(){
	$(document).scrollTop(0);
	$("#wrapper").removeClass("active");
	$(".fullHouse").addClass("active");
});
//PREVIOUS - RETURN TO APARTMENT//
$("#fullHousePrev").on("click", function(){
	$(document).scrollTop(0);
	$(".fullHouse").removeClass("active");
	$(".findApartment").addClass("active");
});

//APARTMENT PROMPT 2: MRS DOUBTFIRE//
$("#mrsDoubtfire").on("click", function(){
	$(document).scrollTop(0);
	$("#wrapper").removeClass("active");
	$(".mrsDoubtfire").addClass("active");
});
//PREVIOUS - RETURN TO APARTMENT//
$("#mrsDoubtfirePrev").on("click", function(){
	$(document).scrollTop(0);
	$(".mrsDoubtfire").removeClass("active");
	$(".findApartment").addClass("active");
});

//FULLHOUSE PROMPT 1: CITYVIEW//
$("#cityView").on("click", function(){
	$(document).scrollTop(0);
	$(".fullHouse").removeClass("active");
	$(".cityView").addClass("active");
});
//PREVIOUS - RETURN TO FULLHOUSE//
$("#cityViewPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".cityView").removeClass("active");
	$(".fullHouse").addClass("active");
});


//FULLHOUSE PROMPT 2: BAYVIEW//
$("#bayView").on("click", function(){
	$(document).scrollTop(0);
	$(".fullHouse").removeClass("active");
	$(".bayView").addClass("active");
});
//PREVIOUS - RETURN TO FULLHOUSE
$("#bayViewPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".bayView").removeClass("active");
	$(".fullHouse").addClass("active");
});


//MRS DOUBTFIRE PROMPT 1: STREETCAR//
$("#streetcar").on("click", function(){
	$(document).scrollTop(0);
	$(".mrsDoubtfire").removeClass("active");
	$(".streetcar").addClass("active");
});
//PREVIOUS - RETURN TO MRS DOUBTFIRE//
$("#streetcarPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".streetcar").removeClass("active");
	$(".mrsDoubtfire").addClass("active");
});

//MRS DOUBTFIRE PROMPT 2: DRIVE//
$("#drive").on("click", function(){
	$(document).scrollTop(0);
	$(".mrsDoubtfire").removeClass("active");
	$(".drive").addClass("active");
});
//PREVIOUS - RETURN TO MRS DOUBTFIRE//
$("#drivePrev").on("click", function(){
	$(document).scrollTop(0);
	$(".drive").removeClass("active");
	$(".mrsDoubtfire").addClass("active");
});

//CITYVIEW PROMPT 1: TAKE IT//
$("#takeIt1").on("click", function(){
	$(document).scrollTop(0);
	$(".cityView").removeClass("active");
	$(".takeIt1").addClass("active");
});

//CITYVIEW PROMPT 2: LEAVE IT//
$("#leaveIt1").on("click", function(){
	$(document).scrollTop(0);
	$(".cityView").removeClass("active");
	$(".leaveIt1").addClass("active");
});

//BAYVIEW PROMPT 1: TAKE IT//
$("#takeIt2").on("click", function(){
	$(document).scrollTop(0);
	$(".bayView").removeClass("active");
	$(".takeIt2").addClass("active");
});

//BAYVIEW PROMPT 2: LEAVE IT//
$("#leaveIt2").on("click", function(){
	$(document).scrollTop(0);
	$(".bayView").removeClass("active");
	$(".leaveIt2").addClass("active");
});

//STREETCAR PROMPT 1: TAKE IT//
$("#takeIt3").on("click", function(){
	$(document).scrollTop(0);
	$(".streetcar").removeClass("active");
	$(".takeIt3").addClass("active");
});

//STREETCAR PROMPT 2: LEAVE IT//
$("#leaveIt3").on("click", function(){
	$(document).scrollTop(0);
	$(".streetcar").removeClass("active");
	$(".leaveIt3").addClass("active");
});

//DRIVE PROMPT 1: TAKE IT//
$("#takeIt4").on("click", function(){
	$(document).scrollTop(0);
	$(".drive").removeClass("active");
	$(".takeIt4").addClass("active");
});

//DRIVE PROMPT 2: LEAVE IT//
$("#leaveIt4").on("click", function(){
	$(document).scrollTop(0);
	$(".drive").removeClass("active");
	$(".leaveIt4").addClass("active");
});


// San Francisco Prompt 2: Explore the City

//SAN FRANCISCO PROMPT 2: EXPLORE//
$("#exploreCity").on("click", function(){
	$(document).scrollTop(0);
	$(".sanFrancisco").removeClass("active");
	$(".exploreCity").addClass("active");
});
//PREVIOUS - RETURN TO SAN FRANCISCO//
$("#exploreCityPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".exploreCity").removeClass("active");
	$(".sanFrancisco").addClass("active");
});

//EXPLORE PROMPT 1: GOLDEN GATE//
$("#goldenGate").on("click", function(){
	$(document).scrollTop(0);
	$(".exploreCity").removeClass("active");
	$(".goldenGate").addClass("active");
});
//PREVIOUS - RETURN TO EXPLORE//
$("#goldenGatePrev").on("click", function(){
	$(document).scrollTop(0);
	$(".goldenGate").removeClass("active");
	$(".exploreCity").addClass("active");
});

//GOLDEN GATE PROMPT 1: WHARF//
$("#wharf").on("click", function(){
	$(document).scrollTop(0);
	$(".goldenGate").removeClass("active");
	$(".wharf").addClass("active");
});
//PREVIOUS - RETURN TO GOLDEN GATE//
$("#wharfPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".wharf").removeClass("active");
	$(".goldenGate").addClass("active");
});

//WHARF PROMPT 1: EXPLORE//
$("#keepExploring1").on("click", function(){
	$(document).scrollTop(0);
	$(".wharf").removeClass("active");
	$(".keepExploring1").addClass("active");
});
//PREVIOUS - RETURN TO WHARF//
$("#keepExploring1Prev").on("click", function(){
	$(document).scrollTop(0);
	$(".keepExploring1").removeClass("active");
	$(".wharf").addClass("active");
});

//WHARF PROMPT 2: ADULT//
$("#adult1").on("click", function(){
	$(document).scrollTop(0);
	$(".wharf").removeClass("active");
	$(".adult1").addClass("active");
});
//PREVIOUS - RETURN TO WHARF//
$("#adult1Prev").on("click", function(){
	$(document).scrollTop(0);
	$(".adult1").removeClass("active");
	$(".wharf").addClass("active");
});

//GOLDEN GATE PROMPT 2: PICNIC//
$("#picnicAlamo").on("click", function(){
	$(document).scrollTop(0);
	$(".goldenGate").removeClass("active");
	$(".picnicAlamo").addClass("active");
});
//PREVIOUS - RETURN TO GOLDEN GATE//
$("#sanFranciscoPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".alcatraz").removeClass("active");
	$(".exploreCity").addClass("active");
});

//WHARF PROMPT 1: EXPLORE//
$("#keepExploring2").on("click", function(){
	$(document).scrollTop(0);
	$(".picnicAlamo").removeClass("active");
	$(".keepExploring2").addClass("active");
});
//PREVIOUS - RETURN TO PICNIC//
$("#keepExploring2Prev").on("click", function(){
	$(document).scrollTop(0);
	$(".keepExploring2").removeClass("active");
	$(".picnicAlamo").addClass("active");
});

//WHARF PROMPT 2: ADULT//
$("#adult2").on("click", function(){
	$(document).scrollTop(0);
	$(".picnicAlamo").removeClass("active");
	$(".adult2").addClass("active");
});
//PREVIOUS - RETURN TO PICNIC//
$("#adult2Prev").on("click", function(){
	$(document).scrollTop(0);
	$(".adult2").removeClass("active");
	$(".picnicAlamo").addClass("active");
});


//EXPLORE PROMPT 2: ALCATRAZ//
$("#alcatraz").on("click", function(){
	$(document).scrollTop(0);
	$(".exploreCity").removeClass("active");
	$(".alcatraz").addClass("active");
});
//PREVIOUS - RETURN TO EXPLORE//
$("#alcatrazPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".alcatraz").removeClass("active");
	$(".exploreCity").addClass("active");
});

//ALCATRAZ PROMPT 1: COIT//
$("#coit").on("click", function(){
	$(document).scrollTop(0);
	$(".alcatraz").removeClass("active");
	$(".coit").addClass("active");
});
//PREVIOUS - RETURN TO ALCATRAZ//
$("#coitPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".coit").removeClass("active");
	$(".alcatraz").addClass("active");
});

//ALCATRAZ PROMPT 2: TROLLEY//
$("#trolley").on("click", function(){
	$(document).scrollTop(0);
	$(".alcatraz").removeClass("active");
	$(".trolley").addClass("active");
});
//PREVIOUS - RETURN TO ALCATRAZ//
$("#trolleyPrev").on("click", function(){
	$(document).scrollTop(0);
	$(".trolley").removeClass("active");
	$(".alcatraz").addClass("active");
});


//COIT PROMPT 1: KEEP EXPLORING//
$("#keepExploring3").on("click", function(){
	$(document).scrollTop(0);
	$(".coit").removeClass("active");
	$(".keepExploring3").addClass("active");
});
//PREVIOUS - RETURN TO ALCATRAZ//
$("#keepExploring3Prev").on("click", function(){
	$(document).scrollTop(0);
	$(".keepExploring3").removeClass("active");
	$(".coit").addClass("active");
});

//COIT PROMPT 2: START ADULTING//
$("#adult3").on("click", function(){
	$(document).scrollTop(0);
	$(".coit").removeClass("active");
	$(".adult3").addClass("active");
});
//PREVIOUS - RETURN TO ALCATRAZ//
$("#adult3Prev").on("click", function(){
	$(document).scrollTop(0);
	$(".adult3").removeClass("active");
	$(".coit").addClass("active");
});

//TROLLEY PROMPT 1: PROMPT 3//
$("#keepExploring4").on("click", function(){
	$(document).scrollTop(0);
	$(".trolley").removeClass("active");
	$(".keepExploring4").addClass("active");
});
//PREVIOUS - RETURN TO TROLLEY//
$("#keepExploring4Prev").on("click", function(){
	$(document).scrollTop(0);
	$(".keepExploring4").removeClass("active");
	$(".trolley").addClass("active");
});

//TROLLEY PROMPT 2: ADULT//
$("#adult4").on("click", function(){
	$(document).scrollTop(0);
	$(".trolley").removeClass("active");
	$(".adult4").addClass("active");
});
//PREVIOUS - RETURN TO TROLLEY//
$("#adult4Prev").on("click", function(){
	$(document).scrollTop(0);
	$(".adult4").removeClass("active");
	$(".trolley").addClass("active");
});






//PROGRESS BAR//
// function move() {
//     var elem = document.getElementById("myBar"); 
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++; 
//             elem.style.width = width + '%'; 
//         }
//     }
// }





