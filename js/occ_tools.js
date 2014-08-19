$(document).ready(function() {

/* ACCORDION-STYLE DRAWER SET --------------
      Requires any number of:
      <tag class="js-drawer">
        <tag class="js-drawer-toggle">Drawer Title</tag>
        <div class="drawer-content">
          Stuff goes in here
        </div>
      </tag>
*/
  $('.js-drawer').addClass('closed');
  $('.js-drawer-toggle').on('click', function(event) {
    $('.js-drawer').switchClass('opened','closed',150);
    if ($(this).parents('.js-drawer').hasClass('closed')) {      
      $(this).parents('.js-drawer').switchClass('closed','opened',150);
      event.stopPropagation();
    }
    else {
      $(this).parents('.js-drawer').switchClass('opened','closed',150);
      event.stopPropagation();
    }
  });


/* PUSH MENU --------------
  Requires:
  <tag class="pushmenu">
    <a href="#" class="menu-closer">Close Menu</a>
    Links go in here
  </tag>

  <a href="#" class="menu-opener">Open Menu</a> (can go anywhere on the page)

  and CSS classes that describe what .menu and .mask look like when .pushmenu-is-open
*/

  // don't fire if .pushmenu isn't declared //
  if($('.menu').hasClass('pushmenu')){ 
    var mask = $('<div class="mask" />');

    /* show menu if toggle is clicked */
    $('.menu-opener').on('click', function(event) {
      $('body').addClass('pushmenu-is-open');
      $('body').append(mask);
    });

    /* hide menu if menu-closer button is clicked */
    $('.menu-closer').on('click', function(event) {
      $('.js-drawer').switchClass('opened','closed',150);
      $('body').removeClass('pushmenu-is-open');
      mask.remove();
    });

    /* hide menu if mask is clicked */
    mask.on('click', function(event) {
      $('.js-drawer').switchClass('opened','closed',150);
      $('body').removeClass('pushmenu-is-open');
      mask.remove();
    });
  }


  
});

