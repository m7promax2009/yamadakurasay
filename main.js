const countries = {
    "United States": "en-US",
    "France": "fr-FR",
    "Germany": "de-DE",
    "Spain": "es-ES",
    "Italy": "it-IT",
    "Japan": "ja-JP",
    "Russia": "ru-RU",
    "China": "zh-CN"
};

const countrySelect = document.getElementById('country');
for (const [country, lang] of Object.entries(countries)) {
    const option = document.createElement('option');
    option.value = lang;
    option.textContent = country;
    countrySelect.appendChild(option);
}

function textToSpeech() {
    const text = document.getElementById('text').value;
    const selectedLang = document.getElementById('country').value;
    const speech = new SpeechSynthesisUtterance();

    speech.text = text;
    speech.lang = selectedLang;

    const voices = window.speechSynthesis.getVoices();

    speech.voice = voices.find(voice => voice.lang === selectedLang) || voices[0];

    speech.rate = 1.2; 
    speech.pitch = 1; 

    window.speechSynthesis.speak(speech);
}

window.speechSynthesis.onvoiceschanged = () => {
    console.log('Voices loaded:', window.speechSynthesis.getVoices());
};