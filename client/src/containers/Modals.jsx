import React from 'react'
import League from '../components/League'
import Pokemon from '../components/Pokemon'
import Poker from '../components/Poker'
import Code from '../components/Code'
import Blurb from '../components/Blurb'

const Modals = () => (
  <div id='modals'>

    <div id='modalLeague'>
      <div id="leagueModal" className="modal">
        <div className="modal-content">
          <span1 className="close">&times;</span1>
          <League></League>
        </div>
      </div>
    </div>

    <div id='modalPoke'>
      <div id="pokeModal" className="modal">
        <div className="modal-content">
          <span2 className="close">&times;</span2>
          <Pokemon></Pokemon>
        </div>
      </div>
    </div>

    <div id='modalCode'>
      <div id="codeModal" className="modal">
        <div className="modal-content">
          <span3 className="close">&times;</span3>
          <Code></Code>
        </div>
      </div>
    </div>

    <div id='modalPoker'>
      <div id="pokerModal" className="modal">
        <div className="modal-content">
          <span4 className="close">&times;</span4>
          <Poker></Poker>
        </div>
      </div>
    </div>

  </div>

)

export default Modals