console.log("TTS Script connected");
var synth = window.speechSynthesis;
console.log(window.SpeechSynthesisUtterance.prototype);
// let voiceList = synth.getVoices()
// console.log(voiceList)
// var speechWrapper= document.querySelector('speechwrapper')
var playButton = document.querySelector("#play");
const patientName = document.querySelector(".patientname");
let patientText = patientName.outerText.toString();
const question = document.querySelectorAll(".question");
let result = [];
let boundary = document.querySelector(".next");
let paragraphs = document.querySelectorAll("p");
let nextButton = document.querySelector(".proxyNext");

console.log(paragraphs);
console.log(question);

const questionObject = {
  utterance2: new SpeechSynthesisUtterance(question[2].textContent),
  utterance3: new SpeechSynthesisUtterance(question[3].textContent),
  utterance4: new SpeechSynthesisUtterance(question[4].textContent),
  utterance5: new SpeechSynthesisUtterance(question[5].textContent),
  utterance6: new SpeechSynthesisUtterance(question[6].textContent),
  utterance7: new SpeechSynthesisUtterance(question[7].textContent),
  utterance8: new SpeechSynthesisUtterance(question[8].textContent),
  utterance9: new SpeechSynthesisUtterance(question[9].textContent),
  utterance10: new SpeechSynthesisUtterance(question[10].textContent),
  utterance11: new SpeechSynthesisUtterance(question[11].textContent),
  utterance12: new SpeechSynthesisUtterance(question[12].textContent),
  utterance13: new SpeechSynthesisUtterance(question[13].textContent),
  utterance14: new SpeechSynthesisUtterance(question[14].textContent),
  utterance15: new SpeechSynthesisUtterance(question[15].textContent),
  utterance16: new SpeechSynthesisUtterance(question[16].textContent),
  utterance17: new SpeechSynthesisUtterance(question[17].textContent),
  utterance18: new SpeechSynthesisUtterance(question[18].textContent),
  utterance19: new SpeechSynthesisUtterance(question[19].textContent),
  utterance20: new SpeechSynthesisUtterance(question[20].textContent),
  utterParagraph: new SpeechSynthesisUtterance(paragraphs[20].textContent),
  utterParagraph2: new SpeechSynthesisUtterance(paragraphs[21].textContent),
  utterParagraph3: new SpeechSynthesisUtterance(paragraphs[22].textContent),
};
function speechFunction() {
  for (let i = 0; i < questionObject.length; i++) {
    synth.speak(questionObject[i]);
    
  }
};
speechFunction();

function handleText() {
  // result.push(question[i].outerText);
  // result.toString()
  for (let i = 0; i < question.length; i++) {
    result.push(question[i].textContent);
    result.toString();
  }
  return result;
}
console.log(result);
handleText();

function highlightContent() {
  let highlightArray = [];
  for (let i = 0; i < paragraphs.length; i++) {
    highlightArray.push(paragraphs[i].innerHTML);
    for (let j = 0; j < highlightArray.length; j++) {
      paragraphs[i].classList.add("mark");
    }
  }
  console.log(highlightArray);
}

var voices = [0];

function speak() {

  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  if (patientText.value !== "") {
    var utterThis = new window.SpeechSynthesisUtterance(question[0].textContent);
    var utterQueue = new window.SpeechSynthesisUtterance(question[1].textContent);
    console.log(utterThis);
    // console.log(utterQueue)
    utterThis.onstart = function (event) {
      let pending = synth.pending;
      console.log("The Queue is " + pending);
    };
    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend " + event.elapsedTime);
      if ((pending = true)) {
        synth.pause();
      }
    };
    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };
  } else if ((question[num] = question.length)) {
    window.speechSynthesis.pause();
  }

  utterQueue.onstart = function (event) {
    console.log("Queue activated");
    console.log(utterQueue.text);
    let pending = synth.pending;
    console.log(pending);
  };
  utterQueue.onend = function (event) {
    console.log("Queue ended");
    let pending = synth.pending;
    console.log(pending);
    synth.pause();
  };

  utterQueue.onboundary = function (event) {
    console.log(event.charIndex, event.name);
    if (event.charIndex === event.charIndex.length) {
      window.speechSynthesis.paused();
      console.log("end of question");
    }
  };

  utterThis.rate = 9;
  utterQueue.rate = 9;

  const speechPromise = new Promise(() => {
    highlightContent()
    synth.speak(utterThis);
    nextButton.addEventListener("click", function (event) {
      event.preventDefault();
      synth.resume();
    });
  });
  speechPromise
    .then(synth.speak(utterQueue))
    .then(
      synth.speak(questionObject.utterance2),
      synth.pause()
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
    .then(
      synth.speak(questionObject.utterance8)
    )
    .then(
      synth.speak(questionObject.utterance9)
    )
    .then(
      synth.speak(questionObject.utterance10)
    )
    .then(
      synth.speak(questionObject.utterance11)
    )
    .then(
      synth.speak(questionObject.utterance12)
    )
    .then(
      synth.speak(questionObject.utterance13)
    )
    .then(
      synth.speak(questionObject.utterance14)
    )
    .then(
      synth.speak(questionObject.utterance15)
    )
    .then(
      synth.speak(questionObject.utterance16)
    )
    .then(
      synth.speak(questionObject.utterance17)
    )   
    .then(
      synth.speak(questionObject.utterance18)
    )
    .then(
      synth.speak(questionObject.utterance19)
    )
    .then(
      synth.speak(questionObject.utterance20)
    )
    .then(
      synth.speak(questionObject.utterParagraph)
    )
    .then(
      synth.speak(questionObject.utterParagraph2)
    )
    .then(
      synth.speak(questionObject.utterParagraph3)
    )
}

//On play button text to speech

playButton.addEventListener("click", function (event) {
  console.log("speaking text");
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
document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});

// Cancel
document.querySelector("#cancelVoice").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
