// Js code for modal start here
const add_modal = document.getElementById('add_modal')
const keep = document.getElementById('keep-editing')
const discard = document.getElementById('discard')
const modal = document.querySelector('.for-modal')
const modal_close = document.querySelector('.for-modal .close')
const alert_close = document.querySelector('.for-alert .close')
const alert = document.querySelector('.for-alert')

add_modal.addEventListener('click', function (e) {
    e.preventDefault()

    modal.classList.add('active')
})

modal_close.addEventListener('click', function () {
    
    alert.style.display = 'flex'
})

alert_close.addEventListener('click', function () {
    
    alert.style.display = 'none'
})

keep.addEventListener('click', function () {
    
    alert.style.display = 'none'
})

discard.addEventListener('click', function () {
    
    alert.style.display = 'none'
    modal.classList.remove('active')
})

modal.addEventListener('click', function (e) {
    
    if (e.target == this) {
        modal.classList.remove('active')
    }
})
// Js code for modal end here


