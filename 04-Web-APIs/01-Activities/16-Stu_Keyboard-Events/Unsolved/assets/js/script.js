function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").textContent = "KEYDOWN Event"
  var key = event.key;
  document.querySelector("#key").textContent = key;
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
  document.addEventListener('keyup', function(event) {
  var key = event.key;
  document.querySelector
  })
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
