liste_count = [[],[],[],[],[],[],[]];
liste_page_next = [[],[],[],[],[],[],[]];
liste_page_previous = [[],[],[],[],[],[],[]];
url_ok = "";


//fonction fetch pour récupération des films par catégorie
function fonction_fetch_1(url, index_cat, nombre_films) {
    url_new = "";
    url_new = url + "&page_size=" + nombre_films; 
  
    fetch(url_new)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }     
    })
    .then(function(value) {
      //var class_page_cat0 = new ClassPage;
      //Récupérer tous les éléments de la page
      liste_count[index_cat] = document.getElementById("id_count").innerText=(value.count)
      liste_page_next[index_cat] = document.getElementById("id_next").innerText = (value.next);
      liste_page_previous[index_cat] = document.getElementById("id_previous").innerText = (value.previous);
      
      //var class_film = new ClassFilm;
      //creer une liste des 5 films par page avec les 3 premiers éléments de la page, et tous les élements des 5 films.
      //categorie = [];
      liste_film= [[class_film],[class_film],[class_film],[class_film],[class_film],[class_film],[class_film],[class_film]];
      liste_films = [liste_film, liste_film,liste_film,liste_film,liste_film,liste_film,liste_film,liste_film]
  
      //Boucle pour récupérer tous les éléments des films selon la valeur de l'attribut nombre de films.
      var index = 0;

      while (index < nombre_films){
      liste_films[index_cat][index]["id_film"] = document.innerText = (value.results[index]["id"]);
      liste_films[index_cat][index]["url_film"] = document.innerText = (value.results[index]["url"]);
      liste_films[index_cat][index]["imbd_url"] = document.innerText = (value.results[index]["imdb_url"]);
      liste_films[index_cat][index]["title"] = document.innerText = (value.results[index]["title"]);
      liste_films[index_cat][index]["year"] = document.innerText = (value.results[index]["year"]);
      liste_films[index_cat][index]["imbd_score"] = document.innerText = (value.results[index]["imdb_score"]);
      liste_films[index_cat][index]["vote"] = document.innerText = (value.results[index]["votes"]);
      liste_films[index_cat][index]["image_url"] = document.innerText = (value.results[index]["image_url"]);
      
      //Constructon de la balise texte pour affichage url en bas de page.
      //balise = "id_image_url_" + index
      //document.getElementById(balise).innerText = liste_films[index_cat][index]["image_url"]
      



      document.getElementById("id_results_id").innerText = liste_films[index_cat][index]["id_film"];
      document.getElementById("id_id_url").innerText = liste_films[index_cat][index]["url_film"];
      document.getElementById("id_imdb_url").innerText = liste_films[index_cat][index]["imbd_url"];
      document.getElementById("id_title").innerText = liste_films[index_cat][index]["title"];
      document.getElementById("id_year").innerText = liste_films[index_cat][index]["year"] ;
      document.getElementById("id_imdb_score").innerText = liste_films[index_cat][index]["imbd_score"];
      document.getElementById("id_votes").innerText = liste_films[index_cat][index]["vote"];
      //try {
        //liste_films[index_cat][index]["image_url"] = document.innerText = (value.results[index]["image_url"]);
        //document.getElementById("id_image_url").innerText = (liste_films[index_cat][index]["image_url"]);
      //} catch (error) {
        //document.getElementById("id_image_url").innerText = (img1.png)
        //console.log("er")
      //}
      //document.getElementById("id_image_url").innerText = (liste_films[index_cat][index]["image_url"])
      
      /*    */
      

      //Construction de la balise de destination de l'image et affichage de l'image
      if (index > 0){
        balise_dest = "img" + (index) +"_cat" + (index_cat+2)
        //fonction_inser_img(balise_dest, "img1.jpg");
        //setTimeout(fonction_inser_img,100, img13.jpg);
        //setTimeout(fonction_inser_img,10,balise_dest,liste_films[index_cat][index]["image_url"]);
        fonction_inser_img(balise_dest, liste_films[index_cat][index]["image_url"]); 
        //fonction_inser_img2(balise_dest, liste_films[index_cat][index]["image_url"]);         
      }  
  
      class_meilleur_film = new ClassFilm;
      
      //traitement du meilleur film, mémmoriser toutes les données dans un fichier à part pour les ressortir même en cas de changement de page
      if (index_cat == 0 && index == 0 && run_cycle == 1){
        balise_dest_meilleur_film = "id_photo_Cat1"
        class_meilleur_film["id_film"] = liste_films[index_cat][index]["id_film"] ;
        class_meilleur_film["url_film"] = liste_films[index_cat][index]["url_film"]
        class_meilleur_film["imbd_url"] = liste_films[index_cat][index]["imbd_url"]
        class_meilleur_film["title"] = liste_films[index_cat][index]["title"]
        class_meilleur_film["year"] = liste_films[index_cat][index]["year"]
        class_meilleur_film["imbd_score"] = liste_films[index_cat][index]["imbd_score"]
        class_meilleur_film["vote"] = liste_films[index_cat][index]["vote"]
        class_meilleur_film["image_url"] = liste_films[index_cat][index]["image_url"]
        imdb_url_play = class_meilleur_film["imbd_url"]
  
        fonction_inser_img(balise_dest_meilleur_film, document.getElementById("id_image_url").innerText = (liste_films[0][0]["image_url"]));
        document.getElementById("id_titre_cat1").innerText = (class_meilleur_film["title"]);
        global_class_meilleur_film = class_meilleur_film;
        run_cycle = 0;
  
      }
      liste_films[index_cat][index]["directors"] = document.getElementById("id_directors").innerText = (value.results[index]["directors"]);
      liste_films[index_cat][index]["actors"] = document.getElementById("id_actors").innerText = (value.results[index]["actors"]);
      liste_films[index_cat][index]["writers"] = document.getElementById("id_writers").innerText = (value.results[index]["writers"]);
      liste_films[index_cat][index]["genres"] = document.getElementById("id_genres").innerText = (value.results[index]["genres"]);
      index = index + 1;
    }

      //ecrire une fonction pour extraire le numero de page et le mettre dans le titre, si plus de prochaine page, griser le bouton next, idem pour récédent
      page_suiv = fonction_nbr_page(liste_page_next[0]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat2").innerText = ("<< Page précédente " + (page_prec) + "_______________TOUTES CATEGORIE_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat2");

      page_suiv = fonction_nbr_page(liste_page_next[1]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat3").innerText = ("<< Page précédente " + (page_prec) + "_______________CATEGORIE AVENTURES_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat3");

      page_suiv = fonction_nbr_page(liste_page_next[2]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat4").innerText = ("<< Page précédente " + (page_prec) + "_______________CATEGORIE HISTOIRE_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat4");

      page_suiv = fonction_nbr_page(liste_page_next[3]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat5").innerText = ("<< Page précédente " + (page_prec) + "_______________CATEGORIE ANIMATION_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat5");
  
      document.getElementById("m_title").innerText = (liste_films[0][0]["titre"] );
      document.getElementById("id2_title").innerText = (liste_films[index_cat][1]["title"]);
      //document.getElementById("previous_page").innerText = class_page_cat0.url_previous;
    })
    .catch(function(err) {
      console.log(err);
      // Une erreur est survenue
    });
  }
  
  function fonction_fetch_2(url, index_cat, nombre_films) {
    url_new = "";
    url_new = url + "&page_size=" + nombre_films; 
    fetch(url_new)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }     
    })
    .then(function(value) {
      //var class_page_cat0 = new ClassPage;
      //Récupérer tous les éléments de la page
      liste_count[index_cat] = document.getElementById("id_count").innerText=(value.count)
      liste_page_next[index_cat] = document.getElementById("id_next").innerText = (value.next);
      liste_page_previous[index_cat] = document.getElementById("id_previous").innerText = (value.previous);

      liste_film= [[class_film],[class_film],[class_film],[class_film],[class_film],[class_film],[class_film],[class_film]];
      liste_films = [liste_film, liste_film,liste_film,liste_film,liste_film,liste_film,liste_film,liste_film]
  
      //Boucle pour récupérer tous les éléments des films selon la valeur de l'attribut nombre de films.
      var index = 0;
      while (index < nombre_films){
      liste_films[index_cat][index]["id_film"] = document.getElementById("id_results_id").innerText = (value.results[index]["id"]);
      liste_films[index_cat][index]["url_film"] = document.getElementById("id_id_url").innerText = (value.results[index]["url"]);
      liste_films[index_cat][index]["imbd_url"] = document.getElementById("id_imdb_url").innerText = (value.results[index]["imdb_url"]);
      liste_films[index_cat][index]["title"] = document.getElementById("id_title").innerText = (value.results[index]["title"]);
      liste_films[index_cat][index]["year"] = document.getElementById("id_year").innerText = (value.results[index]["year"]);
      liste_films[index_cat][index]["imbd_score"] = document.getElementById("id_imdb_score").innerText = (value.results[index]["imdb_score"]);
      liste_films[index_cat][index]["vote"] = document.getElementById("id_votes").innerText = (value.results[index]["votes"]);
      //liste_films[index_cat][index]["image_url"] = document.getElementById("id_image_url").innerText = (value.results[index]["image_url"]);
      

      liste_films[index_cat][index]["image_url"] = document.innerText = (value.results[index]["image_url"]);    
      string_url = liste_films[index_cat][index]["image_url"]
      
      //Affichage adresse url pour test
      balise_dest = "id_image_url_" + index      
      document.getElementById(balise_dest).innerText = string_url 
      
      //Construction de la balise de destination et affichage de l'image
      balise_dest = "img" + (index + 1) +"_cat" + (index_cat+2)
      
      url_ok = fonction_verif_url_exist(string_url)
      img_chrgt = ("img1.jpg")
      fonction_inser_img(balise_dest, img_chrgt);

      if (url_ok == 1) {
        img_chrgt = liste_films[index_cat][index]["image_url"]
        fonction_inser_img(balise_dest, img_chrgt);
      }
      

      //err_url_img = fonction_verif_url(string_url);
      
      //if (err_url_img == 0) {
        //img_chrgt = liste_films[index_cat][index]["image_url"]
      //}
      
      //if (err_url_img == 1) {
        //img_chrgt = ("img1.jpg")
      //}


      //img_chrgt = liste_films[index_cat][index]["image_url"]
           //document.getElementById(balise).innerText = liste_films[index_cat][index]["image_url"]
      //document.getElementById(balise).innerText = img_chrgt
      //liste_films[index_cat][index]["image_url"] = document.innerText = (value.results[index]["image_url"]);
      //document.getElementById("id_image_url").innerText = (liste_films[index_cat][index]["image_url"])
      //fonction_inser_img(balise_dest, liste_films[index_cat][index]["image_url"]);
      //fonction_inser_img(balise_dest, img_chrgt);
      
      class_meilleur_film = new ClassFilm;
      index = index + 1;
    }
      //ecrire une fonction pour extraire le numero de page et le mettre dans le titre, si plus de prochaine page, griser le bouton next, idem pour récédent
      page_suiv = fonction_nbr_page(liste_page_next[0]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat2").innerText = ("<< Page précédente " + (page_prec) + "_______________TOUTES CATEGORIE_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat2");

      page_suiv = fonction_nbr_page(liste_page_next[1]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat3").innerText = ("<< Page précédente " + (page_prec) + "_______________CATEGORIE AVENTURES_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat3");
      
      page_suiv = fonction_nbr_page(liste_page_next[2]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat4").innerText = ("<< Page précédente " + (page_prec) + "_______________CATEGORIE HISTOIRE_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat4");

      page_suiv = fonction_nbr_page(liste_page_next[3]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat5").innerText = ("<< Page précédente " + (page_prec) + "_______________CATEGORIE ANIMATION_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat5");

      document.getElementById("m_title").innerText = (liste_films[0][0]["titre"] );
      //Affichage du titre du meilleur film
      document.getElementById("id2_title").innerText = (liste_films[index_cat][1]["title"]);
    })
    .catch(function(err) {
      console.log(err);
      // Une erreur est survenue
    });
  }

  //fonction pour charger la page suivante avec l'index de la catégorie pour aller chercher l'url de la page suivante dans la liste sauvegardée 
  function fonction_next_page_1(cat){
    page_next = "";
    page_next = (liste_page_next[cat]);
    fonction_fetch_1(page_next, cat,7);
  }
  
  function fonction_page_previous_cat0(cat){
    // si la page précédente est 1, il faut faire un fetch initial pour la catégorie 0
    page_previous = liste_page_previous[cat];
    num_page_prec_cat0 = fonction_nbr_page(page_previous)
    if (num_page_prec_cat0 = 1){
        fonction_fetch_1(page_previous,cat,8);
      }
    else{
        fonction_fetch_2(page_previous,cat,7);
    }
  }

  function fonction_previous_page_1(cat){
    page_previous = liste_page_previous[cat]
    //faire une fonction qui met 8 dans fetch si cat = 0, et numero de page = 1
    //il faut donc faire une fonction qui extrait le numero de page de l'url. 
    fonction_fetch_1(page_previous,cat,7);
  }

    //fonction pour charger la page suivante avec l'index de la catégorie pour aller chercher l'url de la page suivante dans la liste sauvegardée 
  function fonction_next_page_2(cat){
    page_next = "";
    page_next = (liste_page_next[cat]);
    fonction_fetch_2(page_next, cat,7);
    page_suiv = fonction_nbr_page(page_next);
    noirc_flech(cat);
  }
  
  function fonction_previous_page_2(cat){
    page_previous = liste_page_previous[cat]
    fonction_fetch_2(page_previous,cat,7);
    page_pre = fonction_nbr_page(page_previous);
  }

  function fonction_nbr_page(url){
    let page = "";
    const pos_x = url.indexOf('page=');
    const pos_y = url.indexOf('&page_size');
    debut_num_page = pos_x + 5;
    fin_num_page = pos_y;
    index_pos = debut_num_page;
    while (index_pos < fin_num_page){
        const chars = url.split('');
        page = page + chars[index_pos];
        index_pos = index_pos + 1;
    }
  return(page);
  }

  function grisag_flech(page_suiv,id_flech){
    if (page_suiv == 2){
      var element = document.getElementById(id_flech);
      element.style.opacity = 0.1;
  }
}

  function noirc_flech(cat){
    id_flech ="fg_cat" + (cat+2);
    var element = document.getElementById(id_flech);
    element.style.opacity = 0.9;
  }


  function fonction_fetch_3(url, index_cat, nombre_films) {
    resultat = "";
    fetch(url)
    .then(function(res) {
      if (res.ok) {
        return res.json();
        resultat = 1;
      }     
    })
    .then(function(value) {
      //récupérer les éléments.
      var index = 0;
    }
    )
    .catch(function(err) {
      console.log(err);
      // Une erreur est survenue
    });
  }

  function fonction_verif_url(url){
    
    let err_url_img = 0;
    let pos_x = url.indexOf("@");
    //let pos_y = url.indexOf("@@");
    if (pos_x == -1) {
      err_url_img = 1;
    }
    return (err_url_img);
  }

  function fonction_verif_url_exist(url){
  // 1. Créer un nouvel objet XMLHttpRequest
  
  url_ok = 1;
  let xhr = new XMLHttpRequest();
  

  // 2. Le configure : GET-request pour l'URL /article/.../load
  xhr.open('GET', url, true);
  
  // 3. Envoyer la requête sur le réseau
  xhr.send();
  /*
  // 4. Ceci sera appelé après la réception de la réponse
  xhr.onload = function() {
    if (xhr.status != 200) { // analyse l'état HTTP de la réponse
      //alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      url_ok = 0;
    } else { // show the result
      alert(`Done, got ${xhr.response.length} bytes`); // response est la réponse du serveur
    }
  };

  /*
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      alert(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      alert(`Received ${event.loaded} bytes`); // pas de Content-Length
    }
  };
  */
  xhr.onerror = function() {
    alert("-image not found- L'url correspondant à une image recherchée est innexistante");
    //img_chrgt = ("img1.jpg")
    //fonction_inser_img(balise_dest, img_chrgt)
    url_ok = 0;
    //return (url_ok);
  };
  return (url_ok);
  }