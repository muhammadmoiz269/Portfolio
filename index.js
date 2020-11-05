var cursor=document.getElementById("cursor");
var menubar=document.getElementById("menu-bar")
var aboutimage=document.querySelector(".about-image")
var innercontenthead=document.querySelector(".innercontentHead")





window.addEventListener("mousemove",function(e)
{
    cursor.style.top = e.pageY +'px';
    cursor.style.left = e.pageX +'px';
    

})

menubar.addEventListener("mouseover",function()
{
    cursor.classList.add("grow")
   
})
menubar.addEventListener("mouseleave",function()
{
    cursor.classList.remove("grow")
})


window.addEventListener("scroll",function(){
    if(window.scrollY>300)
    {
        aboutimage.classList.add("fadein")
        aboutimage.classList.remove("fadeout")
        cursor.classList.add("changebordercolor")
    }
    else{
        aboutimage.classList.remove("fadein")
        aboutimage.classList.add("fadeout")
        cursor.classList.remove("changebordercolor")


    }
})

