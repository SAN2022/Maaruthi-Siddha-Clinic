import doctor from '../assets/Doctor.png'
import { motion } from "framer-motion";
import { GiThreeLeaves } from "react-icons/gi"; // Leaf Icon

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-green-50 to-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Doctor Image with animation */}
        <motion.div
          className="flex-shrink-0 w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={doctor}
            alt="Doctor"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-green-600 object-cover"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="w-full md:w-2/3 text-justify"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Clinic Title */}
          <h2 className="text-3xl md:text-4xl font-tamilSans font-extrabold text-green-700 mb-3 text-center md:text-left leading-snug">
            ஸ்ரீ மாருதி சித்தா கிளினிக்
          </h2>

          {/* Divider with Leaf Icon */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <span className="h-1 w-16 bg-green-600 rounded"></span>
            <GiThreeLeaves className="text-green-700 text-2xl mx-3" />
            <span className="h-1 w-16 bg-green-600 rounded"></span>
          </div>

          {/* Main Paragraph */}
          <p className="text-base md:text-lg leading-relaxed font-tamilSans text-gray-800">
            பஞ்சபூதத் தலங்களில் புவித்தலமாகப் போற்றப்படும் அமி கமலமுனி சித்தர்
            அடக்கமாகியுள்ள அருள்மிகு தியாகராஜர் கோவில் என்றும், தேரோடும் திருவாரூர் என்றும்
            பிறந்தாலும் பெயர் சொன்னாலும் முக்தி தரும் தலம் என போற்றப்படும் இத்திருவாரூர்
            திருதலத்தில் கடந்த{" "}
            <span className="font-bold text-green-700 bg-green-100 px-2 py-1 rounded">
              27 ஆண்டுகளாக
            </span>{" "}
            தமிழ் மருத்துவமான{" "}
            <span className="text-green-700 font-bold underline decoration-green-400">
              சித்த மருத்துவத்துறையில்
            </span>{" "}
            தனக்கென்று தனிமுத்திரைப்பதித்த ஸ்ரீ மாருதி சித்தா கிளினிக் மற்றும்
            மருந்தகம் செயல்படுகிறது.
          </p>

          {/* Doctor Info */}
          <p className="mt-6 text-base md:text-lg leading-relaxed font-tamilSans text-gray-800">
            மக்கள் சேவையே மகேசன் சேவையாக மருத்துவம் செய்துவரும்{" "}
            <span className="font-semibold text-green-700">சேவைச்செம்மல்</span>,{" "}
            <span className="font-semibold text-green-700">சேவ ரத்னா</span>,{" "}
            <span className="font-semibold text-green-700">சிறந்த சித்த மருத்துவர்</span>,{" "}
            <span className="font-semibold text-green-700">சித்த வைத்திய செம்மல்</span>{" "}
            மற்றும் பல விருதுகளையும் பெற்றவர்:
            <br />
            <span className="text-green-700 font-bold">சித்தமருத்துவர்</span>{" "}
            <span className="text-2xl text-green-800 font-extrabold">
              Rtn. டாக்டர் சு.இளங்கோ{" "}
              <span className="text-sm text-green-800 font-bold">
                RSMP., DNSY., DSM.
              </span>
            </span>
          </p>

          {/* Closing Statement */}
          <p className="mt-6 text-base md:text-lg leading-relaxed font-tamilSans text-gray-800">
            அவர்கள் சித்தர்களின் ஆசியால் பல மருத்துவர்களால் கைவிடப்பட்ட நோயாளிகளையும்
            தம்மை நாடி வருபவர்களை நலம் பெறச் செய்கிறார்.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
