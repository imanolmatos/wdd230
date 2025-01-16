new Intl.DateTimeFormat("en-Uk",{dateStyle:"full"}).format(new Date());

document.getElementbyID()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()

const todayDate = new Date();

//toLocalDateString

const options = {weekday:'long',day:'numeric',month:'long', year:'numeric'}
document.getElementbyID("this").textContent = new Date().toLocaleDateString("en-US",options)

console.log(todayDate)


const daynames = [

    
]

