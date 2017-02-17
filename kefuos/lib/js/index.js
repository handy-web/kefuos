//      	作者：handy
//      	时间：2016-12-08
//      	描述：不同分辨率下适配解决方案

$().ready(function() {
	$('.main-cent-flex').css({
		height: $(window).height() - $('.main-header').outerHeight()
	});
	//我的访客切换
	$(".mt-faq-content").eq(0).show();
	$(".mt-faq-trigger").click(function() {
		$(this).toggleClass('content-visible').siblings('.mt-faq-trigger').removeClass('content-visible');
		$(this).next(".mt-faq-content").slideToggle().siblings(".mt-faq-content").slideUp();
	});
	//修改昵称
	$('.item-club').click(function(){
		$('.item-box-row-h4,.item-club').hide();
		$('.item-bte').show();
		$('.item-clos').click(function(){
			$('.item-box-row-h4,.item-club').show();
			$('.item-bte').hide();			
		});
		$('.item-bte input').blur(function(){
			$('.item-box-row-h4,.item-club').show();
			$('.item-bte').hide();
		});
	});
	//搜索记录提示
	$('.cell-search').click(function(){
		$('.record-box').css('top',($(window).height() - $('.record-box').outerHeight()) / 2 + 'px');
		$('.record-box').css('left',($(window).width() - $('.record-box').outerWidth()) / 2 + 'px');
		$('.mask-item-bg').show();
		$('.record-box').addClass('record-stact');
		$('.record-close').click(function(){
			$('.mask-item-bg').hide();
			$('.record-box').removeClass('record-stact');
		});
		Move_box();//---------new1-7-------------
	});		
	
	var width_wind = $(window).width();
	var height_wind = $(window).height();
	var width_ratio = $(window).width() / 1920;
	var width_row = $('.sout-row').outerHeight();
	var height_main = $('.main-header').outerHeight();
	var height_line = $('.cont-line').outerHeight();
	var mt_trigger = $('.mt-faq-trigger').outerHeight();
	var acct_height = mt_trigger * 5 + 12; //总行高
	var mt_height = height_wind - height_main - width_row - acct_height;
	//历史访客筛选条件
	$(".mt-contact-hd").click(function() {
		$('.screen-col').css('top', (height_wind - $('.screen-col').outerHeight()) / 2 + 'px');
		$('.screen-col').css('left', (width_wind - $('.screen-col').outerWidth()) / 2 + 'px');
		$('.mask-item-bg').show();
		$('.screen-col').addClass('screen-act');
		$('.screen-close').click(function() {
			$('.mask-item-bg').hide();
			$('.screen-col').removeClass('screen-act');
		});

	});

	//当浏览器大小变化时,页面主动刷新
	$(window).resize(function() {
		window.location.reload();
	});
	var wind_ratio = width_wind / height_wind;

	//图标大小适配
	$('.cn-i').css('width', width_ratio * 22 + 'px');
	$('.cn-i').css('height', width_ratio * 22 + 'px');
	$('.cn-i').css('line-height', width_ratio * 22 + 'px');
	$('.cn-i').css('font-size', width_ratio * 13 + 'px');
	$('.cn-i').css('text-align', 'center');
	//小图标字体大小默认不小于10px
	if(width_ratio * 13 < 10) {
		$('.cn-i').css('font-size', 10 + 'px');
	}

	$('.cont-line').css('max-height', mt_height + 'px');
	$('.cont-line').css('min-height', mt_height + 'px');

	$('.row-pos').css('top', height_wind - height_main - width_ratio * 130 + 'px');

	//最近联系滚动条
	//var mt_width_h = height_wind - height_main - width_row - $('.mt-contact').outerHeight(); ------------new1-7-----------

	//$('.mt-contact-covers').css('max-height',  height_wind - height_main - width_row - $('.mt-contact').outerHeight() + 'px');----------new1-7------------

	//聊天滚动条
	var sent_box = $('.sent-box').outerHeight();
	var item_box = $('.item-box').outerHeight();
	//alert("输入聊天文字高度：" + sent_box)
	var char_w = height_wind - height_main - sent_box - item_box;
	var chat_row = $('.chat-row li').outerWidth();
	var chat_icon = $('.chat-row-icon').outerWidth();
	var char_width = chat_row - chat_icon * 2 - width_ratio * 70; //无滚动条聊天内容长度
	var char_width_auto = chat_row - chat_icon * 2 - width_ratio * 80; //有滚动条聊天内容长度
	//$('.box-chat').css('max-width', char_width + 'px');
	//alert(char_width)
	//alert(chat_icon)

	//alert("聊天内容高度：" + char_w)
	$('.char-box').css('max-height', char_w + 'px');
	$('.char-box').css('min-height', char_w + 'px');
	if($('.chat-row').outerHeight() >= char_w) {
		$('.char-box').css('overflow', 'auto');
		//$('.box-chat').css('max-width', char_width_auto + 'px');
	}

	//右侧背景图及中间图片文字按钮适配
	var cell_access = $('.cell-access').outerHeight(); //用户信息输入
	var cell_fott = $('.cell-fott-tm').outerHeight() + $('.cell-fott').outerHeight(); //拜访记录
	var cell_list = $('.cell-list-mt').outerHeight(); //关注日期
	var cell_int = $('.cell-h3').outerHeight() + $('.cell-but').outerHeight(); //图片下面文字和按钮
	var cell_width = $('.cell-line').outerWidth();
	var cell_heits = $('.cell-h3').height();
	//alert('文字高度：' + cell_heits)

	//alert('背景图片宽度：' + cell_width)
	var cell_tm = height_wind - height_main - $('.cell-row-tab').outerHeight() - cell_access - cell_fott; //---new1-9
	var cell_item = cell_tm - cell_list - cell_heits - $('.cell-but').outerHeight();
	//alert('背景图高度：' + cell_tm)

	var img_htb = cell_tm - cell_list - cell_int;
	var img_hei = img_htb - img_htb * 1 / 5;
	//alert('图片高度：' + img_hei)

	var cell_bgint = cell_tm - cell_list - img_hei - cell_int - 6;
	//alert('剩余高度：' + cell_bgint)

	$('.cell-line').css('height', cell_tm + 'px');
	$('.cell-bg').css('bottom', cell_list + 'px');
	$('.cell-int').css('margin-top', cell_bgint / 2 + 'px');
	$('.cell-int-img').css('height', img_hei + 'px');
	$('.cell-int-img').css('width', img_hei + 'px');
	//当屏幕高度大于宽度时（右侧图片）
	if(cell_tm >= cell_width) {
		//alert("逮住你了！")
		var cell_item_img = cell_item - cell_item * 2 / 5;
		var cell_item_top = (cell_item - cell_item_img - 6) / 4;
		$('.cell-int-img').css('height', cell_item_img + 'px');
		$('.cell-int-img').css('width', cell_item_img + 'px');
		$('.cell-int').css('margin-top', cell_item_top + 'px');
		$('.cell-h3').css('padding-top', cell_item_top + 'px');
		$('.cell-h3').css('padding-bottom', cell_item_top + 'px');
	}

	//我的访客、最近联系切换
	$('.sout-row-box li').click(function() {
		var $index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$("#content .nav-home").css('display', 'none').siblings().eq($index).css('display', 'block');
		$('.mt-contact-covers').css('max-height',  height_wind - height_main - width_row - $('.mt-contact').outerHeight() + 'px'); //--------new1-7---------
	});
	//快捷回复、用户资料、聊天记录切换
	$('.cell-box li').click(function() {
		var $index = $(this).index();
		$(this).addClass('curr').siblings().removeClass('curr');
		$("#frt_cen .cell-home").css('display', 'none').siblings().eq($index).css('display', 'block');
		var record_width = height_wind - height_main - $('.cell-row-tab').outerHeight() - $('.cell-item').outerHeight();//--new1-9
		//alert($('.cell-item').outerHeight())
		//new1-8话术滚动条
		var menu_row = height_wind - height_main - $('.cell-row-int').outerHeight() - $('.cell-row-tab').outerHeight() - $('.matter-item').outerHeight() * 3;//---new1-8
		$('.menu-row-1').css('max-height', menu_row + 'px');//---new1-8
		$('.verbal-center').css('max-height', menu_row + 'px');//---new1-8
		//聊天记录滚动条
		$('.cell-record').css({
			'max-height': record_width + 'px', //--new1-8
			'min-height': record_width + 'px'  //--new1-8
		});
	});

	//下拉框
	$('#nav_drop').click(function() {
		$('.nav-drop').toggleClass('nav-act');
	});

	//编辑访客标签
	$('.item-box-row-hd').click(function() {
		var tags_height = (height_wind - $('.tags-box').outerHeight()) / 2;
		$('.tags-box').css('top', tags_height + 'px');

		$('.tags-type-line li').click(function() {
			$(this).addClass('type-act').siblings().removeClass('type-act');
		});

		$('.tags-score-list li').click(function() {
			$(this).addClass('score-act').siblings().removeClass('score-act');
		});

		$('.tags-state-lint li').click(function() {
			$(this).addClass('state-act').siblings().removeClass('state-act');
		});
		$('.mask-bg').show();
		$('.tags-box').addClass('box-act');

		$('.tg-close').click(function() {
			$('.tags-box').removeClass('box-act');
			$('.mask-bg').hide();
		});
	});
	//客户状态
	$('.nav-state li').click(function() {
		$(this).addClass('icon-act').siblings().removeClass('icon-act');
		$('.nav-drop').removeClass('nav-act');
	});
	//修改密码
	$('#nav_modify').click(function() {
		$('.nav-drop').removeClass('nav-act');
		var reset_height = (height_wind - $('.reset-item').outerHeight()) / 2;
		$('.reset-item').css('top', reset_height + 'px');
		$('.mask-bg').show();
		$('.reset-item').addClass('item-act');
		$('.item-close').click(function() {
			$('.reset-item').removeClass('item-act');
			$('.mask-bg').hide();
		});
	});
	
	//意见反馈
	$('#nav_user').click(function() {
		$('.nav-drop').removeClass('nav-act');
		var feedback_height = (height_wind - $('.feedback-row').outerHeight()) / 2;
		$('.feedback-row').css('top', feedback_height + 'px');
		$('.mask-bg').show();
		$('.feedback-row').addClass('feedback-act');
		$('.feedback-close').click(function() {
			$('.feedback-row').removeClass('feedback-act');
			$('.mask-bg').hide();
		});

	});

	//点击遮罩时隐藏
	$('.mask-bg').bind('click', function(e) {
		var target = $(e.target);
		if(target.closest('').length == 0) {
			//alert(target.closest('').length)
			$('.mask-bg').hide();
			$('.feedback-row').removeClass('feedback-act');
			$('.customer-row').removeClass('customer-act');
			$('.reset-item').removeClass('item-act');
			$('.tags-box').removeClass('box-act');	
			$('.solid-box').removeClass('solid-act'); //new1-10
		}
	});
	//点击无遮罩的弹框关闭
	$('.mask-item-bg').bind('click', function(e) {
		var target = $(e.target);
		if(target.closest('').length == 0) {
			$('.mask-item-bg').hide();
			//$('.patter-row').removeClass('patter-act');
			$('.matter-box').removeClass('matter-act');
			$('.screen-col').removeClass('screen-act');
			$('.ord-box').removeClass('ord-act');
			$('.record-box').removeClass('record-stact');
			$('.visit-box').removeClass('visit-act');
		}
	});

	//选择客服
	$('#nav_wait').click(function() {
		var customer_height = (height_wind - $('.customer-row').outerHeight()) / 2;
		$('.customer-row').css('top', customer_height + 'px');
		$('.mask-bg').show();
		$('.customer-row').addClass('customer-act');
		$('.customer-close').click(function() {
			$('.customer-row').removeClass('customer-act');
			$('.mask-bg').hide();
		});

	});

	//我的话术切换
	$(".verbal").click(function() {
		$(this).toggleClass('verbal-visible').siblings('.verbal').removeClass('verbal-visible');
		$(this).next(".verbal-center").slideToggle().siblings(".verbal-center").slideUp();
		$('.menu-item-1').removeClass('menu-visible-1');
		$('.menu-row-1').slideUp();
	});
	//快捷回复--话术四级切换
	$(".menu-item-1").click(function() {
		$(this).toggleClass('menu-visible-1').siblings('.menu-item-1').removeClass('menu-visible-1');
		$(this).next(".menu-row-1").slideToggle().siblings(".menu-row-1").slideUp();
		$('.verbal').removeClass('verbal-visible');
		$('.verbal-center').slideUp();
	});
	$(".menu-item-2").click(function() {
		$(this).toggleClass('menu-visible-2').siblings('.menu-item-2').removeClass('menu-visible-2');
		$(this).next(".menu-row-2").slideToggle().siblings(".menu-row-2").slideUp();
	});
	$(".menu-item-3").click(function() {		
		$(this).toggleClass('menu-visible-3').siblings('.menu-item-3').removeClass('menu-visible-3');
		$(this).next(".menu-row-3").slideToggle().siblings(".menu-row-3").slideUp();		
	});
	$(".menu-item-4").click(function() {		
		$(this).toggleClass('menu-visible-4').siblings('.menu-item-4').removeClass('menu-visible-4');
		$(this).next(".menu-row-4").slideToggle().siblings(".menu-row-4").slideUp();		
	});
	
	//new创建类型2016-12-26
	$('.memu-bt').click(function(){
		$('.mask-item-patter').show();			
		$('.bord-box').css('top',(height_wind - $('.bord-box').outerHeight()) / 2 + 'px');
		$('.bord-box').css('left',(width_wind - $('.bord-box').outerWidth()) / 2 + 'px');
		$('.bord-box').addClass('bord-act');
		$('.bord-close').click(function(){
			$('.mask-item-patter').hide();			
			$('.bord-box').removeClass('bord-act');
		});
		mask_patter();
	});
	//new问答编辑
	$('.bord-row').click(function(){
		$('.mask-item-patter').show();		
		$('.answer-item').css('top',(height_wind - $('.answer-item').outerHeight()) /2 + 'px');
		$('.answer-item').addClass('answer-item-act');
		$('.answer-item-close').click(function(){
			$('.mask-item-patter').hide();	
			$('.answer-item').removeClass('answer-item-act');
		});
		
		$('.answer-edit').click(function(){
			$(this).parent().parent().parent('.answer-list').hide();
			$(this).parent().parent().parent('.answer-list').next('.answer-edent').show();
			$('.row-conse').click(function(){
				$(this).parent().parent('.answer-edent').hide();
				$(this).parent().parent('.answer-edent').prev('.answer-list').show();			
			});
		});	
		mask_patter();
		Move_answer();  //-----------------new1-7----------------------------
	});
	
	//修改话术标题
	$('.bord-modify').click(function(){
		$(this).parent('.bord-rt').prev('.bord-hd').children('.bord-iist').show();
		$(this).parent('.bord-rt').prev('.bord-hd').children('.bord-row').hide();
		$('.bord-iist input').blur(function(){
		   	$(this).parent('.bord-iist').hide();
			$(this).parent('.bord-iist').prev('.bord-row').show();
		});
	});
	
	//new问答新建2016-12-26
	$('.bord-adds').click(function(){
		$('.mask-item-patter').show();			
		$('.answer-box').css('top',(height_wind - $('.answer-box').outerHeight()) / 2 + 'px');
		$('.answer-box').css('left',(width_wind - $('.answer-box').outerWidth()) / 2 + 'px');
		$('.answer-box').addClass('answer-act');
		$('.answer-close,.answer-clos').click(function(){
			$('.mask-item-patter').hide();			
			$('.answer-box').removeClass('answer-act');
		});
		mask_patter();
	});
	
	//话术滚动条new1-8在上面
	//var menu_row = height_wind - height_main - $('.cell-row-int').outerHeight() - $('.cell-row-tab').outerHeight() - $('.matter-item').outerHeight() * 3;//---new1-8
	//$('.menu-row-1').css('max-height', menu_row + 'px');
	//$('.verbal-center').css('max-height', menu_row + 'px');
	//$('.menu-row-1').css('overflow-y', 'auto');
	//alert($('.matter-item').outerHeight())
	
	//话术问答显示
	$(".menu-last").click(function() {
		var patter_row = (height_wind - $('.patter-row').outerHeight()) / 2;
		$(this).addClass('menu-last-act').siblings().removeClass('menu-last-act');
		$('.patter-row').css('top', patter_row + 'px');
		$('.mask-item-patter').show();//透明的遮罩
		$('.patter-row').addClass('patter-act')
//		.css("right", "25.5%").animate({
//			"right": "24%"
//		}, 900);
		$('.patter-close').click(function() {
			$(".menu-last").removeClass('menu-last-act');
			$('.mask-item-patter').hide();
			$('.patter-row').removeClass('patter-act');
		});
		
		Move_code();//拖动的话术窗口
		mask_patter();//话术点击其他区域隐藏
	});
	//窗口可拖动
	function Move_code(){
		$('.patter-row-title').mousedown(
			function(event) {
				var isMove = true;
				var abs_x = event.pageX - $('.patter-row').offset().left;
				var abs_y = event.pageY - $('.patter-row').offset().top;
				$(document).mousemove(function(event) {
					if(isMove) {
						var obj = $('.patter-row');
						obj.css({
							'left': event.pageX - abs_x,
							'top': event.pageY - abs_y
						});
					}
				}).mouseup(
					function() {
						isMove = false;
					}
				);
			}
		);
	}
	function Move_answer(){ //-----------------new1-7----------------------------
		$('.matter-box-title').mousedown(
			function(event) {
				var isMove = true;
				var abs_x = event.pageX - $('.answer-item').offset().left;
				var abs_y = event.pageY - $('.answer-item').offset().top;
				$(document).mousemove(function(event) {
					if(isMove) {
						var obj = $('.answer-item');
						obj.css({
							'left': event.pageX - abs_x,
							'top': event.pageY - abs_y
						});
					}
				}).mouseup(
					function() {
						isMove = false;
					}
				);
			}
		);
	}
	function Move_box(){ //-----------------new1-7----------------------------
		$('#moveBox').mousedown(
			function(event) {
				var isMove = true;
				var abs_x = event.pageX - $('.record-stact').offset().left;
				var abs_y = event.pageY - $('.record-stact').offset().top;
				$(document).mousemove(function(event) {
					if(isMove) {
						var obj = $('.record-stact');
						obj.css({
							'left': event.pageX - abs_x,
							'top': event.pageY - abs_y
						});
					}
				}).mouseup(
					function() {
						isMove = false;
					}
				);
			}
		);
	}
	
	//话术点击其他区域隐藏/我的话术内容
	function mask_patter(){
		$('.mask-item-patter').bind('click', function(e) {
			var target = $(e.target);
			if(target.closest('').length == 0) {
				$('.mask-item-patter').hide();			
				$('.patter-row').removeClass('patter-act');
				$('.bord-box').removeClass('bord-act');
				$('.answer-box').removeClass('answer-act');
				$('.answer-item').removeClass('answer-item-act');
				$(".menu-last").removeClass('menu-last-act');
			}
		});
	}
	
	
	//媒体素材选择
	$('.matter-item').click(function() {
		$('.mask-item-bg').show(); //透明的遮罩
		$('.matter-box').addClass('matter-act');
		$('.col-all-box').css('max-height', 472 * width_ratio + 'px');
		$('.col-all-box').css('min-height', 472 * width_ratio + 'px');
		$('.matter-close').click(function() {
			$('.mask-item-bg').hide();
			$('.matter-box').removeClass('matter-act');
		});
		$('.matter-box').css({
			top: (height_wind - $('.matter-box').outerHeight()) / 2,
			left: (width_wind - $('.matter-box').outerWidth()) / 2
		});
		//图片选择
		$('.imgs-row li').click(function(){
			//alert(true)
			$(this).toggleClass('imgs-act');
		});
		//素材选择切换
		$('.tab-line li').click(function() {
			var $index = $(this).index();
			$(this).addClass('tab-act').siblings().removeClass('tab-act');
			$("#matter_cen .matter-home").css('display', 'none').siblings().eq($index).css('display', 'block');
			
			//消息通知
			$('.plate-row').hover(
				function(){
					$('.notifie').addClass('notifie-act');
				},function(){
					$('.notifie').removeClass('notifie-act');
				});
			//模板消息
			$('.plate-cell').click(function(){
				//$('.plate-item').css('top',(height_wind - $('.plate-item-line').outerHeight()) / 2 + 'px');
				$('.plate-item').addClass('plate-act');
				$('.plate-close').click(function(){
					$('.plate-item').removeClass('plate-act');
				});
			});
		});

	});
	
	//录入订单
	$('#ord_int,.order-tmst').click(function(){
		$('.ord-box').css({
			top : (height_wind - $('.ord-box').outerHeight()) / 2,
			left : (width_wind - $('.ord-box').outerWidth()) / 2
		});
		$('.mask-item-bg').show();
		$('.ord-box').addClass('ord-act');
		$('.ord-close').click(function(){
			$('.mask-item-bg').hide();
			$('.ord-box').removeClass('ord-act');
		});
		$('.ord-list li').click(function() {
			$(this).addClass('list-act').siblings().removeClass('list-act');
		});
	});
	//录入/查询
	$('.cell-fott-ft a').click(function(){
		$('.visit-box').css('top',(height_wind -$('.visit-box').outerHeight()) / 2 + 'px');
		$('.visit-box').css('left',(width_wind -$('.visit-box').outerWidth()) / 2 + 'px');
		$('.mask-item-bg').show();
		$('.visit-box').addClass('visit-act');
		$('.visit-close').click(function(){
			$('.mask-item-bg').hide();
			$('.visit-box').removeClass('visit-act');
		});
	});
	//聊天置顶
	//var $topRow = $(".box-row");
	$(".box-row").click(function() {		
		var $List = $(this).parents("li");
		var $cont = $(this).parents("ul");
		if($List.index() != 0) {			
			$List.fadeOut().fadeIn();
			$cont.prepend($List);
			$List.css("background", "#fbf2d0");				
			$(this).hide();	
			$(this).next('.box-close').show();	
			alert('置顶成功！')
			//置顶被下一个置顶替换位置背景色去掉	
			
		}
	});
	//取消置顶
	$(".box-close").click(function(){			
		var $Lists = $(this).parents("li");
		var Len = $(this).length;
		if($Lists.index() != Len - 1 || $Lists.index() == 0) {				
			$Lists.fadeOut().fadeIn();
			$Lists.next().after($Lists);
			$Lists.css("background", "");
			$(this).hide();	
			$(this).prev('.box-row').show();	
			alert('已取消置顶！')
		}
	});
	//订单明细-订单详情内容
	$('#solidOrder').click(function(){
		$('.mask-bg').show();
		$('.solid-box').addClass('solid-act');
		$('.solid-box').css('top', ($(window).height() - $('.solid-box').outerHeight()) / 2 + 'px');
		$('.order-view').click(function(){
			$('.solid-t2').show();
		});
		$('.order-back').click(function(){
			$('.solid-t2').hide();
		});
		$('.solid-close').click(function(){
			$('.mask-bg').hide();
			$('.solid-box').removeClass('solid-act');
		});
	});
});