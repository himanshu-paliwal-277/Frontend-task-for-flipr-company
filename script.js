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
  });
});

all_select_laguage_button_2.forEach((element) => {
  element.addEventListener("click", () => {
    target_language_span.innerText = element.innerText;
    all_languages_list_2.style.display = "none";
    target_language = languages[target_language_span.innerText];
  });
});

// languages_option_button
languages_option_button.addEventListener("click", () => {
  if (all_languages_list.style.display === "none") {
    all_languages_list.style.display = "block";
  } else {
    all_languages_list.style.display = "none";
  }
});

languages_option_button_2.addEventListener("click", () => {
  if (all_languages_list_2.style.display === "none") {
    all_languages_list_2.style.display = "block";
  } else {
    all_languages_list_2.style.display = "none";
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
  // text_area_input_2.value = text_area_input_1.value;
  input_text = text_area_input_1.value;
  console.log(input_text);
  console.log(source_language);
  if (input_text === "") {
    text_area_input_2.value = "";
  }
});

// delete_text_button
delete_text_button.addEventListener("click", () => {
  text_area_input_1.value = "";
  text_area_input_2.value = "Translation";
});

const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";

async function translateText() {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "b9829fe312msh00540c0145090b8p16cb32jsn0c9e337b1fd2",
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
    // console.log(result);
    const translatedText = result.data.translations[0].translatedText;
    // console.log(translatedText);
    text_area_input_2.value = translatedText;
  } catch (error) {
    console.error("Failed to translate:", error);
  }
}
