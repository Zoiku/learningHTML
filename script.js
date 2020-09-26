const form = document.getElementById("form"); 
const firstname = document.getElementById("firstnameinput"); 
const middlename = document.getElementById("middlenameinput"); 
const lastname = document.getElementById("lastnameinput"); 
const telephone = document.getElementById("telephone");
// const gender = document.getElementById("genderinput"); 
const email = document.getElementById("emailinput"); 
const address = document.getElementById("addressinput"); 


// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     validateForm();
    
// });

const validateForm = () => {
        const first = firstname.value.trim();
        // const middle = middlename.value.trim();
        const last = lastname.value.trim();
        const tel = telephone.value.trim();
        const mail = email.value.trim();
        const addy = address.value.trim();  

        const regTelephone = /^[\d]{10}$/gi;
        const telephoneV = false;

        if(!first){
            document.getElementById("firstnameinput").style = "border: 2px solid red";
            document.getElementById("error1").innerHTML = "Empty field";
        } else {
            document.getElementById("firstnameinput").style = "border: 2px yellowgreen solid";
            document.getElementById("error1").innerHTML = "";
        }

        if(!last){
            document.getElementById("lastnameinput").style = "border: 2px solid red";
            document.getElementById("error3").innerHTML = "Empty field";
        } else {
            document.getElementById("lastnameinput").style = "border: 2px yellowgreen solid";
            document.getElementById("error3").innerHTML = "";
        }

        if(!tel){
            document.getElementById("telephone").style = "border: 2px solid red";
            document.getElementById("error4").innerHTML = "Empty field";
        } else {
            if(regTelephone.test(tel)){
                document.getElementById("telephone").style = "border: 2px yellowgreen solid";
                document.getElementById("error4").innerHTML = "";
                telephoneV = true;
            }
            else{
                document.getElementById("telephone").style = "border: 2px solid red";
                document.getElementById("error4").innerHTML = "Invalid Mobile Number";
            }
        }

        if(!mail){
            document.getElementById("emailinput").style = "border: 2px solid red";
            document.getElementById("error5").innerHTML = "Empty field";
        } else {
            document.getElementById("emailinput").style = "border: 2px yellowgreen solid";
            document.getElementById("error5").innerHTML = "";
        }

        if(!addy){
            document.getElementById("addressinput").style = "border: 2px solid red";
            document.getElementById("error6").innerHTML = "Empty field";
        } else {
            document.getElementById("addressinput").style = "border: 2px yellowgreen solid";
            document.getElementById("error6").innerHTML = "";
        }

        if(!!first && !!last && telephoneV && !!mail && !!addy){
            window.alert(`Hey ${first} ${last}, form submitted`);
            return true;
        } 
        else {
            return false;
        }
}

        