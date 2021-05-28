import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [documents, setDocuments] = useState([...articles])

    const handle1 = () => {
        const n = [...documents].sort(function (a, b) {
            return Number(a.upvotes) - Number(b.upvotes);
        }).reverse()
        setDocuments(n)
        console.log(n)
    }
    const handle2 = () => {
        const n = [...documents].sort(function (a, b) {
            return (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
        }).reverse()
        setDocuments(n)
        console.log(n)
    }

    useEffect(() => {
        handle1()
    }, []) // run one time only

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={handle1}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={handle2}>Most Recent</button>
            </div>
            <Articles articles={documents}/>
        </div>
    );

}

export default App;
