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
console.log(question[0].textContent)

function handleText() {
  // result.push(question[i].outerText);
  // result.toString()
  for (let i = 0; i < question.length; i++) {
    result.push(question[i].innerText)  
  }
  // console.log(result)
  return result
}

handleText()



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
    // result is the fully array have it only for the first question
  
    var utterThis = new SpeechSynthesisUtterance(handleText());
    utterThis.onboundary = function constructor(property, charIndex, charLength) {
      this.property = property;
      this.charIndex = property.charIndex;
      this.charLength = property.charLength;
      this.onboundary = function hello(){
        return charIndex
      }
    }
    console.log(utterThis)
    utterThis.onstart = function (event) {

      // console.log('We have started uttering this speech: ' + handleText())
    }
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend ' + event.elapsedTime);
      
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }

    utterThis.onpause = function(event) {
      var char = event.utterance.text.charAt(event.charIndex);
      console.log('Speech paused at character ' + event.charIndex + ' of "' +
 '", which is "' + char + '".');
    }
    


    // utterThis.onboundary = function handleBoundary(event) {
    //   boundary.addEventListener('click', ()=> {
    //     event.preventDefault();
    //     window.speechSynthesis.pause();
    //   console.log('Stopped')
    //   })
    //   console.log(utterThis)
    //   window.speechSynthesis.pause();
    // //   let setBoundary = Object.getPrototypeOf(event.utterance.onboundary)
    // //   setBoundary = 'Assessment'
    // //  console.log(Object.getPrototypeOf(event.utterance))
     
      
    //   // console.log(setBoundary.onboundary())
    // // event.utterance.SpeechSynthesisUtterance('Assessment')
     
    // }
    }
    synth.speak(utterThis); 
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
