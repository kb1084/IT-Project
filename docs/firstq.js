function checkField(){
    if(document.getElementById('uname').value=="")
    alert("Please enter user name");
    else if(document.getElementById('eId').value=="")
    alert("Please enter Email Id");
    else if(document.getElementById('pass').value=="")
    alert("Please enter Password");
    else if(document.getElementById('repass').value=="")
    alert("Please enter user name");
    else if(document.getElementById('mnum').value=="")
    alert("Please enter user name");

    else{
    checkPLen();
    if(flag==0)
    checkPassword(); 
    if(flag==0)
    checkMnum();
}

}

function checkPassword(){
    var pass= document.getElementById('pass').value;
    var repass= document.getElementById('repass').value;
    if(pass!=repass){
    alert("Password and Retype password did not match");
    flag=1;
    }
}

function checkPLen(){
    flag = 0;
    var pass= document.getElementById('pass').value;

    if(pass.length<6){
    alert("Password must be atleast 6 characters")
    flag = 1;
    }
}

function checkMnum(){
    var el= document.getElementById('mnum').value;
    if(isNaN(el))
    alert("Mobile number should be a number");
}