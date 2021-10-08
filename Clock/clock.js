setInterval(setClock,1000)
const hnhr=document.querySelector('[data-hr]');
const hnmn=document.querySelector('[data-mn]');
const hnsec=document.querySelector('[data-sec]');
function setClock()
{
    const date=new Date();
    const sec=date.getSeconds()/60;
    const mins=(sec+date.getMinutes())/60;
    const hr=(mins+date.getHours())/12;
    setRotation(hnhr,hr);
    setRotation(hnmn,mins);
    setRotation(hnsec,sec);
}
function setRotation(element,rotationR)
{
    element.style.setProperty('--rotation',rotationR*360)
}
setClock();