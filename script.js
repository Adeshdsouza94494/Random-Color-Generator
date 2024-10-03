const body=document.querySelector('body')
const btn=document.querySelector('.btn')
const span=document.querySelector('.sp')
function rcolor()
{
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
    const color=`rgb(${r},${g},${b})`
    return color
}




btn.addEventListener('click',()=>
{
    let randomColor=rcolor()
    span.innerHTML=randomColor
    body.style.background=randomColor
})


