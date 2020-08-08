import React, { useState, FormEvent } from "react";

import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import api from "../../services/api";

function TeacherList() {
    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState("");

    const [teachers, setTeachers] = useState([]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        api.get("classes", {
            params: {
            subject,
            week_day,
            time
        }}).then(response => {
            setTeachers(response.data);
        }).catch((error) => {
            alert("error");
            console.log(error);
        });
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={ handleSubmit }>
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        value={ subject } 
                        onChange={ event => setSubject(event.target.value) } 
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

                    <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        value={ week_day } 
                        onChange={ event => setWeekDay(event.target.value) } 
                        options={ [
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado" }
                        ] }
                    />

                    <Input 
                        type="time" 
                        name="time" 
                        label="Horário"
                        value={ time } 
                        onChange={ event => setTime(event.target.value) } />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                { teachers.map( (teacher: Teacher) => {
                    return <TeacherItem key={ teacher.id } teacher={ teacher } />;
                } ) }
            </main>
        </div>
        );
}

export default TeacherList;