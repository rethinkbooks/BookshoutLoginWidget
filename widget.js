var BookshoutLoginWidget = {};
BookshoutLoginWidget.generate_form = function(selector){
  var container = document.querySelector(selector);
  console.log(container);
  var formElement = document.createElement("form");
  formElement.setAttribute("method", "post");
  formElement.setAttribute("action", "https://www.bookshout.com/signin");

  var emailElement = document.createElement("input");
  emailElement.setAttribute("type","text");
  emailElement.setAttribute("placeholder", "email");
  emailElement.setAttribute("name", "user[email]");

  var passwordElement = document.createElement("input");
  passwordElement.setAttribute("type", "password");
  passwordElement.setAttribute("placeholder", "password");
  passwordElement.setAttribute("name", "user[password]");

  var submitElement = document.createElement("input");
  submitElement.setAttribute("type", "submit");
  submitElement.setAttribute("value", "Login");


  var forgotPasswordLink = document.createElement("a");
  forgotPasswordLink.setAttribute("href", "https://www.bookshout.com/web/password");
  forgotPasswordLink.appendChild(document.createTextNode("Forgot Password?"));

  formElement.appendChild(emailElement);
  formElement.appendChild(passwordElement);
  formElement.appendChild(submitElement);
  formElement.appendChild(forgotPasswordLink);

  container.appendChild(formElement);
};

