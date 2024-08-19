import Image from "next/image";
import cleanliness from '@/public/images/cleanliness.png'
import plumbing from '@/public/images/plumbing.png'
import electrical from '@/public/images/electrical.png'
import yinka from '@/public/images/yinka.png'
import tayo from '@/public/images/tayo.png'
import quote from '@/public/images/quote.png'
import Button from "@/public/utils/button";
import Link from "next/link";

const Service =({type,src,heading,paragraph1,paragraph2 })=>{

  return (
    <div className={`grid  lg:gap-10 ${type == 'reverse'? 'lg:grid-cols-reverse' : 'lg:grid-cols-services'} `}>
      <div className='relative w-full lg:h-[612px] w-[311px] h-60 '><Image src={src} alt='' className="object-cover" fill/></div>
      <div className={`flex flex-col justify-center ${type == 'reverse'? 'lg:order-first' : ''} `}> 
        <h1 className="lg:text-[48px] text-[32px] font-medium leading-[130%] mb-6 lg:mb-11"> {heading}</h1>
        <p className="font-satoshi text-sm md:text-base lg:text-xl  mb-4">{paragraph1}</p>
        <p className="font-satoshi text-sm md:text-base lg:text-xl lg:mt-4">{paragraph2}</p>
        <Button type="secondary" className="place-self-start rounded-sm font-satoshi w-20 h-6 flex ">Learn More</Button>
      </div>

    </div>
  )
}

const Testimonials =({name,occupation,src,testimony})=>{
  return(
    <div className="grid grid-cols-2 gap-10 px-20">
<div className="w-full max-w-[600px] relative"> 
 <div className="w-full h-[464px] relative"><Image src={src} alt='photo of testimony giver' className="object-cover" fill/></div>
 <h2 className="font-medium lg:py-4 text-[32px] text-center">{name}</h2>
 <p className="font-satoshi  text-xl text-center">{occupation}</p>
</div>
<div className="flex flex-col justify-start gap-16">
 
  <div className="lg:text-[32px] relative w-full"> <span className="font-satoshi">{testimony}</span>
  <div className="absolute -bottom-10 right-0 ">
<div className="relative h-20 w-20">
<Image src={quote} alt="" className="object-contain w-20 flex" fill />
</div>
  </div>

  </div>
  <Link className="border-cerreneOrange text-cerreneOrange flex items-center justify-center border lg:h-[60px] lg:w-[197px]"  href='/'>See more</Link>
</div>
    </div>
  )
}

const serviceData = [
  {
    type:'',
    src:cleanliness,
    heading:'Immaculate Cleanliness.' ,
    paragraph1:'Our cleaning services at Cerrene are more than just a wipe-down. We pride ourselves on delivering immaculate cleanliness that transforms your space into a sanctuary.',
     paragraph2:'Whether it&apos;s your home, office, or commercial space, our meticulous attention to detail ensures a sparkling clean environment every time.'
  },
  {
    type:'reverse',
    src:electrical,
    heading:'Expert Electrical Services.' ,
    paragraph1:'From installations and upgrades to repairs and troubleshooting, we handle it all with precision and expertise. ',
    paragraph2:'Whether you need new lighting fixtures, circuit repairs, or panel upgrades, you can count on us to deliver reliable solutions tailored to your needs.'
  },
  {
    type:'',
    src:plumbing,
    heading:'Plumbing Expertise.' ,
    paragraph1:'From leaky faucets and clogged drains to pipe repairs and water heater installations, we tackle every plumbing challenge with efficiency and expertise. ',
     paragraph2:'With Cerrene, you can trust that your plumbing problems will be resolved quickly and effectively, allowing you to get back to your routine with peace of mind.'
  },
]

const testimonialData=[
{
  src:yinka,
  name: "Yinka Bamidele",
  occupation: "Author/Podcaster",
  testimony: "As an author and podcaster, I need a clean and organized environment to stay focused and productive. Cerrene`&apos;`s cleaning services have been outstanding. Their team always leaves my workspace spotless. The peace of mind they provide allows me to concentrate on my creative work without any distractions."

},
{
  src:tayo,
  name: "Tayo Adeoluwa",
  occupation: "CEO. Prime Tech",
  testimony: "Cerrene`&apos;`s cleaning service has truly transformed my home. Their attention to detail is unmatched, and every surface sparkles when they're done. I couldn't be happier."

},
]





export default function Services() {
  return (
    <section className="text-[#4e4e4e] py-24 container">
   <h1 className="leading-[110%] font-medium text-[36px] xl:text-[56px] lg:text-[48px]">Discover Our <span className="italic">Comprehensive</span> Services</h1>
   <div className="py-6 gap-6 lg:gap-6 flex flex-col">
   {serviceData.map((card, index) => (
                <Service type={card.type}
                 src={card.src} 
                 heading={card.heading} 
                 paragraph1={card.paragraph1}
                 paragraph2={card.paragraph2}
                key={index}/>
                ))}

   </div>
   <h1 className="leading-[110%] font-medium text-[36px] xl:text-[56px] lg:text-[48px]">Our Clients Speak For Themselves</h1>
   <span className="font-satoshi text-xl flex my-6">At Cerrene, we believe in letting our work speak for itself. But don't just take our word for it—hear from our satisfied clients themselves.</span>
   <div className="lg:gap-16 flex flex-col pb-4">{testimonialData.map((card, index) => (
                <Testimonials type={card.type}
                 src={card.src} 
                 name={card.name} 
                 occupation={card.occupation}
                 testimony={card.testimony}
                key={index}/>
                ))}</div>
    </section>
  );
}
