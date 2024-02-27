document.addEventListener('DOMContentLoaded', (event) => {
    const tableCells = document.querySelectorAll('th, td');
  
    tableCells.forEach(cell => {
      if (cell.textContent.length <= 20) {
        // If content length is 20 or less, add the 'center-text' class
        cell.style.textAlign = 'center';
        cell.classList.add('center-text');
      }
    });
  });

  $(document).ready(function() {
    var ordersColumnIndex = 4;
    
    $('table tr').each(function() {
      var $cell = $(this).find('td').eq(ordersColumnIndex);
      var cellValue = parseInt($cell.text(), 10);
      
      if (cellValue > 100) {
        $cell.css({
          'background-color': '#00FF00',
          'color': '#FFFFFF'
        });
      }
    });
  });
  
  
  $(document).ready(function() {
    $('#dialog-Jump').dialog({
      autoOpen: false,
      modal: true,
      title: 'Jump Help Dialog',
      width: 'auto',
      height: 'auto',
      create: function() {
        var titleBar = $(this).prev('.ui-dialog-titlebar');
        titleBar.css('background-color', '#0081bd');
        titleBar.find('.ui-dialog-title').css('color', '#FFFFFF');
      }
    });

    $('#jumpHelp').click(function(event) {
      event.preventDefault();
      $('#dialog-Jump').dialog('open');
    });
});
