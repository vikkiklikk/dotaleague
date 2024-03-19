import { HiAdjustments } from "react-icons/hi";
import FilterLabels from "./ui/filterLabels";

const FilterBar = () => {

    const labels = [
        {text: "All"},
        {text: "Games"},
        {text: "Outdoor"},
        {text: "Math"},
        //{text: "Sports"},
        //{text: "Food"},
        //{text: "Science"},
    ]
    return (
        <div className="flex gap-3">
            <HiAdjustments size={24}/>
            <div className="flex gap-3">
                {labels.map((label, index) => (
                    <FilterLabels key={index} text={label.text} />
                ))}
            </div>
        </div>
    );
};

export default FilterBar;