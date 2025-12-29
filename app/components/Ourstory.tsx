
// // app/components/OurStory.tsx

// export default function OurStory() {
//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
          
//           {/* Left Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="/images/our-story.jpg"
//               alt="DoStartup Our Story"
//               className="w-full h-auto rounded-lg shadow-sm object-cover"
//             />
//           </div>

//           {/* Right Text */}
//           <div className="w-full md:w-1/2">
//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
//               Our Story!
//             </h3>
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//               At <span className="font-semibold text-gray-900">DoStartup</span>, 
//               we are on a mission to make entrepreneurship easier and more 
//               affordable for millions of aspiring business owners. 
//               Our platform is built to simplify the process of starting a business 
//               and managing compliance, empowering entrepreneurs to focus on growth 
//               while we handle the complexities.  
//             </p>
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
//               Founded with the vision of supporting startups at every stage, 
//               DoStartup is committed to providing accessible, transparent, 
//               and reliable solutions that help turn ideas into thriving businesses.  
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



async function getOurStory() {
  const res = await fetch(
    "http://localhost:1337/api/our-story?populate=image",
    { cache: "no-store" }
  );
  const json = await res.json();
  return json.data;
}

function renderRichText(blocks: any[]) {
  return blocks.map((block, i) => (
    <p
      key={i}
      className="text-gray-600 text-sm md:text-base leading-relaxed mt-2"
    >
      {block.children.map((child: any, j: number) => (
        <span key={j}>{child.text}</span>
      ))}
    </p>
  ));
}

export default async function OurStory() {
  const data = await getOurStory();

  if (!data) return null;

  const imageUrl = data.image?.url;

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">

          {/* Left Image */}
          <div className="w-full md:w-1/2">
            {imageUrl && (
              <img
                src={`http://localhost:1337${imageUrl}`}
                alt="Our Story"
                className="w-full h-auto rounded-lg shadow-sm object-cover"
              />
            )}
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              {data.Title}
            </h3>

            {renderRichText(data.para1)}
            {renderRichText(data.para2)}
          </div>

        </div>
      </div>
    </section>
  );
}
