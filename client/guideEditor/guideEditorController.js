cg.controller('guideEditorController', function($scope){

	console.log('inside guideEditorController');


	$scope.updateSidebar = function(guide){
		console.log(guide);
	};









});

// Sticky header
$(document).scroll(function () {
    var stickyHeader = $(document).scrollTop(),
        header = $(".fr-toolbar");

    if (stickyHeader >= 100) {
        header.addClass('toolbar-fixed');
    } else {
        header.removeClass('toolbar-fixed');
    }
});