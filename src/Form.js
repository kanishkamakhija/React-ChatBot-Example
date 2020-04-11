import React, { Component } from 'react';

class Form extends Component {
  
  state = {
  		value : ''
  }
  
  
  	onChangeHandler = (event) => {
      const text = event.target.value;
      this.setState(() => ({value : text}));
      	
  }

	onSubmitHandler = (event) => {
		event.preventDefault();
      	this.props.updateMessage(this.props.username, this.state.value);
       this.setState(() => ({value : ''}));
    }
  
	render() {
  	return(
    		<form className="input-group" onSubmit={this.onSubmitHandler}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.value} onChange={this.onChangeHandler}/>
                <div className="input-group-append">
                  <button type="submit" className="btn submit-button" disabled={this.props.isDisabled} >
                    SEND
                  </button>
                </div>
            </form>
    
    )}

}

export default Form;