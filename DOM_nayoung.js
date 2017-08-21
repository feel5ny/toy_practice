/*
1. 체킹을 하면, 카운트된다. 
1-1. checkbox.checked === true 이면 count++
2. count 카운트된 숫자를 alert에 띄운다.  
2-1. count 버튼을 누르면 alert이 띄어지게한다.
*/


function checkBox(){ // 체크박스 카운팅
  var checkBox = document.querySelectorAll('.check');
  var count=0;
  for(var i =0; i<checkBox.length; i++){
    if (checkBox[i].checked) { 
      count +=  1; 
    } 
  }
  alert(count);
  
};

function toggleBtn(){
  var checkBox = document.querySelectorAll('.check'); // 유사배열 형태로 됨. 무조건 전부 체킹이거나 전부 해제.
  if(checkBox[0].checked == false){
    for(var i=0; i<checkBox.length; i++){
      checkBox[i].checked = true; 
    }
  } else {
    for(var i=0; i<checkBox.length; i++){
      checkBox[i].checked = false;
    }
  }
}

function agreeAll(){
  var agreeAllCheck = document.querySelectorAll('.agree');
  for(var i=0; i<agreeAllCheck.length; i++){
    agreeAllCheck[i].checked = true;
  }
}

function agreeCheck(){
  var agreeAllCheck = document.querySelectorAll('.agree');
  for(var i=0; i<agreeAllCheck.length; i++){
    if (!agreeAllCheck[i].checked){
      alert("약관을 모두 동의하지 않았습니다.");
      return
    }
  }
}

var button = document.querySelector('#button') 
var toggle = document.querySelector('#selectAll'); 
var agreeAllBtn = document.querySelector('#selectAllagree');
var alertCheck = document.querySelector('#alertBtn');

button.addEventListener('click', checkBox);
toggle.addEventListener('click', toggleBtn);
agreeAllBtn.addEventListener('click', agreeAll);
alertCheck.addEventListener('click', agreeCheck);