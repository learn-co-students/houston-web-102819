import React from 'react'
import {SketchPicker} from 'react-color'



export default class ColorPicker extends React.Component {
 
    state = {
        currentColor: this.props.currentColor
    }

    handleChange = (color) => {
        this.setState({
            currentColor: color.hex
        })
        this.props.handleChange(color)
    }

 
    render() {
        return (
            <SketchPicker color = {this.state.currentColor} onChangeComplete = {this.handleChange}/>
        )
    }
}