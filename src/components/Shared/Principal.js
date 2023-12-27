import './Principal.css';

function Principal({ children }) {
    return (
        <div className='principal'>
            <aside className='aside'>
                <a href="/lista">Lista</a>
                <a href="/crear">Crear</a>
            </aside>
            <main className='main'>
                {children}
            </main>
        </div>
    );
}

export default Principal;