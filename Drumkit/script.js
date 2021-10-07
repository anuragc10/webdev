document.addEventListener("keypress",function(e){
    keysound(e.key);
    animation(e.key);
});
function keysound(key)
{
    switch(key)
    {
        case 'a':
            var a=new Audio("a.mp3");
            a.play();
            break;
        case 's':
            var s=new Audio("s.mp3");
            s.play();break;
        case 'd':
            var d=new Audio("d.mp3");
            d.play();break;
        case 'f':
            var f=new Audio("f.mp3");
            f.play();break;
        case 'g':
            var g=new Audio("g.mp3");
            g.play();break;
        case 'h':
            var h=new Audio("h.mp3");
            h.play();break;
        case 'j':
            var j=new Audio("j.mp3");
            j.play();break;
        default:console.log(key);
    }
}
function animation(presskey)
{
    var active=document.querySelector("."+presskey);
    active.classList.add("animation");
    console.log(active);
    setTimeout(function()
    {
        active.classList.remove("animation");
    },100);
}
