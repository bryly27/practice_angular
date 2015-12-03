// preventing modal
// jQuery('#myModal').modal('show').on('hide.bs.modal', function (e) {
//   e.preventDefault();
// })
  


// Core scripts

  
$(document).ready(function(){

      $("#media-filt").click(function(e){
        e.preventDefault();
        $("#filter-icon a i").toggleClass('active');
        $("#cat-filter").toggleClass('hide');
        $("#media-tab").toggleClass('hide');
      }); 

      $("#guide-filter").click(function(e){
        e.preventDefault();
        $("#filter-icon a i").toggleClass('active');
        $("#guide-filt").toggleClass('hide');
      });   

        $(".filter-closed").click(function(){
        $("#filter-icon a i").toggleClass('active');
        $("#cat-filter").toggleClass('hide');
        $("#media-tab").toggleClass('hide');
        $("#guide-filt").toggleClass('hide');
      });

      $('.selectpicker.select-filter').prop('selectedIndex',0);
      $('.selectpicker.modal-filter').prop('selectedIndex',0);   

      $('.clear-close .clear').click(function(){
          $('.selectpicker.select-filter').prop('selectedIndex',0);
      });

      $(".selectpicker.select-filter").bind("change", function() {
          $("." + this.value).fadeIn();
          $("tr.filter:not(." + this.value + ")").fadeOut();
          $("div.filter:not(." + this.value + ")").fadeOut();
      });      
      
      $(".second_title.filter-area").click(function(){
          $(".thumb2 a i").addClass('basecolor');
      });

      $(document).click(function(e){
          $(".thumb2 a i").removeClass('basecolor');
      })
})
function openFileOption()
{
  document.getElementById("file1").click();
}

jQuery(document).ready(function($) {

$('#accordion').on('hidden.bs.collapse', function () {
//do something...
})

$('#accordion .accordion-toggle').click(function (e){
  var chevState = $(e.target).siblings("i.indicator").toggleClass('glyphicon-chevron-down');
});


$('#accordion2 .accordion-toggle').click(function (e){
  var chevState2 = $(e.target).siblings("i.indicator").toggleClass('glyphicon-triangle-right glyphicon-triangle-bottom');
  // $("i.indicator").not(chevState2).removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
});


if (screen.width <= 320) { 

    $('i.fa-angle-double-right').removeClass('fa-angle-double-right').addClass('fa-angle-double-down');
 } 
else if (screen.width <= 480) { 

    $('i.fa-angle-double-right').removeClass('fa-angle-double-right').addClass('fa-angle-double-down');
 } 
else if (screen.width <= 768) { 

    $('i.fa-angle-double-right').removeClass('fa-angle-double-right').addClass('fa-angle-double-down');
 } 
else if (screen.width <= 992) { 

    $('i.fa-angle-double-right').removeClass('fa-angle-double-right').addClass('fa-angle-double-down');
 } 
});
