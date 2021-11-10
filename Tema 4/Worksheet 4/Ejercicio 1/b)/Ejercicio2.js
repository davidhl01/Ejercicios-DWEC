window.addEventListener("load", main);

function main() {
    document.getElementById("normal").addEventListener("click", conestilo);
    document.getElementById("minimalista").addEventListener("click", sinestilo);
}

function conestilo(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "normal.css";
}

function sinestilo(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "minimalista.css";

}