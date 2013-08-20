$(function () {
    
    var users = {
        "User1": { userName: "KBurnell" },
        "User2": { userName: "CSell5" },
    };

    populateUsers(users);



    $("#side-bar").on("click", "li", function (data) {
        var id = $(this).data("id");
        $("#side-bar, #dataCanvas").toggle();
        var user = users[id];
        tab_profile(user);
        tab_repos(user);
        $("#tabs").tabs();
    });


    

});


function populateUsers(userList) {
    $.each(userList, function (i, user) {
        amplify.request("github.User", { id: user.userName }, function (data) {
            userList[i].profile = data;
            var li = $("<li></li>", { "data-id": i }).html($("<img></img>", {
                src: data.avatar_url + "&s=300",
                alt: data.name
            }));
            $("#side-bar ul").append(li);
        });
    });
}



var tab_profile = function (user) {
    var tab = $("#profile");
    tab.find("#name").text(user.profile.name);
    tab.find("#avatar").attr("src", user.profile.avatar_url);
    tab.find(".tabBackButton").unbind("click").on("click", function () {
        $("#side-bar, #dataCanvas").toggle();
    });
    tab.find("#userName").text(user.profile.login);
    tab.find("#company").text(user.profile.company);
};

var tab_repos = function (user) {
    if (!user.repos) {
        var tab = $("#repos");
        var reposList = tab.find("#reposList");
        reposList.html("");
        tab.find("#name").text(user.profile.name + "'s Repos");
        tab.find(".tabBackButton").unbind("click").on("click", function () {
            $("#side-bar, #dataCanvas").toggle();
        });
        amplify.request("github.Repos", { id: user.userName }, function (data) {
            user.repos = data;
            $.each(data, function (i, repo) {
                reposList.append("<li><a class='repoItem' href='" + repo.html_url + "'>" + repo.name + "</a></li>");
            });
        });
    }
};




