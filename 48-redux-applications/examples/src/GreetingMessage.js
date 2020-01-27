import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        userName: state.userName
    }
}

const mapDispatchToProps = {

}

export const GreetingMessage = connect(mapStateToProps, mapDispatchToProps)((props) => {
    return (
        <h1>Hello, {props.userName}</h1>
    )
})