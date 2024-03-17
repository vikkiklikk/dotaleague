

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string; //if I need to alter the button somewhere
}

const MainButton: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => {
    const buttonClassNames = `text-white-text flex justify-center items-center rounded bg-button-blue hover:bg-button-hover hover:text-black-text h-btn-mobile w-btn-mobile md:h-btn-desktop md:w-btn-desktop ${className}`;

    return (
        <button
            onClick={onClick}
            className={buttonClassNames}
        >
            {text}
        </button>
    );
};

export default MainButton;