interface SelectProps {
    name?: string;
    options: string[];
}

export function Select(props: SelectProps) {
    return (
        <select name={props.name}>
            {props.options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
}