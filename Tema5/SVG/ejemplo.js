var svgNS = "http://www.w3.org/2000/svg";

window.onload = () =>
{
    document.getElementById("btn").addEventListener("click", cambiarColor);
    this.tagCircle = document.createElementNS(svgNS,"circle");
    this.tagCircle.setAttributeNS(null, "fill", "green");
    this.tagCircle.setAttributeNS(null, "cx", 30);
    this.tagCircle.setAttributeNS(null, "cy", 90);
    this.tagCircle.setAttributeNS(null, "r", 100);
    this.tagCircle.setAttributeNS(null, "id", "bolita");
    document.getElementById("panelPpal").appendChild(this.tagCircle);
}

function cambiarColor(){
    document.getElementById("bolita").setAttributeNS(null, "fill", "red");

}