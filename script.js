const body = document.querySelector("body")
const buttons = document.querySelectorAll('.button')

buttons.forEach( function(btn) {
    console.log(btn);
    btn.addEventListener('click', function(e) {
        // console.log(e)
        // console.log(e.target)
        body.style.backgroundColor = e.target.id
    })
})
