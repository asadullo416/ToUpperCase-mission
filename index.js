let  upper=document.getElementById("upper");
upper.addEventListener('input',function(e){
    e.preventDefault();
    e.target.value=e.target.value.toUpperCase();
   console.log(u.toUpperCase())
})

let button = document.getElementById("button-of-6-mission")

button.onclick = () => {
    location.reload()
}