import { useEffect, useState } from "react"
import { Records } from "../component/record"
import axios from "axios"

export const List = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:8000/get-income')
            setTransactions(res.data)
            console.log(res)
        } 
        fetchData()
    }, [])


    return (
        <div className="big">
            <div>Last Records</div>
            <hr />
            {
            transactions.length > 0 &&transactions.map((transaction, index) => <Records key={index} transaction={transaction} />)
            }
          
        </div>
    )
}