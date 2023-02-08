import React from "react";


class Card extends React.Component {
    /*
    This is base card representation.        
    Shirt of card up or down, by default up
    props: Props have attribute `name`. This attribute is card name, we pass that from MainPage component.
    */

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            name: null,
        };
    }

    /* Flip the card for checking text on card */
    flip() {
        this.setState({
            isHidden: !this.state.isHidden, 
            name: !this.state.isHidden ? null : this.props.name
        });
    }

    render() {
        return (
            <div className="card" onClick={() => this.flip()}>
                <div className="card-name">
                    <h2>{this.state.name}</h2>
                </div>
            </div>
        )
    }
}

export default Card;