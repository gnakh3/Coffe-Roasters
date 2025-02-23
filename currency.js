fetch("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json")
    .then(response => response.json())
    .then(data => {
        const currencyContainer = document.getElementById("Currency");
        currencyContainer.innerHTML = "";
    
        data.forEach(info => {
            const dateElement = document.createElement("div");
            dateElement.classList.add("currency-date");
            dateElement.innerText = info.date.slice(0, 10);
    
            const currencies = info.currencies.filter(currency => currency.code === 'USD' || currency.code === 'EUR');
            
            const currencyText = document.createElement("div");
            currencyText.classList.add("currency-text");
            currencyText.innerHTML = currencies.map(currency => `${currency.code} - ${currency.rateFormated}`).join(" | ");
    
            currencyContainer.appendChild(dateElement);
            currencyContainer.appendChild(currencyText);
        });
      }) 
    .catch(error => console.log(error));
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

let gelPerEur = 0;  
let gelPerUsd = 0;

function fetchData() {
    fetch("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json")
        .then(response => response.json())
        .then(data => {
            const currencyContainer = document.querySelector(".Currency"); 
            if (currencyContainer) currencyContainer.innerHTML = "";

            data.forEach(info => {
                const euroCurrency = info.currencies.find(currency => currency.code === 'EUR');
                const dollarCurrency = info.currencies.find(currency => currency.code === 'USD');

                gelPerEur = euroCurrency ? euroCurrency.rate : 0;
                gelPerUsd = dollarCurrency ? dollarCurrency.rate : 0;

                document.getElementById('euro-currency').textContent = 
                    euroCurrency ? `EUR: ${gelPerEur}` : "EUR data unavailable";

                document.getElementById('dollar-currency').textContent = 
                    dollarCurrency ? `USD: ${gelPerUsd}` : "USD data unavailable";
            });
        })
        .catch(error => console.error("Error", error));
}


document.getElementById("euro-button").addEventListener("click", function () {
    let euro = document.getElementById("euro").value;
    if (!isNaN(euro)) {
        document.getElementById("gel").value = euro * gelPerEur;
        document.getElementById("dollar").value = (euro * gelPerEur) / gelPerUsd;
    }
});

document.getElementById("gel-button").addEventListener("click", function () {
    let gel =document.getElementById("gel").value;
    if (!isNaN(gel) && gel > 0) {
        document.getElementById("euro").value = gel / gelPerEur;
        document.getElementById("dollar").value = gel / gelPerUsd;
    }
});

document.getElementById("dollar-button").addEventListener("click", function () {
    let dollar = (document.getElementById("dollar").value);
    if (!isNaN(dollar)) {
        document.getElementById("euro").value = (dollar * gelPerUsd) / gelPerEur;
        document.getElementById("gel").value = dollar * gelPerUsd;
    }
});
