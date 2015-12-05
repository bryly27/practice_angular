cg.controller('guideEditorController', function($scope){

	console.log('inside guideEditorController');


	$scope.updateSidebar = function(guide){
		// console.log(guide);
	};




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




    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });


});
