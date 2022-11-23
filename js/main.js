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

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const email = document.querySelector('#email'); 
const submitBtn = document.getElementById('#submit-btn')

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === "" || email.value == "null") {
    document.getElementById('email').style.borderColor="red";
    document.getElementById('hidden-warning').style.display="block";
    document.getElementById('hidden-correct').style.display="none";
    document.getElementById("array-image").style.display="none";
  } else if (email.value.match(regex)) {
    document.getElementById('email').style.borderColor="green";
    document.getElementById('hidden-warning').style.display="none";
    document.getElementById('hidden-correct').style.display="inline";
    document.getElementById("array-image").style.display="block";
    document.getElementById("array").style.display="inline";
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
              // console.log(data); //This displays the data in an array showing that the data is working this then needs to be added to the URL.
              img.src = 'https://picsum.photos/id/' + data.id + '/300/300'
              photographer.insertAdjacentHTML('beforeend', data.author) // This remains the same due to the photograph class wanting to grab the different name everytime syncing up with the innerHTML reset.
      })
    })
  });
  } else {
    document.getElementById('email').style.borderColor="red";
    document.getElementById('hidden-warning').style.display="block";
    document.getElementById('hidden-correct').style.display="none";
    document.getElementById("array-image").style.display="none";
    document.getElementById("array").style.display="none";
  }
})


const id = img.src;

let emailArr = [];
let imageArr = [];
// let firstEmail = emailArr[i][0];

let container = document.querySelector('.image-and-email-flex');

function pushData() {
  if (email.value.match(regex)) {
    if(!Array.isArray(emailArr) || !emailArr.length) {
      emailArr.push([email.value, img.src])
      container.children[0].insertAdjacentHTML('beforeend', 
      `<div class="image-and-email">
      <p id="array">` + emailArr[0][0] + `</p>
      <img id="array-image" src="` + emailArr[0][1] + `">
      </div>`)
      container.insertAdjacentHTML('beforeend', 
      `<div class="image-and-email">
      </div>`)
    }
      for (var i = 0; i < emailArr.length; i++) {
        if(email.value === emailArr[i][0]) {
        emailArr[i].push([img.src])
        container.children[i].insertAdjacentHTML('beforeend',
        `<img id="array-image" src="` + emailArr[i][1] + `">`)
        console.log("for")
          break;
      } else if (email.value !== emailArr[i][0] && i === emailArr.length - 1) {
      emailArr.push([email.value, img.src])
      container.children[i].insertAdjacentHTML('beforeend', 
      `<div class="image-and-email">
      <p id="array">` + emailArr[i][0] + `</p>
      <img id="array-image" src="` + emailArr[i][1] + `">
      </div>`)
      console.log("elseif")
      container.insertAdjacentHTML('beforeend', 
      `<div class="image-and-email">
      </div>`)
      }
    }
    console.log(emailArr);
  }
// }
}



    // var h = emailArr.push(email.value);
    //   var s = emailArr.push(img.src);
    //   emailArr[i] = [h][s];
    //   console.log(emailArr);
    //   document.getElementById("array").innerHTML = emailArr;
    //   document.getElementById("array-image").src = img.src;


    // for (var i = 0; i < 1; i++){
    //   for(var j = 0; j < 1; j++) {
    //     // emailArr[i][j] = s[emailArr.push(email.value)]
    //   }
    // console.log(emailArr);
    // document.getElementById("array").innerHTML = emailArr;
    // document.getElementById("array-image").src = img.src;
    // console.log(imageArr);

// for (var i=0; i<arr.length; i++){
//   html += "<p>"+arr[i][0]+"<p>"
//   html += "<img src="+arr[i][1]+">"
// }

// email.find(email.value)
// emailArr.find(emailArr, email.value)
// seeker.find(email, emailArr);


// let findEmail = [emailArr];
// findNeedle(emailArr);
// console.log(findNeedle);

// for (let i = 0; i < emailArr.length; i++) {
//   console.log(emailArr[i].length);
// }

// Things to consider during this project:

// Haystack for further email validation for example checking if the email already exists.

// function findEmail(email) {
//   for(i = 0; i < email.length; i++) {
//     if(email === email) {
//       return "You have already used this email" + i
//     }
//   }
// }
// put an image array with the email in the email array so that it can be converted to a string for other details
// Photographer tag could all be together
// Debug the reason why title comes up twice when rapidly clicking new image








// function pushData(email) {
//   const dataArr = 
//     {
//       email: document.getElementById('email').value, id: img.src,
//     }
//   // console.log(dataArr);
//   document.getElementById("array").innerHTML = dataArr.email;
//   document.getElementById("array-image").src = dataArr.id;
// }

// Send picture


// Any old code that I could reflect on: 

// fetch(url + imgData)
  // https://picsum.photos/id/0/info - Information and ID link.
  // .then(response => response.json())
  // .then(info => 'https://picsum.photos/id/' + info + '/info' )
  // .then(imgData => console.log(url + images));

   // get value from the input text
  //  var inputText = document.getElementById('email').value;
   // append data to the array
  //  emailArr.push(inputText);
   // display array data