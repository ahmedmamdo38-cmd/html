function tarkasta()
{
    ktunnus = document.getElementById("ktunnus").value;
    password = document.getElementById("password").value;

    if(ktunnus == "ahmed.mamdo" && password == "25Keuda")
    {
        alert("Tietosi on oikein");
    }
    else
    {
        alert("Tietosi ei ole oikein");
    }
}