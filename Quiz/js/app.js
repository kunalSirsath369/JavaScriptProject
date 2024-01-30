const question=[{
  'que':' What is JavaScript?',
  'a': 'JavaScript is a scripting language used to make the website interactive',
  'b': 'JavaScript is an assembly language used to make the website interactive',
'c': 'JavaScript is a compiled language used to make the website interactive',
'd': 'None of the mentioned',
'correct':'a'
},{
  'que':'What JavaScript?',
  'a': 'JavaScript is a scripting language used to make the website interactive',
  'b': 'JavaScript is an assembly language used to make the website interactive',
'c': 'JavaScript is a compiled language used to make the website interactive',
'd': 'None of the mentioned',
'correct':'a'
},
{
  'que':'What was JavaScript?',
  'a': 'JavaScript is a scripting language used to make the website interactive',
  'b': 'JavaScript is an assembly language used to make the website interactive',
'c': 'JavaScript is a compiled language used to make the website interactive',
'd': 'None of the mentioned',
'correct':'a'
}]
let index=0;
let total=question.length;
let correct=0,right=0,wrong=1;
const queBox=document.getElementById('queBox')
const optionInput=document.querySelectorAll(".options")
const loadQuetion=()=>{
  if(index==total){
    return endQuiz()
  }
  reset()
  const data=question[index]
  queBox.innerHTML=`${index+1} . ${data.que}`
  optionInput[0].nextElementSibling.innerText=data.a;
  optionInput[1].nextElementSibling.innerText=data.b;
  optionInput[2].nextElementSibling.innerText=data.c;
  optionInput[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
  const ans=getAnswer()
  const data=question[index]
  if(ans == data.correct){
    right++
  }else{
    wrong++
  }
  index++
  loadQuetion()
  return;
}
const getAnswer=()=>{
  let answer;
  optionInput.forEach((input)=>{
    if(input.checked){
     answer= input.value;
     
    }
    else{
      
    }

  })
  return answer

}
const reset=()=>{
  optionInput.forEach((input)=>{input.checked =false 
}
)
}
const endQuiz=()=>{
  document.getElementById("box").innerHTML=`<div style ="text-align:center"><h3>Thank for Playing Quiz you</h3>
  <h2> ${right} / ${total} are correct</h2>
</div>`
}
loadQuetion()