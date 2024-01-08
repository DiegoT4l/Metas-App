import Goal from "./Goal";

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

function List() {
    return ( 
        goalsMock.map((goal) => <Goal key={goal.id} {...goal} />)
    );
}

export default List;