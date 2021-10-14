const inputs=document.querySelectorAll('.control input');
const bginput=document.querySelectorAll('.bg input');
// function randomColor() {
//   return 'rgb(' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) +  ')';
// }
// function random(min,max) {
//   const num = Math.floor(Math.random()*(max-min)) + min;
//   return num;
// }
// function Resize()
// {
//     console.log(randomColor());
//     const newColor=randomColor();
//     document.documentElement.style.setProperty('background-color',newColor);
// }
// function Resize()
// {
//     var suffix=this.dataset.sizing || '';
//     document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
// }
function Resize()
{
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach(input=>input.addEventListener('change',Resize));
bginput[0].addEventListener('change',Resize);