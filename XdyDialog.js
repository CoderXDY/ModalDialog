(function(factory){

	 if (typeof define === 'function' && define.amd) {
    
    	define(['jquery'], factory);
  
 	 } else {
    
    	factory(window.jQuery);
  	}



})(function($){

	$.fn.defaultConfig = {

		layoutSytle : "default-layout",

		backgroundStyle : "default-background",

		contentStyle : "default-content",

		dialogMessage : "sure?"


	};

	

	var initDialog = function(attrs){

		$.fn.defaultConfig = $.extend($.fn.defaultConfig,attrs);

		$(this).append("<div id='xdyDialogLayout'></div>");
		$("#xdyDialogLayout").addClass($.fn.defaultConfig.layoutSytle);
		$("<div id='xdyDialogBackground'></div>").appendTo(this)
												 .addClass($.fn.defaultConfig.backgroundStyle);
		$("#xdyDialogBackground").append("<div id='xdyDialogContent'></div>");

		$("#xdyDialogContent").addClass($.fn.defaultConfig.contentStyle);
		$("<div><p id='#xdyDialogMessage'></p></div>").appendTo("#xdyDialogContent");

		$("#xdyDialogMessage").html($.fn.xdyDialogMessage);

		$("#xdyDialogContent").append("<div id='xdyDialogCtrl'></div>");

		$("#xdyDialogCtrl").append("<input type='button' id='xdyOkBtn' name='okBtn' value='确定'/>");
		$("#xdyDialogCtrl").append("<input type='button' id='xdyCancelBtn' name = 'cancelBtn' value='取消'/>");

		$("#xdyDialogLayout").hide();
		$("#xdyDialogBackground").hide();
	};

	var showDialog = function(){

		$("#xdyDialogLayout").show();
		$("#xdyDialogBackground").show();
	};

	var hideDialog = function(){

		$("#xdyDialogLayout").hide();
		$("#xdyDialogBackground").hide();
	};

	$.fn.extend({
		initDialog : initDialog,
		showDialog : showDialog,
		hideDialog : hideDialog

	});

});