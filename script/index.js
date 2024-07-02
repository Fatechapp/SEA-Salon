//LINK SCROLLING
const serviceLink = document.getElementById('service-link')
const serviceContent = document.getElementById('service')

const contactLink = document.getElementById('contact-link')
const contactContent = document.getElementById('contact')



serviceLink.addEventListener('click', function (e) {
    e.preventDefault()
    serviceContent.scrollIntoView({behavior:"smooth"})
})
contactLink.addEventListener('click', function (e) {
    e.preventDefault()
    contactContent.scrollIntoView({behavior:"smooth"})
})