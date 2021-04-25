//all variables 
let divElement = document.createElement('div');
let divElement2 = document.createElement('div');

let divElement3 = document.createElement('div');

let divElement4 = document.createElement('div');

let divElement5 = document.createElement('div');

let divElement6 = document.createElement('div');

let divElement7 = document.createElement('div');

let divElement8 = document.createElement('div');

let divElement9 = document.createElement('div');

let divElement10 = document.createElement('div');

let divElement11 = document.createElement('div');

let divElement12 = document.createElement('div');



//dark mode script 

function  darkMode() {
  let darkMode = document.getElementById('darkMode');
  let darkBody  = document.querySelector('*');
  darkBody.classList.toggle('darkMode');
  
  }



let ContentContainer = document.querySelector(".ContentContainer");

function sideOpener(){
  document.querySelector('.SideNavigation').style.left=0;
document.querySelector('.title').style.position= "relative";
  
}

function closeSideNavigation(){
  document.querySelector('.SideNavigation').style.left="-100%";
document.querySelector('.title').style.position= "sticky";
  
}
//show default 
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 1.Food: Where Does it Come From?";
  //notes making function 
  //create new div

 divElement.className = "box";
 divElement.id = "box1";
 
   divElement.innerHTML = '<h2>Food</h2>  <p>The component that we consume, which provides nourishment to the body, is called food. E.g., Rice, chapati, curry, fruits, vegetables, cheese, bread, milk, curd, butter, etc.</p>';
  
  ContentContainer.appendChild(divElement);
  
  
  //div element 2 created 
  
divElement2.className = "box";
 divElement2.id = "box2";
 
 
   divElement2.innerHTML = ' <h2>Ingredients</h2>  <p>The components or materials required to prepare a food item are called as ingredients. E.g., different types of vegetables, spices are ingredients for sambar.</p>';
  
  ContentContainer.appendChild(divElement2);
  
  //div element 3 created 
  
divElement3.className = "box";
 divElement3.id = "box3";
 
 
   divElement3.innerHTML = ' <h2>Food Items</h2>  <p>We eat different food items every day. Each of these food items requires ingredients to make them. E.g., Chicken curry is made with chicken, spices, oil/ghee and water</p>';
  
  ContentContainer.appendChild(divElement3);
  
  //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
   divElement4.innerHTML = ' <h2>Food source</h2>  <p>The ingredients of a food item can be obtained from either plants or animals. So there are plant products and animal products. E.g., We get rice grains from rice plants. Chicken is an animal source of food. Items like salt and water make a third category.</p>';
  ContentContainer.appendChild(divElement4);
  
 //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
 
 
   divElement4.innerHTML = ' <h2>Plants Products</h2>  <p>The food products that we get from plants are called as the plant products. E.g., ginger is the root of a plant that we use in cooking</p>';
  
  ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
 divElement5.id = "box5";
 
 
   divElement5.innerHTML = ' <h2>Animal Products</h2>  <p>The food products that we get from animals are called animal products. E.g. Milk, butter, chicken, meat, honey etc.</p>';
  
  ContentContainer.appendChild(divElement5);
  
  //div element 7 created 
divElement7.className = "box";
 divElement7.id = "box7";
 
 
   divElement7.innerHTML = ' <h2>Herbivores</h2>  <p>Animals which feed on plants are called herbivores. E.g., cow, goat etc.</p>';
  
  ContentContainer.appendChild(divElement7);
  
  //div element 8 created 
divElement8.className = "box";
 divElement8.id = "box8";
 
 
   divElement8.innerHTML = ' <h2>Carnivores</h2>  <p>Animals which feed on other animals are called carnivores. E.g., lion, tiger etc</p>';
  
  ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 
 
   divElement9.innerHTML = ' <h2>omnivores</h2>  <p>Animals which feed on both plants and other animals are called omnivores. E.g., bears. They feed on flesh as well as honey</p>';
  
  ContentContainer.appendChild(divElement9);
  
  //div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor="#00800084";
   divElement10.innerHTML = '<h2><a style="color:white;" to href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement10);
  
