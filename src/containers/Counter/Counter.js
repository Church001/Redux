import React, { Component } from 'react';
import { connect } from 'react-redux';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {// eslint-disable-next-line
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.count} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onShowResult}>STORE RESULT</button>
                <ul>
                    <li onClick={this.props.onDelete}></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter
    };
};
 // eslint-disable-next-line
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', payload: {value: 10}}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', payload: {value: 8}}),
        onShowResult: () => dispatch({type: 'SHOW_RESULT'}),
        onDelete: () => dispatch({type: 'DELETE'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);