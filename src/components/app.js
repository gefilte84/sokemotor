import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    // med async foran navnet da kan vi bruke syntaxen til async
    async onSearchSubmit(term) {
        const response = await axios
        // bruke axios til å hente bilder
        .get('https://api.unsplash.com/search/photos', {
        params: { query: term },   
        headers: {
                Authorization: 'Client-ID L-mxEgieoh3TzlnYwaS_8SAsGCC1FbzrKRPaTjllF9M'
            }
        });// metode for å få dataen 
      
        console.log(response.data.results);
    }



//Searchbar UI
    render() {
        return ( 
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
    );
    }
}

export default App;