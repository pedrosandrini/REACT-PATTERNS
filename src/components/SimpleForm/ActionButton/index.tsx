import "./simple-form-button.style.css"

interface ButtonProps {
    buttonLabel: string
}

export function Button(props: ButtonProps) {
    return (
        <button className="simple-form-button">{props.buttonLabel}</button>
    );
}
