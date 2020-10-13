function validate()
            {
                var x=document.getElementById("username").value;
                var y=document.getElementById("password").value;
                if(x.trim()=="")
                {
                    document.getElementById("msg1").innerHTML="*Please insert username";
                    return false;
                }
                else if(y.trim()=="")
                {
                    document.getElementById("msg2").innerHTML="*Please insert password";
                    return false;
                }
                else if(y.length < 4)
                {
                    document.getElementById("msg2").innerHTML="*Password must be more then 4 character";
                    return false;
                }
                else if(y.search(/[0-9]/) ==-1)
                {
                    document.getElementById("msg2").innerHTML="*Password must contain one numeric value";
                    return false;
                }
                else if(y.search(/[a-z]/) ==-1)
                {
                    document.getElementById("msg2").innerHTML="*Password must contain one lowerCase alphabet";
                    return false;
                }
                else if(y.search(/[A-Z]/) ==-1)
                {
                    document.getElementById("msg2").innerHTML="*Password must contain one upperCase alphabet";
                    return false;
                }
                else if(y.search(/[!\@\#\$\%\^\&\*]/) ==-1)
                {
                    document.getElementById("msg2").innerHTML="*Password must contain one symbol";
                    return false;
                }
                else
                {
                    return true;
                }
            }

            function validateform()
            {
                var txtfirstname=document.getElementById("txtfirstname").value;
                var txtmiddlename=document.getElementById("txtmiddlename").value;
                var txtlastname=document.getElementById("txtlastname").value;
                var txtno=document.getElementById("txtno").value;
                var txtemail=document.getElementById("txtemail").value;
                var txtpassword=document.getElementById("txtpassword").value;
                if(txtfirstname.trim()=="")
                {
                    document.getElementById("msg1").innerHTML="*Please insert firstname";
                    return false;
                }
                else if(txtmiddlename.trim()=="")
                {
                    document.getElementById("msg2").innerHTML="*Please insert middlename";
                    return false;
                }
                else if(txtlastname.trim()=="")
                {
                    document.getElementById("msg3").innerHTML="*Please insert lastname";
                    return false;
                }
                else if(txtno.trim()=="")
                {
                    document.getElementById("msg4").innerHTML="*Please insert contact no";
                    return false;
                }
                else if(txtno.length > 10)
                {
                    document.getElementById("msg4").innerHTML="* insert only 10 digits contact no";
                    return false;
                }
                else if(txtemail.trim()=="")
                {
                    document.getElementById("msg5").innerHTML="*Please insert email";
                    return false;
                }
                else if(txtpassword.trim()=="")
                {
                    document.getElementById("msg6").innerHTML="*Please insert password";
                    return false;
                }
                else if(txtpassword.length < 4)
                {
                    document.getElementById("msg6").innerHTML="*Password must be more then 4 character";
                    return false;
                }
                else if(txtpassword.search(/[0-9]/) ==-1)
                {
                    document.getElementById("msg6").innerHTML="*Password must contain one numeric value";
                    return false;
                }
                else if(txtpassword.search(/[a-z]/) ==-1)
                {
                    document.getElementById("msg6").innerHTML="*Password must contain one lowerCase alphabet";
                    return false;
                }
                else if(txtpassword.search(/[A-Z]/) ==-1)
                {
                    document.getElementById("msg6").innerHTML="*Password must contain one upperCase alphabet";
                    return false;
                }
                else if(txtpassword.search(/[!\@\#\$\%\^\&\*]/) ==-1)
                {
                    document.getElementById("msg6").innerHTML="*Password must contain one symbol";
                    return false;
                }
                else
                {
                    return true;
                }
            }