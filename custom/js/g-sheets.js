$(function () {

    var keyAPI = 'AIzaSyDwgGVi4BPV9Ke-NqqIZsse5_vf5_f-prE';
    // var sheetId = '112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo';
    var sheetId = '1kpbOzL5mqSR7ggoDCo16zMQ_fv3iDLLr23YvPBpQGnA';

    var baseAPI = 'https://sheets.googleapis.com';
    var keySuffix = '?key={key}';
    var getSheetRestAPI = '/v4/spreadsheets/{spreadsheetId}';
    var getAllRowRestAPI = '/v4/spreadsheets/{spreadsheetId}/values/{range}';

    function replacePlaceholder(scope) {
        return scope.str = scope.str.replace(/\{(\w+)\}/g, function (a, b) {
            return typeof scope.data[b] !== 'undefined' ? scope.data[b] : '';
        });
    }
    
    function getAllaRow() {
        var scope = {};
        scope.data = {
            key: keyAPI,
            spreadsheetId: sheetId,
            range: 'Hello Sheet!'
        };
        scope.str = baseAPI + getAllRowRestAPI + keySuffix;
        var restAPI = replacePlaceholder(scope);

        $.get({
            url: restAPI,
            success: function (data) {
                var values = data.values;
                var array = [];
                $.each(values, function (index, row) {
                    var col0 = row[0];
                    var col1 = row[1];
                    var col2 = row[2];
                    var col3 = row[3];
                    var col4 = row[4];

                    var jsonObj = {
                        id: col0,
                        title: col1,
                        description: col2,
                        image: col3,
                        price: col4
                    };
                    array.push(jsonObj);
                });
                $('body').html(JSON.stringify(array, null, 2));
            }
        });
    }

    getAllaRow();

});