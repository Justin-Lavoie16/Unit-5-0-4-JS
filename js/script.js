if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-03-JS/sw.js", {
    scope: "/Unit-5-03-JS/",
  })
}

;("use strict")

function myButtonClicked() {
  const age = document.getElementById("age").value
  const day = document.getElementById("day").value

  if (day == "Tuesday" || day == "Thurday" || (age > 12 && age < 21)) {
    document.getElementById("answers").innerHTML =
      "You're eligible for student pricing!"
  } else {
    document.getElementById("answers").innerHTML = "You must pay regular price"
  }
}
