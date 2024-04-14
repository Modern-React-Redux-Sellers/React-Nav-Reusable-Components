import Button from "../components/Button";
import {useReducer} from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment-count';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement-count';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case CHANGE_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count:state.count + state.valueToAdd,
                valueToAdd:0
            };
        default:
            return state;
    }

}

const CounterPage = ({initialCount}) => {
    // const [count, setCount] = useState(0);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () =>{
        dispatch({
            type:INCREMENT_COUNT
        });
    }

    const decrement = () => {
        dispatch({
            type:DECREMENT_COUNT
        })
    };

    const handleChange = (event) => {
       const value = parseInt(event.target.value) || 0;
       dispatch({
           type: CHANGE_VALUE_TO_ADD,
           payload: value
       })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:'add_value_to_count',

        })
    }
    return (
        <Panel className="m-3">
            <h1 className="text-lg">count is {state.count}</h1>
            <div className="flex flex-row">
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                <Button>Add it!</Button>
            </form>
        </Panel>

    )
}

export default CounterPage;