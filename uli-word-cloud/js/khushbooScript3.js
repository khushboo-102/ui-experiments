let div = document.querySelector("#smallDiv")
smallDiv.addEventListener("mousemove", (e) => {
    console.log("Hello")
    const X = e.clientX
    const Y = e.clientY
    smallDiv.style.left = `${X - 25}px`
    smallDiv.style.top = `${Y - 25}px`
})