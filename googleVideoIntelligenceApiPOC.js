    var operationId;
    var apiKey;

    function setKey(key) {
        apiKey = key;
    }

    function fetch() {

        var person = {
            "inputUri": "gs://cloud-ml-sandbox/video/chicago.mp4",
            "features": ["LABEL_DETECTION"]
        }

        $.ajax({
            type: 'POST',
            url: 'https://videointelligence.googleapis.com/v1/videos:annotate?key=' + apiKey,
            data: JSON.stringify(person),
            contentType: 'application/json',
            crossDomain: true,
            success: function(data) {
                console.log(data.name);
                $("#lol").html(data.name);
                $("#rofl").text("WAIT FOR 1-2 minutes before process is completed ..dont refresh the page !");
                operationId = data.name;
            },
            error: function(data) {
                console.log("error");
            }
        });
    }

    function fetchResults() {
        $.ajax({
            type: 'GET',
            url: 'https://videointelligence.googleapis.com/v1/operations/' + operationId + '?key=' + apiKey,
            contentType: 'application/json',
            crossDomain: true,
            success: function(data) {
                console.log(data);
                $("#rofl").text("CHECK CONSOLE !");
            },
            error: function(data) {
                console.log("error");
            }

        });
    }