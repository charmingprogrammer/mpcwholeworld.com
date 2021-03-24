
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Sans-Serif;
  background: #111414;
  cursor: default;
  scroll-behavior: smooth;

}

#layer {
  height: 50px;
  width: 30%;
  background: #11141400;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 123;
}
#container-for-top {
  height: 50px;
  width: 100%;
  background: #111414;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  box-shadow: 0 0 10px 1px black;

}
#container-for-text {
  width: 70%;
  height: 50px;
  background: #111414;
  color: #5d656b;
  margin-left: 10px;
}
#container-for-text span {
  background: #111414;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
#container-for-text a {
  color: #989c9e;
  text-decoration: none;
  outline: none;
  font-size: 15px;
}

#container-for-money {
  width: 30%;
  height: 50px;
  background: #111414;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#container-for-money input {
  background: #d1d1d1;
  height: 30px;
  width: 70%;
  border-radius: 3px;
  border: none;
  outline: none;
  text-align: center;
  box-shadow: 0 0 10px 1px #111414;
}
/* #navigation {
  position: fixed;
  bottom: 10px;
  right: 50px;
  height: 50px;
  width: 50px;
  border-radius: 100px;
  border: 1px solid #000000;
  background: #111414;
  box-shadow: 0 0 10px 1px black;
  color: #c7c5c1;
  display: grid;
  place-content: center;
  cursor: default;
  transition: 0.3s;
  z-index: 12453;
}
#navigation:hover {
  background: #020152;
  color: #313538;
}
#navigation-list {
  position: fixed;
  bottom: 70px;
  right: 50px;
  height: 300px;
  width: 50px;
  background: none;
  border-radius: 10px;
  transition: 0.5s;
  transform: scale(0);
  transform-origin: bottom center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.nevMenu {
  height: 50px;
  width: 50px;
  border-radius: 100px;
  display: grid;
  place-items: center;
  box-shadow: 0 0 10px 1px black;
  color: #aaaaaa;
  transition: 0.5s;
}
.nevMenu:hover {
  background: #020152;
  color: #313538;
  cursor: default;
} */
#body-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.adBox {
  height: 300px;
  width: 300px;
  box-shadow: 0 0 5px 1px #000000e3;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c9c9c9;
  transition: 0.5s;
}
.adBox p {
  background: none;
  border-radius: 100px;
  display: none;
}
.adBox h2 {
  background: none;
  border-radius: 100px;
}
.adBox:hover {
  background: #181f24;
  color: #cfdce6;
}
/*
#containerForLoading {
  height: 100vh;
  width: 100%;
  background: #fb3d78;
  position: fixed;
  top: 0;
  z-index: 1246;
  transition: 0.5s;
  transform: scale(1);
  transform-origin: bottom;
}
.loader {
  height: 30%;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-radius: 20px;
  background: blue;
  margin-top: 20px;
  animation: changeColor 3s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #beb6b6;
}
@keyframes changeColor {
  0% {
    height: 100%;
  }
  20% {
    height: 20%;
  }
  40% {
    height: 40%;
  }
  60% {
    height: 60%;
  }
  80% {
    height: 80%;
  }
  100% {
    height: 100%;
  }
} */

