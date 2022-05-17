console.log('TTS Script connected')
var synth = window.speechSynthesis;
console.log(window.SpeechSynthesisUtterance.prototype)
console.log('speechSynthesis' in window, 'webkitSpeechRecognition' in window, 'speechRecognition' in window);
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

const questionObject = {
utterance2: new SpeechSynthesisUtterance(question[3].textContent),
utterance3: new SpeechSynthesisUtterance(question[4].textContent),
utterance4: new SpeechSynthesisUtterance(question[5].textContent),
utterance5: new SpeechSynthesisUtterance(question[6].textContent),
utterance6: new SpeechSynthesisUtterance(question[7].textContent),
utterance7: new SpeechSynthesisUtterance(question[8].textContent),
utterance8: new SpeechSynthesisUtterance(question[9].textContent),
utterance9: new SpeechSynthesisUtterance(question[10].textContent),
utterance10: new SpeechSynthesisUtterance(question[11].textContent),
utterance11: new SpeechSynthesisUtterance(question[12].textContent),

}

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



function speak() {
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
 
    console.log(num)
    // console.log(utterQueue)
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
      if (event.charIndex === event.charIndex.length){
        window.speechSynthesis.paused()
        console.log('end of question');
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
.then(
  synth.speak(questionObject.utterance2),
  questionObject.utterance2.onend = function(event){
    window.speechSynthesis.paused()
  }
)
.then(
  synth.speak(questionObject.utterance3)
)
.then(
  synth.speak(questionObject.utterance4)
)
.then(
  synth.speak(questionObject.utterance5)
)
.then(
  synth.speak(questionObject.utterance6)
)
.then(
  synth.speak(questionObject.utterance7)
)

};

// function speakQuestions(){
//   var utterQuestions = new SpeechSynthesisUtterance(question.textContent);
//   console.log(utterQuestions)
//   synth.speak(utterQuestions)

// }
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
