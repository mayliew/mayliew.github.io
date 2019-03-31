
let imageContainer = document.getElementById("image-container");
let buttons = document.getElementById("button-container");
const apiKey = "76ZLjM0qr7TbiEjC6GA9dNfh1jTvq48FjEITlUSMcsg96xKvP8";

let winState = document.getElementById('win-state')
let resetButton = document.getElementById("resetButton")

let tagName = ['Building','Bird','Cash','Flower'];


// restart fuction start

function restart() {
  // reset all content
  let winner = false;
  imageContainer.innerHTML = '';
  buttons.innerHTML = '';
  winState.innerHTML = '';

  // select random keyword
  let randomTag = tagName[Math.floor(Math.random() * tagName.length)];

  tagName.forEach(tag => {
    let button = document.createElement('Button');
    button.innerHTML = tag;
    button.classList.add('btn');
    button.classList.add('btn-primary')
    button.classList.add('mr-3')
    buttons.appendChild(button);
  });

  // get pictures from tumblr
  fetch(`https://api.tumblr.com/v2/tagged?tag=${randomTag}&api_key=${apiKey}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.response.forEach(function(post) {
      if (post.photos) {
        post.photos.forEach(function(photo) {
          let image = document.createElement("img");
          let photoUrl = photo.original_size.url;
          image.src = photoUrl;
          image.style.width = "250px";
          image.style.height = "250px";
          imageContainer.appendChild(image);
        });
      }
    });
  });

  // check answer on click
  buttons.onclick = function (event){
    console.log(event.target.innerHTML);
    if (event.target.innerHTML === randomTag && winner !== true) {
      let winHeading = document.createElement('h1');
      winHeading.innerHTML = "That's RIGHT! It's " + randomTag +"! Play again.";
      winState.appendChild(winHeading);
      winner = true;
    } else if (winner == true) {
    } else {
      let winHeading = document.createElement('h1')
      winHeading.innerHTML = "NAH! It's " + randomTag +"! Play again.";
      winState.appendChild(winHeading);
      winner = true;
    }
  }
}

// restart fuction ends

restart();

// restart button
$("#reset").click(function() {
  restart();
});
