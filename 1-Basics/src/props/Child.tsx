interface ChildProps {
    color: String;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        <button onClick={onClick}>Click Me</button>
            {color}
        </div>
}

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children }) => {
    return <div>
    <button onClick={onClick}>Click Me</button>
        {color}
        {children}
    </div>
}