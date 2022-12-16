var swiper = new Swiper(".categorySwiper", {
	slidesPerView: 5,
	spaceBetween: 20,
	slidesPerGroup: 5,
	loop: true,
	loopFillGroupWithBlank: true,
	
	breakpoints: {
		320: {
		  slidesPerView: 3,
		  spaceBetween: 10,
		  slidesPerGroup: 3
		},

		768: {
			slidesPerView: 4,
			slidesPerGroup: 4
		},

		1024: {
			slidesPerView: 5,
			slidesPerGroup: 5,
			loop: false,
			loopFillGroupWithBlank: false,
		}
	}
 });