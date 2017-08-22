function carouselSlide(){
  // map으로 콜백함수 실행해서 index값 옯기자.
  // 0번->1번, 1번 -> 2번, 2번->0번
  // index인.. 0하고 1을 i값을 +1 2는 -1 > if
  
  imgArr.push(imgArr[0]);
  imgArr.shift(imgArr[0]);
  
  // console.log(imgArr);
  imgArr.map(function(element,index,array){
    element.setAttribute('src',imgSrcArr[index]);
    // console.log(imgArr);
  });

  // 이미지 src를 다음 img태그, 다음인덱스 값으로 옮기기
  // img id는 유지. src만 옮겨지는 것.
};
const img1= document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');

const img1Src = img1.getAttribute('src');
const img2Src = img2.getAttribute('src');
const img3Src = img3.getAttribute('src');

const imgArr = [img1, img2, img3];
const imgSrcArr = [img1Src, img2Src, img3Src];

const imgSlide = document.querySelector('#imgBtn');
imgSlide.addEventListener('click', carouselSlide);