const getColor=()=>{
  const randomNum= Math.floor(Math.random()*16777215);
  const colCode="#"+randomNum.toString(16)
  console.log(randomNum,colCode);
  document.body.style.backgroundColor=colCode
  document.getElementById("colorCode").innerText=colCode
  navigator.clipboard.writeText(colCode)
}
document.getElementById("btn").addEventListener("click",getColor)
getColor()