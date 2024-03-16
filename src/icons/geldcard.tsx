import bg from '../../../income-tracker-web/public/Large.png'

export const Card = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${bg.src})`,
            width: '384px',
            height: '216px',
            position: 'relative'
        }}>
            <div
            style={{
                display: 'flex', flexDirection: 'column',
                position: 'absolute', bottom: 20, left: 15 
            }}>
                <p style={{margin: 0, opacity: '50%', fontSize: '16px'}}>Cash</p>
                <p style={{margin: 0, fontSize: '24px' }}>10,000,000</p>
            </div>
        </div>
    )
}