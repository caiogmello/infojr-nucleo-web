import "../styles/Square.css"

export default function Square({ onClick, value } : { onClick: () => void; value: string}){

    return <button className={value} onClick={onClick}>{value}</button>
}