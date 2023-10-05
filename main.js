// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

mimicServerCall(url="http://mimicServer.example.com", config={})
  .then(response => {
    console.log("Success:", response);// used for debugging the success in the console
    const like = document.querySelector(".like-glyph")
    like.addEventListener("click", () => {
      if(like.innerText === EMPTY_HEART) {
        like.innerText = FULL_HEART
      } else {
        like.innerText = EMPTY_HEART
      }
    })

    
  })
  .catch(error => {
    console.error("Error:", error); // used for debugging the error in the console
    const hidden = document.querySelector(".hidden")
    hidden.classList.remove("hidden")
    const modal = document.getElementById("modal-message")
    modal.textContent = error
    setTimeout(() => {
      hidden.classList.add("hidden")
    }, 3000)
    
  });


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
