let arrRespostes = [], arrRespostesCorrectes = [];
arrRespostesCorrectes=["TerceraOpcio","Un gos",3,2];

function pregunta2(objecte){
  
  let numPregunta;  
  let objecteID = objecte.parentElement.children[0].id;
  let numResposta;
  let objecteValor;
  
  numPregunta = parseInt(objecteID.charAt(5)-1);
  numResposta = parseInt(objecteID.charAt(7)-1);

  objecteValor = objecte.parentElement.children[0].value;
  objecte.parentElement.children[0].form[numResposta].checked = true;
  
  arrRespostes[numPregunta] = objecteValor;
  
    console.log("arrRespostes[" + numPregunta + "] = " + arrRespostes[numPregunta]);
    alert(" has escollit la resposta " + arrRespostes[numPregunta]);
  }

function passaSeguent(objecte){
  let numPregunta, numPreguntaSeguent;  
  
  let objecteID = objecte.parentElement.children[3].id;
  numPregunta = parseInt(objecteID.charAt(5));
  numPreguntaSeguent = numPregunta + 1;

        pregunta = document.getElementById("pregunta-" + numPregunta);
        pregunta.classList.remove("elementVisible");
        pregunta.classList.add("elementOcult");
        pregunta = document.getElementById("pregunta-" + numPreguntaSeguent);
        pregunta.classList.remove("elementOcult");
        pregunta.classList.add("elementVisible");
}

