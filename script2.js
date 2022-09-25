//let run_cycle = 0;

//var file_txt_js = new FileReader('file.txt');
//file_txt_js.readAsText();

//myval= ("Valeur par défaut__________________________x");
//document.getElementById("id_titre_cat1").innerText = (myval);

//setInterval("fonction_fetch(url1)", 3000);
/*const url0 = "http://localhost:8000/api/v1/titles/?genre_contains=&sort_by=-imdb_score";
const url1 = "http://localhost:8000/api/v1/titles/?genre_contains=&sort_by=-imdb_score";
const url2 = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score";
const url3 = "http://localhost:8000/api/v1/titles/?genre=History&sort_by=-imdb_score";
const url4 = "http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score";


*/
//let page_next =""
//let page_previous =""
/*let liste_count = [[],[],[],[],[]];
let liste_page_next = [[],[],[],[],[]];
let liste_page_previous= [[],[],[],[],[]];
*/


document
  .getElementById("id_test_img3")
  .addEventListener("click", fonction_fetch_url3());

document
  .getElementById("id_test_img4")
  .addEventListener("click", fonction_fetch_url4());

function fonction_fetch_url1(){
  fonction_fetch(url1,0);
}
//fonction_fetch_url1();


function fonction_fetch_url2(){
    fonction_fetch(url2,1);
}
//fonction_fetch_url2();

function fonction_fetch_url3(){
  fonction_fetch(url3,2);
}
//fonction_fetch_url3();

function fonction_fetch_url4(){
  fonction_fetch(url4,3);
}
//fonction_fetch_url4();

function fct_fetch_onload(){
  fct_tour1_prog_en_cours();
  setTimeout(fonction_fetch,10,"http://localhost:8000/api/v1/titles/?genre_contains=&sort_by=-imdb_score",0);
  setTimeout(fonction_fetch,300,"http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score",1);
  setTimeout(fonction_fetch,600,"http://localhost:8000/api/v1/titles/?genre=History&sort_by=-imdb_score",2);
  setTimeout(fonction_fetch,900,"http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score",3);
  setTimeout(fct_tour1_prog_en_cours,0);
}
//function fct_tour1_prog_en_cours(){
  //run_cycle = 1;
//}


