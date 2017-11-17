// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

// $(function() {
//   $( "#sortable1, #sortable2, #sortable3" ).sortable({connectWith:['.connectedSortable']}).disableSelection();

//   var $tabs = $( "#tabs" ).accordion({
//     heightStyle: "content",
//     collapsible: true,
//     header: "> div > h3",
//     beforeActivate: function(event, ui) {
//        // The accordion believes a panel is being opened
//        var currHeader, currContent = "";
//       if (ui.newHeader[0]) {
//         currHeader  = ui.newHeader;
//         currContent = currHeader.next('.ui-accordion-content');
//        // The accordion believes a panel is being closed
//       } else {
//         currHeader  = ui.oldHeader;
//         currContent = currHeader.next('.ui-accordion-content');
//       }
//        // Since we've changed the default behavior, this detects the actual status
//       var isPanelSelected = currHeader.attr('aria-selected') == 'true';

//        // Toggle the panel's header
//       currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));

//       // Toggle the panel's icon
//       currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

//        // Toggle the panel's content
//       currContent.toggleClass('accordion-content-active',!isPanelSelected)    
//       if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

//       return false; // Cancel the default action
//     }
//   })
// });
