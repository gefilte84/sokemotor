import React from 'react';

// bruke React ref system for å få tilgang til et DOM element
// vi oppretter refs i konstruktøren, gir de instance varialer,
// og gir det videre til en JSX element som en props
class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { spans: 0 };
        // ref
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    render() {

        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans} ` }}>
                <img 
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
                />
            </div>

        )
    }
}

export default ImageCard;