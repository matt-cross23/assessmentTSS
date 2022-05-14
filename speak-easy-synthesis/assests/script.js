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
let nextButton = document.querySelector('.proxyNext')

console.log(paragraphs)
console.log(question)


function handleText() {
  // result.push(question[i].outerText);
  // result.toString()
  for (let i = 0; i < question.length; i++) {
    result.push(question[i].textContent)  
    result.toString()
 
  }
  return result
}
console.log(result)
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



function speak(num, iteration) {
  num = 0
  console.log(num)
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  if (patientText.value !== '') {
    // result is the fully array have it only for the first question
    var utterThis = new SpeechSynthesisUtterance(question[0].textContent);
    var utterQueue = new SpeechSynthesisUtterance(question[1].textContent);
    console.log(utterThis)
    console.log(utterQueue)
    utterThis.onstart = function (event) {
      let pending = synth.pending
      console.log('The Queue is ' + pending)
        }
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend ' + event.elapsedTime);
      if(pending = true){
        synth.pause()

      }
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }

    }
    else if (question[num] = question.length){
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
        synth.pause()
    
    }
 
    utterQueue.onboundary = function(event){
      console.log(event.charIndex, event.name)
      if (event.charIndex === 951){
        window.speechSynthesis.cancel()
        console.log('cancelled');
      } 
    }
   
    utterThis.rate = 9
    utterQueue.rate = 9 

const speechPromise = new Promise(() =>{
  synth.speak(utterThis); 
  nextButton.addEventListener('click', function(event){
    event.preventDefault();
    synth.resume()
  })
})
speechPromise.then( 
  synth.speak(utterQueue)
)
}

// function speakQuestions(){
//   var utterQuestions = new SpeechSynthesisUtterance(question.textContent);
//   console.log(utterQuestions)
//   synth.speak(utterQuestions)

// }
//On play button text to speech 

playButton.addEventListener('click', function (event) {
  console.log('speaking text')
  event.preventDefault();
  speak()
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
