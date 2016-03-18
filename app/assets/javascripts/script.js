//$('.max.example .ui.normal.dropdown')
//  .dropdown({
//        maxSelections: 3
//      })
//;
//
function init(){
  
  $('.ui.dropdown')
    .dropdown()
  ;
}

var autosave = false;
function myAutosavedTextbox_onTextChanged() {
  if (!autosaveOn) { 
    autosaveOn = true;

    $('#autoSaveForm').everyTime('3000', function() {
      $.ajax({
        type: 'PATCH',
        url: '/posts/:id',
        data: 'WAT?',
        success: function(msg) {
          $('#autosavenotify').text(msg);
        }
      });
    });
  }
}

