// --------------------------------------------------------------------------------------//
// BEGIN JQUERY TOOLS -------------------------------------------------------------------//
// --------------------------------------------------------------------------------------//
$(document).ready(function() {
// Open/Close Animation for Site Header Navigation "Drawer"
// requires JQUERY UI EFFECTS CORE - but only for .switchClass()
  // disable basic functionality
  $('#occheaderbg, .headernav').removeClass('basic');
  $('#occheaderbg, .headernav').addClass('closed');
  // tracker
  var visible = false; // Initially, it IS NOT shown
  // mouseenter event opens drawer
  $('.headernav-title, .searchbox, .close-headernav').click(function() {
    if (visible == false) {
      headerOpen();
    }
    else if (visible == true) {
      headerClose();
    }
  });
  function headerOpen () {
    $('#occheaderbg, .headernav').switchClass('closed', 'opened', 150);
    visible = true;
  }
  function headerClose () {
    $('#occheaderbg, .headernav').switchClass('opened', 'closed', 150);
    visible = false;
  }
});