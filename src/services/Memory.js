import {createContext, useReducer} from "react";


const memory = localStorage.getItem('goals');
const InitialState = memory ?
    JSON.parse(memory) :
    {
    orderList: [],
    objects: {},
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_GOALS': {
            const goals = action.goal || []; // <--- Si no hay goals, se crea un array vacío.
            const newState = {
                orderList: goals.map((goal) => goal.id),
                objects: goals.reduce((obj, goal) => {
                    obj[goal.id] = goal;
                    return obj;
                }, {})
            }
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        }
        case 'CREATE_GOAL': {

            function generateId(min, max) {
                const numbers = [];
                for (let i = min; i <= max; i++) {
                    numbers.push(i);
                } // <--- Array con números del 1 al 100000

                // Algoritmo de Fisher-Yates para desordenar el array.
                for (let i = numbers.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
                }

                return numbers[0]; // <--- Devuelve un número aleatorio del 1 al 100000
            }

            const id = generateId(1, 100000);
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
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        }
        case 'UPDATE_GOAL': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            }
            const newState = { ...state };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        }
        case 'DELETE_GOAL': {
            const id = action.goal.id;
            const newOrder = state.orderList.filter((goalId) => goalId !== id);
            delete state.objects[id];
            const newState = {
                orderList: newOrder,
                objects: { ...state.objects }
            }
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        }
        default:
            throw new Error('Action not found');
    }
}

// reducer(InitialState, {
//     type: 'LOAD_GOALS',
//     goals: goalsMock
// });

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