/* Laval1 design*/
#Laval1 {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  transform: scale(0);
  transform-origin: bottom;
  transition: 0.5s;
  z-index: 12123;
}
#Laval1Top {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  background: #111414;
  color: #9b9b9b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px 1px black;
  z-index: 112258;
}
#Laval1Top h1 {
  height: 50px;
  width: 50px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  z-index: 12358;
}
#Laval1Top h1::after {
  content: "\2715";
}
#Laval1Top h1:hover {
  background: #0000005b;
  color: #313538;
}
/* laval2 style*/
#Laval2 {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  transform: scale(0);
  transform-origin: bottom;
  transition: 0.5s;
  z-index: 12123;
}
#Laval2Top {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  background: #111414;
  color: #9b9b9b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px 1px black;
  z-index: 112258;
}
#Laval2Top h1 {
  height: 50px;
  width: 50px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  z-index: 12358;
}
#Laval2Top h1::after {
  content: "\2715";
}
#Laval2Top h1:hover {
  background: #0000005b;
  color: #313538;
}
/* laval 3 design */
#Laval3 {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  transform: scale(0);
  transform-origin: bottom;
  transition: 0.5s;
  z-index: 13133;
}
#Laval3Top {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  background: #111414;
  color: #9b9b9b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px 1px black;
  z-index: 11358;
}
#Laval3Top h1 {
  height: 50px;
  width: 50px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  z-index: 13358;
}
#Laval3Top h1::after {
  content: "\2715";
}
#Laval3Top h1:hover {
  background: #0000005b;
  color: #313538;
}
/* laval 3 design end */
/* laval4 style*/
#Laval4 {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  transform: scale(0);
  transform-origin: bottom;
  transition: 0.5s;
  z-index: 1414;
}
#Laval4Top {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  background: #111414;
  color: #9b9b9b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px 1px black;
  z-index: 11458;
}
#Laval4Top h1 {
  height: 50px;
  width: 50px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  z-index: 1458;
}
#Laval4Top h1::after {
  content: "\2715";
}
#Laval4Top h1:hover {
  background: #0000005b;
  color: #414548;
}
/* laval5 style*/
#Laval5 {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  transform: scale(0);
  transform-origin: bottom;
  transition: 0.5s;
  z-index: 1515;
}
#Laval5Top {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  background: #111515;
  color: #9b9b9b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px 1px black;
  z-index: 11558;
}
#Laval5Top h1 {
  height: 50px;
  width: 50px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  z-index: 1558;
}
#Laval5Top h1::after {
  content: "\2715";
}
#Laval5Top h1:hover {
  background: #0000005b;
  color: #515558;
}
#taskContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}
.task {
  height: 300px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #000000c0;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  color: #a2a2a2;
  transition: 0.5s;
}
.task:hover {
  background: #161d1f9d;
  color: white;
}
.task p {
  color: #5f6366;
  background: none;
  text-align: center;
  height: 20px;
  width: 100%;
}
#laval1task1clicker1,
#laval1task2clicker2,
#laval1task3clicker3,
#laval1task4clicker4,
#laval1task5clicker5,
#laval1task6clicker6,
#laval1task7clicker7,
#laval1task8clicker8,
#laval1task9clicker9,
#laval1task10clicker10 {
  height: auto;
  width: 300px;
  background: rgba(0, 0, 0, 0.871);
  display: grid;
  place-content: center;
  font-size: large;
  position: relative;
  border-radius: 10px;
  color: white;
}
#laval2task1clicker1,
#laval2task2clicker2,
#laval2task3clicker3,
#laval2task4clicker4,
#laval2task5clicker5,
#laval2task6clicker6,
#laval2task7clicker7,
#laval2task8clicker8,
#laval2task9clicker9,
#laval2task10clicker10 {
  height: auto;
  width: 300px;
  background: rgba(0, 0, 0, 0.871);
  display: grid;
  place-content: center;
  font-size: large;
  position: relative;
  border-radius: 10px;
  color: white;
}

#laval3task1clicker1,
#laval3task2clicker2,
#laval3task3clicker3,
#laval3task4clicker4,
#laval3task5clicker5,
#laval3task6clicker6,
#laval3task7clicker7,
#laval3task8clicker8,
#laval3task9clicker9,
#laval3task10clicker10 {
  height: auto;
  width: 300px;
  background: rgba(0, 0, 0, 0.871);
  display: grid;
  place-content: center;
  font-size: large;
  position: relative;
  border-radius: 10px;
  color: white;
}
#laval4task1clicker1,
#laval4task2clicker2,
#laval4task3clicker3,
#laval4task4clicker4,
#laval4task5clicker5,
#laval4task6clicker6,
#laval4task7clicker7,
#laval4task8clicker8,
#laval4task9clicker9,
#laval4task10clicker10 {
  height: auto;
  width: 400px;
  background: rgba(0, 0, 0, 0.871);
  display: grid;
  place-content: center;
  font-size: large;
  position: relative;
  border-radius: 10px;
  color: white;
}
#laval5task1clicker1,
#laval5task2clicker2,
#laval5task3clicker3,
#laval5task4clicker4,
#laval5task5clicker5,
#laval5task6clicker6,
#laval5task7clicker7,
#laval5task8clicker8,
#laval5task9clicker9,
#laval5task10clicker10 {
  height: auto;
  width: 500px;
  background: rgba(0, 0, 0, 0.871);
  display: grid;
  place-content: center;
  font-size: large;
  position: relative;
  border-radius: 10px;
  color: white;
}
#adContainer {
  height: 300px;
  width: 300px;
  background: blue;
}
img {
  height: 100%;
  width: 100%;
}

