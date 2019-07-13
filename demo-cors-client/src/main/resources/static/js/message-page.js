GET: $(document).ready(function() {

    $("#msg").click(function(event) {
        event.preventDefault();
        ajaxGet();
    });

    function ajaxGet() {
        $.ajax({
            url : "http://localhost:9090/hi",
            success : function(result) {
                $("#response").html(result);
            }
        });
    }

})
