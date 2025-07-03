// // // src/app/sections/Education.tsx
// // import { FiBookOpen, FiAward } from 'react-icons/fi'

// // interface EducationItem {
// //   institution: string
// //   degree: string
// //   field: string
// //   startDate: string
// //   endDate: string
// //   description: string[]
  
// // }

// // const educationData: EducationItem[] = [
// //   {
// //     institution: "G.H Raisoni College of Engineering and Management",
// //     degree: "Master in Computer Application",
// //     field: "Computer Science",
// //     startDate: "2023",
// //     endDate: "2025",
// //     description: [
// //       "Specialized in Web Development and Machine Learning",
// //       "Graduate Teaching Assistant for Data Structures course",
// //       "Published research on Modern Web Architectures"
// //     ],
    
// //   },
// //   {
// //     institution: "Shri Shivaji Science College",
// //     degree: "Bachelor of Science ",
// //     field: "Computer Science",
// //     startDate: "2020",
// //     endDate: "2023",
// //     description: [
// //       "Minor in Business Administration",
// //       "Dean's List all semesters",
// //       "President of Computer Science Club"
// //     ]
// //   }
// // ]

// // export default function Education() {
// //   return (
// //     <section id="education" className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
// //           My <span className="text-indigo-600">Education</span>
// //         </h2>
        
// //         <div className="max-w-4xl mx-auto space-y-12">
// //           {educationData.map((item, index) => (
// //             <div key={index} className="relative pl-8 sm:pl-16 group">
// //               {/* Timeline dot */}
// //               <div className="absolute left-0 sm:left-6 h-4 w-4 rounded-full bg-indigo-600 group-hover:bg-indigo-800 transition-colors z-10"></div>
              
// //               {/* Timeline line */}
// //               <div className="absolute left-2 sm:left-8 h-full w-0.5 bg-gray-200 -bottom-10"></div>
              
// //               <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
// //                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
// //                   <div>
// //                     <h3 className="text-xl font-bold text-gray-900">{item.institution}</h3>
// //                     <div className="flex items-center gap-2 text-indigo-600 mt-1">
// //                       <FiBookOpen className="text-sm" />
// //                       <p className="text-sm font-medium">
// //                         {item.degree} in {item.field}
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full whitespace-nowrap">
// //                     {item.startDate} - {item.endDate}
// //                   </div>
// //                 </div>
                
// //                 <ul className="space-y-2 text-gray-600">
// //                   {item.description.map((point, i) => (
// //                     <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-indigo-400">
// //                       {point}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // src/app/sections/Education.tsx
// export default function Education() {
//   return (
//     <section id="education" className="py-15 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           <span className="text-indigo-600">Education</span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-8xl mx-auto ">
//           <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-indigo-600 shadow-sm">
//             <div className="flex justify-between items-start mb-2">
//               <h3 className="text-2xl font-bold text-gray-900">Master in Computer Application</h3>
//               <span className="bg-indigo-100 text-indigo-800 text-s px-2 py-1 rounded">
//                 2014-2018
//               </span>
//             </div>
//             <p className="text-gray-700 font-medium mb-2">Visvesvaraya Technological University</p>
//             <div className="flex items-center gap-2">
//               <span className="text-sm font-medium text-gray-600">Grade:</span>
//               <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
//                 First Class Distinction
//               </span>
//             </div>
//           </div>

//           {/* Second Education */}
//           <div className="bg-gray-50 p-15 rounded-lg border-l-4 border-indigo-600 shadow-sm">
//             <div className="flex justify-between items-start mb-2">
//               <h3 className="text-3xl font-bold text-gray-900">Higher Secondary School</h3>
//               <span className="bg-indigo-100 text-indigo-800 text-s px-2 py-1 rounded">
//                 2012-2013
//               </span>
//             </div>
//             <p className="text-gray-700 font-medium mb-2">Army Public School</p>
//             <div className="flex items-center gap-2">
//               <span className="text-sm font-medium text-gray-600">Grade:</span>
//               <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
//                 First Class Distinction
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// src/app/sections/Education.tsx
export default function Education() {
  return (
    <section id="education" className="py-15 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-indigo-600">Education</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-8xl mx-auto">
          {/* First Education */}
          <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-indigo-600 shadow-sm">
            <div className="mb-2">
              <span className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded inline-block">
                2023-2025
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Master in Computer Application</h3>
            <p className="text-gray-700 font-medium mb-3">G.H Raisoni College of Engineering and Management</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Grade:</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                First Class Distinction
              </span>
            </div>
          </div>

          {/* Second Education */}
          <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-indigo-600 shadow-sm">
            <div className="mb-2">
              <span className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded inline-block">
                2020-2023
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-700 font-medium mb-3">Shri Shivaji Science College</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Grade:</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                First Class Distinction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}