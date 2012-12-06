// --------------------------------------------------------------------------------------//
// BEGIN JQUERY TOOLS -------------------------------------------------------------------//
// --------------------------------------------------------------------------------------//
$(document).ready(function() {
// Open/Close Animation for Site Header Navigation "Drawer"
// requires JQUERY UI EFFECTS CORE - but only for .switchClass()
  // disable basic functionality
  $('#occheaderbg, .headernav').removeClass('basic');
  $('#occheaderbg, .headernav').addClass('closed');
  // trackers & units
  var showHeader = false; // Initially, it SHOULD NOT be shown
  var visible = false; // Initially, it IS NOT shown
  var showDelay = 500;
  var hideDelay = 750;
  var DelayTimer = null;
  // mouseenter event opens drawer
  $('#home_top, #top').mouseenter(function() {
    if (DelayTimer) clearTimeout(DelayTimer);
    if (visible == true) { // don't do anything if it's already visible
      return;
    }
    else {
      DelayTimer = setTimeout(function () {
        DelayTimer = null;
        showHeader = true;
        if (showHeader == true && visible == false) {
          headerOpen();
        }
      }, showDelay);
    }
  });
  // mouseleave event closes drawer after a delay
  $('#home_top, #top').mouseleave(function() {
    // reset the timer if we get fired again - avoids double animations
    if (DelayTimer) clearTimeout(DelayTimer);
    // store the timer so that it can be cleared in the mouseover if required
    DelayTimer = setTimeout(function () {
      DelayTimer = null;
      showHeader = false;
      if (showHeader == false && visible == true) {
        headerClose();
      }
    }, hideDelay);
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