let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

let btn=document.getElementById('btn');
btn.addEventListener('click',show);



function show()
{
    let vid=document.getElementById('vid');
    vid.innerHTML=`<source src="video.webm" type="video/webm">`;
    document.body.style.backgroundImage = "none";
    let pop=document.getElementById('pop');
    pop.style.zIndex= "1";
    btn.style.border="1px solid black";

}
