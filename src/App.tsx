import './App.css'
import {SimpleForm} from "./components/SimpleForm";
import { SimpleFormBuilder } from './components/SimpleForm/SimpleFormBuilder';

function App() {
    const eventForm = new SimpleFormBuilder()
        .setTitle("Preencha para criar um novo evento:")
        .addTextField("name", "Nome do evento", "Summer Dev Show")
        .addDateField("date", "Data do evento")
        .setButtonLabel("Criar Evento")
        .build();

    return (
        <main>
            <header>
                <img src={"/logo.png"} alt="logo"/>
            </header>
            <section>
                <img src={"/banner.png"} alt="Banner"/>
            </section>
            <SimpleForm {...eventForm} />
        </main>
    );
}

export default App
