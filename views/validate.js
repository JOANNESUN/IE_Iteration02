const validate = () => {
  console.log(document.querySelector(".input100").value);

  if (document.querySelector(".input100").value == "password") {
    return true;
  }

  alert("The password is Invalid");
  return false;
};
