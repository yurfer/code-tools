function checkDevice() {
	let _device = navigator.userAgent,
		isAndroid = _device.indexOf('Android') > -1 || _device.indexOf('Adr') > -1,
		isiOS = !!_device.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	if (isAndroid) {
		return 'android'
	} else if (isiOS) {
		return 'ios'
	}
}

function show(text) {
	var randomNum = parseInt(Math.random() * 100000000);
	var containID = 'msg_box_byjs' + randomNum;
	var contentID = 'msg_toast_byjs' + randomNum;
	$("body").prepend("<div id=" + containID + "></div>");
	var txtMsg = $("<span id=" + contentID + "></span>").text(text);
	$("#" + containID).prepend(txtMsg);
	$("#" + containID).css('position', 'fixed');
	$("#" + containID).css('text-align', 'center');
	$("#" + containID).css('width', '100%');
	$("#" + containID).css('top', '20%');
	$("#" + containID).css('color', '#FFF');
	$("#" + containID).css('font-size', '20px');
	$("#" + containID).css('z-index', '99');
	$("#" + containID).css('display', 'none');
	$("#" + contentID).css('padding', '10px');
	$("#" + contentID).css('display', 'inline-blocks');
	$("#" + contentID).css('border-radius', '5px');
	$("#" + contentID).css('background-color', 'rgba(0,0,0,0.4)');
	$("#" + containID).fadeIn();
	console.log(text)
	setTimeout(function() {
		$("#" + containID).fadeOut();
		setTimeout(function() {
			$("#" + containID).remove();
		}, 1000)
	}, 1000)
}

//原作者 John Resig
//博客地址 https://johnresig.com/blog/javascript-array-remove/
Array.prototype.remove = function(from, to) {
	let rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};