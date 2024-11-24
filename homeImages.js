const minCeiled = Math.ceil(25);
const maxFloored = Math.floor(-25);

let numImages
console.log(window.screen.width)
if (window.screen.width>=1200) {
    numImages = 12
} else if (window.screen.width>=992) {
    numImages = 10
} else if (window.screen.width>=768) {
    numImages = 8
} else {
    numImages = 12
}
console.log('bbb')

let imageIndex = []
let grid = "Top"

for (var i=0; i<numImages; i++) {
    imageIndex.push(i)
    console.log('hey')
    let img = document.createElement("div")
    img.setAttribute("id", `homeImage${i}`)
    img.classList.add("homePhotoHolder")
    img.style.transform = `rotate(${Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}deg)`
    img.style.backgroundImage = `url(imgs/${i+1}.avif)`
    document.getElementById(`photoGrid${grid}`).appendChild(img)
    grid=grid=="Top" ? "Bottom" : "Top"
}

let randomImages = imageIndex.slice(0)
console.log(randomImages)
function showImage() {    
    const randomIndex = Math.floor(Math.random() * (randomImages.length - 1 ));
    console.log(randomIndex)
    document.getElementById(`homeImage${randomImages[randomIndex]}`).classList.add("homeVisibleImage")
    randomImages = randomImages.filter(item => item !== randomImages[randomIndex])
    console.log(randomImages)

}

let imageCount = 0 
let interval = setInterval(function(){

    imageCount += 1;
    if(imageCount === numImages){
        clearInterval(interval);
    }

    showImage()

}, 500);
