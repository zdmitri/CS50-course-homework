
// JS function to alert user of his search before redirection to google
document.getElementById('form').onsubmit = function() {

  if (document.getElementById('query').value == '') {
    alert('Please enter a search term');
    return false;
  }

  else {
    alert('Dear user, you are now being redirected to Google.com to show search results for "' + document.getElementById('query').value + '"');
  }

}

