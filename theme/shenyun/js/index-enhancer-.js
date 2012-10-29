$(document).ready(function() {

	$("#searchin").focus(function() {
		$("#search-icon").addClass('open');
	});

	$("#searchin").mouseup(function() {
		return false
	});
	$("#search-icon").mouseup(function() {
		return false
	});

	$(document).mouseup(function() {
		$("#search-icon").removeClass('open');
		return false;
	});

	//menu-dropdown
	function addDropdown() {
		$(this).addClass("hovering");
	}

	function removeDropdown(event) {
		$(this).removeClass("hovering");
		
	}

	var dropdownConfig = {
		interval : 50,
		sensitivity : 4,
		over : addDropdown,
		timeout : 100,
		out : removeDropdown
	};

	$("li.has-dropdown").hoverIntent(dropdownConfig);

	//ticket-finder dropdown
	function showPopup() {
		$('#menu-select-city-purple-dropdown').fadeIn();
	}

	function hidePopup() {
		$('#menu-select-city-purple-dropdown').fadeOut();
	}

	var popupConfig = {
		interval : 20,
		sensitivity : 4,
		over : showPopup,
		timeout : 100,
		out : hidePopup
	};
	$("#menu-select-city-purple").hoverIntent(popupConfig);
	$('#menu-select-city-purple-dropdown').show();
	$('#scrollable-city-list-purple').tinyscrollbar();
	$('#menu-select-city-purple-dropdown').hide();
	
		//drop-country dropdown
	function showCountry() {
		$('.drop-country').fadeIn();
	}

	function hideCountry() {
		$('.drop-country').fadeOut();
	}

	var countryConfig = {
		interval : 20,
		sensitivity : 4,
		over : showCountry,
		timeout : 100,
		out : hideCountry
	};
	$("#big-panel-title").hoverIntent(countryConfig);
	$('.drop-country').show();
	$('.drop-country').hide();
	
	$(".video-popup").fancybox();

}); 