let commentContainer = document.querySelector(".comments-container");
let comments = [];

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  commentContainer.innerHTML = "";
  let newComment = {};
  // newComment.className = "comments-container__holder";
  newComment.name = event.target.name.value;
  newComment.comment = event.target.comment.value;
  let today = new Date();
  newComment.date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  comments.unshift(newComment);
  displayComment(comments);
  document.querySelector(".comments__form").reset();
});

function displayComment(arr) {
  for (let i = 0; i < arr.length; i++) {
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
    date.innerHTML = arr[i]["timestamp"];
    date.className = "comments-container__date";
    // let timestampCon = document.querySelector("comments-container__date");
    // let t = new Date(date.innerHTML * 1000);
    // date = t.getMonth() + "/" + t.getDate() + "/" + t.getFullYear();
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
  .then(response => {
    comments = response.data;
    displayComment(comments);
  });
