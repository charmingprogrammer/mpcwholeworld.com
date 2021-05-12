fetch('https://restcountries.eu/rest/v2/all')
.then( (data) =>{

     return data.json();
})

.then ((convert) => {
     console.log(convert);
 //array0 content 
 let array1 = convert.articles[0];
document.getElementById('img1').src = array1.urlToImage;

 let title1 = array1.title;
  document.getElementById('title1').innerHTML = title1;
  
 let content1 = array1.content;
document.getElementById('content1').innerHTML = content1;

document.getElementById('readMore1').href= array1.url;

//array1 content 
 let array2 = convert.articles[1];
document.getElementById('img2').src = array2.urlToImage;

 let title2 = array2.title;
  document.getElementById('title2').innerHTML = title2;
  
 let content2 = array2.content;
document.getElementById('content2').innerHTML = content2;

document.getElementById('readMore2').href= array2.url;

//array2 content 
 let array3 = convert.articles[2];
document.getElementById('img3').src = array3.urlToImage;

 let title3 = array3.title;
  document.getElementById('title3').innerHTML = title3;
  
 let content3 = array3.content;
document.getElementById('content3').innerHTML = content3;

document.getElementById('readMore3').href= array3.url;
//array3 content 
 let array4 = convert.articles[3];
document.getElementById('img4').src = array4.urlToImage;

 let title4 = array4.title;
  document.getElementById('title4').innerHTML = title4;
  
 let content4 = array4.content;
document.getElementById('content4').innerHTML = content4;

document.getElementById('readMore4').href= array4.url;

//array4 content 
 let array5 = convert.articles[4];
document.getElementById('img5').src = array5.urlToImage;

 let title5 = array5.title;
  document.getElementById('title5').innerHTML = title5;
  
 let content5 = array5.content;
document.getElementById('content5').innerHTML = content5;

document.getElementById('readMore5').href= array5.url;


//array5 content 
 let array6 = convert.articles[5];
document.getElementById('img6').src = array6.urlToImage;

 let title6 = array6.title;
  document.getElementById('title6').innerHTML = title6;
  
 let content6 = array6.content;
document.getElementById('content6').innerHTML = content6;

document.getElementById('readMore6').href= array6.url;

//array6 content 
 let array7 = convert.articles[6];
document.getElementById('img7').src = array7.urlToImage;

 let title7 = array7.title;
  document.getElementById('title7').innerHTML = title7;
  
 let content7 = array7.content;
document.getElementById('content7').innerHTML = content7;

document.getElementById('readMore7').href= array7.url;

//array7 content 
 let array8 = convert.articles[7];
document.getElementById('img8').src = array8.urlToImage;

 let title8 = array8.title;
  document.getElementById('title8').innerHTML = title8;
  
 let content8 = array8.content;
document.getElementById('content8').innerHTML = content8;

document.getElementById('readMore8').href= array8.url;
//array8 content 
 let array9 = convert.articles[8];
document.getElementById('img9').src = array9.urlToImage;

 let title9 = array9.title;
  document.getElementById('title9').innerHTML = title9;
  
 let content9 = array9.content;
document.getElementById('content9').innerHTML = content9;

document.getElementById('readMore9').href= array9.url;
//array9 content 
 let array10 = convert.articles[9];
document.getElementById('img10').src = array10.urlToImage;

 let title10 = array10.title;
  document.getElementById('title10').innerHTML = title10;
  
 let content10 = array10.content;
document.getElementById('content10').innerHTML = content10;

document.getElementById('readMore10').href= array10.url;

});
 


function loader() {
     document.getElementById('loader').style.display = "none";
}
