var xhr = new XMLHttpRequest();
var btn = document.getElementById('button');
var url = 'http://127.0.0.1:9000/';

btn.addEventListener("click", () => {
	data = document.getElementById("submit").value;
   	dataJson = `{ "url" : "` + data + `"}`;
   	console.log(dataJson);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById("label").innerHTML = '<a href=\'' + json.shortened_url + '\'>' + json.shortened_url + '</a>';
        }
    };
    xhr.send(dataJson);
});