const btnSubmit = document.querySelector("#btn-submit");
const txtInput = document.querySelector("#txt-input");
const txtOutput = document.querySelector("#output-txt");
const baseUrl = "https://api.funtranslations.com/translate/minion.json?text="

txtInput.addEventListener("change", onChangeHandler);
btnSubmit.addEventListener("click", onClickHandler)

const getTranslation = (inpText) => {
    const url = baseUrl + inpText;

    return fetch(url)
        .then((res) => res.json())
        .then((json) => json);
}

const onChangeHandler = (e) => {
    //console.log(e.target.value);
}

const onClickHandler = () => {

    getTranslation(txtInput.value)
        .then((res) => txtOutput.innerText = res.contents.translated)
        .catch((err) => {
            console.log(err);
            alert("Something wrong with server, try again after sometime!");
        });
}

// "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
