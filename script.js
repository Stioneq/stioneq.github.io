$(document).ready(function() {
    var oldValue;
    $("th").click(function () {
    });
    jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
        return function( elem ) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    $(".searchField").on('input',function () {
        var inputField = $(this);
        updateValue(inputField.val())
    });
    function filterTable() {

        if(oldValue != "") {
            $("tr:Contains("+oldValue+")").show();
            $("tr:not(:Contains("+oldValue+"))").hide();
            $("td:not(:Contains("+oldValue+"))").removeClass("filterValue")
            $("td:Contains("+oldValue+")").addClass("filterValue");
        }else{
            $("td").removeClass("filterValue");
            $("tr").show();
        }
    }
    function updateValue(newValue){
        if(oldValue !== newValue){
            oldValue = newValue;
            filterTable();

        }
    }
});