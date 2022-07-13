var popupBlockerChecker = {
    check: function (popup_window) {
        var scope = this;
        if (popup_window) {
            if (/chrome/.test(navigator.userAgent.toLowerCase())) {
                setTimeout(function () {
                    scope.is_popup_blocked(scope, popup_window);
                }, 200);
            } else {
                popup_window.onload = function () {
                    scope.is_popup_blocked(scope, popup_window);
                };
            }
        } else {
            scope.displayError();
        }
    },
    is_popup_blocked: function (scope, popup_window) {
        if ((popup_window.innerHeight > 0) == false) {
            scope.displayError();
        }
    },
    displayError: function () {
        alert("Popup Blocker is enabled! Please add this site to your exception list.");
    }
};

//Modal

var modal = document.getElementById("moreInfo");

var btn = document.getElementById("moreInfoTrigger");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
    document.body.style.filter = blur(10);
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Navbar Switch

const home = document.querySelector("#home");
const news = document.querySelector("#news");
const docs = document.querySelector("#docs");
const cont = document.querySelector("#cont");

home.onclick = function () {
    home.style.color = "white";
    home.style.backgroundColor = "dodgerblue";
    home.style.borderRadius = "5px";
    news.style.color = "black";
    news.style.backgroundColor = "#f1f1f1";
    news.style.borderRadius = "0px";
    docs.style.color = "black";
    docs.style.backgroundColor = "#f1f1f1";
    docs.style.borderRadius = "0px";
    cont.style.color = "black";
    cont.style.backgroundColor = "#f1f1f1";
    cont.style.borderRadius = "0px";
}

news.onclick = function () {
    news.style.color = "white";
    news.style.backgroundColor = "dodgerblue";
    news.style.borderRadius = "5px";
    home.style.color = "black";
    home.style.backgroundColor = "#f1f1f1";
    home.style.borderRadius = "0px";
    docs.style.color = "black";
    docs.style.backgroundColor = "#f1f1f1";
    docs.style.borderRadius = "0px";
    cont.style.color = "black";
    cont.style.backgroundColor = "#f1f1f1";
    cont.style.borderRadius = "0px";
}

docs.onclick = function () {
    docs.style.color = "white";
    docs.style.backgroundColor = "dodgerblue";
    docs.style.borderRadius = "5px";
    news.style.color = "black";
    news.style.backgroundColor = "#f1f1f1";
    news.style.borderRadius = "0px";
    home.style.color = "black";
    home.style.backgroundColor = "#f1f1f1";
    home.style.borderRadius = "0px";
    cont.style.color = "black";
    cont.style.backgroundColor = "#f1f1f1";
    cont.style.borderRadius = "0px";
}

cont.onclick = function () {
    cont.style.color = "white";
    cont.style.backgroundColor = "dodgerblue";
    cont.style.borderRadius = "5px";
    news.style.color = "black";
    news.style.backgroundColor = "#f1f1f1";
    news.style.borderRadius = "0px";
    docs.style.color = "black";
    docs.style.backgroundColor = "#f1f1f1";
    docs.style.borderRadius = "0px";
    home.style.color = "black";
    home.style.backgroundColor = "#f1f1f1";
    home.style.borderRadius = "0px";
}