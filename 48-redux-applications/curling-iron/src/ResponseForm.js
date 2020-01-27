import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {
    handleSubmit:  (e) => dispatch => {
        e.preventDefault()
        const response = {
            "Cohort": e.target["Cohort"].value,
            "First Name": e.target["First Name"].value,
            "Last Name": e.target["Last Name"].value,
            "Birthday": e.target["Birthday"].value,
            "Gender": e.target["Gender"].value,
            "Country": e.target["Country"].value,
            "Description": e.target["Description"].value,
            "Favorite Music Genre": e.target["Favorite Music Genre"].value,
            "Favorite Movie Genre": e.target["Favorite Movie Genre"].value,
            "Favorite Food": e.target["Favorite Food"].value,
            "What languages do you speak?": e.target["What languages do you speak?"].value
        }
        fetch( 'http://localhost:3001/responses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)
        })
            .then( res => res.json())
            .then( result => {
                //if(result.okay){
                    dispatch({ type: 'RESPONSE_SUBMITTED' })
                // } else {
                //     // they need to fix stuff
                // }
            }) 
        
    }
}

const ResponseForm = connect(mapStateToProps, mapDispatchToProps)((props) => {

    const handleChange = () => {

    } 

    return (
        <div className="ResponseForm">
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Cohort</label>
                    <input name="Cohort" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>First Name</label>
                    <input name="First Name" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input name="Last Name" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>Birthday</label>
                    <input name="Birthday" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>Gender</label>
                    <input name="Gender" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>Country</label>
                    <input name="Country" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>Description</label>
                    <input name="Description" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>Favorite Movie Genre</label>
                    <input name="Favorite Movie Genre" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>Favorite Music Genre</label>
                    <input name="Favorite Music Genre" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>Favorite Food</label>
                    <input name="Favorite Food" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label>What languages do you speak?</label>
                    <input name="What languages do you speak?" type="text" onChange={handleChange} />
                </div>
                <button>Submit</button>
            </form>
        </div>

    );

})

export default ResponseForm;