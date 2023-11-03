import React, { useEffect, useState } from 'react';
import Data from './api';
import './style.css';


const App = () => {
    const [data, setData] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const [titlePage, setTitlePage] = useState(1)
    const label = currPage === titlePage ? "Previovs" : "Next"

    const [dark, setDark] = useState(false)


    useEffect(() => {
        Data(currPage).then((res) => {
            setData(res.data)
            setCurrPage(res.page)
            setTitlePage(res.total_pages)
        })
    }, [currPage])

    const onClickHander = () => {
        let newPage;

        if (currPage === titlePage) {
            newPage = currPage - 1
        } else {
            newPage = currPage + 1
        }
        setCurrPage(newPage)
    }

    return (
        <div className={`${dark ? "DarkBox" : "LightBox"}`}>
            <h1>Hooks: useState, useEffect</h1>
            {
                data?.map((value, inx) => {
                    return (
                        <div key={inx} className="">
                            <img width={100} src={value?.avatar} alt="" />
                            <b >{value?.first_name} {value?.last_name}</b>
                            <p >Email: {value.email}</p>
                        </div>
                    )
                })
            }

            <button onClick={onClickHander}>{label}</button>



            {
                dark
                    ?
                    <button onClick={() => setDark(false)}>Light</button>
                    :
                    <button onClick={() => setDark(true)}>Dark</button>
            }
        </div>
    )
}
export default App