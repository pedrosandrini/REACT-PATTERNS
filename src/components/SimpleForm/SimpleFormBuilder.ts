import type { FormFieldProps } from "./FormField";

import type { SimpleFormProps } from ".";

export class SimpleFormBuilder {
  private title: string = "Novo Formulario";
  private buttonLabel: string = "Enviar";
  private fields: FormFieldProps[] = [];

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
    label: string,
    fieldType: string,
    placeholder: string = "",
  ): SimpleFormBuilder {
    this.fields.push({
      id,
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
    return this.addField(id, label, "text", placeholder);
  }

  public addEmailField(
    id: string,
    label: string,
    placeholder?: string,
  ): SimpleFormBuilder {
    return this.addField(id, label, "email", placeholder);
  }

  public addDateField(
    id: string,
    label: string,
    placeholder?: string,
  ): SimpleFormBuilder {
    return this.addField(id, label, "date", placeholder);
  }

  public addPasswordField(
    id: string,
    label: string,
    placeholder?: string,
  ): SimpleFormBuilder {
    return this.addField(id, label, "password", placeholder);
  }

  public build(): SimpleFormProps {
    return {
      title: this.title,
      buttonLabel: this.buttonLabel,
      fields: this.fields,
    };
  }
}
