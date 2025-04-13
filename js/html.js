import { personas, entidades, productos } from '/js/data.js';

const types = {"product" : productos, "person" : personas, "entity" : entidades}

window.addEventListener('load',() => {injectContent()})


//Sets the iframe href to the wiki in the db (data.js)
function setWiki(wiki){
    const frame = document.getElementById("iframe-wiki");
    frame.setAttribute("src", wiki);
}

//Injects the content of the page based on the data.js database
function injectContent(){
    //Get URL params
    var url = new URL(window.location.href);
    let type;
    let id;
    //Set the last param (it will only contain 1, but it is written like this so we can add more params in the future)
    for (const [key, value] of url.searchParams.entries()) {
        type = `${key}`;
        id = String(Number(`${value}`)-1);
    }
    //Add content from db
    let node = types[type][id];
    const content = document.getElementById('element-content');
    //Iterate dictionary of db in order to add them
    for (const [key, value] of Object.entries(node)) {
        let ikey = `${key}`;
        let ivalue = value;
        /*Check if it is not image or id, if it has a value defined (fechas get to be displayed withput the need of any value)
        and check if it is a string, then create paragraphs and inject them*/
        if ((ikey !== 'imagen' && ikey !== 'id') && (ivalue !== "" || (ivalue === "" && ikey.includes('fecha'))) && typeof value === 'string') {
            let paragraph = document.createElement('p');
            ikey = ikey.charAt(0).toUpperCase()+ikey.substring(1);
            paragraph.textContent = ikey +' : '+ ivalue;
            content.appendChild(paragraph);
        }
        //Check if it is a list (for relations) and display them
        if (typeof value === 'object' && ivalue != '') {
            let paragraph = document.createElement('p');
            let str = ikey.charAt(0).toUpperCase()+ikey.substring(1) + ' :';
            ikey = (ikey === 'personas' ? 'person' : 'entity');
            const ntype= types[ikey];
            console.log(ntype);
            //Iterate dictionary of dictionary in value in order to display them
            for (const [nkey,nvalue] of Object.entries(value)) {
                str += ' '+ntype[nvalue['id']-1].nombre + ',';
            }
            str = str.substring(0,str.length-1);
            paragraph.textContent = str;
            content.appendChild(paragraph);
        }
    }
    let imagen = document.createElement('div');
    imagen.innerHTML = '<img src="'+types[type][id].imagen+'" width="25%" height="auto" alt="img">'
    content.appendChild(imagen);
    setWiki(types[type][id].wiki);
}