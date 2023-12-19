function submit()
{
    alert("Your Application is submitted, Welcome!!!");

    /*redirect to login page*/
    location.replace("login/login.html");

     alert("Login to continue");
}

function reset()
{
    location.reload(true);
}

function checkage()
{
    var ageinput = document.getElementById("DOB").value;
    var dob = new Date(ageinput);

    if(ageinput == null || ageinput == '')
    {
        alert("Date of birth cannot be empty");
    }
    else
    {
        //moth difference from present time
        var month_diff = Date.now() - dob.getTime();

        //convert calculated diff in date format
        var age_dt = new Date(month_diff);

        //extract year from date
        var year = age_dt.getUTCFullYear();

        //calculation of age of user
        var age = Math.abs(year - 1970);

        if(age < 20)
        {
            alert("You are below 20 years!");
        }
        else
        {
            submit();
        }
    }
}