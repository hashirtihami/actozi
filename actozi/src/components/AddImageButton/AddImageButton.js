import React from 'react';

export default class AddImageButton extends React.Component{
    fileSelectedHandler = event =>{
        console.log(event);
    }
    render(){
        return(
            <div>
                <input type="file" onChange={this.fileSelectedHandler}/>
            </div>
        )
    }

}