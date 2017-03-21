import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from './components/Main'
import Pokemon from './components/Pokemon'
import Github from './components/Github'

window.onload = () => {
  render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
      </Route>
    </Router>,
    document.getElementById('app'),


  )


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

  window.onclick = function(event) {
      if (event.target == modal1 || modal2) {
          modal1.style.display = "none";
          modal2.style.display = "none";

      }
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

  ////////// WIZARD SHIT //////////////////

  window.addEventListener( "scroll", function(event) { if ( document.body.scrollLeft + window.innerWidth === document.body.scrollWidth ) { document.body.scrollLeft = 1 } } )

  window.addEventListener( "scroll", function(e) { if ( document.body.scrollLeft === 0) { document.body.scrollLeft = document.body.scrollWidth } } )

  /////////////////////////////////////////////



}