//chapter1 
function chapter1() {
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 1.Food: Where Does it Come From?";
  //notes making function 
  //create new div

 divElement.className = "box";
 divElement.id = "box1";
 
   divElement.innerHTML = '<h2>Food</h2>  <p>The component that we consume, which provides nourishment to the body, is called food. E.g., Rice, chapati, curry, fruits, vegetables, cheese, bread, milk, curd, butter, etc.</p>';
  
  ContentContainer.appendChild(divElement);
  
  
  //div element 2 created 
  
divElement2.className = "box";
 divElement2.id = "box2";
 
 
   divElement2.innerHTML = ' <h2>Ingredients</h2>  <p>The components or materials required to prepare a food item are called as ingredients. E.g., different types of vegetables, spices are ingredients for sambar.</p>';
  
  ContentContainer.appendChild(divElement2);
  
  //div element 3 created 
  
divElement3.className = "box";
 divElement3.id = "box3";
 
 
   divElement3.innerHTML = ' <h2>Food Items</h2>  <p>We eat different food items every day. Each of these food items requires ingredients to make them. E.g., Chicken curry is made with chicken, spices, oil/ghee and water</p>';
  
  ContentContainer.appendChild(divElement3);
  
  //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
   divElement4.innerHTML = ' <h2>Food source</h2>  <p>The ingredients of a food item can be obtained from either plants or animals. So there are plant products and animal products. E.g., We get rice grains from rice plants. Chicken is an animal source of food. Items like salt and water make a third category.</p>';
  ContentContainer.appendChild(divElement4);
  
 //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
 
 
   divElement4.innerHTML = ' <h2>Plants Products</h2>  <p>The food products that we get from plants are called as the plant products. E.g., ginger is the root of a plant that we use in cooking</p>';
  
  ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
 divElement5.id = "box5";
 
 
   divElement5.innerHTML = ' <h2>Animal Products</h2>  <p>The food products that we get from animals are called animal products. E.g. Milk, butter, chicken, meat, honey etc.</p>';
  
  ContentContainer.appendChild(divElement5);
  
  //div element 7 created 
divElement7.className = "box";
 divElement7.id = "box7";
 
 
   divElement7.innerHTML = ' <h2>Herbivores</h2>  <p>Animals which feed on plants are called herbivores. E.g., cow, goat etc.</p>';
  
  ContentContainer.appendChild(divElement7);
  
  //div element 8 created 
divElement8.className = "box";
 divElement8.id = "box8";
 
 
   divElement8.innerHTML = ' <h2>Carnivores</h2>  <p>Animals which feed on other animals are called carnivores. E.g., lion, tiger etc</p>';
  
  ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 
 
   divElement9.innerHTML = ' <h2>omnivores</h2>  <p>Animals which feed on both plants and other animals are called omnivores. E.g., bears. They feed on flesh as well as honey</p>';
  
  ContentContainer.appendChild(divElement9);
  
  //div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = '#00800084';
   divElement10.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement10);
  

}
//chapter 2
function chapter2() {
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 1.Food: Where Does it Come From?";
  //notes making function 
  //create new div

 divElement.className = "box";
 divElement.id = "box1";
 
   divElement.innerHTML = '<h2>Food</h2>  <p>The component that we consume, which provides nourishment to the body, is called food. E.g., Rice, chapati, curry, fruits, vegetables, cheese, bread, milk, curd, butter, etc.</p>';
  
  ContentContainer.appendChild(divElement);
  
  
  //div element 2 created 
  
divElement2.className = "box";
 divElement2.id = "box2";
 
 
   divElement2.innerHTML = ' <h2>Ingredients</h2>  <p>The components or materials required to prepare a food item are called as ingredients. E.g., different types of vegetables, spices are ingredients for sambar.</p>';
  
  ContentContainer.appendChild(divElement2);
  
  //div element 3 created 
  
divElement3.className = "box";
 divElement3.id = "box3";
 
 
   divElement3.innerHTML = ' <h2>Food Items</h2>  <p>We eat different food items every day. Each of these food items requires ingredients to make them. E.g., Chicken curry is made with chicken, spices, oil/ghee and water</p>';
  
  ContentContainer.appendChild(divElement3);
  
  //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
   divElement4.innerHTML = ' <h2>Food source</h2>  <p>The ingredients of a food item can be obtained from either plants or animals. So there are plant products and animal products. E.g., We get rice grains from rice plants. Chicken is an animal source of food. Items like salt and water make a third category.</p>';
  ContentContainer.appendChild(divElement4);
  
 //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
 
 
   divElement4.innerHTML = ' <h2>Plants Products</h2>  <p>The food products that we get from plants are called as the plant products. E.g., ginger is the root of a plant that we use in cooking</p>';
  
  ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
 divElement5.id = "box5";
 
 
   divElement5.innerHTML = ' <h2>Animal Products</h2>  <p>The food products that we get from animals are called animal products. E.g. Milk, butter, chicken, meat, honey etc.</p>';
  
  ContentContainer.appendChild(divElement5);
  
  //div element 7 created 
divElement7.className = "box";
 divElement7.id = "box7";
 
 
   divElement7.innerHTML = ' <h2>Herbivores</h2>  <p>Animals which feed on plants are called herbivores. E.g., cow, goat etc.</p>';
  
  ContentContainer.appendChild(divElement7);
  
  //div element 8 created 
divElement8.className = "box";
 divElement8.id = "box8";
 
 
   divElement8.innerHTML = ' <h2>Carnivores</h2>  <p>Animals which feed on other animals are called carnivores. E.g., lion, tiger etc</p>';
  
  ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 
 
   divElement9.innerHTML = ' <h2>omnivores</h2>  <p>Animals which feed on both plants and other animals are called omnivores. E.g., bears. They feed on flesh as well as honey</p>';
  
  ContentContainer.appendChild(divElement9);
  
  //div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = '#00800084';
   divElement10.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement10);
  
  //fire when click on this div
  
  divElement10.addEventListner("click",function chapter3() {});
}


setInterval(function(){
  document.getElementById('ad').style.transform = 'scale(1)';
},50000)

function cut(){
document.getElementById('ad').style.transform = 'scale(0)';
}