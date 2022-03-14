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
          "super",
          "super puper",
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
        checkbox = addForm.querySelector('[type="checkbox"]');
     
     
      console.log(addForm);
      console.log(addInput);
      console.log(checkbox);
      console.log(logo);
      console.log(genr);
      console.log(Batn);
      console.log(reclama);
      console.log(bigblok);
      console.log(listarci);
      console.log(ara);
          
          
      addForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if(newFilm){
          if(newFilm.length >5){
            newFilm = `${newFilm.substring(0,21)}...`;
            }
          
          
          
          
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
     }
     
         document.querySelectorAll('.delete').forEach((btn,i)=>{
           btn.addEventListener('click',()=>{
             btn.parentElement.remove();
             movieDB.movies.slice(i,1);

           });

         });
     
     
     const sortArr = (arr) =>{
         arr.sort();
       };     
       sortArr(movieDB.movies);



       function litelChange (){
                poisk.style.background="red";
                genr.style.background="red";
                genr.textContent="АРЧИ ТЫ ГДЕ !!!!";
                genr.addEventListener('click',()=>{alert("POLINA");});
                logo.addEventListener("click",()=>{const akol = prompt("ti 4to durak ?");});
                poisk.addEventListener("click",()=>{console.log("ti 4toto i6e6");});
                Batn.forEach(element => {element.style.background= 'blue';});
              };
       function DeliteSpam (){
                reclama.forEach(element=>{element.remove();});
               };  
          
          
            
        function changeImage (){
                 const alertar =(e)=>{bigblok.style.backgroundImage="url('img/content_1.jpg')";};
                 Batn.forEach(bt=> {bt.addEventListener("click",alertar)});
                 bigblok.style.backgroundImage="url('img/111.jpg')";
                 logo.style.backgroundImage="URL('img/222.jpg')";
        };   
        createMoviesList(movieDB.movies,listarci);  
          changeImage();
          DeliteSpam();
          litelChange();  
            
            
            
    
    
           
  

});






          
          
          
          
         
         
         
         
        
         
         
         
         
         
         
         
         
         
          