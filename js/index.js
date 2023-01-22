var question1=document.querySelectorAll(".q1")
var question2=document.querySelectorAll(".q2")
var question3=document.querySelectorAll(".q3")
var bouton=document.querySelector("button")
var span=document.querySelector("span")







var aff1=document.querySelector(".rep1")
var aff2=document.querySelector(".rep2")
var aff3=document.querySelector(".rep3")






var rep1=0,rep2=0,rep3=0









bouton.addEventListener("click",function(){
 
  question1.forEach((item)=>{
    if (item.checked===true) {
      if (item.getAttribute("id")==="lib") {
        rep1=1
        aff1.innerHTML='<span style="color:green">vous avez trouver</span>'
      } else {
        rep1=0
        aff1.innerHTML='<span style="color:green">vous avez rater</span>'
      }
    }

  })

  question2.forEach((item)=>{
    if (item.checked===true) {
      if (item.getAttribute("id")==="evrest") {
        rep2=1
        aff2.innerHTML='<span style="color:green">vous avez trouver</span>'

      } else {
        rep2=0
        aff2.innerHTML='<span style="color:green">vous avez rater</span>'

      }
    }

  })

  
  question3.forEach((item)=>{
    if (item.checked===true) {
      if (item.getAttribute("id")==="bogota") {
        rep3=1
        aff3.innerHTML='<span style="color:green">vous avez trouver</span>'
      } else {
        rep3=0
        aff3.innerHTML='<span style="color:green">vous avez rater</span>'
      }
    }

  })

  var somme=rep1+rep2+rep3

  span.textContent=somme+"/3"
  alert(somme);

})

