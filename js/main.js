const url = 'https://picsum.photos/200/300';
const changeImage = document.querySelector('.images');
let img = new Image(300, 300); //creates a new image at the size of 300x300
changeImage.appendChild(img); //This should append the .images div to the new image that is created. The images class is the parent and its appending the child to the parent. 
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
    // gets the data of the photographer
    .then( data => photographer.insertAdjacentHTML('beforeend', data.author))
    //changes the SRC URL of the img. (declared as a new image using a variable.)
    .then(img.src = url)
    // console.log(resolve);
  })
  .catch(error => console.log(error))

pictureBtn.addEventListener("click", () => {
  // Every click makes the SRC blank so that the URL can be placed through the new promise.
  img.src = ''
  photographer.innerHTML = 'Photographer: '; // Resets the photographer div everytime a click is heard. Inserting the starting text "Photographer"
  
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
              photographer.insertAdjacentHTML('beforeend', data.author) // This remains the same due to the photograph class wanting to grab the different name everytime syncing up with the innerHTML reset.
      })
    })
  });
});

// The console log can be commented out however I like having it open to make sure the data array agrees with the photographer tag and the div for my images. 
// With this event listener there is one bug and thats if you click the button to quickly then it will cause the Photographer tag to show two names.
// If I have time after doing a lot more of this project an idea to fix this bug would be to set a timeout. This would take a bit more researching so I will leave this for now. 


// Email

const regex = /(^(?!.*__.*)[a-z0-9]{4,253}(_?)[a-z0-9]+(?:\.[a-z0-9!#$%&*+\/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$)/;
const email = document.querySelector('#email'); 
const submitBtn = document.getElementById('#submit-btn')

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === "" || email.value == "null") {
    document.getElementById('email').style.borderColor="red";
    document.getElementById('hidden-warning').style.display="block";
    document.getElementById('hidden-correct').style.display="none";
  } else if (email.value.match(regex)) {
    document.getElementById('email').style.borderColor="green";
    document.getElementById('hidden-warning').style.display="none";
    document.getElementById('hidden-correct').style.display="inline";
    img.src = ''
  photographer.innerHTML = 'Photographer: '; // Resets the photographer div everytime a click is heard. Inserting the starting text "Photographer"
  
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
              photographer.insertAdjacentHTML('beforeend', data.author) // This remains the same due to the photograph class wanting to grab the different name everytime syncing up with the innerHTML reset.
      })
    })
  });
  } else {
    document.getElementById('email').style.borderColor="red";
    document.getElementById('hidden-warning').style.display="block";
    document.getElementById('hidden-correct').style.display="none";
  }
})

// Data Array 

let emailArr = new Array()

// Send picture


// Any old code that I could reflect on: 

// fetch(url + imgData)
  // https://picsum.photos/id/0/info - Information and ID link.
  // .then(response => response.json())
  // .then(info => 'https://picsum.photos/id/' + info + '/info' )
  // .then(imgData => console.log(url + images));
