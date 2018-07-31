//set section height to height of screen
const height = screen.height + "px"
const width = screen.width + "px"
document.getElementById('page1').style.height = height
document.getElementById('page2').style.height = height
document.getElementById('page1').style.width = width
document.getElementById('page2').style.width = width

//set a scroll position
let scrollHeight = (screen.height) 

window.onscroll = function () {
    console.log(scrollHeight)
    console.log(window.scrollY)
    if (window.scrollY > scrollHeight) {
        document.getElementById('container1').innerHTML = "<img src='./img/gaelle-marcel-357616.jpg'>";
        document.getElementById('container2').innerHTML = "<img src='./img/kaiwen-sun-352786.jpg'>";
        document.getElementById('container3').innerHTML = "<img src='./img/martina-misar-tummeltshammer-103131.jpg'>";
    }
};


