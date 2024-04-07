import { HiAdjustments } from "react-icons/hi";
import FilterSwiper from "./filterSwiper";

interface FilterBarProps {
    onSelectCategory: (category: string) => void;
    selectedCategory: string;
}

const FilterBar: React.FC<FilterBarProps> = ({onSelectCategory, selectedCategory}) => {

    return (
        <div className="flex w-screen relative">
            <div className=" z-10 mr-3">
                <HiAdjustments size={24}/>
            </div>
            
            <div className="w-36">
                <FilterSwiper onSelectCategory={onSelectCategory} selectedCategory={selectedCategory}/>
            </div>
        </div>
    );
};

export default FilterBar;