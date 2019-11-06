import React from 'react'

export default class FavoriteButton extends React.Component {
    
    state= {
        black: false
    }
    handleAnotherClick = () =>{
        this.props.clickHandler(this.props.data,this.props.whereToSave);
        this.setState({
            black:!this.state.black
        })
    }
    render(){

        return (
            <button className={this.state.black?"blackButton":"whiteButton"} onClick={this.handleAnotherClick}>
            {this.state.black?<i className="fa fa-star fa-2x"> Save to Favorites</i>:<i className="fa fa-star-o fa-2x"> Save to Favorites</i>}
        </button>
    )
}
}
