function func1() {
    let pattern= /^([A-Z a-z]{3,})$/;
    let name= document.getElementById("name").value;
    if(name=="") {
        document.getElementById("p1").innerHTML= "Enter Name"
    }
    else if(pattern.test(name)==false) {
        document.getElementById("p1").innerHTML= "Enter Valid Name"
    }
    }
    function func2() {
        let pattern1=  /^\d{4}-\d{7}$/;
        let phone= document.getElementById("phone").value;
        if(phone=="") {
            document.getElementById("p2").innerHTML= "Enter Number"
        }
        else if(pattern1.test(phone)==false) {
            document.getElementById("p2").innerHTML= "Enter Valid Number"
        }
    }
    function  func3() {
        let pattern2= /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com)$/;
        let mail= document.getElementById("mail").value;
        if(mail=="") {
            document.getElementById("p3").innerHTML= "Enter Email";
        }
        else if(pattern2.test(mail)==false) {
            document.getElementById("p3").innerHTML= "Enter Valid Email";
        }
    }
    function  func4() {
        let pattern3= /^[a-zA-Z0-9]{8,12}$/;
        let password= document.getElementById("pass1").value;
        if(password=="") {
            document.getElementById("p4").innerHTML= "Enter Password";
        }
        else if(pattern3.test(password)==false) {
            document.getElementById("p4").innerHTML= "Must be atleast 8 characters";
        }
    }
    function  func5() {
        let pattern4= /^[a-zA-Z0-9]{8,12}$/;
        let password2= document.getElementById("pass2").value;
        if(password2=="") {
            document.getElementById("p5").innerHTML= "Enter Confirm Password";
        }
        else if(pattern4.test(password2)==false) {
            document.getElementById("p5").innerHTML= "Must be atleast 8 characters";
        }
    }
    function check() {
        let name= /^([A-Z a-z]{3,})$/;
        let phone=  /^\d{4}-\d{7}$/;
        let mail= /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com)$/;
        let pass1= /^[a-zA-Z0-9]{8,12}$/;
        
        let a= document.getElementById("name").value
        let b= document.getElementById("phone").value
        let c= document.getElementById("mail").value
        let d= document.getElementById("pass1").value
        let e= document.getElementById("pass2").value
        
        if(name.test(a)==true && phone.test(b)==true && mail.test(c)==true && pass1.test(d)==true && pass1.test(e)==true) {
            document.getElementById("h1").innerHTML= "Thanks for your feedback";
            // document.getElementById("this").innerHTML=window.location.reload();
        }
        else if(name.test(a)=="" && phone.test(b)=="" && mail.test(c)=="" && pass1.test(d)=="" && pass1.test(e)=="") {
            alert("Please Enter Your Data")
        }
        else if(name.test(a)=="" || phone.test(b)=="" ||mail.test(c)=="" || pass1.test(d)=="" || pass1.test(e)=="") {
            alert("Incomplete Data")
        }

        let first= document.getElementById("pass1").value
        let second= document.getElementById("pass2").value
        if(first!=second){
            alert("Passowrd Not Matched")
            return false;
        }
        else{
            alert("Password Matched")
        }
    }