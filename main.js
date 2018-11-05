
// 버튼 0을 누르면, 버튼 0,1,2에 있던 active 클래스가 사라지고
// 버튼 0에 active 클래스가 붙음.active

// 내용 0,1,2에 있던 show-tab라는 클래스가 사라지고 
// 내용 0에 show-tab 클래스가 붙음.


for (let i = 0; i < 3; i++){
	document.querySelectorAll('.tab-button')[i].addEventListener('click',function(){
	
	let button = document.querySelectorAll('.tab-button');
	let content = document.querySelectorAll('.tab-content');
	
	button[0].classList.remove('active');
	button[1].classList.remove('active');
	button[2].classList.remove('active');
	
	button[i].classList.add('active');
	
	content[0].classList.remove('show-tab');
	content[1].classList.remove('show-tab');
	content[2].classList.remove('show-tab');
	
	content[i].classList.add('show-tab');
});
}
