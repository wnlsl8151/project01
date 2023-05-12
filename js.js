// 내비게이션 보이기 함수
function showNav(){
  document.querySelector('nav').style.display='block';
}

// 내비게이션 감추기 함수
function hideNav(){
  document.querySelector('nav').style.display='none';
}

// 슬라이더 페이저 클릭함수
// function activePager(self,num){ 
//   let pagerEl=document.querySelectorAll('.pager li');
//   for(let idx=0;idx<=pagerEl.length-1;idx++){
//       // pagerEl[idx].style.borderTopColor='#999';
//       // pagerEl[idx].style.fontWeight='400';
//       // pagerEl[idx].style.color='#222';
//       pagerEl[idx].style.backgroundColor='#999';

//   }          

//   self.style.backgroundColor='#b5121b';
//   // self.style.fontWeight='700';
//   // self.style.color='#00a650';

//   let sliderEl = document.querySelectorAll('.main-slider li');
//   for(let idx=0;idx<=sliderEl.length-1;idx++){
//       sliderEl[idx].style.display='none';
//   }
//   sliderEl[num].style.display='block';
// }
