function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const imgage = document.querySelector("#Profile img")

  if (html.classList.contains("light")) {
    imgage.setAttribute("src", "./assets/avatar-light.png")
  } else {
    imgage.setAttribute("src", "./assets/avatar.png")
  }
}