let text_area_input_1 = document.getElementById("text_area_input_1");
let text_area_input_2 = document.getElementById("text_area_input_2");
let all_select_laguage_button = document.querySelectorAll(
  ".select_laguage_button"
);
let all_select_laguage_button_2 = document.querySelectorAll(
  ".select_laguage_button_2"
);
let delete_text_button = document.getElementById("delete_text_button");
let source_language_span = document.getElementById("source_language");
let target_language_span = document.getElementById("target_language");
let all_languages_list = document.getElementById("all_languages_list");
let all_languages_list_2 = document.getElementById("all_languages_list_2");
let languages_option_button = document.getElementById(
  "languages_option_button"
);
let languages_option_button_2 = document.getElementById(
  "languages_option_button_2"
);
let input_text_length_span = document.getElementById("input_text_length_span");
let copy_button = document.getElementById("copy_button");
let translation_copied_box = document.getElementById("translation_copied_box");
let copy_rate_share_button_div = document.getElementById(
  "copy_rate_share_button_div"
);
let save_button = document.getElementById("save_button");

let input_text_length = 0;

text_area_input_2.value = "Translation";

let input_text = "";
let source_language = "en";
let target_language = "hi";

// All select button
all_select_laguage_button.forEach((element) => {
  element.addEventListener("click", () => {
    source_language_span.innerText = element.innerText;
    all_languages_list.style.display = "none";
    source_language = languages[source_language_span.innerText];
    languages_option_button.style.transform = `rotate(0deg)`;
  });
});

all_select_laguage_button_2.forEach((element) => {
  element.addEventListener("click", () => {
    target_language_span.innerText = element.innerText;
    all_languages_list_2.style.display = "none";
    target_language = languages[target_language_span.innerText];
    languages_option_button_2.style.transform = `rotate(0deg)`;
  });
});

// languages_option_button
languages_option_button.addEventListener("click", () => {
  if (all_languages_list.style.display === "none") {
    all_languages_list.style.display = "block";
    languages_option_button.style.transform = `rotate(180deg)`;
  } else {
    all_languages_list.style.display = "none";
    languages_option_button.style.transform = `rotate(0deg)`;
  }
});

languages_option_button_2.addEventListener("click", () => {
  if (all_languages_list_2.style.display === "none") {
    all_languages_list_2.style.display = "block";
    languages_option_button_2.style.transform = `rotate(180deg)`;
  } else {
    all_languages_list_2.style.display = "none";
    languages_option_button_2.style.transform = `rotate(0deg)`;
  }
});

// All languages options
let languages = {
  Amharic: "am",
  Finnish: "fi",
  Malay: "ms",
  Telugu: "te",
  Arabic: "ar",
  French: "fr",
  Malayalam: "ml",
  Thai: "th",
  Basque: "eu",
  German: "de",
  Marathi: "mr",
  Chinese: "",
  Bengali: "bn",
  Greek: "el",
  Norwegian: "по",
  Turkish: "tr",
  English: "en",
  Gujarati: "gu",
  Polish: "pl",
  Urdu: "ur",
  Portuguese: "pt",
  Hebrew: "IW",
  Portuguese: "pt-GB",
  Ukrainian: "uk",
  Bulgarian: "bg",
  Hindi: "hi",
  Romanian: "го",
  Vietnamese: "vi",
  Catalan: "ca",
  Hungarian: "hu",
  Russian: "ru",
  Welsh: "cy",
  Cherokee: "chr",
  Icelandic: "IS",
  Serbian: "sr",
  Croatian: "hr",
  Indonesian: "id",
  Chinese: "zh",
  Czech: "CS",
  Italian: "it",
  Slovak: "sk",
  Danish: "da",
  Japanese: "ja",
  Slovenian: "sl",
  Dutch: "nl",
  Kannada: "kn",
  Spanish: "es",
  English: "en",
  Korean: "ko",
  Swahili: "SW",
  Estonian: "et",
  Latvian: "Iv",
  Swedish: "SV",
  Filipino: "fil",
  Lithuanian: "It",
  Tamil: "ta",
};

