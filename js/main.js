let currentLanguage = "en";


async function loadTranslations(language) {

    const response = await fetch(`i18n/${language}.json`);

    return response.json();

}


async function setLanguage(language) {

    const selectedTranslations = await loadTranslations(language);

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (selectedTranslations[key]) {
            element.textContent = selectedTranslations[key];
        }

    });


    document.documentElement.lang =
        language === "es"
            ? "es-419"
            : "en-US";


    const languageButton =
        document.getElementById("languageButton");


    if (language === "en") {

        languageButton.textContent = "EN | ES";

        languageButton.setAttribute(
            "aria-label",
            "Change language to Spanish"
        );

    } else {

        languageButton.textContent = "ES | EN";

        languageButton.setAttribute(
            "aria-label",
            "Cambiar idioma a inglés"
        );

    }


    currentLanguage = language;

}


document
    .getElementById("languageButton")
    .addEventListener("click", () => {

        const nextLanguage =
            currentLanguage === "en"
                ? "es"
                : "en";

        setLanguage(nextLanguage);

    });


setLanguage("en");