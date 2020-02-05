let commentContainer = document.querySelector(".comments-container");
let comments = [];

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  commentContainer.innerHTML = "";
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=ff2c3952-2d2f-46aa-8ac7-715ce6eddafa",
      {
        name: event.target.name.value,
        comment: event.target.comment.value
      }
    )
    .then(() => {
      axios
        .get(
          "https://project-1-api.herokuapp.com/comments?api_key=ff2c3952-2d2f-46aa-8ac7-715ce6eddafa"
        )
        .then(function(response) {
          comments = response.data;
          displayComment(
            comments.sort(function(a, b) {
              return b.timestamp - a.timestamp;
            })
          );
        });
      document.querySelector(".comments__form").reset();
    });
});

function displayComment(arr) {
  for (let i = 0; i < arr.length; i++) {
    let t = new Date(arr[i]["timestamp"]);
    timestampCon = t.getMonth() + 1 + "/" + t.getDate() + "/" + t.getFullYear();

    let commentHolder = document.createElement("div");
    commentHolder.className = "comments-container__holder";
    commentContainer.appendChild(commentHolder);

    let photoIcon = document.createElement("div");
    photoIcon.className = "comments-container__holder--icon";
    commentHolder.appendChild(photoIcon);

    let container = document.createElement("div");
    container.className = "comments-container--holder";

    let nameAndDateContainer = document.createElement("div");
    nameAndDateContainer.className = "comments-container__name-and-date";

    let name = document.createElement("h3");
    name.innerHTML = arr[i]["name"];
    name.className = "comments-container__name";
    nameAndDateContainer.appendChild(name);

    let date = document.createElement("p");
    date.innerHTML = timestampCon;
    date.className = "comments-container__date";
    nameAndDateContainer.appendChild(date);
    container.appendChild(nameAndDateContainer);

    let comment = document.createElement("p");
    comment.innerHTML = arr[i]["comment"];
    comment.className = "comments-container__comment";
    container.appendChild(comment);

    commentHolder.appendChild(container);
  }
}

axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=ff2c3952-2d2f-46aa-8ac7-715ce6eddafa"
  )
  .then(function(response) {
    comments = response.data;
    displayComment(
      comments.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      })
    );
  });
