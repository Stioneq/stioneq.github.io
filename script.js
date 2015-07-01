$(document).ready(function() {
    var oldValue;


    /**
     * Sort table
     * @param col - sorted column
     * @param isAsc - if @true , asc sort , else descent
     */
    function sortTable(col, isAsc) {
            var $tbody = $('table tbody');
            $tbody.find('tr').sort(function(a,b){
                var tda = $(a).find('td:eq('+col+')').text();
                var tdb = $(b).find('td:eq('+col+')').text();
                    if(isAsc) {
                        return tda > tdb ? 1 : tda < tdb ? -1 : 0;
                    }else{
                        return tda < tdb ? 1 : tda > tdb ? -1 : 0;
                    }

            }).appendTo($tbody);
    }

    $("th").click(function () {
        var header = $(this);
        $("th").not(this).removeClass("asort").removeClass("dsort");
        if(header.hasClass("asort")){
            header.removeClass("asort");

            header.addClass("dsort");
        }else{
            header.removeClass("dsort");
            header.addClass("asort");
        }
        sortTable(header.index(),header.hasClass("asort"));


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
            $("td:not(:Contains("+oldValue+"))").removeClass("filterValue");
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