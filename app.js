const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll' , checkBoxes);

checkBoxes()

function checkBoxes(){
    const trigerBotom =(window.innerHeight/6)*4
      //console.log((window.innerHeight / 6) * 4)

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;


        if(boxTop<trigerBotom){
            box.classList.add("show");
        } else{
            boxTop.classList.remove('show');
        }
    })
}