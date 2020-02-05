function table(arr) {
  let showSection = document.createElement("div");
  document.querySelector("main").appendChild(showSection);
  showSection.className = "shows";

  let shows = document.createElement("h1");
  let showTitle = document.createTextNode("Shows");
  shows.appendChild(showTitle);
  showSection.appendChild(shows);
  shows.className = "shows__title";

  let showsBottom = document.createElement("div");
  showSection.appendChild(showsBottom);
  showsBottom.className = "shows__huge-bottom";

  if (screen.width > 767) {
    let headerContainerTD = document.createElement("div");
    showsBottom.appendChild(headerContainerTD);
    headerContainerTD.className = "shows__huge-bottom--header";

    let dateHeaderTD = document.createElement("h5");
    let dateTitleTD = document.createTextNode("DATES");
    dateHeaderTD.appendChild(dateTitleTD);
    headerContainerTD.appendChild(dateHeaderTD);
    dateHeaderTD.className = "shows__huge-bottom--header-title";

    let venueHeaderTD = document.createElement("h5");
    let venueTitleTD = document.createTextNode("VENUE");
    venueHeaderTD.appendChild(venueTitleTD);
    headerContainerTD.appendChild(venueHeaderTD);
    venueHeaderTD.className = "shows__huge-bottom--header-title";

    let locationHeaderTD = document.createElement("h5");
    let locationTitleTD = document.createTextNode("LOCATION");
    locationHeaderTD.appendChild(locationTitleTD);
    headerContainerTD.appendChild(locationHeaderTD);
    locationHeaderTD.className = "shows__huge-bottom--header-title";

    let buttonHeaderTD = document.createElement("h5");
    let buttonTitleTD = document.createTextNode("PURCHASE YOUR TICKET");
    buttonHeaderTD.appendChild(buttonTitleTD);
    headerContainerTD.appendChild(buttonHeaderTD);
    buttonHeaderTD.className = "shows__huge-bottom--header-title hidden";
  }
  for (let i = 0; i < arr.length; i++) {
    let divContainerI = document.createElement("div");
    showsBottom.appendChild(divContainerI);
    divContainerI.className = "shows__div";

    let dateHeader = document.createElement("h5");
    let dateTitle = document.createTextNode("DATE");
    dateHeader.appendChild(dateTitle);
    divContainerI.appendChild(dateHeader);
    dateHeader.className = "shows__div--header";

    let showDay = document.createElement("h3");
    let showDetails = document.createTextNode(arr[i]["date"]);
    showDay.appendChild(showDetails);
    divContainerI.appendChild(showDay);
    showDay.className = "shows__div--date";

    let venueHeader = document.createElement("h5");
    let venueTitle = document.createTextNode("VENUE");
    venueHeader.appendChild(venueTitle);
    divContainerI.appendChild(venueHeader);
    venueHeader.className = "shows__div--header";

    let venueLocation = document.createElement("p");
    let venueLocationDetails = document.createTextNode(arr[i]["place"]);
    venueLocation.appendChild(venueLocationDetails);
    divContainerI.appendChild(venueLocation);
    venueLocation.className = "shows__div--venueCityLocation";

    let locationHeader = document.createElement("h5");
    let locationTitle = document.createTextNode("LOCATION");
    locationHeader.appendChild(locationTitle);
    divContainerI.appendChild(locationHeader);
    locationHeader.className = "shows__div--header";

    let city = document.createElement("p");
    let cityDetails = document.createTextNode(arr[i]["location"]);
    city.appendChild(cityDetails);
    divContainerI.appendChild(city);
    city.className = "shows__div--venueCityLocation";

    let buttonContainer = document.createElement("div");
    let button = document.createElement("button");
    let buttonDetails = document.createTextNode("BUY TICKETS");
    button.appendChild(buttonDetails);
    button.className = "shows__div--button";
    buttonContainer.appendChild(button);
    divContainerI.appendChild(buttonContainer);
    buttonContainer.className = "shows__div--button-container";
  }
}

axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=ff2c3952-2d2f-46aa-8ac7-715ce6eddafa"
  )
  .then(response => {
    // console.log(response.data);
    table(response.data);
  });
