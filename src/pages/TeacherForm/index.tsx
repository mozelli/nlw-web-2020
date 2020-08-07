import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import "./styles.css";
import warningIcon from "../../assets/images/icons/warning.svg";

function TeacherForm() {
    const [ name, setName ] = useState("");
    const [ avatar, setAvatar ] = useState("");
    const [ whatsapp, setWhatsapp ] = useState("");
    const [ bio, setBio ] = useState("");

    const [ subject, setSubject ] = useState("");
    const [ cost, setCost] = useState("");

    function handleSubmit(event: FormEvent) {
        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject, 
            cost
        });

        event.preventDefault();
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher este formulário de inscrição"    
            />
            <main>
                <form onSubmit={ handleSubmit }>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input 
                            name="name" 
                            label="Nome completo"
                            value={ name }
                            onChange={(event) => setName(event.target.value)} />
                        
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={ avatar }
                            onChange={(event) => setAvatar(event.target.value)} />
                        
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={ whatsapp }
                            onChange={(event) => setWhatsapp(event.target.value)} />

                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={ bio }
                            onChange={(event) => setBio(event.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            name="subject" 
                            label="Matéria" 
                            value={ subject }
                            onChange={(event) => setSubject(event.target.value)} 
                            options={ [
                                { value: "Matemática", label: "Matemática" },
                                { value: "Português", label: "Português" },
                                { value: "História", label: "História" },
                                { value: "Geografia", label: "Geografia" },
                                { value: "Biologia", label: "Biologia" },
                                { value: "Química", label: "Química" },
                                { value: "Física", label: "Física" }
                            ] }
                        />
                        
                        <Input 
                            name="cost" 
                            label="Custo da sua aula por hora"
                            value={ cost }
                            onChange={(event) => setCost(event.target.value)} />
                    </fieldset>
                    
                    <fieldset>
                        <legend>
                            <p>
                                Horários disponíveis 
                            </p>
                            <p>
                                <button type="button">
                                    + Novo horário
                                </button>
                            </p>
                            
                        </legend>
                        <div className="schedule-item">
                            <Select 
                                name="week_day" 
                                label="Dia da semana" 
                                options={ [
                                    { value: "0", label: "Domingo" },
                                    { value: "1", label: "Segunda-feira" },
                                    { value: "2", label: "Terça-feira" },
                                    { value: "3", label: "Quarta-feira" },
                                    { value: "4", label: "Quinta-feira" },
                                    { value: "5", label: "Sexta-feira" },
                                    { value: "6", label: "Sábado" },
                                ] }
                            />
                            <Input name="from" label="Das" type="time" />
                            <Input name="to" label="às" type="time" />
                        </div>
                    </fieldset>
                    <footer>
                        <p>
                            <img src={ warningIcon } alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados.
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;