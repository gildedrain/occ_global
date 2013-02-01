// BEGIN JQUERY TOOLS -------------------------------------------------------------------//
$(document).ready(function() {
  // Open/Close Animation for "Drawer"
  // .switchClass() requires JQUERY UI EFFECTS CORE
  var $drawer = $('.js-drawer');
  window.contentsVisible = false;
  $('.js-drawer-toggle').on('click', function(event) {
    if (window.contentsVisible) {
      drawerClose();
      window.contentsVisible = false;
    }
    else {
      drawerOpen();
      window.contentsVisible = true;
    }
    event.stopPropagation();
  });
  $('.js-drawer-open-only').on('click', function() {
    drawerOpen();
    window.contentsVisible = true;
    event.stopPropagation();
  });
  $closers = $('.main, #menutitle, .bg_slideshow')
  $closers.on('click', function() {
    if (window.contentsVisible) {
      drawerClose();
      window.contentsVisible = false;
    }
  });
  function drawerOpen () {
    $drawer.switchClass('closed', 'opened', 150);
  }
  function drawerClose () {
    $drawer.switchClass('opened', 'closed', 150);
  }
});