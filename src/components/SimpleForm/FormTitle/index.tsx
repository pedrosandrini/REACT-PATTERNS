import "./simple-form-title.style.css"

interface FormTitleProps {
    title: string;
}

export function FormTitle(props: FormTitleProps) {
    return (
      <h2 className={"simple-form-title"}>
          {props.title}
      </h2>
    );
}