text_area_input_1.addEventListener("input", () => {
  input_text = text_area_input_1.value;
  // text_area_input_2.value = input_text;
  // console.log(input_text);
  // console.log(source_language);
  if (input_text === "") {
    text_area_input_2.value = "Translation";
    delete_text_button.classList.add("hidden");
    speech_button_1.classList.add("hidden");
    speech_button_2.classList.add("hidden");
    copy_rate_share_button_div.classList.add("hidden");
    save_button.classList.add("hidden");
  }
  if (input_text !== "") {
    delete_text_button.classList.remove("hidden");
    speech_button_1.classList.remove("hidden");
  }
  input_text_length = input_text.length;
  input_text_length_span.innerText = input_text_length;
});

// delete_text_button
delete_text_button.addEventListener("click", () => {
  text_area_input_1.value = "";
  input_text = "";
  text_area_input_2.value = "Translation";
  delete_text_button.classList.add("hidden");
  speech_button_1.classList.add("hidden");
  input_text_length = 0;
  input_text_length_span.innerText = input_text_length;
  speech_button_2.classList.add("hidden");
  copy_rate_share_button_div.classList.add("hidden");
  save_button.classList.add("hidden");
});

const url = "https://google-translate1.p.rapidapi.com/language/translate/v2/";

// Main translate function which translate the text of one language to another
async function translateText() {
  if (text_area_input_1.value != "") {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        // "X-RapidAPI-Key": "b9829fe312msh00540c0145090b8p16cb32jsn0c9e337b1fd2",
        "X-RapidAPI-Key": "9e5709100cmshec0a33455215d5fp153862jsn8ecc4d6856f9",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: new URLSearchParams({
        // Text to translate
        q: input_text,
        // Source language (English)
        source: source_language,
        // Target language (Hindi)
        target: target_language,
      }).toString(),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Assuming the API returns JSON
      const translatedText = result.data.translations[0].translatedText;
      // console.log(translatedText);
      text_area_input_2.value = translatedText;
    } catch (error) {
      console.log("Failed to translate:", error);
    }
    setTimeout(() => {
      speech_button_2.classList.remove("hidden");
      copy_rate_share_button_div.classList.remove("hidden");
      save_button.classList.remove("hidden");
    }, 1000);
  }
}

// Text to voice feature
let speech_button_1 = document.getElementById("speech_button_1");
let speech_button_1_pause_button = document.getElementById(
  "speech_button_1_pause_button"
);
let speech_button_2 = document.getElementById("speech_button_2");
let speech_button_2_pause_button = document.getElementById(
  "speech_button_2_pause_button"
);

function speakTranslation(text, language, textArea) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = language;
  // Change this depending on the language of the text

  window.speechSynthesis.speak(msg);
  msg.onend = function (event) {
    onSpeechEnd(textArea);
  };
}

// speech_button_1 when click then play speech
speech_button_1.addEventListener("click", () => {
  speakTranslation(input_text, source_language, 1);
  speech_button_1_pause_button.classList.remove("hidden");
  speech_button_1.classList.add("hidden");
});

// speech_button_1 when click then pause speech
speech_button_1_pause_button.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  speech_button_1_pause_button.classList.add("hidden");
  speech_button_1.classList.remove("hidden");
});

// speech_button_2 when click then play speech
speech_button_2.addEventListener("click", () => {
  speakTranslation(text_area_input_2.value, target_language, 2);
  speech_button_2_pause_button.classList.remove("hidden");
  speech_button_2.classList.add("hidden");
});

// speech_button_2 when click then pause speech
speech_button_2_pause_button.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  speech_button_2_pause_button.classList.add("hidden");
  speech_button_2.classList.remove("hidden");
});

function onSpeechEnd(textArea) {
  if (textArea === 1) {
    speech_button_1_pause_button.classList.add("hidden");
    speech_button_1.classList.remove("hidden");
  } else if (textArea === 2) {
    speech_button_2_pause_button.classList.add("hidden");
    speech_button_2.classList.remove("hidden");
  }
}

window.onload = function () {
  window.speechSynthesis.cancel();
};

// Copy text feature
copy_button.addEventListener("click", () => {
  text_area_input_2.select();
  navigator.clipboard
    .writeText(text_area_input_2.value)
    .then(() => {
      translation_copied_box.classList.remove("opacity-0");
      translation_copied_box.classList.add("opacity-100");
      setTimeout(() => {
        translation_copied_box.classList.add("opacity-0");
        translation_copied_box.classList.remove("opacity-100");
      }, 1000);
    })
    .catch((err) => {
      console.log("Failed to copy text: ", err);
    });
});
