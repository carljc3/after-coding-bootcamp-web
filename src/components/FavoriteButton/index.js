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
    favoriteThingHandler = (data,type)=>{
      if(type==='job'){
        //save to jobs array
        this.setState({black: !this.state.black})
      } else if(type==="video"){
        //save to video array
        this.setState({black: !this.state.black})
      } else if(type==="articles"){
        //save to articles array
        this.setState({black: !this.state.black})
      }
      console.log(data,type)
    }

    render(){
    
     return (
      <button className={this.state.black?"blackButton":"whiteButton"} onClick={this.handleAnotherClick}>
            {this.state.black?<i className="fa fa-star fa-2x"> Save to Favorites</i>:<i className="fa fa-star-o fa-2x"> Save to Favorites</i>}
        </button>
    )}}
      

// <i class="fa fa-star fa-2x"></i> <---filled

// <i class="fa fa-star-o fa-2x"></i> <---unfilled

