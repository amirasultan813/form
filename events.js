var signUp=document.getElementById("Bleft"),
    loginIn=document.getElementById("Bright"),
    fLogin=document.getElementById("form2"),
    fSign=document.getElementById("form1"),
    lastLogin=document.getElementById("lastLogin"),
    lastSign=document.getElementById("lastSign");
loginIn.onclick=function()
{
    'use strict';
    fLogin.classList.toggle("display");
};
lastLogin.onclick=function()
{
    'use strict';
    fLogin.classList.toggle("display");
};

signUp.onclick=function()
{
    'use strict';
    fSign.classList.toggle("display");
};
lastSign.onclick=function()
{
    'use strict';
    fSign.classList.toggle("display");
};