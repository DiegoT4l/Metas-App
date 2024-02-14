import {createContext, useReducer} from "react";


const InitialState = {
    orderList: [],
    objects: {},
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_GOALS': {
            const goals = action.goals;
            const newState = {
                orderList: goals.map(goal => goal.id),
                objects: goals.reduce((obj, goal) => {
                    obj[goal.id] = goal;
                    return obj;
                }, {})
            }
            return newState;
        }
        case 'CREATE_GOAL': {
            const id = action.goal.id;
            const newState = {
                orderList: [...state.orderList, id],
                objects: {
                    ...state.objects,
                    [id]: {
                        ...action.goal,
                        id
                    }
                }
            }
            return newState;
        }
        case 'UPDATE_GOAL': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            }
            const newState = { ...state };
            return newState;
        }
        case 'DELETE_GOAL': {
            const id = action.goal;
            const newOrder = state.orderList.filter((goalId) => goalId !== id);
            delete state.objects[id];
            const newState = {
                orderList: newOrder,
                objects: { ...state.objects }
            }
            return newState;
        }
        default:
            throw new Error('Action not found');
    }
}

export const Context = createContext(null);

function Memory({ children }) {

    const [estate, dispatch] = useReducer(reducer, InitialState)


    return (
        <Context.Provider value={[ estate, dispatch ]}>
            <div>
                {children}
            </div>
        </Context.Provider>
    );
}

export default Memory;