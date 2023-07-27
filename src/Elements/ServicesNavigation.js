export default function ServicesNavigation({ itemCount, currentIndex, handleClick }) {
    return(
        <div className="flex justify-center items-center">
            {Array.from({length: itemCount}, (_, index) => (
                <div
                key={index}
                onClick={() => handleClick(index)}
                ><button className={`w-[50px] rounded-full ${index === currentIndex ? 'bg-yellow-500' : ''}`}></button>
                </div>
            ))}
        </div>
    )
}