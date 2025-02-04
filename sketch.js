/* const nightSound = new Audio('night.mp3')
const twilightSound = new Audio('twilight.mp3')
const morningSound = new Audio('morning.mp3')
const daySound = new Audio('day.mp3')
const nothingnessSound = new Audio('nothingness.mp3') */

let nightSound
let twilightSound
let morningSound
let daySound
let nothingnessSound

function preload() {
  nightSound = loadSound('night.wav')
  twilightSound = loadSound('twilight.wav')
  morningSound = loadSound('morning.wav')
  daySound = loadSound('day.wav')
  nothingnessSound = loadSound('nothingness.wav')

  gelatoSans = loadFont('GelatoSans-Regular.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  onresize = () => resizeCanvas(innerWidth, window.innerHeight)

  nightSound.loop()
  twilightSound.loop()
  morningSound.loop()
  daySound.loop()
  nothingnessSound.loop()
}

let goodNightOpacity = 255

function draw() {
  mouseXcolor = Math.trunc(mouseX/width*255)
  mouseYcolor = Math.trunc((height-mouseY)/height*255)
  
  background(mouseXcolor, mouseYcolor, Math.trunc((mouseXcolor+mouseYcolor)/2))
  
  textSize(160)
  textAlign("center")
  textFont(gelatoSans

  )
  
  if (mouseX > width/4*3.7 && mouseY < height/4*0.3) {
    fill(255-mouseXcolor, 255-mouseYcolor,255- Math.trunc((mouseXcolor+mouseYcolor)/2))
    text("Nothingness", width/2, height/1.8)
    goodNightOpacity = 255

    nightSound.setVolume(0)
    twilightSound.setVolume(0)
    morningSound.setVolume(0)
    daySound.setVolume(0)
    nothingnessSound.setVolume(1)
    
  } else if (mouseX < width/4 && mouseY > height/4*3) {
    fill(255-mouseXcolor, 255-mouseYcolor,255-Math.trunc((mouseXcolor+mouseYcolor)/2), goodNightOpacity)
    text("Night", width/2, height/1.8)
    
    goodNightOpacity -= 0.4

    nightSound.setVolume(1)
    twilightSound.setVolume(0)
    morningSound.setVolume(0)
    daySound.setVolume(0)
    nothingnessSound.setVolume(0)
        
  } else if (mouseX < width/4*2 && mouseY > height/4*2) {
    fill(255-mouseXcolor, 255-mouseYcolor,255- Math.trunc((mouseXcolor+mouseYcolor)/2))
    text("Twilight", width/2, height/1.8)
    goodNightOpacity = 255

    nightSound.setVolume(1)
    twilightSound.setVolume(1)
    morningSound.setVolume(0)
    daySound.setVolume(0)
    nothingnessSound.setVolume(0)
    
  } else if (mouseX < width/4*3 && mouseY > height/4) {
    fill(255-mouseXcolor, 255-mouseYcolor,255- Math.trunc((mouseXcolor+mouseYcolor)/2))
    text("Morning", width/2, height/1.8)
    goodNightOpacity = 255

    nightSound.setVolume(1)
    twilightSound.setVolume(1)
    morningSound.setVolume(1)
    daySound.setVolume(0)
    nothingnessSound.setVolume(0)
    
  } else {
    fill(255-mouseXcolor, 255-mouseYcolor,255- Math.trunc((mouseXcolor+mouseYcolor)/2))
    text("Day", width/2, height/1.8)
    goodNightOpacity = 255

    nightSound.setVolume(1)
    twilightSound.setVolume(1)
    morningSound.setVolume(0)
    daySound.setVolume(1)
    nothingnessSound.setVolume(0)
    
  }
}