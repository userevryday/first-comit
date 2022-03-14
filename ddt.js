"use strict";
let numberofFilmsDB = {count:0,
muvis:{},
actors:{},
genres:[],
privat:false,
start:function(){numberofFilmsDB.count = +prompt("skoliko filmov posmotrel?");
while(numberofFilmsDB.count =='' || numberofFilmsDB.count == null || isNaN(numberofFilmsDB.count)){
    numberofFilmsDB.count = +prompt("skoliko filmov posmotrel?");}},
rememberafilms:function() {for( let i=0; i<=2; i++) { 
    let a =+prompt("odin iz poslednih filimov?" , ""),
        b =+prompt("na skoliko otsenite filim?" , "");
       if( a!=null && b!=null && a!="" && b!="" && a.length<50){
         numberofFilmsDB.muvis[a]=b ;
         console.log("Done");}
         else{   i--;
             console.log("error");}}},
detectpersonallevel:function() { if(numberofFilmsDB.count<10) {console.log("malo filimov");}
else if(numberofFilmsDB.count>10 && numberofFilmsDB.count<=30) {console.log('vi klasicescki zriteli');}
else if(numberofFilmsDB.count>30) {console.log("vi kinoman");}
else {console.log("4toto poslo ne tak!");}},
           showmyDB:function (hidden) {
                if(!hidden){console.log(numberofFilmsDB);}
            },
             TogllevisibleDB:function(){
             if(numberofFilmsDB.privat){
                 numberofFilmsDB.privat=false;
                }
             else{
                 numberofFilmsDB.privat=true;
                }
            },
           
            wryteyourGeners: function() {  
                for(let i=1;i<4;i++){
               let ganrs = prompt(`va6 liubimii janr${i}`);
                if(ganrs==null || ganrs===''){
                   console.log("vi veli ne pravelinii rezulitat");
                    i--;
                    
                }else{ numberofFilmsDB.genres[i-1]=ganrs;

                    console.log(`vash libimii janr pod nr:${i} eto:${numberofFilmsDB.genres[i-1]=ganrs}`);
                    }
             }
            
            numberofFilmsDB.genres.forEach((item,i) => {console.log(`masiv ganri (${i+1}):${item}`);
                
            });
        }};
            console.log( `kolicestvo kliucei:${Object.keys(numberofFilmsDB).length}`);









