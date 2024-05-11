import React, {useState} from 'react';
import './App.css';
import {MappedTable, topCars} from "./components/mappedtable/MappedTable";
import {Button} from "./components/mybutton/Button";
import {UseStateButton} from "./components/useStateButton/useStateButton";
import {FilteredListTask} from "./components/filtered-list-task/filteredListTask";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";

function App() {
    const button1Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }

    const button2Foo = (sub: string) => {
        console.log(sub)
    }

    const button3Foo = () => {
        console.log("I'm stupid button")
    }

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        if (title !== '') {
            let newMessage = {message: title}
            setMessage([newMessage, ...message])
        }
    }

    const addMessageHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*<MappedTable cars={topCars}/>*/}
            {/*<Button title={"First"} callBack={() => button1Foo('Ivan', 21)}/>*/}
            {/*<Button title={"Second"} callBack={() => button2Foo('Vasya')}/>*/}
            {/*<Button title={"Stupid button"} callBack={button3Foo}/>*/}
            {/*<UseStateButton/>*/}
            {/*<FilteredListTask/>*/}

            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle} addMessage={addMessageHandler}/>
            <Button callBack={addMessageHandler}>+</Button>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
