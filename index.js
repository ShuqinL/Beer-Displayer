 $(document).ready(function(){
                     
            $("#searchButton").click(function(){
                let searchField = $("#search").val();
                //let url="https://api.punkapi.com/v2/beers?beer_name="+searchField";

                fetch("https://api.punkapi.com/v2/beers")
               .then((res)=>res.json())
               .then((data)=>{                
                   for(let i=0; i<data.length;i++){
                       let name = data.name;
                       let tagline = data.tagline;
                       let firstBrewed = data.first_brewed;
                       let image = data.image_url;
                       // make a dropdown list with the search results
                       $("ul").append(`<li class="list-group-item"><a href="movieinfo.html?id=${id}">${title} ${year}</a></li>`);   

                   }
                   
               })
               .catch((err)=>console.log(err));
            })
        })