#containerForWithdraw {
  height: 70%;
  width: 90%;
  position: fixed;
  top: 70px;
  left: 5%;
  z-index: 124554;
  background: #111414;
  transform: scale(0);
  transition: 0.5s;
  transform-origin: top right;
  box-shadow: 0 0 10px 1px black;
  border-radius: 10px;
  border: #404850 solid 0.1px;
}
#containerForWithdraw::before {
  content: "";
  position: absolute;
  border-color: #2b3438 transparent;
  border-width: 0 17px 18px;
  border-style: solid;
  top: -17px;
  right: 45px;
}
#WithdrawBody {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
#wdTop {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 12589445;
  border-radius: 10px;
}
#wdTop h1 {
  height: 50px;
  width: 50px;
  display: grid;
  place-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 20px;
  background: none;
  transition: 0.5s;
  border-radius: 100px;
}
#wdTop h1:hover {
  background: #2f31315b;
  color: #888b8e;
}
#wdTop h1::before {
  content: "\2715";
  font-weight: lighter;
}

#WithdrawForm {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
#WithdrawForm input {
  padding: 10px 20px;
  border: none;
  color: white;
  box-shadow: 0 0 10px 1px #00000065;
  border-radius: 5px;
  margin-top: 10px;
}
#WithdrawForm input:hover {
  border-bottom: 1px solid blue;
}
#WithdrawForm option {
  padding: 10px 20px;
  box-shadow: 0 0 10px 1px #0000006e;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  color: white;
}
#WithdrawForm option:hover {
  border-bottom: 1px solid blue;
}
#sendBtn {
  display: none;
  padding: 10px 20px;
  box-shadow: 0 0 10px 1px black;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  background: #0a2454;
}
#AlertWallet {
  background: none;
  margin-top: 10px;
  color: white;
}

.musicBg {
  border: none;
  box-shadow: 0 0 50px 1px #23fb5d inset;
}

footer {
  height: auto;
  width: 100%;
  background: none;
  box-shadow: 0 0 10px 1px black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.footerBox {
  height: 250px;
  width: 300px;
  box-shadow: 0 0 10px 1px black;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#logo {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  margin-top: -30px;
}
#logo img {
  height: 100%;
  width: 100%;
  border-radius: 100px;
}
.footerBox h2 {
  background: none;
  color: #636363;
  text-align: center;
}
.footerBox h2:hover {
  color: white;
}
.footerBox p {
  background: none;
  color: #636363;
  text-align: center;
}
.footerBox p:hover {
  color: white;
}
#footerMainPage {
  height: 63%;
  width: 90%;
  box-shadow: 0 0 10px 1px black;
  background: #111414;
  position: fixed;
  top: 70px;
  left: 5%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px#313538 solid;
  transform: scale(0);
  transform-origin: bottom center;
  transition: 0.5s;
}
#footerMainPage::before {
  content: "";
  border-color: #313538 transparent;
  border-width: 19px 15px 0px;
  border-style: solid;
  position: absolute;
  bottom: -20px;
}
#footerPageCloser {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50px;
  width: 50px;
  border-radius: 100px;
  transition: 0.1s;
  transform: scale(1);
  display: grid;
  place-content: center;
  color: #f9fcfd;
}
#footerPageCloser:hover {
  /* box-shadow: 0 0 10px 1px black inset;
  transform: scale(0.8); */
  color: #eb0000;
}
#footerPageCloser::before {
  content: "\2715";
}

#titleInFooterPage {
  color: #cbcbcb;
  padding: 10px 20px;
  margin-left: 10px;
  margin-right: 10px;
}

#contentInFooterPage {
  color: #b8b8b8;
  margin-left: 10px;
  margin-right: 10px;
}
/* Refresh button style */
#AlertMassage {
  height: 50px;
  width: 100%;
  position: fixed;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0);
  display: grid;
  place-content: center;
  bottom: 0;
}
#AlertMassage button {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  font-variant: small-caps;
  padding: 10px 20px;
  box-shadow: 0 0 10px 1px black;
  transition: 0.3s;
  border-radius: 4px;
}
#AlertMassage button:hover {
  background: blue;
}

