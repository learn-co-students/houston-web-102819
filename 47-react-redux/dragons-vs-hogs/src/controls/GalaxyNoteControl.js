import React from 'react';
import { useDispatch } from 'react-redux'

export function GalaxyNoteControl() {
    const dispatch = useDispatch()
    return (
        <div style={{ padding: '5px', width: '25%', float: 'right', borderStyle: 'solid', borderColor: 'black' }}>
            <p>Galaxy</p>
            <button onClick={() => dispatch({ type: 'ATTACK_GALAXY_NOTE', damage: 1 })} >
                Attack
            </button>
            <button onClick={() => dispatch({ type: 'HEAL_GALAXY_NOTE' })} >
                Heal
            </button>
        </div>
    );
}