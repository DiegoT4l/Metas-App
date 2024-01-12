import {createContext, useReducer} from "react";

const goalsMock = [
    {
        'id': 1,
        'details': 'Hacer ejercicio por 30min',
        'period': 'día',
        'frequency': 1,
        'icon': '🏃‍♂️',
        'finish': 365,
        'due-date': '2021-12-31',
        'completed': 5
    },
    {
        'id': 2,
        'details': 'Leer 30 páginas',
        'period': 'día',
        'frequency': 1,
        'icon': '📚',
        'finish': 365,
        'due-date': '2021-12-31',
        'completed': 5
    },
    {
        'id': 3,
        'details': 'Comer 2 porciones de fruta',
        'period': 'día',
        'frequency': 1,
        'icon': '🍎',
        'finish': 365,
        'due-date': '2021-12-31',
        'completed': 5
    },
    {
        'id': 4,
        'details': 'No comer carne',
        'period': 'día',
        'frequency': 1,
        'icon': '🥦',
        'finish': 365,
        'due-date': '2021-12-31',
        'completed': 5
    },
    {
        'id': 5,
        'details': 'No tomar alcohol',
        'period': 'día',
        'frequency': 1,
        'icon': '🚫',
        'finish': 365,
        'due-date': '2021-12-31',
        'completed': 5
    },
];

const InitialState = {
    orderList: [],
    objects: {},
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_GOALS': {
            const goals = action.goals;
            return {
                orderList: goals.map((goal) => goal.id),
                objects: goals.reduce((obj, goal) => {
                    obj[goal.id] = goal;
                    return obj;
                }, {})
            };
        }
        case 'CREATE_GOAL': {
            const id = Math.random();
            return {
                orderList: [...state.orderList, id],
                objects: {
                    ...state.objects,
                    [id]: {
                        ...action.goal,
                        id
                    }
                }
            }
        }
        case 'UPDATE_GOAL': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            }
            return { ...state, objects: { ...state.objects }}
        }
        case 'DELETE_GOAL': {
            const id = action.goal.id;
            const newOrder = state.orderList.filter((goalId) => goalId !== id);
            delete state.objects[id];
            return {
                orderList: newOrder,
                objects: { ...state.objects }
            }
        }
        default:
            return console.log('No se encontró el tipo de acción');
    }
}

const goals = reducer(InitialState, {
    type: 'LOAD_GOALS',
    goals: goalsMock
});

export const Context = createContext(null);

function Memory({ children }) {

    const [estate, dispatch] = useReducer(reducer, goals)


    return (
        <Context.Provider value={[ estate, dispatch ]}>
            <div>
                {children}
            </div>
        </Context.Provider>
    );
}

export default Memory;