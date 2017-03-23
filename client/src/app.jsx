import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from './components/Main'
import League from './components/League'
import Pokemon from './components/Pokemon'
import Poker from './components/Poker'
import Code from './components/Code'
import Modals from  './containers/Modals'

window.onload = () => {

  render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
      </Route>
    </Router>,
    document.getElementById('app')

  )

  document.body.scrollLeft = 1284;

  /////////////// PORTAL 1 //////////////////////

  var modal1 = document.getElementById('leagueModal');

  var btn1 = document.getElementById("portal1");
  var jinx = document.getElementById("jinx");

  var span1 = document.getElementsByClassName("close")[0];

  btn1.onclick = function() {
      modal1.style.display = "block";
  }

  jinx.onclick = function() {
      modal1.style.display = "block";
  }

  span1.onclick = function() {
      modal1.style.display = "none";
  }

 
  /////////////// PORTAL 2 //////////////////////

  var modal2 = document.getElementById('pokeModal');

  var btn2 = document.getElementById("portal2");
  var pikachu = document.getElementById("pikachu");

  var span2 = document.getElementsByClassName("close")[1];

  btn2.onclick = function() {
      modal2.style.display = "block";
  }

  pikachu.onclick = function() {
      modal2.style.display = "block";
  }

  span2.onclick = function() {
      modal2.style.display = "none";
  }

  /////////////// PORTAL 3 //////////////////////

  var modal3 = document.getElementById('codeModal');

  var btn3 = document.getElementById("portal3");
  var codeclan = document.getElementById("codeclan");

  var span3 = document.getElementsByClassName("close")[2];

  btn3.onclick = function() {
      modal3.style.display = "block";
  }

  codeclan.onclick = function() {
      modal3.style.display = "block";
  }

  span3.onclick = function() {
      modal3.style.display = "none";
  }

  /////////////// PORTAL 4 //////////////////////

  var modal4 = document.getElementById('pokerModal');

  var btn4 = document.getElementById("portal4");
  var poker = document.getElementById("poker");

  var span4 = document.getElementsByClassName("close")[3];

  btn4.onclick = function() {
      modal4.style.display = "block";
  }

  poker.onclick = function() {
      modal4.style.display = "block";
  }

  span4.onclick = function() {
      modal4.style.display = "none";
  }

  ////////////////////////

  window.onclick = function(event) {
      if (event.target == modal1) {
          modal1.style.display = "none";
      }
      if (event.target == modal2) {
          modal2.style.display = "none";
      }
      if (event.target == modal3) {
          modal3.style.display = "none";
      }
      if (event.target == modal4) {
          modal4.style.display = "none";
      }
  }
///////////////////////////

 

  ////////// WIZARD SHIT //////////////////

  window.addEventListener( "scroll", function(event) { if ( document.body.scrollLeft + window.innerWidth === document.body.scrollWidth ) { document.body.scrollLeft = 1 } } )

  window.addEventListener( "scroll", function(event) { if ( document.body.scrollLeft === 0) { document.body.scrollLeft = document.body.scrollWidth - 1 } } )

  /////////////////////////////////////////////

  var blastoise = document.getElementById('blastoise');
  var ahhtoise = document.getElementById('ahhtoise');

  blastoise.onclick = function(event) {
    ahhtoise.style.opacity = 1;
    ahhtoise.style.visibility = 'visible';
  }

  ahhtoise.onclick =function(event) {
    ahhtoise.style.opacity = 0;
    ahhtoise.style.visibility = 'hidden';
  }

  var pony = document.getElementById('pony');
  var portalPony = document.getElementById('portalPony');

  pony.onclick = function(event) {
    portalPony.style.opacity = 1;
    portalPony.style.visibility = 'visible';
  }

  portalPony.onclick =function(event) {
    portalPony.style.opacity = 0;
    portalPony.style.visibility = 'hidden';
  }

}