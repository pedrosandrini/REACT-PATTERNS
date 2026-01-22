import './App.css'
import {SimpleForm} from "./components/SimpleForm";
import { SimpleFormBuilder } from './components/SimpleForm/SimpleFormBuilder';

function App() {
    const themes = [
        {
            id: "1",
            value: "Cyber Security",
        },
        {
            id: "2",
            value: "Data Mining",
        },
        {
            id: "3",
            value: "DevSecOps",
        }
    ]

    const eventForm = new SimpleFormBuilder()
        .setTitle("Preencha para criar um novo evento:")
        .addTextField("name", "Nome do evento", "Summer Dev Show")
        .addDateField("date", "Data do evento")
        .addSelect("theme", "Tema do Evento", "themes", themes)
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
