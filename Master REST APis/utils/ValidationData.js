const validationData = (name, email, password) => {
  const nameRegex = /^[a-zA-Z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!nameRegex.test(name)) {
    return {
      success: false,
      message:
        "Invalid name! Minimum 3 letters, only alphabets and spaces allowed.",
    };
  }

  if (!emailRegex.test(email)) {
    return { success: false, message: "Invalid email format!" };
  }

  if (!passwordRegex.test(password)) {
    return {
      success: false,
      message:
        "Password must be at least 8 chars long, include uppercase, lowercase, number, and special character.",
    };
  }

  return { success: true, message: "All fields are valid!" };
};

export default validationData;
