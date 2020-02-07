function newElement()
{
    var li = document.createElement("li");
    var input = document.getElementById("newtask").value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    
    if (input =='')
    {
        alert("Hey man, write something");
    } else{
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("newtask").value = "";

    var span = document.createElement("span");
    var cross = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(cross);
    li.appendChild(span);

    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checked";
    list[i].prepend(check);
    
        for(i=0; i < close.length; ++i)
        {
            close[i].onclick = function()
            {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
        var checked = document.getElementsByClassName("checked");
        for (i = 0; i < checked.length; ++i)
        {
            checked[i].onchange = function()
            {
                if (this.checked)
                {
                    this.parentElement.classList.add("lined");
                }
                else
                {
                     this.parentElement.classList.remove("lined");
                }
            }
        }
}


// Создаем кнопку закрытия и добавьляем ее
var list = document.getElementsByTagName("li");
var i;
for (i = 0; i <list.length; i++)
{
    var span = document.createElement("span");
    var cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross);
    list[i].appendChild(span);
    
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checked";
    list[i].prepend(check);
}
//  Кнопка Закрыть, чтобы скрыть текущий элемент списка при нажатие ее
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; ++i)
{
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var checked = document.getElementsByClassName("checked");
for (i = 0; i < checked.length; ++i)
{
    checked[i].onchange = function()
    {
        if (this.checked)
        {
            this.parentElement.classList.add("lined");
        }else
        {
            this.parentElement.classList.remove("lined");
        }
    }
}