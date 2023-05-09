const et = document.querySelector('.e');
const pt = document.querySelector('.p');
const bt = document.querySelector('.bt');
const al = document.querySelector('.al');
const nt = document.querySelector('.n');
var valem = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var fl = 1;


function vl()
{
const txt = et.value;
  const pst = pt.value;
  const nmt = nt.value;

  if (txt == "" || pst == "" || nmt =="") {


     if (txt == "") {
      et.placeholder = 'Enter valid email id';
       document.getElementById("al").innerHTML = "*Email not entered";
    }


           else if (pst == ""){
      pt.placeholder = 'Enter New password';
       document.getElementById("al").innerHTML = "*New Password not entered";
    }
    
    else{
      nt.placeholder = 'Re-enter Password';
       document.getElementById("al").innerHTML = "*Password not Re-entered";
    }
    
   


  
  }
  
  
  
  
  
  
  else
  {
    document.getElementById("al").innerHTML = "";
 if (txt.match(valem)) {
      fl = 1;
    }
    else {
      fl = 2;

    }

    if (fl == 2) {
      document.getElementById("al").innerHTML = "*Invalid mail id";
    }

    else
    {
      document.getElementById("al").innerHTML = "";
      if (pst.length < 6) {
        document.getElementById("al").innerHTML = "*min password length 6";
      }
 else {

   if(pst===nmt){
        alert('Password Reset Successful');
        document.getElementById("al").innerHTML = "";
        window.location.href = "index2.html";
   }
   else
   {
     document.getElementById("al").innerHTML = "*Passwords does not match";
   }
      }


      
    }









    
  }

  

  
}




















bt.addEventListener('click', vl);