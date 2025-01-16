

const todayDate = new Date();

const options = {year:'numeric'};
document.querySelector("#currentyear").innerHTML = new Date().toLocaleDateString("en-US",options);

let lastModif = new Date(document.lastModified);
let formatedLast = lastModif.toLocaleString("en-US", {timeZoneName: "short"});

document.querySelector("#lastModif").innerHTML = formatedLast;


