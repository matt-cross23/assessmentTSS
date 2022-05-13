console.log('TTS Script connected')
var synth = window.speechSynthesis;
console.log(window.SpeechSynthesisUtterance.prototype)

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
  // result.push(question[i].outerText);
  // result.toString()
  for (let i = 0; i < question.length; i++) {
    result.push(question[i].textContent)  
    result.toString()
 
  }
  // console.log(result)
  return result
}

handleText()

function highlightText(){

}


// function highlightContent(){
//   let highlightArray = [] 
//   for (let i = 0; i < question.length; i++) {
//     highlightArray.push(question[i].innerHTML);
//     for(let j = 0; j <highlightArray.length; j++){
    
//     }
//   }
//   console.log(highlightArray)
// }

var voices = [0];



function speak() {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  if (patientText.value !== '') {
    i = 0
  
    // result is the fully array have it only for the first question
    var utterThis = new SpeechSynthesisUtterance(question[i].textContent);
    var utterQueue = new SpeechSynthesisUtterance(question[i++].textContent);
    console.log(utterThis)
    utterThis.onstart = function (event) {
      let pending = synth.pending
      console.log('The Queue is ' + pending)
      console.log('We have started uttering this speech: ' + question[i].textContent)
    }
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend ' + event.elapsedTime);
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }

    }
    else if (question[i] !== question.length){
      window.speechSynthesis.pause();
    }
    utterQueue.onstart = function (event) {
      console.log('Queue activated');
      console.log(utterQueue.text)
      let pending = synth.pending
      console.log(pending)
    }
    utterQueue.onend = function (event) {
      console.log('Queue ended')
      let pending = synth.pending
      console.log(pending)
     return synth.speak(utterQueue)
    }

    synth.speak(utterThis); 
    synth.speak(utterQueue)
    utterThis.rate = 9

  }

//On play button text to speech 

playButton.addEventListener('click', function (event) {
  console.log('speaking text')
  event.preventDefault();
  speak();
  // highlightContent()
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

// window.onload = (event) => {
//   let speakName = new SpeechSynthesisUtterance(patientText);
// synth.speak(speakName);
// };
