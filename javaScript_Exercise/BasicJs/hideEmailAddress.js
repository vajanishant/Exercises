const EmailAddress = prompt('Enter email address', "abcsdjkfanhkjam@example.com");

function hideEmail(emailAddress) {
  
  let showHiddenEmail = '';
  
  for(let index = 0; index < 3; index++)
    {
  
      showHiddenEmail = showHiddenEmail + emailAddress[index];
    
    }
  
  showHiddenEmail = showHiddenEmail.concat('...');
  
  for(let index = emailAddress.indexOf('@'); index < emailAddress.length; index++) 
    {
      
      showHiddenEmail = showHiddenEmail + emailAddress[index];
      
    }
  
  alert(showHiddenEmail);
  
}

hideEmail(EmailAddress);