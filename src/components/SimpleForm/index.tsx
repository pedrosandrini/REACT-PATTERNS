import {FormTitle} from "./FormTitle";
import {FormField, type FormFieldProps} from "./FormField";

// CSS imports
import "./simple-form.style.css";
import {Button} from "./ActionButton";
import {SelectField} from "./Select";

export interface SimpleFormProps {
    title: string;
    fields: FormFieldProps[];
    buttonLabel: string;
}

export function SimpleForm(props: SimpleFormProps) {
    return (
        <form className={"simple-form"}>
            <div className="form-header">
                <FormTitle title={props.title}/>
            </div>
            <fieldset className="form-body">
                {props.fields.map((field: FormFieldProps) => (
                    <FormField key={field.id}
                               {...field}
                    />
                ))}
                <SelectField options={["fooo", "bar", "XPTO", "XYZ"]} id={"event_theme"} label={"Tema do Evento"}/>
            </fieldset>
            <div className={"form-footer"}>
                <Button buttonLabel={props.buttonLabel}/>
            </div>
        </form>
    );
}

