{
    //validate name
     const name=document.querySelector('#Name');
     const texterror=document.querySelector('.error');
     name.addEventListener('input',function()
     {
         let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
         if(nameRegex.test(name.value))
         {
             texterror.textContent="";
         }
         else
         {
             texterror.textContent="Name is Incorrect"
         }
     });
 }
 //Salary update
 {
    const salary=document.querySelector('#salary');
     const salaryOutput=document.querySelector('.salary-output');
     salary.addEventListener('input',function()
     {
         salaryOutput.textContent=salary.value;
     });
 }
 {
    //validate Email
     const Email=document.querySelector('#Email');
     const errorContent=document.querySelector('.emailError');
     Email.addEventListener('input',function()
     {
         //regex to validate email id
         let nameRegex=RegExp('^[a-zA-Z]{3}([\\- \\+ _\\.]*[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\\.[a-z]{2,3}(\\.[a-zA-Z]{2,4}){0,1}$');
         if(nameRegex.test(Email.value))
         {
             errorContent.textContent="";
         }
         else
         {
             errorContent.textContent="Invalid Email Id";
         }
     });
 }
 //UC3-Validate phone number
 {
       //validate Email
       const phoneNumber=document.querySelector('#Telphone');
       const errorContent=document.querySelector('.PhoneError');
       phoneNumber.addEventListener('input',function()
       {
           //regex to validate phone number with country code
           let nameRegex=RegExp('^[1-9][0-9]\\s[1-9][0-9]{9}$');
           if(nameRegex.test(phoneNumber.value))
           {
               errorContent.textContent="";
           }
           else
           {
               errorContent.textContent="Invalid phone number";
           }
       });
 }
  //UC4-Validate password
  {
    //validate password
    const password=document.querySelector('#Password');
    const errorContent=document.querySelector('.PasswordError');
    password.addEventListener('input',function()
    {
        //regex to validate phone number with country code
        let nameRegex=RegExp('^[a-zA-Z0-9]{8,}$');
        if(nameRegex.test(password.value))
        {
            errorContent.textContent="";
        }
        else
        {
            errorContent.textContent="Invalid password";
        }
    });
}
