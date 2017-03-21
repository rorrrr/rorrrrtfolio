import React from 'react'
import { Link } from 'react-router'

const Main = () => (

  <div id="mainDiv">
  <div>
    <h1>RORY MACDONALD PORTFOLIO</h1>
    <img id="portal1" src="https://d1v8u1ev1s9e4n.cloudfront.net/57d8393c5ccacf6a8ac749bc"></img>
    <img id="portal2" src="https://d1v8u1ev1s9e4n.cloudfront.net/57d8393c5ccacf6a8ac749bc"></img>
    <img id="portal3" src="https://d1v8u1ev1s9e4n.cloudfront.net/57d8393c5ccacf6a8ac749bc"></img>
    <img id="portal4" src="https://d1v8u1ev1s9e4n.cloudfront.net/57d8393c5ccacf6a8ac749bc"></img>
    <img id="horizontalPortalBlue" src="http://www.pngmart.com/files/3/Portal-PNG-File.png"></img>
    <img id="horizontalPortalOrange" src="http://pre07.deviantart.net/e055/th/pre/f/2013/339/c/d/orange_portal_test_by_narishm-d6wufxw.png"></img>
    <img id="wheatleyBounce" src="https://files.gamebanana.com/img/ico/sprays/51b0064505599.png"></img>
  </div>

  <div id="mainBlurb">Psychology graduate keen to transition the analytical skills acquired as a professional poker player to a career in software development.
  <br></br>
  <br></br>
 
  Scroll Left for Projects ... Right for Experience
  <br></br>
  <br></br>
  Click on a Portal for more Info
  </div>

  <h2 id='codeClanTitle'> COdeClan </h2>
  <h2 id='leagueTitle'> League of Legends API </h2>
  <h2 id='pokerTitle'> PrOfessional POker Player </h2>
  <h2 id='pokeTitle'> POkémon Game </h2>


  <div id='portalPics'>

  <img id='pikachu' src='http://24.media.tumblr.com/tumblr_mcm1ec68fN1qfqgb9o1_1280.gif'></img>
  <img id='jinx' src='http://media.lolusercontent.com/api/embedly/1/image/resize?url=http%3A%2F%2Forig08.deviantart.net%2F097e%2Ff%2F2015%2F116%2F9%2Fe%2Fget_jinxed_lol_pixel_by_kajinman-d74jgbv.gif&key=a45e967db0914c7fb472fd4381e6c85b&width=425'></img>
  <img id='codeclan' src='http://codeclan.com/wp-content/uploads/2016/03/favicon.png'></img>
  <img id='poker' src='http://www.picgifs.com/sport-graphics/sport-graphics/playing-cards/sport-graphics-playing-cards-590406.gif'></img>
  </div>

  <div id='modals'>

    <div id='modalLeague'>
      <div id="leagueModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>League of Legends Project</p>
        </div>
      </div>
    </div>

    <div id='modalPoke'>
      <div id="pokeModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Pokemon Project</p>
        </div>
      </div>
    </div>

    <div id='modalCode'>
      <div id="codeModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>CodeClan</p>
        </div>
      </div>
    </div>

    <div id='modalPoker'>
      <div id="pokerModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Poker Life</p>
        </div>
      </div>
    </div>


  </div>

  </div>


)

export default Main

// <ul>
//   <li><Link to='/'>Home</Link></li>
//   <li><Link to='/pokemon'>Pokemon</Link></li>
//   <li><Link to='/github'>Github</Link></li>
// </ul>

// <img id="ponyportal" src="http://orig11.deviantart.net/3dbd/f/2013/299/4/2/portal_loop_animation__no_acceleration__by_polarnacht-d6awxh1.gif"></img>