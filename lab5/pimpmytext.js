document.onclick = function() {
	var e = e || window.event;
	var target = e.target || e.srcElement;
	if (target.id.toLowerCase() == "button") {
		$("textarea").addClass("big");
	} else if (target.id.toLowerCase() == "bling") {
		if ($("textarea").hasClass("bling"))
			$("textarea").removeClass("bling");
		else
			$("textarea").addClass("bling");
	}
}
