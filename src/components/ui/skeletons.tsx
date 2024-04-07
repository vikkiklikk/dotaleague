// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

  export function CardSkeleton() {
    return (
        <div className={`${shimmer} w-[152px] h-[138px] rounded-2xl bg-white relative`}>
            <div className="relative w-[152px] h-[98px] rounded-t-2xl bg-gray-200 overflow-hidden">
                
            </div>

        </div>
    )
  }