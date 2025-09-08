import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Diseases() {
  const [openSection, setOpenSection] = useState('general');
  const [expanded, setExpanded] = useState({}); // Track View More/Less for each section

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const womensProblems = [
    "மாதவிடாய் கோளாறு (Menstrual Disorders)",
    "வந்தமையின்மை (Infertility)",
    "கருப்பை கோளாறு (Uterine Problems)",
    "கருப்பை நார்த்திசு (Uterine Fibroids)",
    "கருப்பை சுருக்கம் (Uterine Contraction Issues)",
    "கர்ப்பம் தொடர்பான சிக்கல்கள் (Pregnancy-related Issues)",
    "கருக்கலைப்பு பின் சிக்கல்கள் (Post-abortion Issues)",
    "கர்ப்பப்பை வலி (Pelvic Pain)",
    "கருவிழை கோளாறு (Ovarian Disorders)",
    "கருவிழை நீர்க்கட்டி (Ovarian Cyst)",
    "பாலூட்டல் சிக்கல்கள் (Lactation Issues)",
    "பெண்கள் ஹார்மோன் கோளாறு (Hormonal Imbalance)",
    "பெண்கள் உடல் சோர்வு (Female Fatigue)",
    "பெண்கள் தோல் & முடி பிரச்சனைகள் (Skin & Hair Problems in Women)",
  ];

  const mensProblems = [
    "ஆண்மை குறைபாடு (Male Infertility)",
    "விந்தணு குறைபாடு (Low Sperm Count)",
    "ஆண்மை வலி (Erectile Dysfunction)",
    "ஆண்கள் ஹார்மோன் கோளாறு (Male Hormonal Issues)",
    "ஆண்கள் உடல் பலவீனம் (Male Weakness)",
    "மூட்டு வலி (Joint Pain in Men)",
    "மூத்திர பாதை பிரச்சனைகள் (Urinary Problems in Men)",
    "ஆண்கள் நரம்பு கோளாறு (Neurological Issues in Men)",
    "சர்க்கரை நோய் தொடர்பான பிரச்சனைகள் (Diabetes Related Issues)",
    "உடல் பருமன் (Obesity in Men)",
    "மிகுந்த மனஅழுத்தம் (Stress in Men)",
    "முடி உதிர்தல் (Hair Fall in Men)",
    "ஆண்கள் சோர்வு (Fatigue in Men)",
    "ஆண்கள் தோல் பிரச்சனைகள் (Skin Problems in Men)",
  ];

  const generalDiseases = [
    "ஆஸ்துமா (Asthma)",
    "சுவாசக்கோளாறு (Respiratory Problems)",
    "மூல நோய் (Piles)",
    "சர்க்கரை நோய் (Diabetes)",
    "உடல் பருமன் (Obesity)",
    "அரத்த சோகை (Anemia)",
    "உடல் பலவீனம் (General Weakness)",
    "சிரங்கு & தோல் நோய்கள் (Skin Diseases)",
    "ரத்த அழுத்தம் (Blood Pressure)",
    "மூட்டு வலி (Joint Pain)",
    "நரம்பு சம்பந்தமான நோய்கள் (Neurological Disorders)",
    "வாதம் (Rheumatism)",
    "சைனசைட்டிஸ் (Sinusitis)",
    "தலைவலி & மைக்ரேன் (Headache & Migraine)",
  ];

  const colorClasses = {
  green: {
    header: "bg-green-800 text-white hover:bg-green-700",
    button: "bg-green-600 text-white hover:bg-green-700",
  },
  pink: {
    header: "bg-pink-700 text-white hover:bg-pink-600",
    button: "bg-pink-500 text-white hover:bg-pink-600",
  },
  blue: {
    header: "bg-blue-700 text-white hover:bg-blue-600",
    button: "bg-blue-500 text-white hover:bg-blue-600",
  },
};

const Section = ({ title, color, data, id }) => {
  const isExpanded = expanded[id];
  const visibleData = isExpanded ? data : data.slice(0, 6);

  return (
    <div className="mb-6">
      {/* Accordion Header */}
      <button
        onClick={() => toggleSection(id)}
        className={`w-full flex justify-between items-center px-6 py-4 text-left font-bold text-lg cursor-pointer rounded-md shadow-md transition ${colorClasses[color].header}`}
      >
        {title}
        <span>{openSection === id ? "−" : "+"}</span>
      </button>

      {/* Accordion Content */}
      <AnimatePresence initial={true}>
        {openSection === id && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 px-4">
              {visibleData.map((disease, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 bg-white shadow-md rounded-lg border-l-4 border-green-500"
                >
                  <p className="text-gray-800 text-sm font-medium">{disease}</p>
                </motion.div>
              ))}
            </div>

            {/* View More / Less Button */}
            {data.length > 6 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => toggleExpand(id)}
                  className={`px-4 py-2 rounded-md font-semibold transition cursor-pointer ${colorClasses[color].button}`}
                >
                  {isExpanded ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

  // const Section = ({ title, color, data, id }) => {

  //   // console.log(title)
  //   // console.log(color)
  //   // console.log(data)
  //   // console.log(id)

  //   const isExpanded = expanded[id];
  //   const visibleData = isExpanded ? data : data.slice(0, 6);

  //   return (
  //     <div className="mb-6">
  //       {/* Accordion Header */}
  //       <button
  //         onClick={() => toggleSection(id)}
  //         className={`w-full flex justify-between items-center px-6 py-4 text-left font-bold text-lg cursor-pointer rounded-md shadow-md transition ${
  //           openSection === id ? `bg-${color}-800 text-${color}-700`: `bg-${color}-800 text-${color}-700`
  //         }`}
  //       >
  //         {title}
  //         <span>{openSection === id ? "−" : "+"}</span>
  //       </button>

  //       {/* Accordion Content */}
  //       <AnimatePresence initial={true}>
  //         {openSection === id && (
  //           <motion.div
  //             key="content"
  //             initial={{ height: 0, opacity: 0 }}
  //             animate={{ height: "auto", opacity: 1 }}
  //             exit={{ height: 0, opacity: 0 }}
  //             transition={{ duration: 0.4, ease: "easeInOut" }}
  //             className="overflow-hidden"
  //           >
  //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 px-4">
  //               {visibleData.map((disease, index) => (
  //                 <motion.div
  //                   key={index}
  //                   initial={{ opacity: 0, y: 20 }}
  //                   animate={{ opacity: 1, y: 0 }}
  //                   transition={{ delay: index * 0.05 }}
  //                   className={`p-3 bg-white shadow-md rounded-lg border-l-4 border-green-500`}
  //                 >
  //                   <p className="text-gray-800 text-sm font-medium">{disease}</p>
  //                 </motion.div>
  //               ))}
  //             </div>

  //             {/* View More / Less Button */}
  //             {data.length > 6 && (
  //               <div className="text-center mt-4">
  //                 <button
  //                   onClick={() => toggleExpand(id)}
  //                   className={`px-4 py-2 rounded-md font-semibold transition cursor-pointer ${
  //                     isExpanded
  //                       ? `bg-${color}-600 text-${color}-700 hover:bg-${color}-700`
  //                       : `bg-${color}-800 text-${color}-700 hover:bg-${color}-200`
  //                   }`}
  //                 >
  //                   {isExpanded ? "View Less" : "View More"}
  //                 </button>
  //               </div>
  //             )}
  //           </motion.div>
  //         )}
  //       </AnimatePresence>
  //     </div>
  //   );
  // };

  return (
    <section id="services" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Diseases We Treat
        </h2>

        <Section
          title="General Diseases"
          color="green"
          data={generalDiseases}
          id="general"
        />
        <Section
          title="Women’s Problems"
          color="pink"
          data={womensProblems}
          id="women"
        />
        <Section
          title="Men’s Problems"
          color="blue"
          data={mensProblems}
          id="men"
        />
        
      </div>
    </section>
  );
}
