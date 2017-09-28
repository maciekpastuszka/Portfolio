function ajax(url, methodType) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(methodType, url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = xhr.responseText;
                    let responseJSON = JSON.parse(response);
                    resolve(responseJSON);
                } else {
                    reject(xhr.status);
                }
            }
        };
    });
}

export default ajax;
