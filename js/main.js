const url = 'https://picsum.photos/300/300';
const changeImage = document.querySelector('.images');
let img = new Image(300, 300); //creates a new image at the size of 300x300
changeImage.appendChild(img); //This should append the .images div to the new image that is created.
const photographer = document.querySelector('.photographer');
const pictureBtn = document.querySelector('#picture-btn');

  // Fetches the variable URL: Picsum photos link
  fetch(url)
  //Response to get the piscum ID of the photo
  .then(response => response.headers.get('picsum-id'))
  .then(info => 'https://picsum.photos/id/' + info + '/info' )
  //Resolve: gives the value of the then callbacks.
  .then(resolve => {
    fetch(resolve)
    .then(response => response.json())
  //   //changes the SRC URL of the img. (declared as a new image using a variable.)
    .then(img.src = url)
    // console.log(resolve);
  })
  .catch(error => console.log(error))

pictureBtn.addEventListener("click", () => {
  // Every click makes the SRC blank so that the URL can be placed through the new promise.
  img.src = ''
  
  let newLink = new Promise((resolve, reject) => {
    fetch(url)
        .then(response => response.headers.get('picsum-id'))
        .then(info => 'https://picsum.photos/id/' + info + '/info' )
        .then(resolve => {
            fetch(resolve)
            .then(response => response.json()) // Up to this section everything is the same as the first fetch as the same URL and info is being used. The next line becomes different to get the data array.
            .then( data => {
              console.log(data); //This displays the data in an array showing that the data is working this then needs to be added to the URL.
              img.src = 'https://picsum.photos/id/' + data.id + '/300/300'
      })
    })
  });
});

// fetch(url)
//   .then(res => res.json())
//   .then(result => {
//     console.log(result)
//     image.src = result.ressage
//   })
//   .catch(err=>console.log(err))

// New Promise: Author



// Email
// const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const email = document.querySelector('#user-email'); 
// const form = document.querySelector('.form');

// form.addEventListener('submit', (e) =>{
//   if (email.value === "" || email.value == null) { 
//       document.getElementById("#user-email").style.borderColor = "red";
//       alert("Email is required");
//   } else if (email.value.match(regex)) {
//       document.getElementById("#user-email").style.borderColor = "green";
//   } else {
//       document.getElementById("#user-email").style.borderColor = "red";
//       alert("This is an invalid Email Address! Please enter another or check it over.")
//   }
//   });
  
// 



// Data Array 

// const idArray = []

// Send picture


// Any old code that I could reflect on: 

// fetch(url + imgData)
  // https://picsum.photos/id/0/info - Information and ID link.
  // .then(response => response.json())
  // .then(info => 'https://picsum.photos/id/' + info + '/info' )
  // .then(imgData => console.log(url + images));
