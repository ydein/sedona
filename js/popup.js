	var searchLink = document.querySelector(".hotelsearch-button");
	var searchPopup = document.querySelector(".search-form");
	var searchClose = searchPopup.querySelector(".modal-close");	

	searchLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		searchPopup.classList.toggle("modal-show");
	});
