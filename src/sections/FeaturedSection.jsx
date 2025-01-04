

function FeaturedSection(){
  const features = [
    "Start Building Web Pages With React", "Design Your Website Fast Using Tailwind CSS","Learn How to Create React Blog using Vite"
  ]
  return(
    <>
      <section className="px-5 py-10">
        <article className="max-w-4xl mx-auto md:flex-row flex-col justify-between items-center gap-3 ">
        {
          features.map((feature)=>(<div  className="bg-gray-100 my-3 rounded-xl  font-semibold p-4 shadow-lg shadow-gray-400"><h2 className=" text-3xl">{feature}

          </h2>
          <button>Learn More</button>
          </div>
          ))
        }
        </article>
        
       
      </section>
    </>
    )
}export default FeaturedSection