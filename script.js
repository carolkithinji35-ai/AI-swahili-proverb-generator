function getProverb(response) {}

function generateProverb(event) {
  event.preventDefault();
  let proverbs = document.querySelector(".response");
  proverbs.innerHTML =
    "Haba na haba hujaza kibaba. (Little by little fills the pot.)";

  let apiKey = "";
  let apiUrl = "";
  let context = "";
  let prompt =
    "Generate a Swahili proverb along with its English translation. Provide only the proverb and its translation without any additional text.";
  
  axios.get(apiUrl). then(getProverb);
}
let btn = document.querySelector("button");
btn.addEventListener("click", generateProverb);
