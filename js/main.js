$(function(){	/* чтобы сначала подгрузился весь html, а потом js */

	for(let i = 0; i < 3; i++) {
		$('.news__slider-inner').append(
			`<div class="news__slider-item">
				<div class="news__slider-title">
					Банкротство и ликвидация предприятия в Украине
				</div>
				<div class="news__slider-text">
					«На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права. На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права. На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права...»
				</div>
				<div class="news__slider-author">
					Андрей Ворошилов, генеральный директор компании Bankom
				</div>
			</div>`
		)
	}

	for(let i = 0; i < 2; i++) {
		$('.news__inner').append(
			`<a href="#" class="news__blog">
				<div class="news__images">
					<img src="img/news-${i+1}.jpg" alt="">
					<div class="news__date">03.04</div>
				</div>
				<div class="news__blog-title">
					Новость компании 
				</div>
				<div class="news__blog-text">
					На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права...»
				</div>
			</a>`
		)
	}

	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type = "button" class = "slick-btn slick-next"></ button>',
		prevArrow: '<button type = "button" class = "slick-btn slick-prev"></ button>',
		infinite: false,
	})

	function setImage(image) {
		let classList = document.querySelector('.slider').classList
		if (classList.length > 1)
			classList.remove(classList[classList.length-1])
		classList.add(`slider-fon${image}`)
	}
	$('.slick-list').mouseup(() => {
		if($('.slick-active').attr('data-slick-index') == 0)
			setImage(1)
		else if ($('.slick-active').attr('data-slick-index') == 1)
			setImage(2)
		else if ($('.slick-active').attr('data-slick-index') == 2)
			setImage(1)
	})
	$('.slick-btn').click(() => {
		if($('.slick-active').attr('data-slick-index') == 0)
			setImage(1)
		else if ($('.slick-active').attr('data-slick-index') == 1)
			setImage(2)
		else if ($('.slick-active').attr('data-slick-index') == 2)
			setImage(1)
	})

	$('select').styler()

	$('.header__btn-menu').click(() => {
		$('.menu ul').slideToggle();
	})
})