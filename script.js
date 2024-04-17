function validateForm() {
    var fullName = document.getElementById('fullName');
    var contact = document.getElementById('contact');
    var dob = document.getElementById('dob');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var gender = document.getElementById('gender');
  
    // Validation logic
    if (fullName.value === '') {
      alert('Please enter your full name');
      fullName.focus();
      return false;
    }
    if (contact.value === '') {
      alert('Please enter your contact number');
      contact.focus();
      return false;
    }
    if (dob.value === '') {
      alert('Please enter your date of birth');
      dob.focus();
      return false;
    }
    if (email.value === '') {
      alert('Please enter your email address');
      email.focus();
      return false;
    } else {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        return false;
      }
    }
    if (password.value === '') {
      alert('Please enter your password');
      password.focus();
      return false;
    }
    if (gender.value === '') {
      alert('Please select your gender');
      gender.focus();
      return false;
    }
    return true;
  }
  