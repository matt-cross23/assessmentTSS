console.log('TTS Script connected')
var synth = window.speechSynthesis;


// var speechWrapper= document.querySelector('speechwrapper')
var playButton = document.querySelector('#play')
const patientName = document.querySelector('.patientname')
let patientText = patientName.outerText.toString()
const question = document.querySelectorAll('.question');
let result = [];
let boundary = document.querySelector('.next')

console.log(question)

function handleText() {
  for (let i = 0; i < question.length; i++) {
    result.push(question[i].outerText);
    result.toString()
  }
}
console.log(result)

handleText()
// let text = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'

// // hightlight function
// function highlightText(){
// console.log(question.innerHTML)
// }
function highlightContent(){
  let highlightArray = [] 
  for (let i = 0; i < question.length; i++) {
    highlightArray.push(question[i].innerHTML);
    for(let j = 0; j <highlightArray.length; j++){
      $(this).toggle('highlight')
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

    // var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    // for(i = 0; i < voices.length ; i++) {
    //   if(voices[i].name === selectedOption) {
    //     utterThis.voice = voices[0];
    //     break;
    //   }
    // }

    synth.speak(utterThis);
  }
}



//On play button text to speech 

playButton.addEventListener('click', function (event) {
  console.log('speaking text')
  event.preventDefault();
  speak();
  highlightContent()
      // $('.question').addClass('highlight');
      // setTimeout(function () {
      //   $('.question').removeClass('highlight');
      // }, 2000);
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
