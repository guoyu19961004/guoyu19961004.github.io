var name,
	href,
	sex,
	hearts = document.getElementsByClassName("heart"),
	male = ['吴彦祖', '张震', '王凯', '吴磊', '吴亦凡', '鹿晗', '张艺兴', '王俊凯', '易烊千玺', '权志龙', '黄子韬', '胡歌', '宋仲基'],
	female = ['苍老师', '柳岩', '罗玉凤', '林志玲', '波多野结衣', '容嬷嬷','小泽玛利亚','范冰冰','刘亦菲','汤唯','贾玲','杨幂'];
//随机一个从min~max的整数
function randomNumber(min, max) {
	var cha = max - min;
	var randomNumber = min + (Math.floor(Math.random() * cha));
	return randomNumber;
}
//根据性别随机男星/女星姓名
function randomName(sex, min, max) {
	if (sex === "male") {
		name = female[randomNumber(min, max)];
	} else {
		name = male[randomNumber(min, max)];
	}
}

function showMaleHeart() {
	sex = "male";
	hearts[0].style.opacity = "1";
	hearts[1].style.opacity = "0";
}

function showFemaleHeart() {
	sex = "female";
	hearts[1].style.opacity = "1";
	hearts[0].style.opacity = "0";
}

function checked() {
	if (sex == "male") {
		randomName("male",0,female.length-1);
		href = encodeURI("show.html?sex=" + sex + "&name=" + name);
		window.location.href = href;
	} else if (sex == "female") {
		randomName("female",0,male.length-1);
		href = encodeURI("show.html?sex=" + sex + "&name=" + name);
		window.location.href = href;
	} else {
		alert("请选择性别！");
	}
}
alert(window.history.length);
document.getElementsByTagName('label')[0].addEventListener("touchend", showMaleHeart, false);
document.getElementsByTagName('label')[1].addEventListener("touchend", showFemaleHeart, false);
document.getElementsByTagName('button')[0].addEventListener("touchend", checked, false);