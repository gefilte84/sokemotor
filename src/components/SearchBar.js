import React from 'react';

// SearchBar
class SearchBar extends React.Component {
    state = { term: ''}; // Dette vil innholde hva bruker skriver
    
    // hindrer siden i å reloade ved ENTER trykk
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    };

    render () {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                <label>Image Search</label>
                <input type ="text"  
                value={this.state.term} 
                onChange={e => this.setState({ term: e.target.value})}/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;