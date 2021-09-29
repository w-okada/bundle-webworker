import './App.css';
import { WebWorkerLibJs } from 'webworker-lib'
import { WebWorkerLibTs } from 'webworker-lib-ts'
import { useMemo } from 'react';

function App() {

    const libJs = useMemo(()=>{
        return new WebWorkerLibJs()
    },[])

    const libTs = useMemo(()=>{
       return new WebWorkerLibTs()
    },[])

    const handleClick = () => {
        libJs.sendMessage()
        libTs.sendMessage()
    }

    return (
        <div className="App">
            <button onClick={handleClick}>Send Message</button>
        </div>
    );
}

export default App;
