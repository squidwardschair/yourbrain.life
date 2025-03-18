var landerFontSize = 66;
var headerFontSize = 45;
var descFontSize = 25;
var bottomFontSize = 45
if (window.screen.width < 700) {
  landerFontSize = 26;
  headerFontSize = 28;
  descFontSize = 16
  bottomFontSize = 20;
} else if (window.screen.width < 1200) {
  landerFontSize = 46;
headerFontSize = 40;
descFontSize = 20;
bottomFontSize = 30
}


var landerVara = new Vara(
  "#homeLanderAni",
  "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Shadows-Into-Light/shadows-into-light.json",
  [
    {
      text: "Don't Picture a Life with Alzheimers",
      duration: 6000,
      y: 10,
    },
  ],
  {
    strokeWidth: 2,
    color: "#FFFFFF",
    fontSize: landerFontSize,
    textAlign: "center",
  }
);

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}

function playVideo(vidStem, index) {
  console.log(`${vidStem}${index}`);

  let video = document.getElementById(`${vidStem}${index}`);
  video.play();
  video.classList.add("videoVisible");
  if (vidStem == "ink") {
    let memVideo = document.getElementById(`memory${index}`);

    video.addEventListener("ended", (event) => {
      memVideo.classList.remove("videoVisible");
      memVideo.classList.add("videoFade");
    });
  }
}

const badThings = document.getElementById("homeBadAni");
const badThingImgs = document.getElementsByClassName("homeBadImg");
const videoView = document.getElementById("videoTrigger");
const PSA = document.getElementById("PSA");
const ytVid = document.getElementById("ytVid");
let videoOrder = [1, 2, 3, 4, 5, 6];
shuffleArray(videoOrder);
const badImgText = {
  habit_1: "Keeping your brain inactive for countless hours can increase your risk of Alzheimer's by 60%",
  habit_2:
    "Excessive alcohol consumption can increase risk of Alzheimer's by 30%",
  habit_3:
    "An unhealthy diet can increase risk of Alzheimer's by 50%",
};
let badThingsTrigger = false;
let videoTrigger = false;

if (window.screen.width < 600) {
  ytVid.width = `${Math.floor(0.9 * window.screen.width)}`;
  ytVid.height = `${Math.floor(0.9 * window.screen.width) * 0.5625}`;
}

document.addEventListener("scroll", (event) => {
  if (isScrolledIntoView(badThings) && !badThingsTrigger) {
    console.log("poggers");
    var badVara = new Vara(
      "#homeBadAni",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: "Your Brain Health",
          duration: 6000,
          y: 10,
        },
      ],
      {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: headerFontSize,
        textAlign: "center",
      }
    );
    var badDescVara = new Vara(
      "#homeBadDesc",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: "The actions you take as a teenager can greatly affect your risk for Alzheimer's in the future. Learn about the risk factors by clicking the images below.",
          duration: 6000,
        },
      ],
      {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: descFontSize,
        textAlign: "center",
      }
    );

    for (const b of badThingImgs) {
      b.classList.add("homeBadImgVisibleT");
    }

    setTimeout(() => {
      for (const b of badThingImgs) {
        b.classList.add("homeBadImgVisible");
        b.classList.remove("homeBadImgVisibleT");
        b.classList.add("homeBadImgFull");
      }
    }, 3000);
    badThingsTrigger = true;
  }

  if (isScrolledIntoView(videoView) && !videoTrigger) {
    videoTrigger = true;
    var vidVara1 = new Vara(
      "#bottomVideoAni1",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: "You have many cherished memories",
          duration: 6000,
        },
      ],
      {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: bottomFontSize,
        textAlign: "center",
      }
    );
    vidVara1.ready(function () {
      vidVara1.animationEnd(function (i, o) {
        o.container.style.transition = "opacity 1s 1s";
        o.container.style.opacity = 0;
        var vidVara2 = new Vara(
          "#bottomVideoAni2",
          "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Shadows-Into-Light/shadows-into-light.json",
          [
            {
              text: "Don't let them be forgotten",
              duration: 6000,
              delay: 1200,
            },
          ],
          {
            strokeWidth: 2,
            color: "#FFFFFF",
            fontSize: bottomFontSize,
            textAlign: "center",
          }
        );
        vidVara2.ready(function () {
          vidVara2.animationEnd(function (i, o) {
            o.container.style.transition = "opacity 1s 1s";
            o.container.style.opacity = 0;
            setTimeout(() => {
              PSA.classList.add("PSAVisible");
            }, 250);
          });
        });
      });
    });

    let videoCount = 0;
    let interval = setInterval(function () {
      console.log("pooop");
      console.log(videoCount);
      if (videoCount === 5) {
        clearInterval(interval);
      }
      playVideo("memory", videoOrder[videoCount]);
      videoCount += 1;
    }, 900);

    setTimeout(() => {
      let inkCount = 0;
      let inkInterval = setInterval(function () {
        console.log("looop");
        console.log(inkCount);
        if (inkCount === 5) {
          clearInterval(inkInterval);
        }
        playVideo("ink", videoOrder[inkCount]);
        inkCount += 1;
      }, 900);
    }, 7200);
  }
});

function badImgClick(el) {
  if (!el.classList.contains("homeBadImgFull")) {
    return;
  }
  if (el.classList.contains("badImgText")) {
    el.classList.remove("badImgText");
    el.classList.add(el.id);
    el.innerHTML = "";
  } else {
    console.log("heyaaaa");
    el.classList.add("badImgText");
    el.classList.remove(el.id);
    el.innerHTML = badImgText[el.id];
  }
}
