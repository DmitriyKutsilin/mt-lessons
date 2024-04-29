import React from 'react';
import './App.css';
import {MappedTable, topCars} from "./components/mappedtable/MappedTable";
import {Button} from "./components/mybutton/Button";
import {UseStateButton} from "./components/useStateButton/useStateButton";
import {FilteredListTask} from "./components/filtered-list-task/filteredListTask";

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

    return (
        <div className="App">
            {/*<MappedTable cars={topCars}/>*/}
            {/*<Button title={"First"} callBack={() => button1Foo('Ivan', 21)}/>*/}
            {/*<Button title={"Second"} callBack={() => button2Foo('Vasya')}/>*/}
            {/*<Button title={"Stupid button"} callBack={button3Foo}/>*/}
            {/*<UseStateButton/>*/}
            <FilteredListTask/>
        </div>
    );
}

export default App;
