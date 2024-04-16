import './assets/css/style.css';

let count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
},5000)

function nextImage(){
    count++;
    if(count > 8){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}

// const whatsApp = document.querySelector('.whatsappButton');

// function whatsAppButton(){

//     var phoneNumber = "65999358060";
//     var whatsappLink = "https://wa.me/" + phoneNumber;


//     return
// }
// whatsAppButton(whatsApp);

// document.getElementById("whatsappButton").addEventListener("click", function() {
//     var phoneNumber = "65999358060";
    
//     var whatsappLink = "https://wa.me/" + phoneNumber;
    
//     window.location.href = whatsappLink;
// });