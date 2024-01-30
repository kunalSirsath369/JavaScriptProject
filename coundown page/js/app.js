const endDate="21 May 2024 12:00 AM"
const input=document.querySelectorAll('input')
const clock =()=>{
  const end = new Date(endDate);
  const now = new Date()
  const diff=(end-now)/1000
  input[0].value=Math.floor(diff/3600/24) ;
  input[1].value=Math.floor(diff/3600)%24 ;
  input[2].value=Math.floor(diff/60)%60 ;
  input[3].value=Math.floor(diff) % 60;
  //convert into date 
}
clock()
/*
1 day - 24 hr
1hr - 60 min
1 min - 60sec
*/
setInterval(
  ()=>{
    clock()
  },1000
)
