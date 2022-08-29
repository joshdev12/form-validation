

let fullName = document.getElementById("fullName")
let phoneNumber = document.getElementById("phoneNumber")
let email = document.getElementById("email")
let upload = document.getElementById("upload")
let title = document.getElementById("title")


let nameError = document.getElementById("nameError")
let phoneNumberError = document.getElementById("phoneNumberError")
let emailError = document.getElementById("emailError")
let fileError = document.getElementById("fileError")
let titleError = document.getElementById("titleError")

let titleDisplay = document.getElementById("titleDisplay")
let nameDisplay = document.getElementById("nameDisplay")
let emailDisplay = document.getElementById("emailDisplay")
let phoneDisplay = document.getElementById("phoneDisplay")

let form1 = document.forms['form1'];
form1.addEventListener('submit', (e) =>{
    e.preventDefault();


    let name = form1['fullName'].value;
    console.log(name)
    const errors =[]
    if (fullName.value == ""  ){
        // nameError.innerHTML = "Please fill in blank."
        errors ['nameError'] = "Your name is required"
    }

    if (title.value == ""){
        // titleError.innerHTML = "Your title is required"
         errors ['titleError'] = "Your title is required"
    }

    let errs = " ";
    for (let i in errors){
        errs += errors[i] + "<br>";
    }

    document.getElementById('errors').innerHTML = errs;
    document.getElementById('errors').style.color = 'red'
    // let phoneNumber = form1['phoneNumber'].value;
    
    if ( phoneNumber.value.startsWith('090')
        || phoneNumber.value.startsWith('091') || phoneNumber.value.startsWith('080')
        || phoneNumber.value.startsWith('081') || phoneNumber.value.startsWith('070')){
                
    }else if(phoneNumber.value.length >= 12){
        phoneNumberError.innerHTML = "invalid input"
    }else{
        phoneNumberError.innerHTML = "Fill in your 11 digit"
        // errors ['phoneNumberError'] = "Fill in your 11 digit"
    }

    if ( email.value.includes('@' && ".") ){
        
    }else{
        emailError.innerHTML = "Enter a valid email"
    }

    if (!errors.value || !emailDisplay.value || !phoneDisplay.value){
        document.getElementById("titleDisplay").innerHTML = title.value;
        document.getElementById("nameDisplay").innerHTML = fullName.value;
        document.getElementById("phoneDisplay").innerHTML = phoneNumber.value;
        document.getElementById("emailDisplay").innerHTML = email.value;     
    }

    
} );
 
function filedata(){
    let file = form1['upload'].files[0];
    let size = (parseInt(file.size) / 1024).toFixed(2);
    let imagename = file.name;
    let lastmodfy = file.lastModifiedDate
    document.getElementById('imgDisplay').src = "Pictures/" + imagename
    document.querySelector('#imageinfo').innerHTML = `Name: ${imagename} <br>
    Size: ${size} MB <br> Modified Date: ${lastmodfy} <br>
    `
}

