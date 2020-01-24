import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';
import { useSelector } from 'react-redux'


export function GalaxyNote() {
    const health = useSelector(state => state.galaxyNote)
    return (
        <div>
            <h3>GalaxyNote</h3>
            <HealthBar health={health} />
            <img style={{ height: '100px' }} src="https://res.cloudinary.com/dabeyvbyw/image/upload/v1544712623/galaxy_note.jpg" />
        </div>
    )
}