import {createStore} from 'redux';

const initialState = {
    firstNumber: '',
    secondNumber: '',
    result: '',
    actionType: '',
    actionsPerformedCount: 0
}

const counterReducer = (state = initialState, action) => {
    if(action.type === 'firstNumber') {
        const finalValue = {...state, firstNumber: action.firstNumberChange};
        return finalValue;
    }

    if(action.type === 'secondNumber') {
        const finalValue =  {...state, secondNumber: action.secondNumberChange};
        return finalValue;
    }

    if(action.type === 'add') {
        const result = (state.firstNumber) + (state.secondNumber);
        const finalValue =  {...state, result: result, actionType: '+', actionsPerformedCount: state.actionsPerformedCount + 1};
        return finalValue;
    }

    if(action.type === 'subtract') {
        const result = (state.firstNumber) - (state.secondNumber);
        const finalValue =  {...state, result: result, actionType: '-', actionsPerformedCount: state.actionsPerformedCount + 1};
        return finalValue;
    }

    if(action.type === 'multiply') {
        const result = (state.firstNumber) * (state.secondNumber);
        const finalValue =  {...state, result: result, actionType: '*', actionsPerformedCount: state.actionsPerformedCount + 1};
        return finalValue;
    }

    if(action.type === 'division') {
        const result = (state.firstNumber) / (state.secondNumber);
        const finalValue =  {...state, result: result.toFixed(2), actionType: '/', actionsPerformedCount: state.actionsPerformedCount + 1};
        return finalValue;
    }

    if(action.type === 'reset') {
        return initialState;
    }

    return state;
}

const store = createStore(counterReducer);

export default store;
