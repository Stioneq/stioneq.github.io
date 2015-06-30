$(document).ready(function() {
    var oldValue;

    /**
     * Sort table
     * @param col - sorted column
     * @param isAsc - if @true , asc sort , else descent
     */
    function sortTable(col, isAsc) {

        var list = $("td:nth-child("+col+")").map(function(ev){
            return $(this).html();
        });
        if(isAsc){
            list.sort();
        }else {
            list.sort(function sort(a, b) {
                if (a < b) {
                    return 1;
                } else if (a > b) {
                    return -1;
                }
                return 0;

            });
        }

        console.log(list.length)

        console.log(list);

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
        sortTable(header.index() + 1,header.hasClass("asort"));


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