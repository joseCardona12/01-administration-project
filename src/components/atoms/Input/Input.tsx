import "./inputStyles.scss";

interface IInputProps{
    type:string,
    name:string,
    value:string,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    placeholder?:string,
}

export default function Input({type,name,value,onChange,placeholder}: IInputProps):React.ReactNode{
    return(
        <input className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
    )
}