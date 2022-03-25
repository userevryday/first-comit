/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener("DOMContentLoaded", () =>{

  const movieDB = {
        
       movies: [
        
          
          
          
          "trololo",
          "durimar ",
          "rinbuldash"
          
      ]
  };
  const Batn = document.querySelectorAll("li"), 
        reclama = document.querySelectorAll(".promo__adv img"),
        bigblok = document.querySelector(".promo__bg"),
        genr=bigblok.querySelector(".promo__genre"),
        logo=document.querySelector(".header__logo"),
        listarci=document.querySelector(".promo__interactive-list"),
        ara=listarci.querySelector('.promo__interactive-item'),
        poisk=document.querySelector(".header__search form input"),
        addForm = document.querySelector("form.add"),
        addInput=addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type="checkbox"]'),
        ylou = document.querySelector(".header"),
        ellow = ylou.querySelector(".header__search");
     
      console.log(Batn);
      console.log(addForm);
      console.log(addInput);
      console.log(checkbox);
      console.log(logo);
      console.log(genr);
      console.log(reclama);
      console.log(bigblok);
      console.log(listarci);
      console.log(ara);
          
          
     
     Batn[0].addEventListener(("click"),()=>{
      Batn[0].classList.toggle('red');
      if(!Batn[0].classList.contains("red")){
        Batn.forEach(element => {element.style.background= 'blue';});
        poisk.style.background="red";
        genr.textContent="АРЧИ ТЫ ГДЕ !!!!";
       
      
      
      }
      else{Batn.forEach(element => {element.style.background= 'red';});
      poisk.style.background="blue";
      genr.textContent="Masea kak dela";
      
    
    
    }
       });
       Batn[1].addEventListener(("click"),()=>{
        Batn[1].classList.toggle('red');
        if(!Batn[1].classList.contains("red")){
          bigblok.style.backgroundImage="url('img/111.jpg')";
        }
          else{

            bigblok.style.backgroundImage="url('img/bg.jpg')";
        } });
        Batn[2].addEventListener(("click"),()=>{
          Batn[2].classList.toggle('red');
          if(!Batn[2].classList.contains("red")){
            genr.style.background="red";}
            else{genr.style.background="purple"; 
          }});
          Batn[4].addEventListener(("click"),()=>{
            Batn[4].classList.toggle('red');
            if(!Batn[4].classList.contains("red")){
              logo.style.backgroundImage="url('img/222.jpg')";
            }
              else{
    
                logo.style.backgroundImage="url('img/333.webp')"; 
            } });
            
         
     
     
     
     
     
     
     
     
     
     
     
          addForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if(newFilm){
          if(newFilm.length >21){
            newFilm = `${newFilm.substring(0,22)}...`;}
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies,listarci);
          }
          event.target.reset();
        });
      
    
      
       function createMoviesList (films, parent){
           parent.innerHTML="";
          films.forEach((item,i) => {parent.innerHTML+=`<li class="promo__interactive-item">${i+1}:${item}
           <div class="delete"></div>`
        ;});
        const jib =  document.querySelectorAll('.delete');
        jib.forEach((btn,i)=>{
         btn.addEventListener('click',()=>{
           btn.parentElement.remove();
           movieDB.movies.slice(i,1);
          });
          
      });
        
      
      }
      
      const sortArr = (arr) =>{
        arr.sort();
       };     
       
      
      
      
       

       
       
    
           
     
     
    
       function litelChange (){
                genr.addEventListener('click',()=>{alert("POLINA");});
                logo.addEventListener("click",()=>{const akol = prompt("ti 4to durak ?");});
                poisk.addEventListener("click",()=>{console.log("ti 4toto i6e6");});
               
              }
       function DeliteSpam (){
                reclama.forEach(element=>{element.remove();});
               }  
          
          
            
        
          createMoviesList(movieDB.movies,listarci);  
          DeliteSpam();
          litelChange();  
          sortArr(movieDB.movies);

            
            
    
    
           
  

        });






          
          
          
          
         
         
         
         
        
         
         
         
         
         
         
         
         
         
          