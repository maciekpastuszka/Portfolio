define('ajax', function () {
    return function (options) {
        options = {
            type: options.type || "POST",
            url: options.url || "",
            data: options.data,
            onComplete: options.onComplete || function () {},
            onError: options.onError || function () {},
            onSuccess: options.onSuccess || function () {},
            dataType: options.dataType || "text"
        };

        var xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (httpSuccess(xhr)) {
                    var returnData = (options.dataType == "xml") ? xhr.responseXML : xhr.responseText
                    options.onSuccess(returnData);
                } else {
                    options.onError();
                }
                options.onComplete();
                xhr = null;
            }
        };

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(options.data);

        function httpSuccess(r) {
            try {
                return (r.status >= 200 && r.status < 300 || r.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined")
            } catch (e) {
                return false;
            }
        }
    }
});