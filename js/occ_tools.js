// --------------------------------------------------------------------------------------//
// BEGIN JQUERY TOOLS -------------------------------------------------------------------//
// --------------------------------------------------------------------------------------//
$(document).ready(function() {

// Animate quicklinks #panel open & close
    $('#panel').removeClass('basic'); // JQuery takes over, #panel.basic:hover-to-show is removed
    $('#panel').addClass('closed');
    $('#toggle_open').click(function() {
      $('#subpanel').animate({height:'show'}, 300, function() {
        $('#panel').removeClass('closed');
        $('#panel').addClass('opened');
      });
    });
    $('#toggle_close').click(function() {
      $('#subpanel').animate({height:'hide'}, 300, function() {
        $('#panel').removeClass('opened');
        $('#panel').addClass('closed');
      });
    });

// Open/Close Animation for Site Header Navigation "Drawer"
// requires JQUERY UI EFFECTS CORE - but only for .switchClass()
  // disable basic functionality
  $('#occheaderbg, .headernav').removeClass('basic');
  $('#occheaderbg, .headernav').addClass('closed');

  // trackers & units
  var showHeader = false; // Initially, it SHOULD NOT be shown
  var visible = false; // Initially, it IS NOT shown
  var hideDelay = 750;
  var hideDelayTimer = null;

  // mouseenter event opens drawer
  $('#home_top').mouseenter(function() {
    if (hideDelayTimer) clearTimeout(hideDelayTimer);
    if (visible == true) { // don't do anything if it's already visible
      return;
    }
    else {
      showHeader = true;
      if (showHeader == true && visible == false) {
        headerOpen();
      }
    }
  });

  // mouseleave event closes drawer after a delay
  $('#home_top').mouseleave(function() {
    // reset the timer if we get fired again - avoids double animations
    if (hideDelayTimer) clearTimeout(hideDelayTimer);
    // store the timer so that it can be cleared in the mouseover if required
    hideDelayTimer = setTimeout(function () {
      hideDelayTimer = null;
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