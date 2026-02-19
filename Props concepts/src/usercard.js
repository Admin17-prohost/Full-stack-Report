export default function Usercard({ id,name, age, city, Skills}){
    return(
        <div style={{
            border: "1px solid #eed",
            padding: "15px",
            margin:"10px",
            borderRadius: "20px",
            boxShadow:"0 0px 3px 1px #999",
            color:'black',
            background:'#eee'
        }}
        >
            <header><u>Students Details</u></header>
            <h2 style={{color:'#08203e'}}>{id}. {name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Skills: {Skills}</p>
        </div>
    );
}