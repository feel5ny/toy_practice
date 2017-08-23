// 처음 넣는 데이터들. ES6 탬플릿 리터럴 방법.
let bookList = [
    { id: 1, title: 'HTML5', author: 'Lee', price: 2000 },
    { id: 2, title: 'CSS3', author: 'Kim', price: 3000 },
    { id: 3, title: 'JavaScript', author: 'Park', price: 5000 }
  ];
const tbody = document.getElementById('table');
for(i=0; i<bookList.length; i++){
tbody.innerHTML += 
  `
  <tr>
    <td>
      <div class="ui checkbox">
        <input type="checkbox" id="${bookList[i].id}" class="checkNode"> <label></label>
      </div>
    </td> 
    <td>${bookList[i].id}</td>
    <td>${bookList[i].title}</td>
    <td>${bookList[i].author}</td>
    <td>${bookList[i].price}</td>
  </tr>
  `;
}

const titleMsg = document.querySelector('#titleAlert'); 
const authorMsg = document.querySelector('#authorForm'); 
const priceMsg = document.querySelector('#priceForm'); 
let checkBox = document.querySelectorAll('.checkNode'); //json으로 생기는 리스트의 checkbox
const addBtn = document.querySelector('#addBook'); //add Book 버튼
const formList = document.getElementById('addForm'); // 하단에 나타날 formList
const cancelBtn = document.getElementById('cancelBtn'); // 하단에 나타난 formList 다시 되돌리는 버튼
const selectAllcheck = document.getElementById('selectAll'); // checkbox전체선택 토글 체크박스
const deleteBtn = document.querySelector('#deleteBook'); // checkbox전체선택 토글 체크박스

// 실행 트리거
addBtn.addEventListener('click',addEvent);
cancelBtn.addEventListener('click',closeEvent);
selectAllcheck.addEventListener('click',selectAll);
deleteBtn.addEventListener('click',deleteCheckList);

//DOM제어 함수들
function selectAll(){ // map을 사용하는 방법이 있다.
  if(checkBox[0].checked == false){
    for(i=0; i<bookList.length; i++){
      checkBox[i].checked = true;
    }
  }else {
    for(i=0; i<bookList.length; i++){
      checkBox[i].checked = false;
      }
  }
};

// Book 리스트를 추가하는 버튼
function addEvent(){
  if((titleMsg.value=== "") && (formList.style.display ==='block')){
    alert("title은 필수항목입니다.");
  }
  // style을 나타나게 한다.
  formList.style.display = 'block';
  cancelBtn.style.display = 'block';
  
  // 해당 값이 다 존재하면, 추가한다. 
  if(titleMsg.value && authorMsg.value && priceMsg.value) {
    bookList.push({id: bookList.length+1, title: titleMsg.value, author: authorMsg.value, price: priceMsg.value*1});

    const i = bookList.length-1;
    // 현재 리스트 하단에 추가하기.
    tbody.innerHTML += 
      `
      <tr>
        <td>
          <div class="ui checkbox">
            <input type="checkbox" id="${bookList[i].id}" class="checkNode"> <label></label>
          </div>
        </td> 
        <td>${bookList[i].id}</td>
        <td>${bookList[i].title}</td>
        <td>${bookList[i].author}</td>
        <td>${bookList[i].price}</td>
      </tr>
      `;}
}

// form안보이는 이벤트
function closeEvent(){
  formList.style.display = 'none';
  cancelBtn.style.display = 'none';
}


const checkBoxArr = [].slice.apply(checkBox); // 유사배열 객체를 다시 배열화

// 지우는 버튼
function deleteCheckList(){
  bookList = bookList.filter(function(ele,index,array){
    if(checkBoxArr[index].checked === false){
      if (ele.id === checkBoxArr[index].id){
      }
      return ele;
  }
});
  updateHtml(); //갱신된 리스트를 다시 업데이트한다.
}

// 갱신하는 함수
function updateHtml(){
  tbody.innerHTML = "";
  for(i=0; i<bookList.length; i++){
  tbody.innerHTML += 
  `
  <tr>
    <td>
      <div class="ui checkbox">
        <input type="checkbox" id="${bookList[i].id}" class="checkNode"> <label></label>
      </div>
    </td> 
    <td>${bookList[i].id}</td>
    <td>${bookList[i].title}</td>
    <td>${bookList[i].author}</td>
    <td>${bookList[i].price}</td>
  </tr>
  `;}
}





