

const DiscoverSingle =({color,number,title,text})=>{
    return(
        <div className={`w-full lg:h-[445px] ${color} relative `}>
<div className="font-bold italic lg:text-[150px] hollowText outline-2 absolute lg:top-6 lg:-left-12">{number}</div>
<div className="text-white grid lg:grid-cols-5 items-end  h-full gap-4">
    <div className="col-start-4 flex flex-col py-12 w-[404px] " >
        <h2 className="font-medium lg:text-[48px]">{title}</h2>
        <p>{text}</p>
    </div> 
    </div>
        </div>
    )
}

const discoverData = [
    {
        color:'bg-cerreneAltLightOrange',
        number:'01',
        title: 'Consultation & Assessment',
        text: "Contact Cerrene for a thorough consultation where we\'ll discuss your specific cleaning, electrical, or plumbing needs."
    },
    {
        color:'bg-cerreneOrange',
        number:'02',
        title: 'Customized Service Plan',
        text: "Based on our assessment and your preferences, Cerrene will develop a customized service plan that addresses all your needs and fits your schedule."
    },
    {
        color:'bg-cerreneDarkOrange',
        number:'03',
        title: 'Exceptional Execution ',
        text: "Rest assured that your space will be left sparkling clean, fully functional, and exceeding your expectations."
    }
]

export default function Discover() {
    return (
        <section className="w-full  text-[#4e4e4e] relative overflow-hidden">
            <div className="leading-[110%] pt-24 pb-8 font-medium text-[36px] xl:text-[56px] lg:text-[48px] container">Discover How We Work</div>
  <div className="  flex flex-col">
   {discoverData.map((card, index) => (
                <DiscoverSingle number={card.number}
                 color={card.color} 
                 title={card.title} 
                 text={card.text}
                key={index}/>
                ))}

   </div>
        </section>
    )
}