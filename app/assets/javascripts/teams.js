// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

function DrawForTeam() {
	//必要な要素を取得
	const teamName = document.getElementById('js-team-name').value;
	const productName = document.getElementById('js-product-name').value;
	const member = document.getElementById('js-member').value;
	const startYear = document.getElementById('js-start-year').value;
	const startMonth = document.getElementById('js-start-month').value;
	const startDay = document.getElementById('js-start-day').value;
	const endYear = document.getElementById('js-end-year').value;
	const endMonth = document.getElementById('js-end-month').value;
	const endDay = document.getElementById('js-end-day').value;
	const range = `${startYear}/${startMonth}/${startDay}~${endYear}/${endMonth}/${endDay}`;

	if (canvas.getContext) {
		const context2 = canvas.getContext('2d');
		// 初期化
		context2.clearRect(0, 0, canvas.width, canvas.height);
		// 描画
		context2.font = '20px Arial';
		context2.fillStyle = 'rgba(0,0,0)';
		context2.fillText(teamName, 20, 70);
		context2.fillText(productName, 20, 90);
		context2.fillText(member, 20, 110);
		context2.fillText(range, 20, 130);
	}
}

document.addEventListener(
	'DOMContentLoaded',
	function () {
		//canvas要素を取得
		canvas = document.getElementById('js-team-canvas');
		//描画ボタンを取得
		drawBtn = document.getElementById('js-team-draw');
		SetCanvas();
		drawBtn.addEventListener('click', DrawForTeam, false);
	},
	false
);

const sendImage = () => {
	const canvas = document.getElementById('picture');
	const encoded = canvas.toDataURL();
	console.log(encoded);
};
