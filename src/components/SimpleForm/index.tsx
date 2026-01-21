import {FormTitle} from "./FormTitle";
import {FormField, type FormFieldProps} from "./FormField";

// CSS imports
import "./simple-form.style.css";
import {Button} from "./ActionButton";

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
            </fieldset>
            <div className={"form-footer"}>
                <Button buttonLabel={props.buttonLabel}/>
            </div>
        </form>
    );
}

