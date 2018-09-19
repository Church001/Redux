import React, { Component } from 'react';
import { connect } from 'react-redux';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

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
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onShowResult(this.props.count)}>STORE RESULT</button>
                <ul>
                    {this.props.storedResults.map( strResults => (
                        <li 
                        onClick={() => this.props.onDelete(strResults.id)} 
                            key={strResults.id}>
                            {strResults.value}
                        </li>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.count.counter,
        storedResults: state.result.results
    };
};
 // eslint-disable-next-line
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrement: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, payload: {value: 10}}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, payload: {value: 8}}),
        onShowResult: (result) => dispatch({type: actionTypes.SHOW_RESULT, result: result}),
        onDelete: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);