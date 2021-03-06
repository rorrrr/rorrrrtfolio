import React from 'react'
import { Link } from 'react-router'
import League from './League'
import Pokemon from './Pokemon'
import Poker from './Poker'
import Code from './Code'
import Blurb from './Blurb'
import Modals from  '../containers/Modals'


const Main = () => (

  <div id="mainDiv">
  <img id='ahhtoise' src='https://pbs.twimg.com/profile_images/840663605871808513/MFCuSzKj.jpg'></img>
  <img id='portalPony' src='http://orig03.deviantart.net/0c8c/f/2014/146/7/a/pinkie_playing_portal_by_batmanbrony-d7ju06s.gif'></img>
  <img id='glaDOS' src="https://media.giphy.com/media/l0Iy8mJZgWidVmu3e/giphy.gif"></img>
  <div id='inner'>
    <h1>ROry MacDOnald POrtfolio</h1>
    <img id="portal1" src="https://d1v8u1ev1s9e4n.cloudfront.net/57d8393c5ccacf6a8ac749bc"></img>
    <img id="portal2" src="https://d1v8u1ev1s9e4n.cloudfront.net/57d8393c5ccacf6a8ac749bc"></img>
    <img id="portal3" src="https://d1v8u1ev1s9e4n.cloudfront.net/57d8393c5ccacf6a8ac749bc"></img>
    <img id="portal4" src="https://d1v8u1ev1s9e4n.cloudfront.net/57d8393c5ccacf6a8ac749bc"></img>
    <img id="horizontalPortalBlue" src="http://www.pngmart.com/files/3/Portal-PNG-File.png"></img>
    <img id="horizontalPortalOrange" src="http://pre07.deviantart.net/e055/th/pre/f/2013/339/c/d/orange_portal_test_by_narishm-d6wufxw.png"></img>
    <img id="wheatleyBounce" src="https://files.gamebanana.com/img/ico/sprays/51b0064505599.png"></img>
  </div>

  <Blurb></Blurb>

  <h2 id='codeClanTitle'> COdeClan </h2>
  <h2 id='leagueTitle'> League of Legends API </h2>
  <h2 id='pokerTitle'> PrOfessional POker Player </h2>
  <h2 id='pokeTitle'> POkémon Game </h2>


  <div id='portalPics'>

  <img id='pikachu' src='http://24.media.tumblr.com/tumblr_mcm1ec68fN1qfqgb9o1_1280.gif'></img>
  <img id='jinx' src='https://media.giphy.com/media/3bC2xtyZejikU/giphy.gif'></img>
  <img id='codeclan' src='http://codeclan.com/wp-content/uploads/2016/03/favicon.png'></img>
  <img id='poker' src='http://www.picgifs.com/sport-graphics/sport-graphics/playing-cards/sport-graphics-playing-cards-590406.gif'></img>
  </div>

  <Modals></Modals>



  </div>


)

export default Main







// <ul>
//   <li><Link to='/'>Home</Link></li>
//   <li><Link to='/pokemon'>Pokemon</Link></li>
//   <li><Link to='/github'>Github</Link></li>
// </ul>




// <img id="ponyportal" src="http://orig11.deviantart.net/3dbd/f/2013/299/4/2/portal_loop_animation__no_acceleration__by_polarnacht-d6awxh1.gif"></img>