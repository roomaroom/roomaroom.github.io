$(document).ready(function () {
    $('#formSubmit').click(function() {
      checked = $("input[type=checkbox]:checked").length;

      if(!checked) {
        alert("Потрібно вказати дати заїзду");
        return false;
      }

    });
});