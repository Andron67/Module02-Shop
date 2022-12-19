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

	769: {
			slidesPerView: 2,
			slidesPerGroup: 2
		},

		1200: {
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

		769: {
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
	slidesPerView: "auto",
	spaceBetween: 20,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
 });
