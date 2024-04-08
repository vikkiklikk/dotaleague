

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick}) => {
    
    return (
        <div className="relative flex justify-center items-center h-[70px] w-[212px]">
            <img src="/CustomButton.svg" alt="Button" className="absolute inset-0 w-full h-full"/>
            <button
                onClick={onClick}
                className="relative z-10 bg-transparent text-black-text text-xl font-bold py-2 px-4 border-none"
            >
                {text}
            </button>
        </div>
    );
};

export default CustomButton;