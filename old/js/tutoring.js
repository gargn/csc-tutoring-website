function enableUsername() {
  $('#username_div').show();
  $('#fullname_div').hide();
  
  //document.getElementById('username_div').style.display = 'block';
  //document.getElementById('fullname_div').style.display = 'none';
}

function enableFullName() {
  $('#username_div').hide();
  $('#fullname_div').show();
  
  //document.getElementById('username_div').style.display = 'block';
  //document.getElementById('fullname_div').style.display = 'none';
}

function signIn() {
  var text = '';

  if (document.getElementById('radio_username').checked) {
    if ($('#input_username').val() == '') {
      alert('Please enter your username.');
      return;
    }
    else {
      text = 'username:"' + $('#input_username').val() + '",class:"' + $('#input_class').val() + '"'; 
    }
  }
  else if (document.getElementById('radio_fullname').checked) {
    if ($('#input_firstname').val() == '' || $('#input_lastname').val() == '') {
      alert('Please enter your first and last name.');
      return;
    }
    else {
      text = 'firstname:"' + $('#input_firstname').val() + '",lastname:"' + $('#input_lastname').val() + '",class:"' + $('#input_class').val() + '"';
    }
  }

  $.ajax({
    url: '/signin_ajax.php',
    data: {'login_name' : text},
    success: function() {
      alert('You have successfully signed in!');
    }
  });
}
