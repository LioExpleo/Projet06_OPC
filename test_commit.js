/*  
function fonction_creat_img2() {
  //créer une image
  monImage = document.createElement('img');
  //afficher la source
  monImage.src = "fleche_droite.png";
  //afficher l'image dans la page html
  var div_id = document.getElementById("id_img_test2");
  div_id.innerHTML='';
  div_id.appendChild(monImage);
  }
document
  .getElementById("id_test_img2")
  .addEventListener("click", fonction_creat_img2);
 
function fonction_creat_img3() {
    //créer une image
    monImage = document.createElement('img');
    //afficher la source
    monImage.src = "fleche_droite.png";
    //afficher l'image dans la page html
    var div_id = document.getElementById("id_img_test3");
    div_id.innerHTML='';
    div_id.appendChild(monImage);
    }
*/
function fonction_creat_img5() {
      //créer une image
      monImage = document.createElement('img');
      //afficher la source
      monImage.src = "img10.jpg";
      //afficher l'image dans la page html
      var div_id = document.getElementById("id_img_10");
      div_id.innerHTML='';
      div_id.appendChild(monImage);
      }
  //document
  //  .getElementById("id_test_img3")
  //  .addEventListener("click", fonction_creat_img3);
/*
function fonction_parse_json() {
  const json = '{"json1":"contenu json1", "json2":666}';
  console.log ("rrr");
  const obj_json = JSON.parse(json);
  console.log(obj_json.json1);
  console.log(obj_json.json2);
  const obj_jsonx = '{"json1":"json pour test", "json2":777}';
  const const_obj_json2 = JSON.parse(obj_jsonx);
  console.log(const_obj_json2.json1);
  console.log(const_obj_json2.json2);
}

document
  .getElementById("id_btn_parse")
  .addEventListener("click", fonction_parse_json);
*/
function fonction_inser_img(balise_image_destination, origine_image) {
  //balise_image_destination = "id_img_test2"
  //origine_image = "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg"
  //créer une image
  let monImage = document.createElement('img');
  //afficher la source
  monImage.src = origine_image;
  //afficher l'image dans la page html
  var div_id = document.getElementById(balise_image_destination);
  div_id.innerHTML='';

  div_id.append(monImage);
  div_id.appendChild(monImage);
  }  

  function fonction_inser_img2(balise_image_destination, origine_image) {
    //balise_image_destination = "id_img_test2"
    //origine_image = "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg"
    //créer une image
    let monImage = document.createElement('img');
    //afficher la source
    monImage.src = origine_image;


    //afficher l'image dans la page html
    var div_id = document.getElementById(balise_image_destination);
    //div_id.innerHTML='';
  
    //div_id.append(monImage);
    div_id.appendChild(monImage);
    }  
  
//const var_next_page = document.getElementById("id_result_next").innerText = (value.next);  
function fonction_test2(){
  document
  .getElementById("id_result_test")
  .innerText = ("var_next_page");
}
  
document
  .getElementById("id_btn_fetch")
  .addEventListener("click", fonction_test);

  document
    .getElementById("id_test_img1")
    .addEventListener("click", fonction_inser_img);

function fct_script2(){
  fonction_creat_img3();
}

//**************************************************
function fct_script4(){
  fonction_creat_img4();
}


//C'est le onclick dans index.html qui lance la fonction
// <img  id ="image"  src="images/logo_justStreamIt.png" onclick="fct_script4()">Click pour lancer une fonction qui affiche img13</button>
function fonction_creat_img4() {
  //créer une image
  monImage = document.createElement('img');
  //afficher la source
  monImage.src = "img13.jpg";
  //afficher l'image dans la page html
  //var div_id = document.getElementById("id_img_test1");
  var div_id = document.getElementById("id_img_9");
  div_id.innerHTML='';
  div_id.appendChild(monImage);
  }  

//Test fonction insertion img4 insère l'image en position 4
function fonction_creat_img6() {
  //créer une image
  monImage = document.createElement('img');
  //afficher la source
  monImage.src = "img13.jpg";
  var div_id = document.getElementById("id_img_test4");
  div_id.innerHTML='';
  div_id.appendChild(monImage);
  }  


function changeStyle(cat, opacity){
  if (cat == 0){
    var element = document.getElementById("fg_cat2");
    element.style.opacity = 0.1;
  }
  if (cat == 1){
    var element = document.getElementById("fg_cat3");
  element.style.opacity = 0.3;
  }
  if (cat == 2){
    var element = document.getElementById("fg_cat4");
  element.style.opacity = 0.5;
  }
  if (cat == 3){
    var element = document.getElementById("fg_cat5");
  element.style.opacity = 0.8;
  }
  //element.style.display = "none";
}

/*
function fct_grisage_flech(){
  //grisage des flèches
  index_cat = 0;
  while (index_cat < 4){
  page_previous = liste_page_previous[index_cat];
  
  if (page_previous == 0){
    changeStyle(index_cat, "0.1");
  }
  else{
    changeStyle(index_cat, "0.2");
  }
  index_cat = index_cat + 1;
  }
}

function repeatingFunc() {
  fct_grisage_flech();
  setTimeout(repeatingFunc, 1000);
}
//setTimeout(repeatingFunc, 1000);
*/