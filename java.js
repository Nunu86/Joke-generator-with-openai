let revealJoke = (response) => {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
  });
};

let tellJoke = () => {
  let prompt = "Tell me a joke";
  let context = "Keep answer short and sweet";
  let apiKey = "8ab570aff7t8c4d757b9f03613oab792";
  let theLink = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(theLink).then(revealJoke);

  let waitTime = document.querySelector("#joke");
  waitTime.innerHTML = "processing...";
};

let selectButton = document.querySelector("button");
selectButton.addEventListener("click", tellJoke);
