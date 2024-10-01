import React, { Component } from "react";
import { AddButton } from "./AddButton";
import { SubtractionButton } from "./Subtraction";
import { CounterText } from "./CounterText";

class Counter extends Component {
    // Так можна зберігати дефолтні значення
    static defaultProps = {
        startValue: 0,
    }


    state = {
        test: "test",
        totalSum: this.props.startValue,
        //Ми через this.props.startValue отримали значення пропса який передали з компоненту App
    }

    adding = () => {
        // Цей спосіб зміни стейту нам підходить тоді коли нам не потрібне попереднє значення стейту для дії;
        // Коли ми хочемо просто перезаписати стейт на нове значення не прив'язуючись до попереднього значення стейту
        // this.setState({ 
        //     totalSum: 2,
        // })
        // Цей спосіб зміни стейту нам підходить тоді коли ми хочемо використати попереднє значення стейту, щоб отримати нове
        this.setState((prevState) => ({ totalSum: prevState.totalSum + 1, }))
    }
    subtraction = () => {
        this.setState((prevState) => ({ totalSum: prevState.totalSum - 1 }))
    }
    render() {
        return (
            <div>
                <AddButton add={this.adding} />
                <CounterText result={this.state.totalSum}/>
                <SubtractionButton sub={this.subtraction} />
                <p>{this.state.test}</p>
            </div>
        )
    }
}

export default Counter;