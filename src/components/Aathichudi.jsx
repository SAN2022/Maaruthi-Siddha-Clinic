import { motion } from "framer-motion";
import siddha from '../assets/Siddha Img.png'

export default function Aathichudi(){
    return (
        <>
        <div className="flex flex-col md:flex-row items-center px-4 py-16 gap-6 overflow-x-hidden">
            
        {/* Left Side - Image */}
        <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
        >
        <img
          src={siddha}
          alt="சித்த மருத்துவம்"
          className="w-3/5 md:w-4/5 rounded-lg shadow-md"
        />
      </motion.div>

        {/* <img src={siddha} alt="" className='w-100 mb-4'/> */}

        {/* Right Side - Text */}
        <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
        >
           <p className="leading-snug font-pavanam text-sm md:text-base ">
                <span className="text-xl text-green-900 font-bold">சித்த மருத்துவ ஆத்திச்சூடி <span className="text-md">(சித்த மருத்துவம் சிறந்தது ஏன் ?)</span></span><br/>
                <hr className="w-15 my-2 border-3 text-green-700"/>
                <span className="text-red-600 text-lg font-bold"> அ</span>கிலம் தோன்றி அருகம்புல் முனைத்ததானே தோன்றிய மருத்துவமே <span className="text-red-600">சித்த மருத்துவம்!</span><br/> 
                <span className="text-red-600 text-lg font-bold"> ஆ</span>றறிவு படைத்த மனிதனின் முதல் மருத்துவமே <span className="text-red-600">சித்த மருத்துவம்!</span><br/>
                <span className="text-red-600 text-lg font-bold"> இ</span>யற்கை வழங்கும் பண்புமுகப் பொருளைக் கொண்ட மருத்துவமே <span className="text-red-600">சித்த மருத்துவம்!</span><br/> 
                <span className="text-red-600 text-lg font-bold"> ஈ</span>சனின் அறியப்படைப்பு அகத்தியர் கண்ட மருத்துவமே சித்த மருத்துவம் <br/> 
                <span className="text-red-600 text-lg font-bold"> உ</span>லக மருத்துவத்தின் தாயாய் விளங்கும் மருத்துவமே தமிழான <span className="text-red-600">சித்த மருத்துவம்!</span><br/> 
                <span className="text-red-600 text-lg font-bold"> ஊ</span>ரார் இருக்குமிடம் எங்கும் கிடைக்கும் மருத்துவமே <span className="text-red-600">சித்த மருத்துவம்!</span><br/> 
                <span className="text-red-600 text-lg font-bold"> எ</span>ல்லா நிலையிலும் மந்தாட்டவருக்கும் ஏற்ற மருத்துவமே தமிழான <span className="text-red-600">சித்த மருத்துவம்!</span><br/> 
                <span className="text-red-600 text-lg font-bold"> ஏ</span>டுகளை இயற்கை ஓலைச்சுவடியாகக் கொண்ட மருத்துவமே <span className="text-red-600">சித்த மருத்துவம்!</span><br/> 
                <span className="text-red-600 text-lg font-bold"> ஐ</span>ம்பெரும் பொருளால் அதனைக்கொண்டியங்கும் மனிதனை இயக்கும் மருத்துவமே <span className="text-red-600">சித்த மருத்துவம்!</span><br/> 
                <span className="text-red-600 text-lg font-bold"> ஒ</span>ன்பது இரண்டு சித்தரைக் கொண்டு கண்ட மருத்துவமே தமிழான <span className="text-red-600">சித்த மருத்துவம்!</span><br/> 
                <span className="text-red-600 text-lg font-bold"> ஓ</span>ராயிரம் டிகங்கள் கடத்தும் பக்கவிளைவில்லா மருத்துவமே செம்மொழிக்கண்ட <span className="text-red-600">சித்த மருத்துவம்! </span><br/> 
                <span className="text-red-600 text-lg font-bold"> ஓள</span>வையின் காலம் தொட்டு அக் ஏவுகணைகாலம் கடத்தும் நிலைத்திருக்கும் மருத்துவமே <span className="text-red-600">சித்த மருத்துவம்!</span> <br/>
                <span className="text-red-600 text-lg font-bold"> ஃ</span>தை ஏற்கும் அன்றைய விஞ்ஞான மருத்துவம், அஃதே மெய்ஞானம் கண்ட சித்த மருத்துவம் ஆகவே அனைத்திலும் சிறந்தது <span className="text-red-600">சித்தமருத்துவமே!</span><br/>
            </p>
            </motion.div>
            </div>
        </>
    )
}