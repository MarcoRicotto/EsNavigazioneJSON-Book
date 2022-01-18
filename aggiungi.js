"use strict"

let jsonDoc;

window.onload = function()
{//prendo di volta in volta quello che c'è nel local storage
    let json = localStorage.getItem("jsonBookStore");
    if(json != null)//controllo che il json non sarà null perchè non vado a leggere un json vuoto perchè da errore
        jsonDoc = JSON.parse(json);//converto la stringa in oggetto
    else //se è null creo il vettore
        jsonDoc = [];
}

function salva()
{
    let libro = {};//creo il vettore che conterrà i libri
    //creo i vari campi del libro tipo una struct in c#
    libro.title = document.getElementById("txtTitolo").value;
    libro.author = document.getElementById("txtAutore").value;
    libro.category = document.getElementById("txtCategoria").value;
    libro.lang = document.getElementById("txtLingua").value;
    libro.year = document.getElementById("txtAnno").value;
    libro.price = document.getElementById("txtPrezzo").value;
    //carico gli elementi
    jsonDoc[jsonDoc.length] = libro;//metto il libro all'interno del vettore jsonDoc
    let jsonStr = JSON.stringify(jsonDoc);
    localStorage.setItem("jsonBookStore", jsonStr);//vado a inserere il json in local storage
    ritorna();
}

function ritorna()
{
    window.location.href = "index.html";//reindirizza alla pagina indicata
}