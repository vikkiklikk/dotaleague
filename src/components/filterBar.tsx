import { HiAdjustments } from "react-icons/hi";
import FilterSwiper from "./filterSwiper";

const FilterBar = () => {

    return (
        <div className="flex w-screen relative">
            <div className=" z-10 mr-3">
                <HiAdjustments size={24}/>
            </div>
            
            <div className="w-36">
                <FilterSwiper/>
            </div>
        </div>
    );
};

export default FilterBar;