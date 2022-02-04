

// Accordion start here


const accordionElements = document.querySelectorAll('.accordion-header')

accordionElements.forEach(item => {
    item.addEventListener('click', function () {
        
        item.classList.toggle('active')
        
        if (item.classList.contains('active')) {
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px'
        } else {
            item.nextElementSibling.style.height = '0px'
        }
            
        accordionElements.forEach(data => {
            if (data !== this) {
                data.classList.remove('active')   
                data.nextElementSibling.style.height = '0px'
            }
        })

    })
})












