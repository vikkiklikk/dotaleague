
interface FilterProps {
    text: string;
    onClick?: () => void;
};

const FilterLabels: React.FC<FilterProps> = ({text, onClick}) => {

    return (
        <button onClick={onClick} className="bg-white h-6 w-auto rounded-md px-3 hover">
            {text}
        </button>
    );
};

export default FilterLabels;