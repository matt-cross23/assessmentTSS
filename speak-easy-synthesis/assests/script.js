console.log('TTS Script connected')
var synth = window.speechSynthesis;


var voiceSelect = document.querySelector('select');
var speechWrapper= document.querySelector('speechwrapper')
var playButton = document.querySelector('#play')
const patientName = document.querySelector('.patientname')
let patientText = patientName.textContent
const question = document.querySelectorAll('.question');
let result = [];
console.log(question)

function handleText(){
for(let i = 0; i < question.length; i++)
  {
  result.push(question[i].outerText);
  console.log(result)
  console.log(result.toString())
   
   } 
  }
handleText()
// let text = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'

var voices = [0];



function speak(){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (patientText.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(result);
    utterThis.onstart = function (event) {
      console.log('We have started uttering this speech: ')
      // Function that highlights text
      function highlightText(){

        var speechText = utterThis
        var words = speechText.split(' ');
        console.log(words)
    }
    highlightText
  }
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[0];
        break;
      }
    }

    synth.speak(utterThis);
  }
}



//On play button text to speech 

playButton.addEventListener('click', function(event) {
  console.log('speaking text')
  event.preventDefault();

  speak();

}
)
// Pause
document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});
// Resume
document.querySelector('#resume').addEventListener('click',()=> {
  window.speechSynthesis.resume();
});

// Cancel
document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
window.onload = function sayName(){
  console.log(patientText)
  return speechSynthesis.speak(new SpeechSynthesisUtterance(patientText));
}
voiceSelect.onchange = function(){
  speak();
}



