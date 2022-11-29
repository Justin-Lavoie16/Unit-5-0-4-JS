if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-0-4-JS/sw.js", {
    scope: "/Unit-5-0-4-JS/",
  })
}

;("use strict")

function myButtonClicked() {
  const age = document.getElementById("age").value
  const day = document.getElementById("day").value

  if (day == "Tuesday" || day == "Thursday" || (age > 12 && age < 21)) {
    document.getElementById("answers").innerHTML =
      "You're eligible for student pricing!"
  } else {
    document.getElementById("answers").innerHTML = "You must pay regular price"
  }
}
