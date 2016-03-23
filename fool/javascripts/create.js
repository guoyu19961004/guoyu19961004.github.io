var name,
	href,
	male = ['男星1', '男星2', '男星3', '男星4', '男星5', '男星6', '男星7', '男星8', '男星9', '男星10'],
	female = ['女星1', '女星2', '女星3', '女星4', '女星5', '女星6', '女星7', '女星8', '女星9', '女星10'];
//随机一个从min~max的整数
function randomNumber(min, max) {
	var cha = max - min;
	var randomNumber = min + (Math.floor(Math.random() * cha));
	return randomNumber;
}
//根据性别随机男星/女星姓名
function randomName(sex) {
	if (sex === "male") {
		name = female[randomNumber(0, 9)];
	} else {
		name = male[randomNumber(0, 9)];
	}
}

function checked() {
	if (document.forms[0].sex.value == "male") {
		randomName("male");
		href=encodeURI("show.html?sex=male&name="+name+"&jump=ok");
		window.location.href = href;
	} else if (document.forms[0].sex.value == "female") {
		randomName("female");
		href=encodeURI("show.html?sex=female&name="+name+"&jump=ok");
		window.location.href = href;
	} else {
		alert("请选择性别！");
	}
}
document.getElementsByTagName('button')[0].addEventListener("click",checked,false);