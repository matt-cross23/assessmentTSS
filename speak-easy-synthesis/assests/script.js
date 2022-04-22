console.log('TTS Script connected')
var synth = window.speechSynthesis;


var voiceSelect = document.querySelector('select');
var speechWrapper= document.querySelector('speechwrapper')
var playButton = document.querySelector('#play')

const patientName = document.querySelector('.patientname')
let patientText = patientName.textContent
// let text = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'

var voices = [0];

// function populateVoiceList() {
//   voices = synth.getVoices().sort(function (a, b) {
//       const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
//       if ( aname < bname ) return -1;
//       else if ( aname == bname ) return 0;
//       else return +1;
//   });
//   var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
//   voiceSelect.innerHTML = '';
//   for(i = 0; i < voices.length ; i++) {
//     var option = document.createElement('option');
//     option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
//     if(voices[i].default) {
//       option.textContent += ' -- DEFAULT';
//     }

//     option.setAttribute('data-lang', voices[i].lang);
//     option.setAttribute('data-name', voices[i].name);
//     voiceSelect.appendChild(option);
//   }
//   voiceSelect.selectedIndex = selectedIndex;
// }

// populateVoiceList();
// if (speechSynthesis.onvoiceschanged !== undefined) {
//   speechSynthesis.onvoiceschanged = populateVoiceList;
// }
console.log(patientText)

function speak(){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (patientText.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(patientText);
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

// inputForm
//On play button text to speech 
playButton.addEventListener('click', function(event) {
  console.log('speaking text')
  event.preventDefault();

  speak();

  inputTxt.blur();
}
)

// pitch.onchange = function() {
//   pitchValue.textContent = pitch.value;
// }

// rate.onchange = function() {
//   rateValue.textContent = rate.value;
// }

voiceSelect.onchange = function(){
  speak();
}
