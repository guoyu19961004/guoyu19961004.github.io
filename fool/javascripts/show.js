var weddingNext = document.getElementById("next"),
	wedding = document.getElementById("wedding"),
	share = document.getElementById("share"),
	shareBg = document.getElementById('share-bg'),
	create = document.getElementById("create"),
	content = document.getElementById('content'),
	weddingPic = document.getElementById('wedding-pic-wrap'),
	showPic = document.getElementById('show-pic'),
	close = document.getElementById('close');

//地址栏正则表达式
function getQueryString(name) {
	var href = decodeURI(window.location.search);
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = href.substr(1).match(reg);
	if (r !== null) return unescape(r[2]);
	return null;
}

//更改相关显示
function judgeSex() {
	var sex = getQueryString("sex");
	if (sex && sex.toString().length > 1) {
		if (sex === "male") {
			document.getElementById("it1").innerHTML = "她";
			document.getElementById("it2").innerHTML = "她";
		}
	}
}

function judgeName() {
	var name = decodeURI(getQueryString("name"));
	if (name && name.toString().length > 1) {
		document.getElementById("name").innerHTML = name;
	}
}
//判断用户从哪里进入,并完成转换
function judgeUser() {
	if (getQueryString("jump")) {
		share.style.display = "block";
		create.style.display = "none";
	}
	judgeSex();
	judgeName();
}

function hideWedding() {
	wedding.style.cssText = "-moz-transform: translateY(-100%);-ms-transform: translateY(-100%);-webkit-transform: translateY(-100%);transform: translateY(-100%);";
	content.style.cssText = "-moz-transform: translateY(0);-ms-transform: translateY(0);-webkit-transform: translateY(0);transform: translateY(0);";
	document.getElementsByClassName("text")[0].style.animation = "showText 1s ease-in-out 0.3s";
	document.getElementsByClassName("text")[0].style.WebkitAnimation = "showText 1s ease-in-out 0.3s";
}

function showWeddingPic() {
	weddingPic.style.opacity = "1";
}

function hideWeddingPic() {
	weddingPic.style.opacity = "0";
}

function showShare() {
	shareBg.style.display = "block";
}

function jumpCreate() {
	window.location.href = "create.html";
}

window.onload = function() {
	judgeUser();
	window.history.replaceState(null, null, "?sex=" + getQueryString("sex") + "&name=" + getQueryString("name"));
};
share.addEventListener("touchstart",showShare,false);
create.addEventListener("touchstart", jumpCreate, false);
weddingNext.addEventListener("touchstart", hideWedding, false);
showPic.addEventListener("touchstart", showWeddingPic, false);
showPic.addEventListener("touchend", hideWeddingPic, false);