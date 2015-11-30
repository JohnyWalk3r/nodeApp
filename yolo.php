<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Consuming Twitter Webserver</title>

</head>
<body>
<header>
    <h1>Header Div</h1>
</header>
<script>
    window.onload = function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("twitter").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "http://nodeappl.azurewebsites.net    ", true);
        xhttp.send();
    }

</script>

<main>
    <h2> Main content </h2>
</main>
<aside id="twitter" >

</aside>
</body>
</html>
