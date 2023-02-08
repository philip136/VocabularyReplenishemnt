import React from "react";

class Vocabulary extends React.Component {
    /*
    This method will be render a vocabulary.
    Each word will be stored until the user remembers it (I'm going to think about solution for remembiring).
    */
    render() {
        return (
            <div className="vocabulary">
                <h1>Your Vocabulary</h1>
                <table></table>
            </div>
        );
    }
}

export default Vocabulary;

