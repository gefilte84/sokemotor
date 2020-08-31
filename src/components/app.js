import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    // initierer state
    state = { images: [] };
    // med async foran navnet, kan vi bruke syntaxen til async
    onSearchSubmit = async (term) => {
        const response = await unsplash
        // bruke axios til å hente bilder
        .get('https://api.unsplash.com/search/photos', {
        params: { query: term },   
        
        });// metode for å få dataen 

      // oppdaterer state med bilder fra resultatene til unsplash
        this.setState ({ images: response.data.results });
    }



//Searchbar UI
    render() {
        return ( 
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images} />
        </div>
    );
    }
}

export default App;