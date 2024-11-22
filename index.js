var landerFontSize = 66;
var headerFontSize = 45;
var descFontSize = 25;
if(window.screen.width < 700) {
  landerFontSize = 26;
  headerFontSize = 20;
  descFontSize = 13
} else if(window.screen.width < 1200)
  landerFontSize= 46;
  headerFontSize = 40;
  descFontSize = 20;
var landerVara = new Vara(
  "#homeLanderAni", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Shadows-Into-Light/shadows-into-light.json",
  [
    {
      text: "Don't Picture a Life with Alzheimers",
      duration: 6000,
      y: 10,
    }
  ],
  {
    strokeWidth: 2,
    color: "#FFFFFF",
    fontSize: landerFontSize,
    textAlign: "center"
  }
);

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

const badThings = document.getElementById("homeBadAni")
const badThingImgs = document.getElementsByClassName("homeBadImg")
const badImgText = {
  "cig": "Beyond being dangerous for for lungs, smoking cigarettes has also been proven to shrink the size of your brain greatly and increase your risk of getting Alzheimer's disease by 40%.",
  "junkfood": "A steady diet of unhealthy foods can lead to increased risk of dementia because of inflammation and a lack of good nutrients. Your hippocampus, a part of the brain that is responsible for memories, is particularly vulnerable.",
  "uplate": "It has been shown that people aged 50-60 that get less than 6 hours of sleep per night are 30% more likely to develop dementia. Poor sleeping habits can lead to accumulations of harmful proteins in the brain, as well as overall decreased brain functions.",
}
let badThingsTrigger = false
document.addEventListener("scroll", (event) => {
  if (isScrolledIntoView(badThings) && !badThingsTrigger) {
    console.log('poggers')
    var badVara = new Vara(
      "#homeBadAni", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: "Your Brain Health",
          duration: 6000,
          y: 10,
        }
      ],
      {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: headerFontSize,
        textAlign: "center"
      }
    );
    var badDescVara = new Vara(
      "#homeBadDesc", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: "Your brain is like a muscle, expanding and contracting as you grow up. But the actions you take as a teenager can affect your brain health in the future. What you do today greatly affects your risk for alzheimers and dementia as you age. Click the images for more information.",
          duration: 10000,
        }
      ],
      {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: descFontSize,
        textAlign: "center"
      }
    );
    
    for (const b of badThingImgs) {
      b.classList.add("homeBadImgVisibleT")
    }

    setTimeout(() => {
      for (const b of badThingImgs) {
        b.classList.add("homeBadImgVisible")
        b.classList.remove("homeBadImgVisibleT")
        b.classList.add("homeBadImgFull")
      }
    }, 8000)
    badThingsTrigger=true
  }
})

function badImgClick(el) {
  if (!el.classList.contains("homeBadImgFull")) {
    return
  }
  if (el.classList.contains("badImgText")) {
    el.classList.remove("badImgText")
    el.classList.add(el.id)
    el.innerHTML = ""
  } else {
    console.log('heyaaaa')
    el.classList.add("badImgText")
    el.classList.remove(el.id)
    el.innerHTML=badImgText[el.id]
  }
}