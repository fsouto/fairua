$(document).ready(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".links").fancybox({
        maxWidth    : 900,
        maxHeight   : 900,
        fitToView   : false,
        width       : '90%',
        height      : '100%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'fade',
        closeEffect : 'fade'
    });

    // Helper to push content to bottom
    $('.pull-down').each(function() {
        $(this).css('margin-top', $(this).parent().height()-$(this).height())
    });

    // FIXME
    $("#profesionaisChk").on("click", function () {
        console.log("caca");
        console.log(this.checked);
        $('#leaflet-control-layers-group-1 :input:checkbox').not(this).prop('checked', this.checked);
        // Chapuza de espanto, llamar a trigger bien
        $('#leaflet-control-layers-group-1 > label:nth-child(2) > input').trigger('click');
        $('#leaflet-control-layers-group-1 > label:nth-child(2) > input').trigger('click');
    });

    // If all the checkboxes are checked or unchecked parent must change
    // Estos selectores tambien son una chapuza, los tenemos temporalmente a ver si esta funcioalidad es necesaria
    $('#leaflet-control-layers-group-1 .leaflet-control-layers-selector:checkbox').on("change", function(){
        if ($('#leaflet-control-layers-group-1 .leaflet-control-layers-selector:checkbox:checked').length == 5) {
            $("#profesionaisChk").prop('checked', true);
        }
        if ($('#leaflet-control-layers-group-1 .leaflet-control-layers-selector:checkbox:checked').length == 0) {
            $("#profesionaisChk").prop('checked', false);
        }
    });
});