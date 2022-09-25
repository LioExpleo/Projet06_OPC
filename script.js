let run_cycle = 0;


// url qui seront à utiliser en paramètre 
const url0 = "http://localhost:8000/api/v1/titles/?genre_contains=&sort_by=-imdb_score";
const url1 = "http://localhost:8000/api/v1/titles/?genre_contains=&sort_by=-imdb_score";
const url2 = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score";
const url3 = "http://localhost:8000/api/v1/titles/?genre=History&sort_by=-imdb_score";
const url4 = "http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score";

const url_p2 = "http://localhost:8000/api/v1/titles/?genre=Animation&page=2&sort_by=-imdb_score"
const url_p3 = "http://localhost:8000/api/v1/titles/?genre=Animation&page=3&sort_by=-imdb_score"
var imdb_url_play = ""

liste_count = [[],[],[],[],[],[],[]];
liste_page_next = [[],[],[],[],[],[],[]];
liste_page_previous = [[],[],[],[],[],[],[]];
global_class_meilleur_film = "";
global_class_meilleur_film_p1 = "";
global_class_meilleur_film_p2 = "";
var class_film = new ClassFilm;
//var liste_film= [[class_film],[class_film],[class_film],[class_film],[class_film]];
//var liste_films = [liste_film, liste_film,liste_film,liste_film,liste_film]

//Fetch de toutes les catégories au raffraichissement HTML
function fct_fetch_onload(){
  fct_tour1_prog_en_cours();
  setTimeout(fonction_fetch_1,10,"http://localhost:8000/api/v1/titles/?genre_contains=&sort_by=-imdb_score",0, 8);
  setTimeout(fonction_fetch_2,400,"http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score",1, 7);
  setTimeout(fonction_fetch_2,700,"http://localhost:8000/api/v1/titles/?genre=History&sort_by=-imdb_score",2, 7);
  setTimeout(fonction_fetch_2,1000,"http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score",3, 7);
  setTimeout(fct_tour1_prog_en_cours,0);
}
//Fonction qui met run-cycle à 1. run-cycle n'est à 1 qu'au 1er tour de cycle 
function fct_tour1_prog_en_cours(){
  run_cycle = 1;
}

document
    .getElementById("id_test_img3")
    .addEventListener("click", fct_script2);
run_cycle = run_cycle + 1;

/*_______________________________________________________________________*/
/* Fetch fenetre modale, index_cat = 0 pour la catégorie 1, num_index_img = 0 pour l'image 1 */
/* L'adresse url du fetch a été mémorisée avec les fetchs précédents en liste_films[index_cat][index]["url_film"] */
/* On la reconstruit en fonction de l'index catégorie qui est le même que lors de la sauvegarde dans array, 
et en fonction du numero_index_img qui correspond à index lors de la sauvegarde */
/***************************************************** */
function fonction_fetch_modale(index_cat,num_index_img) {
  //document.getElementById("m_title").innerText = ("*");
  //document.getElementById("m_img_url").innerText = (global_class_meilleur_film["url_film"]);
  //document.getElementById("m_genres").innerText = ("*");
  url = (global_class_meilleur_film["url_film"]);
  var class_film_modal = new ClassFilmModale;

  document.getElementById("m_title").innerText = (url);

  fetch(url)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }     
  })
  .then(function(value) {
    //class_film_modal["title"] = document.getElementById("m_title").innerText = (value.title);
    class_film_modal["image_url"] = document.getElementById("m_img_url").innerText = (value.image_url);
    class_film_modal["genres"] = document.getElementById("m_genres").innerText = (value.genres);
    class_film_modal["date_published"] = document.getElementById("m_date_published").innerText = (value.date_published);
    class_film_modal["avg_vote"] = document.getElementById("m_avg_vote").innerText = (value.avg_vote);

    class_film_modal["imbd_score"] = document.getElementById("m_imbd_score").innerText = (value.imdb_score);

    class_film_modal["directors"] = document.getElementById("m_directors").innerText = (value.directors);
    class_film_modal["actors"] = document.getElementById("m_actors").innerText = (value.actors);
    class_film_modal["duration"] = document.getElementById("m_duration").innerText = (value.duration);
    class_film_modal["countries"] = document.getElementById("m_countries").innerText = (value.countries);
    class_film_modal["worldwide_gross_income"] = document.getElementById("worldwide_gross_income").innerText = (value.budget_currency);

    class_film_modal["description"] = document.getElementById("m_description").innerText = (value.description);
    class_film_modal["imbd_url"] = document.getElementById("m_imbd_url").innerText = (value.imbd_url);
    
    //class_film_modal["description"] = document.getElementById("m_description").innerText = (value.results[index]["description"]);
  
    /*
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
      run_cycle = 0;
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
    */
  })
  .catch(function(err) {
    console.log(err);
    // Une erreur est survenue
  });
}

function fonction_ouvert_page_html(){
  //adresse = "https://www.imdb.com/title/tt1508669/";
  adresse =  imdb_url_play;
  window.open(adresse,"fenetre play","menubar=no, status=no, width=100px");
  //window.location.href=adresse;
  window.location.href=class_film_modal["imbd_url"]
}

function nb_page(){
  let nb
  url_pag = "http://localhost:8000/api/v1/titles/?genre_contains=&page=23&page_size=8&page_size=7&page_size=7&sort_by=-imdb_score"
  nb = fonction_nbr_page(url_pag);
  
  //document.getElementById("nbre_page").innerText = fonction_nbr_page("http://localhost:8000/api/v1/titles/?genre_contains=&page=4&page_size=8&page_size=7&page_size=7&sort_by=-imdb_score");
  document.getElementById("nbre_page").innerText = (nb);
}





