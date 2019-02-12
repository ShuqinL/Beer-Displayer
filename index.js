 $(document).ready(function(){
                     
            $("#searchButton").click(function(){
                let searchField = $("#search").val();
                let url="https://api.punkapi.com/v2/beers?beer_name="+searchField;

                fetch(url)
               .then((res)=>res.json())
               .then((data)=>{                
                   for(let i=0; i<data.length;i++){
                       let name = data[i].name;
                       let tagline = data[i].tagline;
                       let firstBrewed = data[i].first_brewed;
                       let image = data[i].image_url;
                       let beerId = data[i].id;
                       // make a dropdown list with the search results
                       $("ul").append(`<li class="list-group-item"><a href="#${beerId}">${name}</a></li>`);   
                     
                       //hide the search form
                       $("li").click(function(){
                           $("#searchForm").hide();
                       })

                       

                       if(i>=0 && i<=3){
                           $("#row1").append(`<div class="card text-center" id="${beerId}">
                                                <img src="${image}" class="card-img-top">
                                                <div class="card-body">   
                                                   <h5 class="card-title">${name}</h5>
                                                   <p class="card-text">"Id:"${beerId}</p>
                                                   <p class="card-text">"Tagline:"${tagline}</p>
                                                   <p class="card-text">"Year of first brewery:" ${firstBrewed}</p>
                                                </div>
                                                <div class="card-footer">
                                                   <a href="#searchForm" class="btn btn-primary" id="backButton">Go back</a>
                                                </div>
                                              </div>`);
                       } else if(i>=4 && i<=7){
                        $("#row2").append(`<div class="card text-center" id="${beerId}">
                                                <img src="${image}" class="card-img-top">
                                                <div class="card-body">   
                                                   <h5 class="card-title">${name}</h5>
                                                   <p class="card-text">"Id:"${beerId}</p>
                                                   <p class="card-text">"Tagline:"${tagline}</p>
                                                   <p class="card-text">"Year of first brewery:" ${firstBrewed}</p>
                                                </div>
                                                <div class="card-footer">
                                                   <a href="#searchForm" class="btn btn-primary" id="backButton">Go back</a>
                                                </div>
                                          </div>`);
                    } else if(i>=8 && i<=11){
                        $("#row3").append(`<div class="card text-center" id="${beerId}">
                                                <img src="${image}" class="card-img-top">
                                                <div class="card-body">   
                                                    <h5 class="card-title">${name}</h5>
                                                    <p class="card-text">"Id:"${beerId}</p>
                                                    <p class="card-text">"Tagline:"${tagline}</p>
                                                    <p class="card-text">"Year of first brewery:" ${firstBrewed}</p>
                                                </div>
                                                <div class="card-footer">
                                                    <a href="#searchForm" class="btn btn-primary" id="backButton">Go back</a>
                                                </div>
                                          </div>`);
                    } else if (i>=12 && i<=15){
                        $("#row4").append(`<div class="card text-center" id="${beerId}">
                                                <img src="${image}" class="card-img-top">
                                                <div class="card-body">   
                                                   <h5 class="card-title">${name}</h5>
                                                   <p class="card-text">"Id:"${beerId}</p>
                                                   <p class="card-text">"Tagline:"${tagline}</p>
                                                   <p class="card-text">"Year of first brewery:" ${firstBrewed}</p>
                                                </div>
                                                <div class="card-footer">
                                                   <a href="#searchForm" class="btn btn-primary" id="backButton">Go back</a>
                                                </div>
                                         </div>`);
                    } else if(i>=16 && i<=19){
                        $("#row5").append(`<div class="card text-center" id="${beerId}">
                                               <img src="${image}" class="card-img-top">
                                               <div class="card-body">   
                                                   <h5 class="card-title">${name}</h5>
                                                   <p class="card-text">"Id:"${beerId}</p>
                                                   <p class="card-text">"Tagline:"${tagline}</p>
                                                   <p class="card-text">"Year of first brewery:" ${firstBrewed}</p>
                                                </div>
                                               <div class="card-footer">
                                                  <a href="#searchForm" class="btn btn-primary" id="backButton">Go back</a>
                                               </div>
                                           </div>`);
                    } else if(i>=20 && i<=23){
                        $("#row6").append(`<div class="card text-center" id="${beerId}">
                                               <img src="${image}" class="card-img-top">
                                               <div class="card-body">   
                                                   <h5 class="card-title">${name}</h5>
                                                   <p class="card-text">"Id:"${beerId}</p>
                                                   <p class="card-text">"Tagline:"${tagline}</p>
                                                   <p class="card-text">"Year of first brewery:" ${firstBrewed}</p>
                                                </div>
                                               <div class="card-footer">
                                                  <a href="#searchForm" class="btn btn-primary" id="backButton">Go back</a>
                                               </div>
                                           </div>`);
                    
                    } else {
                        $("#row7").append(`<div class="card text-center" id="${beerId}">
                                               <img src="${image}" class="card-img-top">
                                               <div class="card-body">   
                                                   <h5 class="card-title">${name}</h5>
                                                   <p class="card-text">"Id:"${beerId}</p>
                                                   <p class="card-text">"Tagline:"${tagline}</p>
                                                   <p class="card-text">"Year of first brewery:" ${firstBrewed}</p>
                                               </div>
                                               <div class="card-footer">
                                                   <a href="#searchForm" class="btn btn-primary" id="backButton">Go back</a>
                                               </div>
                                          </div><div class="card"></div><div class="card"></div><div class="card"></div>`);
                    } 
                   
                    $("#backButton").click(function(){
                        $("#searchForm").show();
                    })
                }
                   
               })
               .catch((err)=>console.log(err));
            })
        })