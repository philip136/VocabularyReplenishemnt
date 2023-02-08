import React from "react";
import Card from "../Card/Card.js";
import SentenceUtil from "../Utilities/SentenceUtil.js";


class MainPage extends React.Component {
    /* 
    We should to split the sentence using a word inside one card and replace that place with three dots.
    sentense string: The sentence will be get from backend side.
    Method has returned a new string with replacement.
    */
    constructor(props) {
        super(props)
        this.state = {
            sentenceWasGenerated: false
        };
    }
    
    /**
     * 
     * @param {String} word | Word for predicting.
     * @returns Sentence with predicted word.
     */
    renderSentenceForPredicting(word) {
        const newSentence = SentenceUtil.createSentence(word);
        return newSentence.sentenceWithReplacement;
    }

    /**
     *  Method for rendering Card component.
     * @param {String} cardName Card name (Some word for predicting)
     * @returns Card component.
     */
    renderCard(cardName) {
        return <Card name={cardName} />
    }


    /*
    This method will be render main page. 
    The main page should be consist:
        - Three cards with different words.
        - Above three cards we will have word for predicting.
        - If user didn't predict then this word should be add to vocabulary.
    */
    render() {
        return (
            <div className="main-page">
                <div className="sentence-for-predicting">
                    {
                        this.state.sentenceWasGenerated ? 
                        (
                            <p>{this.renderSentenceForPredicting("Dog")}</p>
                        ) : (<p>Are you ready, click `Start` button for starting</p>)
                    
                    }
                </div>
                <div className="card-sections">
                    {this.renderCard("FirstCard")}
                    {this.renderCard("SecondCard")}
                    {this.renderCard("ThirdCard")}

                    <div className="start-learning-section">
                        {
                            !this.state.sentenceWasGenerated ? 
                            (
                                <button className="start-learning-btn" onClick={() => {this.setState({sentenceWasGenerated: true})}}>
                                    Start
                                </button>
                            ) : 
                            (
                                <button className="end-learning-btn" onClick={() => {this.setState({sentenceWasGenerated: false})}}>
                                    Complete
                                </button>
                            )
                        
                        }
                    </div>
                </div>
                <div className="vocabulary-section"></div>
                
            </div>
        )
    }
}

export default MainPage;