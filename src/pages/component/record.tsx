type Transaction = {
    amount: number;
    category: string;
    createdAt: Date | string;
    note: string;
    transactionTitle: string;
    transactionType: string;
    userId: string;
    _id: string;
};

type Props  = {transaction: Transaction}

export const Records = ({ transaction }:Props) => {

    
    const date1 = new Date(transaction.createdAt);
    const date2 = new Date();

    const differenceMs = Number(date2) - Number(date1)


    const differentHours = differenceMs / (1000* 60 * 60);
    console.log(differentHours)
    return(
     <div>
        <div>
            {transaction.category}
        </div>
        <div>
            {differentHours} hours ago
        </div>
        <div>
            {transaction.amount}
        </div>
     </div> 
    )
}