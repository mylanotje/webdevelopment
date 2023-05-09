const initialize = () => {
    const goButton = document.getElementById("druk");
    const inputField = document.getElementById("zoekopdracht");
    const historyContainer = document.getElementById("history-container");
    const historySection = document.getElementById("history");
    let history = JSON.parse(localStorage.getItem("history")) || [];

    goButton.addEventListener("click", () => {
        // Opdracht ophalen
        const zoeken = inputField.value.trim();

        // De URL aanmaken
        let url;
        let cardHtml = "";
        const slice = zoeken.slice(3);
        if (zoeken.startsWith("/g ")) {
            url = "https://www.google.com/search?q=" + slice;
            cardHtml += "google-card";
        } else if (zoeken.startsWith("/y ")) {
            url = "https://www.youtube.com/results?search_query=" + slice;
            cardHtml += "youtube-card";
        } else if (zoeken.startsWith("/t ")) {
            url = "https://twitter.com/search?q=" + slice;
            cardHtml += "twitter-card";
        } else if (zoeken.startsWith("/i ")) {
            url = "https://www.instagram.com/explore/tags/" + slice;
            cardHtml += "instagram-card";
        } else {
            alert("Ongekende Prefix");
        }

        // URL openen in een nieuw tabblad en de card aanmaken
        if (url) {
            window.open(url, "_blank");
            const cardTitle = url.split(".")[1].toUpperCase();
            const cardText = zoeken;
            const historyCard = document.createElement("div");
            historyCard.classList.add(cardHtml, "col");
            historyCard.innerHTML = `<h3>${cardTitle}</h3><p>${cardText}</p><a href="${url}" target="_blank">Go!</a>`;
            historySection.appendChild(historyCard);

            // Het geschiedenisobject bijwerken en opslaan in LocalStorage
            const newHistoryItem = { title: cardTitle, text: cardText, url: url, cardHtml:cardHtml };
            history.push(newHistoryItem);
            localStorage.setItem("history", JSON.stringify(history));
        }

        // Invoerveld leegmaken
        inputField.value = "";
    });

    // Laad de vorige zoekopdrachten uit de LocalStorage
    for (let i = 0; i < history.length; i++) {
        const historyItem = history[i];
        const historyCard = document.createElement("div");
        historyCard.classList.add(historyItem.cardHtml, "col");
        historyCard.innerHTML = `<h3>${historyItem.title}</h3><p>${historyItem.text}</p><a href="${historyItem.url}" target="_blank">Go!</a>`;
        historySection.appendChild(historyCard);
    }

    // Voeg row-cols-3 class toe aan row div
    historyContainer.classList.add("container");
    historySection.classList.add("row", "row-cols-3");
};

window.addEventListener("load", initialize);
