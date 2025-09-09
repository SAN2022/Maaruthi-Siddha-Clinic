import doctor from '../assets/Doctor.png'

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Doctor Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src={doctor}
            alt="Doctor"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-xl border-4 border-green-600 object-cover"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-2/3 text-justify">
          <h2 className="text-2xl md:text-3xl font-tamilSans font-extrabold text-green-700 mb-4 text-center md:text-left">
            ஸ்ரீ மாருதி சித்தா கிளினிக் <br />
          </h2>

          <p className="text-sm md:text-base leading-loose font-tamilSans text-gray-800">
            பஞ்சபூதத் தலங்களில் புவித்தலமாகப் போற்றப்படும் அமி கமலமுனி சித்தர்
            அடக்கமாகியுள்ள அருள்மிகு தியாகராஜர் கோவில் என்றும், தேரோடும் திருவாரூர் என்றும்
            பிறந்தாலும் பெயர் சொன்னாலும் முக்தி தரும் தலம் என போற்றப்படும் இத்திருவாரூர்
            திருதலத்தில் கடந்த <span className="font-bold text-green-600">27 ஆண்டுகளாக</span>{" "}
            தமிழ் மருத்துவமான <span className="text-green-600 font-bold">சித்த மருத்துவத்துறையில்</span>{" "}
            தனக்கென்று தனிமுத்திரைப்பதித்த ஸ்ரீ மாருதி சித்தா கிளினிக் மற்றும்
            மருந்தகம் செயல்படுகிறது.
          </p>

          <p className="mt-4 text-sm md:text-base leading-loose font-tamilSans text-gray-800">
            மக்கள் சேவையே மகேசன் சேவையாக மருத்துவம் செய்துவரும் சேவைச்செம்மல்,
            சேவ ரத்னா, சிறந்த சித்த மருத்துவர், சித்த வைத்திய செம்மல் மற்றும் பல
            விருதுகளையும் பெற்றவர்:
            <br />
            <span className="text-green-700 font-bold">சித்தமருத்துவர்</span>{" "}
            <span className="text-2xl text-green-700 font-extrabold">
              Rtn. டாக்டர் சு.இளங்கோ{" "}
              <span className="text-sm text-green-700 font-medium">
                RSMP., DNSY., DSM.
              </span>
            </span>
          </p>

          <p className="mt-4 text-sm md:text-base leading-loose font-tamilSans text-gray-800">
            அவர்கள் சித்தர்களின் ஆசியால் பல மருத்துவர்களால் கைவிடப்பட்ட நோயாளிகளையும்
            தம்மை நாடி வருபவர்களை நலம் பெறச் செய்கிறார்.
          </p>
        </div>
      </div>
    </section>
  )
}

// import doctor from '../assets/Doctor.png'

// export default function About() {
//   return (
//     <section id="about" className="w-4/6 container mx-auto px-6 py-16 text-justify">
//       <img
//         src={doctor}
//         alt="Doctor"
//         className="mx-auto w-50 h-45 rounded-full mb-6 shadow-lg"
//       />
//       {/* <h2 className="text-2xl font-bold text-green-700 mb-4">Dr.Elangovan (Siddha Practitioner)</h2>
//       <p className="text-gray-700 max-w-2xl mx-auto">
//         With 15+ years of experience in Homeopathy, Dr. Elangovan specializes in holistic 
//         care for chronic and acute conditions, ensuring safe and natural treatments.
//       </p> */}

//       <p className='text-sm leading-loose font-tamilSans font-bold'>
//         பஞ்சபூதத் தலங்களில் புவித்தலமாகப் போற்றப்படும் அமி கமலமுனி சித்தர் அடக்கமாகியுள்ள அருள்மிகு தியாகராஜர் கோவில் என்றும், தேரோடும் திருவாரூர் என்றும் பிறந்தாலும் பெயர் சொன்னாலும் முக்தி தரும் தலம் என போற்றப்படும் இத்திருவாரூர் திருதலத்தில் கடந்த 21 ஆண்டுகளாக தமிழ் மருத்துவமான சித்த மருத்துவத்துறையில் தனக்கென்று தனிமுத்திரைப்பதித்த ஸ்ரீ மாருத் சித்தா மருத்துவமனை மற்றும் மூலிகை ஆராய்ச்சி மையம் செயல்படுகிறது மக்கள் சேவையே மகேசன் சேவையாக மருத்துவம் செய்துவரும், சேவைச்செம்மல், சேவ ரத்னா. சிறந்த சித்த மருத்துவர். சித்த வைத்திய செம்மல் மேலும் பல விருதுகளையும் பெற்ற 
//         <br />
//         <span className='text-green-900 font-bold'>சித்தமருத்துவர்</span> <span className='text-2xl text-green-800 font-bold'>Rtn.டாக்டர் சு.இளங்கோ <span className='text-sm'>RSMP.,DNSY.DSM.,</span></span>
//         <br />
//         அவர்கள் சித்தர்களின் ஆசியால் பல மருத்துவர்களால் கைவிடப்பட்ட நோயாளிகளையும். தம்மை நாடி வருபவர்களை நலம் பெறச் செய்கிறார்.
//       </p>
//     </section>
//   );
// }