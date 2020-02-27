let result = "";
let a = ["x", "i", "n", " ", "c", "h", "a", "o"];
function replaceTxt()
{
    let input = document.getElementById("inputText").value;
    let length = input.length;
    if(length > 0)
    {
        for(let i=0; i<length; i++)
        {
            result = result + a[i];
            if(i === 8)
            {
                document.getElementById("inputText").value = "";
                result = "";
            }
        }
    }
    document.getElementById("inputText").value = result;
    result="";
}