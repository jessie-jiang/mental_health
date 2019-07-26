function testingAPI(){
    var key = "563492ad6f9170000100000121ee626bc2ab487a82b19ab59e4a8f04";
    var url = "https://api.pexels.com/v1/curated?per_page=1&page=1";
    console.log(httpGet(url,key));
}


function httpGet(url,key){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.setRequestHeader("Authorization", key);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
