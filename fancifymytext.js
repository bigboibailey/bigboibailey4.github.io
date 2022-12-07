function makeBigger()
{
    document.getElementById("text-input").style.fontSize = "24pt";
}
function fancify()
{
    if(document.getElementById("fancy").checked == true)
    {
        document.getElementById("text-input").style.fontWeight = "bold";
        document.getElementById("text-input").style.color = "blue";
        document.getElementById("text-input").style.textDecoration = "underline";
    }
}
function borify()
{
    if(document.getElementById("betty").checked == true)
    {
        document.getElementById("text-input").style.fontWeight = "normal";
        document.getElementById("text-input").style.color = "black";
        document.getElementById("text-input").style.textDecoration = "none";
    }
}
function mooify()
{
    var cur = document.getElementById("text-input").value;
    cur = cur.toUpperCase();
    var parts = cur.split(".");
    cur = parts.join("-Moo. ");


    document.getElementById("text-input").value = cur;

}