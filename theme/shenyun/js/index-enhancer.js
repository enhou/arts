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
	});

	//menu-dropdown
	function addDropdown() {
		$(this).children('.dropdown-wrapper').fadeIn(230);
	}

	function removeDropdown(event) {
		$(this).children('.dropdown-wrapper').fadeOut(230);
	}

	var dropdownConfig = {
		interval : 50,
		sensitivity : 7,
		over : addDropdown,
		timeout : 100,
		out : removeDropdown
	};

	$("li.has-dropdown").hoverIntent(dropdownConfig);
	$('.dropdown-wrapper').show();
	$('.dropdown-wrapper').hide();

	//ticket-finder dropdown
	function showPopup() {
		$('#menu-select-city-purple-dropdown').fadeIn();
	}

	function hidePopup() {
		$('#menu-select-city-purple-dropdown').fadeOut();
	}

	var popupConfig = {
		interval : 20,
		sensitivity : 7,
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
	
	
	$('.index-show-box').before('<div class="hline1px"></div>');
	
	//highlights vertical slide
        $('#slide-news').vTicker({
            speed: 500,
            pause: 3000,
            showItems: 1,
            animation: 'fade',
            mousePause: false,
            height: 0,
            direction: 'up'
        });
        
					var optionsClicked = false;
					//$('#optionsDivContainer').html(optionData);
					function toggleMoreEventsDiv() {
						optionsClicked = (optionsClicked == true) ? false : true;
						if (optionsClicked) {
							$('#index-event-list-more').hide('slow');
							$('#index-event-list-more-text').html('View all performances');
							//$('#viewall-arrow').show('fast');

							$('#viewall-arrow').css('display', 'inline');
						} else {

							$('#index-event-list-more').show('slow');
							$('#index-event-list-more-text').html('View Less');
							//$('#viewall-arrow').hide('fast');
							$('#viewall-arrow').css('display', 'none');
						}

					}

					function loadAreaEvent() {
						var url = '/event/ajax-list-by-area/area/' + $("#index-event-area").val() + '/sort/' + $("#index-event-sort").val();
						$.ajax({
							url : url,
							success : function(data) {
								$('#tour-listing-body').html(data);
							}
						});
					}

					function setCurrentArea(value, name) {
						$("#index-event-area").val(value);
						$("#index-event-area-current").text(name);
						loadAreaEvent();
						$('.drop-country').hide();
					}

					function setSortBy(choice) {
						$("#index-event-sort").val(choice);
						var cssLeft = '80px';
						if (choice == 'date') {
							var cssLeft = '80px';
						} else {
							var cssLeft = '228px';
						}
						$('.tour-listing-header .header-arrow').css('left', cssLeft);
						loadAreaEvent();
					}


});
