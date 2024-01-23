function validation(){
     fname = document.getElementById("firstname").value;
     lname = document.getElementById("lastname").value;
     em = document.getElementById("email").value;
     password = document.getElementById("pass").value;
     phno = document.getElementById("num").value;
     address = document.getElementById("address").value;

     var f=new RegExp("^[a-zA-Z][a-zA-Z0-9]*$");
     var l=new RegExp("^[a-zA-Z][a-zA-Z0-9]*$");
     var e=new RegExp("^[a-zA-Z][a-zA-Z0-9_.]*@[a-zA-Z][a-zA-Z0-9_.]*.[a-zA-Z][a-zA-Z0-9_.]{2}.[a-zA-Z][a-zA-Z0-9_.]{2}$|^[a-zA-Z][a-zA-Z0-9_.]*@[a-zA-Z][a-zA-Z0-9_.]*.[a-zA-Z][a-zA-Z0-9_.]{3}$");
     var p=new RegExp("^[0-9]{10}$");

    var ruserf=f.exec(fname);
    var ruserl=l.exec(lname);
    var remail=e.exec(em);
    var rph=p.exec(phno);

    if(ruserf && ruserl && remail && rph && (password.length > 6) && (address.length>0))
            {
            windows.alert("All values are valid");  
            return true;
            }
            else
            {
            var alrt ="";
            if(!ruserf) { alrt+="firstname invalid : Name should contains alphabets and the length should not be less than 6 characters \n";document.getElementById("firstname").focus();}
            if(!ruserl) { alrt+="lastname invalid : should not be Empty \n";document.getElementById("lastname").focus();}
            if(!remail) { alrt+="email invalid : should not contain any invalid characters \n";document.getElementById("email").focus();}
            if(!rph) { alrt+="phone number invalid : Phone number should contain 10 digits only\n";document.getElementById("num").focus();}     
            if(password.length < 6) { alrt+="password invalid : Password should not be less than 6 characters length\n";document.getElementById("pass").focus();}
            if(address.length<1) { alrt+="Address should not be Empty \n";document.getElementById("address").focus();}
            alert(alrt)
            return false;
            }

}











    // var fname = document.getElementById("firstname").value;
    // var lname = document.getElementById("lastname").value;
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("pass").value;
    // var phno = document.getElementById("num").value;
    // var address = document.getElementById("address").value;

    // if (firstname.trim() === "") {
    //     window.alert("Please enter your First name.");
    //     return false; // Prevent form submission
    // }

    // if(lname.trim()===""){
    //     window.alert("Please enter your Last name.");
    //     return false; // Prevent form submission
    // }
    
    // if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/)) {
    //     window.alert("Please enter a valid email address.");
    //     return false;
    // }
    // if(password.length< 6){
    //     window.alert("Password should not be less than 6 characters length");
    //     return false;
    // }
    // if(phno.length>10 || phno.length<10){
    //     window.alert("Enter valid phone number");
    //     return false;
    // }
    // if(address === ""){
    //     window.alert("Address should not be Empty");
    //     return false;
    // }
    
    //   // Add more validation checks as needed
    // window.alert("your form is submitted");
    // return true; // Allow form submission

