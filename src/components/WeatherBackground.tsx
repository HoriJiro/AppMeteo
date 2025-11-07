
function WeatherBackground() {

    const ora: number = new Date().getHours();

    function bgselection() {
        if (ora >= 21 || ora < 5) {return "night"}
        else if(ora >= 5 && ora < 8) {return "sunrise"}
        else if(ora >= 8 && ora < 12) {return "morning"}
        else if(ora >= 12 && ora < 17) {return "afternoon"}
        else if(ora >= 17 && ora < 21) {return "evening"}
    }

    console.log(bgselection());
        

    return (
<div className='w-100 vh-100 position-fixed z-n1 background-image'>
    <img src={`/timeofday/${bgselection()}.jpg`} alt="" />
</div>    
)

}

export default WeatherBackground