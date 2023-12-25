export const validateUsername = (username: string) => {
  const regex = /^[a-zA-Z0-9_]{1,15}$/;

  // Rule 1: Length between 1 and 15 characters
  if (username.length < 1 || username.length > 10) {
    console.log("Invalid passwordd");
    return "Username must be between 1 and 15 characters.";
  }

  // Rule 2: Allowed characters
  if (!regex.test(username)) {
    return "Username can only contain letters, numbers, and underscores.";
  }

  // Rule 3: Cannot start with an underscore
  if (username.startsWith("_")) {
    return "Username cannot start with an underscore.";
  }

  // Rule 4: Cannot contain consecutive underscores
  if (username.includes("__")) {
    return "Username cannot contain consecutive underscores.";
  }

  // Additional server-side validation (Rule 5) should be done separately.

  return null; // Validation passed
};

export const validatePassword = (password: string) => {
  // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password) ? null : "Invalid password format";
};


export const validateDateOfBirth = (dob: string) => {
  const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  return dobRegex.test(dob) ? null : "Invalid date of birth format (MM/DD/YYYY)";
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Invalid email address";
};