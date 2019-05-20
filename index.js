var imgId = 0;
var windowHeight = window.screen.height + 500;


window.onload = ()=>{
	insertImg();
	window.document.addEventListener('scroll',function(){
		if (document.documentElement.scrollTop + window.screen.height > document.documentElement.scrollHeight) {
			windowHeight += 500;
			insertImg()
		}
	})

}

var insertImg = ()=>{
	var inter = setInterval(function(){
		if (document.documentElement.scrollHeight > windowHeight) {
			clearInterval(inter)
		}
		var mDiv =  mindDiv();
		imgId ++;
		if (imgId > 10) {
			imgId = 1;
		}
		var img = document.createElement('img')
		img.setAttribute("src","img/" + imgId + ".jpg")
		mDiv.appendChild(img);
	},100)
}

var mindDiv = ()=>{

	var [line1,line2,line3,line4] = [document.getElementById('line1'),document.getElementById('line2'),document.getElementById('line3'),document.getElementById('line4')]
	var [lineImg_1,lineImg_2,lineImg_3,lineImg_4] = [line1.children,line2.children,line3.children,line4.children]
	let [lineHeight1,lineHeight2,lineHeight3,lineHeight4] = [computer(lineImg_1),computer(lineImg_2),computer(lineImg_3),computer(lineImg_4)]
	let minHeight = Math.min(lineHeight1,lineHeight2,lineHeight3,lineHeight4)

	if (minHeight == lineHeight1) {
		return line1
	}
	if (minHeight == lineHeight2) {
		return line2
	}
	if (minHeight == lineHeight3) {
		return line3
	}
	if (minHeight == lineHeight4) {
		return line4
	}

}

var computer =(lineImg)=>{
	if (lineImg == null || lineImg.length == 0) {
		return 0;
	}else{
		var height = 0;
		for(var i = 0; i < lineImg.length; i++){
			var img = lineImg[i];
			var h = img.height;
			height += h;
		}
		return height
	}
}