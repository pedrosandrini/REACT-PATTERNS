import type { FormFieldProps } from "./FormField";
import type { SelectProps, SelectOption } from "./Select";
import type { SimpleFormProps } from ".";

export class SimpleFormBuilder {
  private title: string = "Novo Formulario";
  private buttonLabel: string = "Enviar";
  private fields: FormFieldProps[] = [];
  private selectProps?: SelectProps;

  public setTitle(title: string): SimpleFormBuilder {
    this.title = title;
    return this;
  }

  public setButtonLabel(buttonLabel: string): SimpleFormBuilder {
    this.buttonLabel = buttonLabel;
    return this;
  }

  public addField(
    id: string,
    name: string,
    label: string,
    fieldType: string,
    placeholder: string = "",
  ): SimpleFormBuilder {
    this.fields.push({
      id,
      name,
      label,
      fieldType,
      placeholder,
    });
    return this;
  }

  public addTextField(
    id: string,
    label: string,
    placeholder?: string,
  ): SimpleFormBuilder {
    return this.addField(id, "default-text", label, "text", placeholder);
  }

  public addEmailField(
    id: string,
    label: string,
    placeholder?: string,
  ): SimpleFormBuilder {
    return this.addField(id, "default-email", label, "email", placeholder);
  }

  public addDateField(
    id: string,
    label: string,
    placeholder?: string,
  ): SimpleFormBuilder {
    return this.addField(id, "default-date", label, "date", placeholder);
  }

  public addPasswordField(
    id: string,
    label: string,
    placeholder?: string,
  ): SimpleFormBuilder {
    return this.addField(id, "default-password", label, "password", placeholder);
  }

  public addSelect(
    id: string,
    label: string,
    name: string,
    values: SelectOption[],
  ): SimpleFormBuilder {
    this.selectProps = {
      id,
      label,
      name,
      values,
    };
    return this;
  }

  public build(): SimpleFormProps {
    return {
      title: this.title,
      buttonLabel: this.buttonLabel,
      fields: this.fields,
      selectProps: this.selectProps,
    };
  }
}
