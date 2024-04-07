
interface FilterProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
};

const FilterLabels: React.FC<FilterProps> = ({text, onClick, isSelected}) => {
    const selectedClass = "bg-button-hover";
    const unselectedClass = "bg-white";

    return (
        <button onClick={onClick} className={`h-6 w-auto rounded-md px-3 hover ${isSelected ? selectedClass : unselectedClass}`}>
            {text}
        </button>
    );
};

export default FilterLabels;