import Image from "next/image";
import AboutimgpersonOne from "../../assets/imgs/aboutimgperson1.jpg";
import AboutimgpersonTwo from "../../assets/imgs/aboutimgperson2.jpg";

const AboutMe = () => {
  return (
    <section className="min-h-screen relative max-w-7xl mx-auto text-white flex flex-col items-center py-16 px-6 lg:px-32">
      {/* Header */}
      <div className="flex flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight font-bold text-start mb-4">
            About Me
          </h1>
          <p className="text-start leading-relaxed text-base sm:text-lg lg:text-xl text-gray-400 mb-8">
            Little More About Myself
          </p>
        </div>
        <div className="w-full border-b border-[#949494] mb-8"></div>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-5xl mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span>My Mission</span>
              <br />
              <span>is to make</span>
              <br />
              <span>design</span>
              <br />
              <span>easier.</span>
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
            Create custom Designs with AARON that converts more visitors than
            any website. With lots of unique design, you can easily select a
            logo without hassle. Create custom landing logos with AARON that
            converts more visitors than any website. With lots of revisions, you
            can easily build a logo without problems.
          </p>
        </div>

        {/* Images */}
        <div className="w-full h-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4 mt-12">
          <div className="relative w-full lg:w-1/3 h-96">
            <Image
              src={AboutimgpersonOne}
              alt="Person 1"
              className="rounded-lg object-cover w-full h-full"
              width={300}
              height={400}
            />
            <div className="absolute border-2 border-[#ff9142] rounded-[30px] w-8 sm:w-10 h-24 sm:h-32 top-0 -left-4 sm:-left-6"></div>
          </div>

          <div className="relative w-full lg:w-2/3 h-96">
            <Image
              src={AboutimgpersonTwo}
              alt="Person 2"
              className="rounded-lg object-cover w-full h-full"
              width={600}
              height={400}
            />
            <div className="absolute border-2 border-[#ff9142] rounded-[30px] w-8 sm:w-10 h-24 sm:h-32 -bottom-4 sm:-bottom-6 right-4 sm:right-10 transform rotate-90"></div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="w-full max-w-5xl flex flex-col space-y-8 mt-16">
        <p className="text-2xl sm:text-4xl lg:text-5xl font-medium mb-4">Follow me on:</p>
        <div className="flex flex-wrap gap-x-8 gap-y-4 justify-start text-gray-400 text-base sm:text-xl lg:text-2xl">
          <a href="#" className="hover:text-white transition">Dribbble</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
        </div>
      </div>

      {/* Vector */}
      <div
        style={{
          borderRadius: "58% 42% 19% 81% / 56% 79% 21% 44%",
        }}
        className="absolute bg-[#ffffff] opacity-[0.10] w-64 h-64 sm:w-80 sm:h-80 top-8 left-4 blur-[40px] shadow-3xl transform -rotate-[189deg] 
        bg-gradient-to-tl from-transparent via-white to-transparent"
      ></div>
    </section>
  );
};

export default AboutMe;
