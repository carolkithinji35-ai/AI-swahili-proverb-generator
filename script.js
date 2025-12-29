function getProverb(response) {
  let proverbs = document.querySelector(".response");
  proverbs.classList.add("show");

 new Typewriter(".response", {
   strings: response.data.answer,
   autoStart: true,
   loop: false,
   delay: 40,
   cursor: null,
   
 });
}

function generateProverb(event) {
  event.preventDefault();
  let proverbs = document.querySelector(".response");
  proverbs.innerHTML = "⏳Generating a Swahili proverb...";
  proverbs.classList.add("show");

  const apiKey = "568925f93ofcc31043b0b8154ebt149a";
  let context = "";
  let prompt =
    "Generate a Swahili proverb along with its English translation. Provide only the proverb and its translation without any additional text. Display the text in the following html format: 'Swahili Proverb' - 'English Translation'.Make sure to indicate the translation clearly.";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(getProverb);
}
let btn = document.querySelector("button");
btn.addEventListener("click", generateProverb);
