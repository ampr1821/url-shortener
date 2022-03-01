var xhr = new XMLHttpRequest();
var btn = document.getElementById('button');
// var url = 'http://ec2-3-83-235-20.compute-1.amazonaws.com:8080/';
var url = window.location.href;

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
