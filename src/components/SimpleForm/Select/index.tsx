import "./simple-form-select.style.css"

interface SelectProps {
    id: string;
    label: string;
    options: string[];
}

export function SelectField(props: SelectProps) {
    return (
        <div className={"simple-form-select"}>
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <select name={props.id} id={props.id}>
                {props.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}