import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".offerSwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	modules: [Navigation, Pagination],
	breakpoints: {
		320: {
		  slidesPerView: 1,
		  slidesPerGroup: 1
		},

		768: {
			slidesPerView: 1,
			slidesPerGroup: 1
		},

		1000: {
			slidesPerView: 3,
			slidesPerGroup: 3
		}
	}
 });

 var swiper = new Swiper(".trendsSwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	modules: [Navigation, Pagination],
	breakpoints: {
		320: {
		  slidesPerView: 1,
		  slidesPerGroup: 1
		},

		768: {
			slidesPerView: 2,
			slidesPerGroup: 2
		 },

		1200: {
			slidesPerView: 3,
			slidesPerGroup: 3
		 }
	}
 });

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
