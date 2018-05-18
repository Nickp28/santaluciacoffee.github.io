$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	// Step 2: Write Rest of JS here
	if (distanceScrolled > 55) {
		$('.sticky-nav').addClass('scrolled');
	} else {
		$('.sticky-nav').removeClass('scrolled');
	}

	if (distanceScrolled > 580) {
		$('.label-1, .label-2, .label-3').addClass('faded-in');
	} else {
		$('.label-1, .label-2, .label-3').removeClass('faded-in');
	}

	if (distanceScrolled > 777) {
		$('.butterfly').addClass('animated');
	} else {
		$('.rw').removeClass('animated');
	}

});

$('form').on('submit', function (event) {
  event.preventDefault();
  var fullName = $('#full-name').val();
  $('#input-value').text(fullName);

  if (fullName.length === 0) {
      alert("Please complete the form!");
  }

  var city = $('#email-address').val();
  $('#input-value').text(Email);

  if (Email.length === 0) {
      alert("Please Enter Your Email!");
  }

});
