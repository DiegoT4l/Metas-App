import { useEffect, useContext } from 'react';
import { Context } from './services/Memory';
import { requestGoals } from './services/Requests';
import './App.css';
import Layout from "./components/Shared/Layout";
import {Route, Routes} from "react-router-dom";
import List from "./components/list/List";
import Details from "./components/new/Details";
import NotFound from "./components/Shared/NotFound";
import Modal from "./components/Shared/Modal";

function App() {

    const [, dispatch] = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const goals = await requestGoals(); // Espera la respuesta
                dispatch({ type: 'LOAD_GOALS', goals });
            } catch (error) {
                console.error("Error fetching goals:", error);
            }
        };

        fetchData(); // Llama a la función asíncrona
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<List />}/>
                <Route path='/list' element={<List />}>
                    <Route path={'/list/:id'} element={
                        <Modal>
                            <Details />
                        </Modal>
                    }/>
                </Route>
                <Route path='/create' element={<Details />}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}

export default App;