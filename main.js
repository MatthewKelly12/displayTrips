
// make function to create div and text content, append to body


let tripsDatabase = JSON.parse(localStorage.getItem("Matt's Trips"));
let mainBody = document.getElementById("cardTrip");

function makeDiv () {
  for (let i = 0; i < tripsDatabase.myTrips.length; i++) { 
    
    let div1 = document.createElement("div");

    switch(tripsDatabase.myTrips[i].continent) {
    case "North America" :
        div1.setAttribute("class", "northAmerica");
        break;
    case "South America" :
        div1.setAttribute("class", "southAmerica");
        break;
    case "Asia" :
        div1.setAttribute("class", "asia");
        break;
    case "Europe" :
        div1.setAttribute("class", "europe");
        break;
    case "Africa" :
        div1.setAttribute("class", "africa");
        break;
    case "Australia" :
        div1.setAttribute("class", "australia");
        break;
    }
     
    mainBody.appendChild(div1);

     let head2 = document.createElement("h2");
     head2.textContent = tripsDatabase.myTrips[i].cityName;
     div1.appendChild(head2);

     let par1 = document.createElement("p");
     let img1 = document.createElement("img");
     img1.src = tripsDatabase.myTrips[i].pic;
     img1.setAttribute("width", "200");
     img1.setAttribute("height", "200");
     par1.appendChild(img1);
     div1.appendChild(par1);

     let par2 = document.createElement("p");
     par2.textContent = tripsDatabase.myTrips[i].year;
     div1.appendChild(par2);

     let par3 = document.createElement("p");
     par3.textContent = tripsDatabase.myTrips[i].attractions;
     div1.appendChild(par3);

  }
}
makeDiv();