function fonction_fetch(url, index_cat) {
  fetch(url)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }     
  })
  .then(function(value) {

    var class_page_cat0 = new ClassPage;
    
    //Récupérer tous les éléments de la page
    class_page_cat0.count = document.getElementById("id_count").innerText=(value.count)
    liste_count[index_cat] = document.getElementById("id_count").innerText=(value.count)

    class_page_cat0.url_next = document.getElementById("id_next").innerText = (value.next);
    class_page_cat0.url_previous = document.getElementById("id_previous").innerText = (value.previous);

    liste_page_next[index_cat] = document.getElementById("id_next").innerText = (value.next);
    liste_page_previous[index_cat] = document.getElementById("id_previous").innerText = (value.previous);

    
    page_next = class_page_cat0.url_next;
    page_previous = class_page_cat0.url_previous;

    var class_meilleur_film = new ClassFilm;
    var class_film = new ClassFilm;
    //creer une liste des 5 films par page avec les 3 premiers éléments de la page, et tous les élements des 5 films.
    categorie = [];
    let liste_film= [[class_film],[class_film],[class_film],[class_film],[class_film]];
    let liste_films = [liste_film, liste_film,liste_film,liste_film,liste_film]
    //Boucle pour récupérer tous les éléments de 5 films
    var index = 0;
    while (index < 5){
    liste_films[index_cat][index]["id_film"] = document.getElementById("id_results_id").innerText = (value.results[index]["id"]);
    liste_films[index_cat][index]["url_film"] = document.getElementById("id_id_url").innerText = (value.results[index]["url"]);
    liste_films[index_cat][index]["imbd_url"] = document.getElementById("id_imdb_url").innerText = (value.results[index]["imdb_url"]);
    liste_films[index_cat][index]["title"] = document.getElementById("id_title").innerText = (value.results[index]["title"]);
    liste_films[index_cat][index]["year"] = document.getElementById("id_year").innerText = (value.results[index]["year"]);
    liste_films[index_cat][index]["imbd_score"] = document.getElementById("id_imdb_score").innerText = (value.results[index]["imdb_score"]);
    liste_films[index_cat][index]["vote"] = document.getElementById("id_votes").innerText = (value.results[index]["votes"]);
    liste_films[index_cat][index]["image_url"] = document.getElementById("id_image_url").innerText = (value.results[index]["image_url"]);
    
    //Construction de la balise de destination
    balise_dest = "img" + (index + 1) +"_cat" + (index_cat+2)
    fonction_inser_img(balise_dest, liste_films[index_cat][index]["image_url"]);
    
    //traitement du meilleur film, mémmoriser toutes les données dans un fichier à part pour les ressortir même en cas de changement de page
    if (index_cat == 0 && index == 0 && run_cycle == 1){
      balise_dest_meilleur_film = "id_photo_Cat1"
      fonction_inser_img(balise_dest_meilleur_film, document.getElementById("id_image_url").innerText = (liste_films[0][0]["image_url"]));
      class_meilleur_film["id_film"] = liste_films[index_cat][index]["id_film"] ;
      class_meilleur_film["url_film"] = liste_films[index_cat][index]["url_film"]
      class_meilleur_film["imbd_url"] = liste_films[index_cat][index]["imbd_url"]
      class_meilleur_film["title"] = liste_films[index_cat][index]["title"]
      class_meilleur_film["year"] = liste_films[index_cat][index]["year"]
      class_meilleur_film["imbd_score"] = liste_films[index_cat][index]["imbd_score"]
      class_meilleur_film["vote"] = liste_films[index_cat][index]["vote"]
      class_meilleur_film["image_url"] = liste_films[index_cat][index]["image_url"]
      document.getElementById("id_titre_cat1").innerText = (class_meilleur_film["title"]);
      //run_cycle = 0;
    }
        
    liste_films[index_cat][index]["directors"] = document.getElementById("id_directors").innerText = (value.results[index]["directors"]);
    liste_films[index_cat][index]["actors"] = document.getElementById("id_actors").innerText = (value.results[index]["actors"]);
    liste_films[index_cat][index]["writers"] = document.getElementById("id_writers").innerText = (value.results[index]["writers"]);
    liste_films[index_cat][index]["genres"] = document.getElementById("id_genres").innerText = (value.results[index]["genres"]);
    index = index + 1;
  }
    //ecrire une fonction pour extraire le numero de page et le mettre dans le titre, si plus de prochaine page, griser le bouton next, idem pour récédent
    document.getElementById("titre_cat2").innerText = ( "TOUTES CATEGORIE MEILLEURS SCORES PAGE " + (liste_page_next[0]));
    document.getElementById("titre_cat3").innerText = ( "CATEGORIE AVENTURES MEILLEURS SCORES PAGE " + (liste_page_next[1]));
    document.getElementById("titre_cat4").innerText = ( "CATEGORIE HISTOIRE MEILLEURS SCORES PAGE " + (liste_page_next[2]));
    document.getElementById("titre_cat5").innerText = ( "CATEGORIE ANIMATION MEILLEURS SCORES PAGE " + (liste_page_next[3]));

    document.getElementById("id2_title").innerText = (liste_films[index_cat][1]["title"]);
    document.getElementById("id3_title").innerText = (liste_films[index_cat][2]["title"]);
    document.getElementById("id4_title").innerText = (liste_films[index_cat][3]["title"]);
    document.getElementById("id5_title").innerText = (liste_films[index_cat][4]["title"]);
    document.getElementById("next_page").innerText = class_page_cat0.url_next;
    document.getElementById("previous_page").innerText = class_page_cat0.url_previous;
  })
  .catch(function(err) {
    console.log(err);
    // Une erreur est survenue
  });
  
  return(class_page_cat0.url_next, class_page_cat0.url_previous)
}

function fonction_next_page(cat){
  page_next = (liste_page_next[cat]);
  fonction_fetch(page_next, cat);
}

function fonction_previous_page(cat){
  page_previous = liste_page_previous[cat]
  fonction_fetch(page_previous,cat);
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
  
function fonction_inser_img(balise_image_destination, origine_image) {
  //balise_image_destination = "id_img_test2"
  //origine_image = "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg"
  //créer une image
  monImage = document.createElement('img');
  //afficher la source
  monImage.src = origine_image;
  //afficher l'image dans la page html
  var div_id = document.getElementById(balise_image_destination);
  div_id.innerHTML='';
  div_id.appendChild(monImage);
  }  

  document
    .getElementById("id_test_img1")
    .addEventListener("click", fonction_inser_img);
   
//document
//  .getElementById("id_test_img1")
//  .addEventListener("click", fonction_fetch(url4));


//document
//  .getElementById("id_img_click_1")
//  .addEventListener("click", fonction_fetch(url1));

//document
//  .getElementById("id_img_click_2")
//  .addEventListener("click", fonction_fetch(url2));

//document
//  .getElementById("id_img_click_3")
//  .addEventListener("click", fonction_fetch(url3));

//document
//  .getElementById("id_img_click_4")
//  .addEventListener("click", fonction_fetch(url4));

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
//*************
setInterval("fonction_creat_img2()", 5000);

document
    .getElementById("id_test_img3")
    .addEventListener("click", fct_script2);

//run_cycle = run_cycle + 1;
