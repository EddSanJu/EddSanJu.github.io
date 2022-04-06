const setPlaceholderImg = () => {
    var placeHolder = document.createElement("section");
    var carImg = document.createElement("img");
    carImg.src = "assets/rentals/car-placeholder.png";
    
    placeHolder.appendChild(carImg);
    document.querySelector("div.selected-vehicule").appendChild(placeHolder);
}




const fillData = () => {
    event.preventDefault();
    console.log("fillData");
    const vehicule = document.getElementById("vehicule").value;
    console.log(vehicule);
    switch (vehicule) {
        case "honda-metropolitan":
            if (document.querySelector("div.selected-vehicule").childNodes[0]) {
                document.querySelector("div.selected-vehicule").removeChild(document.querySelector("div.selected-vehicule").childNodes[0]);
            }

            var vehiculeSelection = document.createElement("section");
            var carInf = document.createElement("p");
            carInf.innerHTML = "Honda Metropolitan";
            var carImg = document.createElement("img");
            carImg.src = "assets/rentals/hon-metro.jpg";

            vehiculeSelection.appendChild(carImg);
            vehiculeSelection.appendChild(carInf);
            document.querySelector("div.selected-vehicule").appendChild(vehiculeSelection);
            break;
               
        case "honda-dio":
            if (document.querySelector("div.selected-vehicule").childNodes[0]) {
                document.querySelector("div.selected-vehicule").removeChild(document.querySelector("div.selected-vehicule").childNodes[0]);
            }

            var vehiculeSelection = document.createElement("section");
            var carInf = document.createElement("p");
            carInf.innerHTML = "Honda Dio";
            var carImg = document.createElement("img");
            carImg.src = "assets/rentals/hon-dio.jpg";

            vehiculeSelection.appendChild(carImg);
            vehiculeSelection.appendChild(carInf);
            document.querySelector("div.selected-vehicule").appendChild(vehiculeSelection);
            break;

        case "honda-pcx150":
            if (document.querySelector("div.selected-vehicule").childNodes[0]) {
                document.querySelector("div.selected-vehicule").removeChild(document.querySelector("div.selected-vehicule").childNodes[0]);
            }

            var vehiculeSelection = document.createElement("section");
            var carInf = document.createElement("p");
            carInf.innerHTML = "Honda PCX150";
            var carImg = document.createElement("img");
            carImg.src = "assets/rentals/hon-PCX.jpg";

            vehiculeSelection.appendChild(carImg);
            vehiculeSelection.appendChild(carInf);
            document.querySelector("div.selected-vehicule").appendChild(vehiculeSelection);
            break;

        case "honda-pioneer":
            if (document.querySelector("div.selected-vehicule").childNodes[0]) {
                document.querySelector("div.selected-vehicule").removeChild(document.querySelector("div.selected-vehicule").childNodes[0]);
            }

            var vehiculeSelection = document.createElement("section");
            var carInf = document.createElement("p");
            carInf.innerHTML = "Honda Pioneer";
            var carImg = document.createElement("img");
            carImg.src = "assets/rentals/hon-pioner.jpg";

            vehiculeSelection.appendChild(carImg);
            vehiculeSelection.appendChild(carInf);
            document.querySelector("div.selected-vehicule").appendChild(vehiculeSelection);
            break;

        case "jeep-4":
            if (document.querySelector("div.selected-vehicule").childNodes[0]) {
                document.querySelector("div.selected-vehicule").removeChild(document.querySelector("div.selected-vehicule").childNodes[0]);
            }

            var vehiculeSelection = document.createElement("section");
            var carInf = document.createElement("p");
            carInf.innerHTML = "Jeep Wrangler 4";
            var carImg = document.createElement("img");
            carImg.src = "assets/rentals/jeep-4p.jpg";

            vehiculeSelection.appendChild(carImg);
            vehiculeSelection.appendChild(carInf);
            document.querySelector("div.selected-vehicule").appendChild(vehiculeSelection);
            break;

        case "jeep-2":
            if (document.querySelector("div.selected-vehicule").childNodes[0]) {
                document.querySelector("div.selected-vehicule").removeChild(document.querySelector("div.selected-vehicule").childNodes[0]);
            }

            var vehiculeSelection = document.createElement("section");
            var carInf = document.createElement("p");
            carInf.innerHTML = "Jeep Wrangler 2";
            var carImg = document.createElement("img");
            carImg.src = "assets/rentals/jeep-2p.png";

            vehiculeSelection.appendChild(carImg);
            vehiculeSelection.appendChild(carInf);
            document.querySelector("div.selected-vehicule").appendChild(vehiculeSelection);
            break;

        default:
            break;
    }
}

const alertReserv = () => {
    alert("Reservation enregistrée, One of Our agent will communicate with you ASAP");
}