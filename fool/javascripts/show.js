var weddingNext = document.getElementById("next"),
	wedding = document.getElementById("wedding"),
	share = document.getElementById("share"),
	create = document.getElementById("create");

//地址栏正则表达式
function getQueryString(name) {
	var href=decodeURI(window.location.href);
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
		} else {
			state.sex = "female";
			document.getElementById("it1").innerHTML = "他";
			document.getElementById("it2").innerHTML = "他";
		}
	}
}

function judgeName() {
	var name = decodeURI(getQueryString("name"));
	if (name !== null && name.toString().length > 1) {
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
	wedding.style.cssText = "top:-150%;";
}
window.onload = function() {
	judgeUser();
	window.history.replaceState(null, null, "?sex=" + getQueryString("sex") + "&name=" + getQueryString("name"));
};
weddingNext.addEventListener("click", hideWedding, false);