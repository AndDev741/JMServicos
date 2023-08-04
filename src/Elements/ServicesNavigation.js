export default function ServicesNavigation({ itemCount, currentIndex, handleClick }) {
    return(
        <div className="flex justify-center items-center md:absolute left-[50vw] right-[50vw] top-[22vh]">
            {Array.from({length: itemCount}, (_, index) => (
                <div
                key={index}
                onClick={() => handleClick(index)}
                ><button 
                className={`w-[25px] h-[25px] rounded-full mx-[1px] hover:bg-yellow-200
                ${index === currentIndex ? 'bg-yellow-400 border border-solid border-white' : 'bg-slate-200'}`}></button>
                </div>
            ))}
        </div>
    )
}