import styles from './Details.module.css';
import {useContext, useEffect, useState} from 'react';
import {Context} from "../../services/Memory";
import {useNavigate, useParams} from "react-router-dom";
import {createGoal, deleteGoal, updateGoal} from "../../services/Requests";


function Details() {

    const {id} = useParams(); // <--- Obtiene el id de la url si existe

    const [form, setForm] = useState({
        details: '',
        frequency: 1,
        period: 'semana',
        icon: '🏃‍♂️',
        finish: 52,
        limitDate: '2030-12-31',
        completed: 0
    });

    const {
        details,
        period,
        frequency,
        icon,
        finish,
        limitDate,
        completed
    } = form;

    const [state, dispatch] = useContext(Context); // <--- Obtiene el estado global y el dispatch del contexto

    const onChange = (e, prop) => {
        setForm(prevEstate => ({
            ...prevEstate,
            [prop]: e.target.value
        }))
    }

    const navigate = useNavigate();
    const goalMemory = state.objects[id]; // <--- Obtiene el objeto de la memoria

    useEffect(() => {
        if (!id) return;
        if (!goalMemory) {
            return navigate('/list');
        }
        setForm(goalMemory);
    }, [id, goalMemory, navigate]);

    const create = async () => {
        const newGoal = await createGoal();
        dispatch({ type : 'CREATE_GOAL', goal: newGoal });
        navigate('/list');
    }

    const update = async () => {
        const updatedGoal = await updateGoal();
        dispatch({ type : 'UPDATE_GOAL', goal: updatedGoal });
        navigate('/list');
    }

    const deleteG = async () => {
        const idDeleted = await deleteGoal();
        dispatch({ type : 'DELETE_GOAL', goal: idDeleted });
        navigate('/list');
    }

    const closeModal = () => {
        navigate('/list')
    }

    const frequencyFunction = ['día', 'semana', 'mes', 'año'];
    const icons = ['🏃‍♂️', '📚', '🍎', '💰', '🚫'];

    return (
        <div className='card'>
            <form className='p-4'>
                <label className='label'>
                    Describe tu meta
                    <input
                        className='input'
                        value={details}
                        placeholder='Ej. 52 caminatas'
                        type='text'
                        onChange={e => onChange(e, 'details')}
                    />
                </label>
                <label className='label'>
                    ¿Con qué frecuencia deseas cumplir tu meta?<span>(Ej. Una vez a la semana)</span>
                    <div className='flex mb-6'>
                        <input
                            className='input mr-6'
                            value={frequency} type='number'
                            placeholder='1'
                            onChange={e => onChange(e, 'frequency')}
                        />
                        <select
                            className='input'
                            value={period}
                            onChange={(e) => {onChange(e, 'period')}}
                        >
                            {frequencyFunction.map((period) => {
                                return <option key={period} value={period}>{period}</option>
                            })}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    ¿Cuantas veces deseas completar esta meta?
                    <input
                        className='input'
                        value={finish}
                        type='number'
                        placeholder='52'
                        onChange={(e) => {onChange(e, 'finish')}}
                    />
                </label>
                <label className='label'>
                    ¿Tienes una fecha limite?
                    <input
                        className='input'
                        value={limitDate}
                        type='date'
                        onChange={(e) => {onChange(e, 'limitDate')}}
                    />
                </label>
                <label className='label'>
                    ¿Cuantas veces ya has completado esta meta?
                    <input
                        className='input'
                        type='number'
                        value={completed}
                        onChange={(e) => {onChange(e, 'completed')}}
                    />
                </label>
                <label className='label'>
                    Escoge un icono para tu meta
                    <select
                        className='input'
                        value={icon}
                        onChange={(e) => {onChange(e, 'icon')}}
                    >
                        {icons.map((icon) => {
                            return <option key={icon} /*value={icon}*/>{icon}</option>
                        })}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                {!id && <button
                    className='button button--black'
                    onClick={create}
                >Guardar
                </button>}
                {id && <button
                    className='button button--black'
                    onClick={update}
                >Actualizar
                </button>}
                {id && <button
                    className='button button--red'
                    onClick={deleteG}
                >Borrar
                </button>}
                <button
                    className='button button--gray'
                    onClick={closeModal}
                >Cancelar
                </button>
            </div>
        </div>
    );
}

export default Details;