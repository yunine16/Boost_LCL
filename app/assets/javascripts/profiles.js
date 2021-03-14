// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
let canvas;
let drawBtn;
let w, h; //canvasのwidth,height
//canvasサイズ変更
function SetCanvas() {
	const win_w = window.innerWidth;
	const win_h = window.innerHeight;
	// canvas.width = (win_w * 56) / 100;
	// canvas.height = (win_w * 31.5) / 100;
	canvas.width = 1920;
	canvas.height = 1080;
	w = canvas.width;
	h = canvas.height;
}

//canvasを描画する
function Draw() {
	canvas = document.getElementById('js-canvas');
	console.log('描画！');
	// img.src = `assets/${stack[0]}.png`;
	//必要な要素を取得
	const $name = document.getElementById('js-name').value;
	const $nameRuby = document.getElementById('js-name-ruby').value;
	const $schoolName = document.getElementById('js-school-name').value;
	const $schoolMajor = document.getElementById('js-school-major').value;
	const $grade = document.getElementById('js-grade').value;
	const $strength = document.getElementById('js-strength').value;
	const $sns = document.getElementById('js-sns').value;
	const os = 'mac';
	const icon = 'アイコン'; //画像アップロードする
	const imgSize = w / 20;
	if (canvas.getContext) {
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, w, h);
		ctx.fillStyle = 'rgba(255,0,0,0.7)'; // 背景色セット　←あとでフォームで色変えれる
		ctx.fillRect(0, 0, w, h); //背景
		ctx.fillStyle = 'rgba(235,235,235, 0.5)'; //薄い白セット
		ctx.fillRect(0, 0, w / 4, h); //左側の薄い白
		ctx.fillRect((w * 3) / 4, 0, w, h); //右側の薄い白
		ctx.fillStyle = 'rgba(0,0,0)'; //文字色セット
		ctx.font = '52px YuGothic'; // 名前フォントセット
		ctx.fillText($name, w / 100, (h * 10) / 24); //名前描画
		ctx.font = '38px YuGothic'; //ルビフォントセット
		ctx.fillText($nameRuby, w / 80, (h * 10) / 28); //ルビ描画
		ctx.font = '44px YuGothic'; //学校名フォントセット
		ctx.fillText($schoolName, w / 100, (h * 2) / 3); //学校名描画
		ctx.fillText(
			//学部名、学年描画
			`${$schoolMajor} ${$grade}年`,
			w / 100,
			(h * 2) / 3 + (h * 5) / 100
		);
		//技術スタック描画
		ctx.font = '48px YuGothic'; //　技術スタックフォントセット
		ctx.fillText('技術スタック', (w * 3) / 4 + (w * 2) / 100, h / 6);
		ctx.fillText(
			$strength,
			(w * 3) / 4 + (w * 2) / 100,
			h / 6 + (h * 10) / 100
		);
		let result = [];
		const icons = document.getElementsByName('js-strength');
		let p = 1,
			q = 1;
		let count = 0;
		for (let i = 0, len = icons.length; i < len; i++) {
			const icon = icons.item(i);
			//チェックがされていれば、
			if (icon.checked) {
				count++;
				// 	// console.log('checked', icon.value);
				//画像出す
				const img = new Image();
				img.src = `assets/${icon.value}.png`;
				// 	img.onload = () => {
				// 		ctx.drawImage(img, w / 40 + (w * 3) / 4, (h * 2) / 6, w / 20, w / 20);
				// 	};
				img.onload = () => {
					if (p === 4) {
						q++;
						p = 1;
					}
					console.log('p,q is', p, q);
					ctx.drawImage(
						img,
						0,
						0,
						100,
						100,
						(w * p) / 40 + (w * p - 1) / 20 + (w * 3) / 4 - (w * 5) / 100,
						(h * 2) / 6 + ((w * 3) / 40) * (q - 1),
						w / 20,
						w / 20
					);
					console.log(
						'i',
						(w * p) / 40 + (w * (p - 1)) / 20 + (w * 3) / 4,
						icon.value,
						(h * 2) / 6 + ((w * 3) / 40) * (q - 1)
					);
					p++;
					// q++;
					// if (q === 2) {
					// 	q = 0;
					// }
				};
			}
		}
		// console.log(result);
		// const img1 = new Image(),
		// 	img2 = new Image(),
		// 	img3 = new Image(),
		// 	img4 = new Image();
		// img1.src = `assets/python.png`;
		// img2.src = `assets/vue.png`;
		// img3.src = `assets/twitter.png`;
		// img4.src = `assets/github.png`;
		// img1.onload = () => {
		// 	ctx.drawImage(img1, w / 40 + (w * 3) / 4, (h * 2) / 6, w / 20, w / 20);
		// 	console.log('1', w / 40 + (w * 3) / 4);
		// 	console.log('1', (h * 2) / 6);
		// };
		// img2.onload = () => {
		// 	ctx.drawImage(
		// 		img2,
		// 		(w * 2) / 40 + w / 20 + (w * 3) / 4,
		// 		(h * 2) / 6,
		// 		w / 20,
		// 		w / 20
		// 	);
		// 	console.log('2', (w * 2) / 40 + w / 20 + (w * 3) / 4);
		// };
		// img3.onload = () => {
		// 	ctx.drawImage(
		// 		img3,
		// 		(w * 3) / 40 + (w * 2) / 20 + (w * 3) / 4,
		// 		(h * 2) / 6,
		// 		w / 20,
		// 		w / 20
		// 	);
		// 	console.log('3', (w * 3) / 40 + (w * 2) / 20 + (w * 3) / 4);
		// };
		// img4.onload = () => {
		// 	ctx.drawImage(
		// 		img4,
		// 		(w * 3) / 40 + (w * 2) / 20 + (w * 3) / 4,
		// 		(h * 2) / 6 + (w * 3) / 40,
		// 		w / 20,
		// 		w / 20
		// 	);
		// };
	}
}
function SaveImage() {
	const canvas = document.getElementById('js-canvas');
	const encoded = canvas.toDataURL();
	console.log(encoded);
	const a = document.createElement('a');
	document.body.appendChild(a);
	a.download = 'myProfile.png';
	a.href = encoded;
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
}
document.addEventListener(
	'DOMContentLoaded',
	function () {
		//canvas要素を取得
		canvas = document.getElementById('js-canvas');
		//描画ボタンを取得
		drawBtn = document.getElementById('js-draw');
		//保存ボタンを取得
		SaveBtn = document.getElementById('js-save');
		SetCanvas();
		drawBtn.addEventListener('click', Draw, false);
		SaveBtn.addEventListener('click', SaveImage, false);
		// Draw();
	},
	false
);
