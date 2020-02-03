let commentArray = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

function displayComment(arr) {
  let commentContainer = document.querySelector(".comments-container");
  const form = document.querySelector("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    commentContainer.innerHTML = "";
    let newComment = {};
    newComment.name = event.target.name.value;
    newComment.comment = event.target.comment.value;
    let today = new Date();
    newComment.date =
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
    commentArray.unshift(newComment);
    displayComment(commentArray);
    document.querySelector(".comments__form").reset();
  });

  for (let i = 0; i < arr.length; i++) {
    let container = document.createElement("div");
    container.className = "comments-container--holder";

    let nameAndDateContainer = document.createElement("div");
    nameAndDateContainer.className = "comments-container__name-and-date";

    let name = document.createElement("h3");
    name.innerHTML = arr[i]["name"];
    name.className = "comments-container__name";
    nameAndDateContainer.appendChild(name);

    let date = document.createElement("p");
    date.innerHTML = arr[i]["date"];
    date.className = "comments-container__date";
    nameAndDateContainer.appendChild(date);
    container.appendChild(nameAndDateContainer);

    let comment = document.createElement("p");
    comment.innerHTML = arr[i]["comment"];
    comment.className = "comments-container__comment";
    container.appendChild(comment);

    commentContainer.appendChild(container);
  }
}

displayComment(commentArray);
