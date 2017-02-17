$('.select').on('click', '.placeholder', function(e) {
	var parent = $(this).closest('.select');
	//alert(parent)
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.select.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
	}
	e.stopPropagation();
}).on('click', 'ul>li', function() {
	var parent = $(this).closest('.select');
	parent.removeClass('is-open').find('.placeholder').text($(this).text());
	//$(this).addClass('actt').siblings().removeClass('actt');
});

//監控裡面的下拉框（）
$('.motor-select').on('click', '.motor-pla', function(e) {
	var parent = $(this).closest('.motor-select');
	//alert(parent)
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.select.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
	}
	e.stopPropagation();
}).on('click', 'ul>li', function() {
	var parent = $(this).closest('.motor-select');
	parent.removeClass('is-open').find('.motor-pla').text($(this).text());
//	$(this).addClass('act').siblings().removeClass('act');
});

$('body').on('click', function() {
	$('.select.is-open').removeClass('is-open');
});