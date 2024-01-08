function Details() {
    const frequencyFunction = ['día', 'semana', 'mes', 'año'];
    const icons = ['🏃‍♂️', '📚', '🍎', '💰', '🚫'];

    return (
        <div>
            <form>
                <label>
                    Describe tu meta
                    <input placeholder='Ej. 52 caminatas' type='text' />
                </label>
                <label>
                    ¿Con qué frecuencia deseas cumplir tu meta?<span>(Ej. Una vez a la semana)</span>
                    <div>
                        <input type='number' placeholder='1'/>
                        <select>
                            {frequencyFunction.map((frequency) => {
                                return <option value={frequency}>{frequency}</option>
                            })}
                        </select>
                    </div>
                </label>
                <label>
                    ¿Cuantas veces deseas completar esta meta?
                    <input type='number' placeholder='52'/>
                </label>
                <label>
                    ¿Tienes una fecha limite?
                    <input type='date' />
                </label>
                <label>
                    ¿Cuantas veces ya has completado esta meta?
                    <input type='number' />
                </label>
                <label>
                    Escoge un icono para tu meta
                    <select>
                        {icons.map((icon) => {
                            return <option value={icon}>{icon}</option>
                        })}
                    </select>
                </label>
            </form>
            <div>
                <button>Guardar</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Details;