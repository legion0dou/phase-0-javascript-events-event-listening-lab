   // index.js
function clickAlert() {
    alert('I was clicked!');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Get the input element by its ID
    const input = document.getElementById('input');
  
    // Add a click event listener to the input element
    input.addEventListener('click', clickAlert);
  
    // Get the button element by its ID
    const button = document.getElementById('button');
  
    // Add a click event listener to the button element using an anonymous function
    button.addEventListener('click', function() {
      alert('Button was clicked!');
    });
  });
  
