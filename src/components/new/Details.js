import styles from './Details.module.css';
import { useState } from 'react';

function Details() {

    const [form, setForm] = useState({
        details: '',
        events: 1,
        frequency: 'semana',
        icon: '🏃‍♂️',
        goal: 52,
        limitDate: '2030-12-31',
        completed: 0
    });

    const {
        details,
        events,
        frequency,
        icon,
        goal,
        limitDate,
        completed
    } = form;

    const onchange = (e, prop) => {
        setForm(estate => ({
            ...estate,
            [prop]: e.target.value
        }))
    }

    const createButton = async () => {
        console.log('[MetasAPP]: Formulario creado con éxito.\n', form);
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
                        onChange={(e) => {onchange(e, 'details')}}
                    />
                </label>
                <label className='label'>
                    ¿Con qué frecuencia deseas cumplir tu meta?<span>(Ej. Una vez a la semana)</span>
                    <div className='flex mb-6'>
                        <input
                            className='input mr-6'
                            value={events} type='number'
                            placeholder='1'
                            onChange={(e) => {onchange(e, 'events')}}
                        />
                        <select
                            className='input'
                            value={frequency}
                            onChange={(e) => {onchange(e, 'frequency')}}
                        >
                            {frequencyFunction.map((frequency) => {
                                return <option key={frequency} value={frequency}>{frequency}</option>
                            })}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    ¿Cuantas veces deseas completar esta meta?
                    <input
                        className='input'
                        value={goal}
                        type='number'
                        placeholder='52'
                        onChange={(e) => {onchange(e, 'goal')}}
                    />
                </label>
                <label className='label'>
                    ¿Tienes una fecha limite?
                    <input
                        className='input'
                        value={limitDate}
                        type='date'
                        onChange={(e) => {onchange(e, 'limitDate')}}
                    />
                </label>
                <label className='label'>
                    ¿Cuantas veces ya has completado esta meta?
                    <input
                        className='input'
                        type='number'
                        value={completed}
                        onChange={(e) => {onchange(e, 'completed')}}
                    />
                </label>
                <label className='label'>
                    Escoge un icono para tu meta
                    <select
                        className='input'
                        value={icon}
                        onChange={(e) => {onchange(e, 'icon')}}
                    >
                        {icons.map((icon) => {
                            return <option key={icon} value={icon}>{icon}</option>
                        })}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                <button
                    className='button button--black'
                    onClick={createButton}
                >Guardar
                </button>
                <button className='button button--gray'>Cancelar</button>
            </div>
        </div>
    );
}

export default Details;