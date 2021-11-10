
function saltaAlert(e)
{
    alert(e.target.tagName);
}


document.getElementById("formulario").onclick = saltaAlert;
document.getElementById("parrafo").onclick = saltaAlert; 
document.getElementById("div").onclick = saltaAlert; 