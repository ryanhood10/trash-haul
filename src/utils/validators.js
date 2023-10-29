export const validateEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // Return true if the email address matches the regular expression
    return emailRegex.test(email);
  };

  //use regex to set up validator for valid email