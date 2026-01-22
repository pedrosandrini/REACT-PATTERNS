import "./simple-form-select.style.css"

export interface SelectOption {
    id: string;
    value: string;
}

export interface SelectProps {
    id: string;
    label: string;
    name: string;
    values: SelectOption[];
}

export function SelectField(props: SelectProps) {
    return (
        <div className={"simple-form-select"}>
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <select name={props.name} id={props.id}>
                {props.values.map((option) => (
                    <option key={option.id} value={option.id}>{option.value}</option>
                ))}
            </select>
        </div>
    );
}