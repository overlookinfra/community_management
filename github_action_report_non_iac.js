function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("principalTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


function toggle(id) {
    var e = document.getElementById(id)
    if (e.style.display == 'none')
        e.style.display = 'table-row-group';
    else
        e.style.display = 'none';

}