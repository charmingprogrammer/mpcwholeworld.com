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
let divElement13 = document.createElement('div');
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
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = '#00800084';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#" onclick = "chapter2();">👉</a> </h2>';
  ContentContainer.appendChild(divElement11);
  
//div element 12 created 
divElement12.className = "box";
 divElement12.id = "box12";
 divElement12.style.backgroundColor = '#00800084';
   divElement12.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement12);
  
//chapter1 
function chapter1() {
  document.querySelector('*').scrollTo(0,0);
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
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = '#00800084';
     divElement11.innerHTML = '<h2> <a style="color:white;" href="#" onclick = "chapter2();">👉</a> </h2>';
  ContentContainer.appendChild(divElement11);
  
//div element 12 created 
divElement12.className = "box";
 divElement12.id = "box12";
 divElement12.style.backgroundColor = '#00800084';
   divElement12.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement12);

}
//chapter 2
function chapter2() {
document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "2.Components of Food.";
  //notes making function 
  //create new div

 divElement.className = "box";
 divElement.id = "box1";
 
   divElement.innerHTML = '<h2>Nutrients</h2>  <p>food made with ingredients and ingredient contain some compontent like carbohydrates ,proteins ,fats ,vitamins and minerals .these component are called nutrients .</p>';
  
  ContentContainer.appendChild(divElement);
  
  
  //div element 2 created 
  
divElement2.className = "box";
 divElement2.id = "box2";
 
 
   divElement2.innerHTML = ' <h2>Carbohydrates</h2><p>carbohydrates mainlly  produce energy in our body.<h2>Sources</h2><p>1.rice<br> 2.potato<br> 3.wheat <br>4.papaya<br> 5.mangoes</p></p>';
  
  ContentContainer.appendChild(divElement2);
  
  //div element 3 created 
  
divElement3.className = "box";
 divElement3.id = "box3";
 
 
   divElement3.innerHTML = ' <h2>Fat</h2><p>Fat also give us energy ,in fact more energy  as compaire to some amount of carbohydrates.<h2>Sources</h2><p>1.meat.<br>2.fish.<br>3.eggs <br>4.nuts<br>5.til<br></p></p>';
  
  ContentContainer.appendChild(divElement3);
  
 //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
 
 
   divElement4.innerHTML = ' <h2>Proteins</h2><p>protiens are often called body bulding foods<h2>Sources</h2><p>1.gram <br>2.money <br>3.tur dal<br>4.beans <br>5.peas <br>6.soyabens <br>7.fish <br>8.paneer<br>9.eggs <br>10.milk <br></p></p>';
  
  ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
 divElement5.id = "box5";
 
 
   divElement5.innerHTML = '<h2>Vitamins</h2><p>vitamins help in protecting our body againest disease also vitamins help us in keeping eyes bones teeth gums healthy.<h2>Sources</h2><p><b>vitamin A<br> </b><br> 1.papaya <br>2.carrot <br>3.oil<br>4.milk <br>5.mangoes<br><br><b>vitamin B <br></b><br>1.weat<br>2.rice<br>3.liver<br><br><b>vitamin C<br> </b><br>1.orange <br>2.guava<br>3.lemon <br>4.Amla <br>5.Tamoto<br> <br><b>vitamin D</b><br><br>1.milk <br>2.butter <br>3.Eggs<br>4.Fish <br>5.Liver <br><br></p></p>';
  
  ContentContainer.appendChild(divElement5);
  
  //div element 8 created 
divElement8.className = "box";
 divElement8.id = "box8";
 
 
   divElement8.innerHTML = '<p>Besides of these nutrients our body needs dietary fibres and waters.<br><br><b><br>Dietary Fibres</b><br><br>Well in other words dierty fibres known as rougnage.<br><br>Rougnage in mainly provded by plants product in our food.<br><br><b>sources of rougnang</b><br><br>1.grains <br>2.pulses<br>3.potatoes<br>4.Fresh Fruits<br>5.Vegetables <br><br>rougnage does not provides any nutrients to our body but is an essential component of our food and adds to its bulk.<br><br>rougnage helps our body to observe nutrients form food.<br><br>And also helps in trowing out some wastes form body as urine and sweat.</p>';
  
  ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 
 
   divElement9.innerHTML = ' <h2>Blanced Diet</h2>  <p>blanced dite provides all the nutruents that our body needs in right quantities along with aurate amount of rougnage and water</p>';
  
  ContentContainer.appendChild(divElement9);
  
  
  //div element 7 created 
divElement7.className = "box";
 divElement7.id = "box7";
   divElement7.innerHTML = '<h2>Diseases and their symptoms from deficiency of vitamins.</h2><p><table><tr> <th>Vitamins</th> <th>Diseases</th> <th>Symptoms</th></tr><tr> <td>Vitamins A</td> <td>Loss of Vision</td> <td>Poor vision,loss vision</td></tr><tr><td>Vitamins B</td><td>Beriberi</td><td>weak musals,very little energ</td></tr> <tr> <td>Vitamins C</td>  <td>Scurvy</td> <td>Bleading gums,wounds take longer time to heal </td></tr><tr><td>Vitamins D</td> <td>Rickets</td><td>bone become soft and bent </td></tr><tr><td>Calcium</td><td>bone and tooth decay </td><td>weak bone ,teeth decay  </td></tr><tr><td>Iodine</td><td>Goiter </td>  <td>gland in the neak appears swollen, mental disability in mostly children. </td> </tr> <tr>   <td>Iron</td> <td> Anaemia</td>   <td>Weakness</td> </tr></table></p>';
  
  ContentContainer.appendChild(divElement7);
  
  
  //div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = '#00800084';
   divElement10.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = '#00800084';
   divElement11.innerHTML = '<h2><a style="color:white;" href="#" onclick = "chapter1();">👈</a> <a style="color:white;" href="#" onclick = "chapter3();">👉</a> </h2>';
  ContentContainer.appendChild(divElement11);
  
//div element 12 created 
divElement12.className = "box";
 divElement12.id = "box12";
 divElement12.style.backgroundColor = '#00800084';
   divElement12.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement12);
}
