//UI

const getacctitles = document.getElementsByClassName("acctitles");
const getacccontents = document.querySelectorAll(".acccontents");
// console.log(getacccontents.length);//6
// console.log(getacccontents[3]);


for(let x = 0; x < getacctitles.length ; x++){

    // console.log(getacctitles[x]);

    getacctitles[x].addEventListener('click',function(e){

        // console.log(e.target);

        this.classList.toggle("active");
        // console.log(this);

        const getnewcontents = this.nextElementSibling;
        // console.log(getnewcontents);
        // console.log(getnewcontents.scrollHeight+"px");

        if(getnewcontents.style.height){
            getnewcontents.style.height = null;
        }else{
            getnewcontents.style.height = getnewcontents.scrollHeight+"px";
        }



    });

    if(getacctitles[x].classList.contains("active")){
            getacccontents[x].style.height = getacccontents[x].scrollHeight+"px";
    }


  





}











