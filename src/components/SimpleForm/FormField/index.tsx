import "./simple-form-field.style.css"

export interface FormFieldProps {
    id: string;
    name: string;
    label: string;
    fieldType: string;
    placeholder: string;
}

export function FormField(props: FormFieldProps) {
    return (
        <div className={"simple-form-field"}>
            <label htmlFor={props.id} className={"label"}>
                {props.label}
            </label>
            <input type={props.fieldType} name={props.name} id={props.id} placeholder={props.placeholder}/>
        </div>
    );
}
