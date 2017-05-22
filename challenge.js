/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */

const currentSite = window.location.hostname;

// if (currentSite === 'www.instagram.com'){
//   $('input[name=username]').attr('id', 'username');
// }

const siteFormQueries = {
  "www.facebook.com": {
    username: "#email",
    password: "#pass",
    submit: "#loginbutton"
  },
  "www.paypal.com": { //good
    username: "#email",
    password: "#password",
    submit: "#btnLogin"
  },
  "online.citi.com": { //works, but challenge.js runs ~10x. Why?
    username: "#username",
    password: "#password",
    submit: "#signInBtn"
  },
  "www.bankofamerica.com": { //works, but challenge.js runs ~10x. Why?
    username: "#onlineId1",
    password: "#passcode1",
    submit: "#hp-sign-in-btn"
  },
  "www.instagram.com": { //good
    username: "input[name=username]",
    password: "input[name=password]",
    submit: "._ah57t._84y62._i46jh._rmr7s"
  },
  "login.yahoo.com": { //good
    username: "#login-username",
    password: "#login-passwd",
    submit: "#login-signin"
  }
}

function getUsernameField() {
  let query = siteFormQueries[currentSite].username

  return $(query);
}

function getPasswordField() {
  let query = siteFormQueries[currentSite].password;

  return $(query);
}

function getFormField() {
  return getUsernameField().closest('form');
}

function getSubmitButton() {
  let query = siteFormQueries[currentSite].submit;

  return $(query);
}


/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
