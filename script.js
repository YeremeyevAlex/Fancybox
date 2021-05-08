$(document).ready( () => {
	$('img').click(function() {
		let show = $(this).attr('src');
		$("body").append('<div class="large_pic"><img src="'+show+'" /></div>');
		$(".large_pic").on("click", function() {
			$(this).hide();
		});
	});
});