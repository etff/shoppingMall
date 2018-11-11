
// 버튼 0을 누르면, 버튼 0,1,2에 있던 active 클래스가 사라지고
// 버튼 0에 active 클래스가 붙음.active

// 내용 0,1,2에 있던 show-tab라는 클래스가 사라지고 
// 내용 0에 show-tab 클래스가 붙음.

function showButtons(i) {
	let button = document.querySelectorAll('.tab-button');

	button[0].classList.remove('active');
	button[1].classList.remove('active');
	button[2].classList.remove('active');
	
	button[i].classList.add('active');
}

function showTabs(i) {
	let content = document.querySelectorAll('.tab-content');

	content[0].classList.remove('show-tab');
	content[1].classList.remove('show-tab');
	content[2].classList.remove('show-tab');
	
	content[i].classList.add('show-tab');
}

document.querySelector('.list').addEventListener('click', function(e) {
	
	/*
	*	버튼 0을 눌렀을 경우, 버튼 보이기(0), 탭보이기(0)을 실행
		버튼 0을 눌렀을 경우, 버튼 보이기(1), 탭보이기(1)을 실행
		버튼 0을 눌렀을 경우, 버튼 보이기(2), 탭보디기(2)을 실행
	*/
	
	showButtons(e.target.dataset.id);
	showTabs(e.target.dataset.id);
});
