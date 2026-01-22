import "./simple-form-field.style.css"

export interface FormFieldProps {
    id: string;
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
            <input type={props.fieldType} id={props.id} placeholder={props.placeholder}/>
        </div>
    );
}
