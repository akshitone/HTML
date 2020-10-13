function btnval(val)
{
    document.getElementById("textbox1").value += val;
}
function btnequal()
{
    var num1 = document.getElementById("textbox1").value;
    var answer = eval(num1);
    document.getElementById("textbox1").value = answer;
}
function btnclear()
{
    document.getElementById("textbox1").value = "";
}