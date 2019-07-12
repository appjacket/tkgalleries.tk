/*
 * Unless otherwise restricted, this repository and all files within are copyright 2019 J David Thomson Consulting Inc.  All rights reserved.
Unlicensed use of this software is prohibited; No usage license is implied or granted herein.
Copyright 2019 J David Thomson Consulting Inc.
 * */
$(document).ready(function(){
		$("#header").load("./app/html/header.html");
		$("#main").load("./app/html/main.html");
		$("#footer").load("./app/html/footer.html");
	});
	$(document).on('change','#artist',function(){
		console.log("OK");
		$("#artist option:selected").each(function(){
			$(".artist-gallery").load($(this).val(), function(){
				var gallery_a = $(this).find(".thank_you_gallery");
				var gallery_b = $(this).find(".nature_gallery");
				var gallery_c = $(this).find(".behappy_gallery");
				var gallery_d = $(this).find(".toronto_gallery");
				$(gallery_a).load("./app/html/thank_you_gallery.html");
				$(gallery_b).load("./app/html/nature_gallery.html");
				$(gallery_c).load("./app/html/behappy_gallery.html");
				$(gallery_d).load("./app/html/toronto_gallery.html");
			});
		});
	});
