var api_url = "https://api.github.com/users/";

amplify.request.define("github.User", "ajax", {
    url: api_url + "{id}",
    type: "GET"
});

amplify.request.define("github.Repos", "ajax", {
    url: api_url + "{id}/repos" ,
    type: "GET"
});


