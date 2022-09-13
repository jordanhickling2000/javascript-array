const url = "https://picsum.photos/200/300";
const changeImage = document.querySelector('images');
//creates a new image at the size of 300x300
let img = new Image(300, 300);
// const author = querySelector('author');
const pictureBtn = document.querySelector('#picture-btn');


 
// Fetches the variable URL: Picsum photos link
  fetch(url)
  //Response to get the piscum ID of the photo
  .then(response => response.headers.get('picsum-id'))
  //Resolve: gives the value of the then callbacks.
  .then(resolve => {
    fetch(resolve)
    .then(response => response.json())
    //changes the SRC URL of the img. (declared as a new image using a variable.)
    .then(img.src = url)
    console.log(resolve);
  })
  .catch(error => console.log(error))


// Event Clicker For Button
// "+ resolve +" will get the resolve from the previous stage which should get the ID. When getting the resolve from the fetch it will console log the ID but does not do anything in the below example.

pictureBtn.addEventListener("click", function(e){
  document.getElementById('image-cycle').src="https://picsum.photos" + resolve + "/200/300/";
});


// New Promise: Author



// Email
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const email = document.querySelector('#user-email'); 
const form = document.querySelector('.form');

form.addEventListener('submit', (e) =>{
  if (email.value === "" || email.value == null) { 
      document.getElementById("#user-email").style.borderColor = "red";
      alert("Email is required");
  } else if (email.value.match(regex)) {
      document.getElementById("#user-email").style.borderColor = "green";
  } else {
      document.getElementById("#user-email").style.borderColor = "red";
      alert("This is an invalid Email Address! Please enter another or check it over.")
  }
  });
  
// 



// Data Array 

const idArray = []

// Send picture


// Any old code that I could reflect on: 

// fetch(url + imgData)
  // https://picsum.photos/id/0/info - Information and ID link.
  // .then(response => response.json())
  // .then(info => 'https://picsum.photos/id/' + info + '/info' )
  // .then(imgData => console.log(url + images));

















//   function imagecycle() {
//     document.getElementsByClassName("images").src = imgData[index].src;
//     index = index + 1;
//     if (index > 5) {
//         index = 0;
//     }
//     return;
//   }

//   function startup() {
//     imgData[0].src = "https://picsum.photos/200/300/?random";
//     imgData[1].src = "https://picsum.photos/200/300/?random";
//     imgData[2].src = "https://picsum.photos/200/300/?random";
//     imgData[3].src = "https://picsum.photos/200/300/?random";
//     imgData[4].src = "https://picsum.photos/200/300/?random";
//     imgData[5].src = "https://picsum.photos/200/300/?random";
//   }