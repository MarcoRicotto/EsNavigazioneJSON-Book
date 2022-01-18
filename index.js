"use strict"

let jsonDoc;
let pos;

window.onload = function()
{
    let json = localStorage.getItem("jsonBookStore");
    if(json != null)
    {
        jsonDoc = JSON.parse(json);
        console.log(jsonDoc);
        visualizza();//visualizzazione della tabella
    }
}

function visualizza()
{
    let tBody = document.getElementById("tabLibri");
    tBody.innerHTML = "";

    for(let i = 0;i < jsonDoc.length;i++)
    {
        let libro = jsonDoc[i];//all'interno di libro avrò ogni singolo libro
        let tr = document.createElement("tr");
        tBody.appendChild(tr);
        //scorriamo le chiavi e ottieniamo ogni singolo valore del libro
        for(let key in libro)
        {
            let td = document.createElement("td");
            td.innerText = libro[key];
            tr.appendChild(td);
        }
        let td = document.createElement("td");
        let btn = document.createElement("input");
        btn.type = "button";
        btn.value = "ELIMINA";
        btn.setAttribute("id", i);
        btn.addEventListener("click", function ()
        {
            elimina(this.getAttribute("id"));//passo l'id
        });
        td.appendChild(btn);//metto il btn dentro a un td al fondo di ogni riga
        tr.appendChild(td);
    }

}

function aggiungi()
{
    window.location.href = "aggiungi.html";
}

function leggiRecord()
{
    let div = document.getElementById("contenuto");
    div.innerHTML = "";
    //let book = jsonDoc[pos]; --> book[key]
    for(let key in jsonDoc[pos])
    {
        div.innerHTML += key + " : " +  jsonDoc[pos][key] + "<br>";
    }
}

function primo()
{
    pos = 0;
    leggiRecord();
}

function ultimo()
{
    pos = jsonDoc.length - 1;
    leggiRecord();
}

function avanti()
{
    if(pos < (jsonDoc.length - 1))
    {
        pos ++;
        leggiRecord();
    }
    else
        alert("Sei gia all'ultimo libro!");
}

function indietro()
{
    if(pos > 0)
    {
        pos --;
        leggiRecord();
    }
    else
        alert("Sei gia al primo libro!");
}

function elimina(id)
{
    jsonDoc.splice(id, 1);
    let jsonStr = JSON.stringify(jsonDoc);//aggiorno il local sotrage
    localStorage.setItem("jsonBookStore", jsonStr);
    visualizza();
}