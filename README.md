# assessmentTSS

This app uses the Web Speech API to read the text on the screen.

## Obstacles and Next Steps

The functionality of the app right now is the play button will speak the patients name but not the questions. The biggest obstacle here becomes how to distinguish between text and extraneous content. Also another difficulty is all questions are position together, so if one presses play the speech will go to next question before the patient is finished answering. Maybe iterate through DOM elements becuase each question is under class 'questions' 

i.e. 
``` let questions = document.body.querySelectAll('.questions');
for(let i = 0; i < questions.length; i++)
{
  let questionText = document.body.querySelectAll('.questions').textContent;
  speak(questionText);  
} 
```
Possibly run into CORS policy access deniall because the app is hosted on the cloud
*Just add a header so that when the fetch happens the browser knows it's allow*

## Technologies Used

[Web Speech API docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

-The script is attached to HTML5 document

## User story

As a patient with accessibility disabilities, I want to use ERPHealth’s platform so that I can receive mental health services.

As a patient with literacy obstacles, I want to use Text-to-Speech audio so that I can fully engage in ERPHealth’s products.

As a patient with mental health disabilities, I want to listen to text so I can focus better

As a ERPHealth provider, I want to provide accessible webpages for best patient outcomes and most accurate data

## Acceptance Criteria
-Given a user cannot read, then they will be able to identify a button that will speak the text
-Given an ERPHealth assessment, then there is a button that will read the question at hand and not outside text
-



## Resources 

[Web Accessibility Principles and Standards](https://www.w3.org/WAI/fundamentals/accessibility-principles/#compatible)

[Text to Speech Guidelines](https://www.w3.org/WAI/perspective-videos/speech/)

[Cloned this repo](https://github.com/mdn/web-speech-api/blob/master/speak-easy-synthesis/script.js)

## User-Mapping and WireFrame
[WireFrame Image](https://docs.google.com/document/d/1ZPjn1f1rEberf3zhxuarrcBpvYEHo9BPQaH1SrS9-wo/edit?usp=sharing "Text to Speech Wireframe")



