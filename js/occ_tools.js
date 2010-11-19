// --------------------------------------------------------------------------------------//
// BEGIN JQUERY TOOLS -------------------------------------------------------------------//
// --------------------------------------------------------------------------------------//
$(document).ready(function() {

// Animate #panel open & close
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

// Take current Google Search query and use it to search within the scope of a different website
// to add a new option, modify the subdomain / subdirectory, and modify the CXkey (created on google webmaster tools)
    occSwitchSearch = function(NewSite) {
      loc = window.location.href;
    	qkey = parseUri(loc).queryKey;
    	qHold = $(qkey).attr("q");
    	if (NewSite == 'www') {
    		window.location.href="http://www.sunyocc.edu/search.aspx?cx=009247214289687445570%3A4z5fbtg2lek&cof=FORID%3A11&ie=UTF-8&sa=Search&q=" + qHold;
    	}
    	else if (NewSite == 'wwwold') {
    		window.location.href="http://www.sunyocc.edu/searchresult.aspx?cx=009247214289687445570%3A4z5fbtg2lek&cof=FORID%3A11&ie=UTF-8&sa=Search&q=" + qHold;
    	}
    	else if (NewSite == 'students') {
    		window.location.href="http://students.sunyocc.edu/search.aspx?cx=012429996574113949521%3Az7uv6wcw71e&cof=FORID%3A11&ie=UTF-8&sa=Search&q=" + qHold;
    	}
    	else if (NewSite == 'admission') {
    		window.location.href="http://www.sunyocc.edu/admission/search.aspx?cx=009247214289687445570%3As8i2fdwbink&cof=FORID%3A11&ie=UTF-8&sa=Search&q=" + qHold;
    	}
    };      
      
// EKTRON MENU OPEN FIRST LINK IF SUBMENU AND HIGHLIGHT      
    $(window).load(function() {
    	if (($('div.menu a:first').hasClass('ekmenu_submenu_btnlink')) && !($('div.ekmenu_submenu > div').hasClass('ekmenu_submenu_items'))) {
    		$('div.ekmenu_submenu_items_hidden').first().addClass('ekmenu_submenu_items').removeClass('ekmenu_submenu_items_hidden');
    		$('span.ekmenu_button').first().addClass('ekmenu_button_selected').removeClass('ekmenu_button');
    	}
    });      
//END DOCUMENT.READY
});