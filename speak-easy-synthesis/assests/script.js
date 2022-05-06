console.log('TTS Script connected')
var synth = window.speechSynthesis;
// let voiceList = synth.getVoices()
// console.log(voiceList)
// var speechWrapper= document.querySelector('speechwrapper')
var playButton = document.querySelector('#play')
const patientName = document.querySelector('.patientname')
let patientText = patientName.outerText.toString()
const question = document.querySelectorAll('.question');
let result = [];
let boundary = document.querySelector('.next')
let paragraphs = document.querySelectorAll('p')

console.log(paragraphs)
console.log(question)

function handleText() {
  for (let i = 0; i < question.length; i++) {
    result.push(question[i].outerText);
    result.toString()
  }
}
console.log(result)

handleText()



function highlightContent(){
  let highlightArray = [] 
  for (let i = 0; i < question.length; i++) {
    highlightArray.push(question[i].innerHTML);
    for(let j = 0; j <highlightArray.length; j++){
    
    }
  }
  console.log(highlightArray)
}

var voices = [0];



function speak() {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  if (patientText.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(result);
    utterThis.onstart = function (event) {
      console.log('We have started uttering this speech: ' + result)
    }
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend ' + event.elapsedTime);
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }
    utterThis.onboundary = function handleBoundary(){
      if(utterThis == 'counselor.'){
      synth.pause();
      console.log('Stopped')
      }
      }
    }
    synth.speak(utterThis);
}


//On play button text to speech 

playButton.addEventListener('click', function (event) {
  console.log('speaking text')
  event.preventDefault();
  speak();
  highlightContent()
  // <!--
  // Highlight function idea-->
  //  $('.question').addClass('highlight');
  //     setTimeout(function () {
  //       $('.question').removeClass('highlight');
  //     }, 2000); 
   
  // });
}); 

// Pause
document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();

});
// Resume
document.querySelector('#resume').addEventListener('click', () => {
  window.speechSynthesis.resume();
});

// Cancel
document.querySelector("#cancelVoice").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
// window.addEventListener('load', function sayName() {
//   console.log(patientText)
// });

window.onload = (event) => {
  let speakName = new SpeechSynthesisUtterance(patientText);
synth.speak(speakName);
};
