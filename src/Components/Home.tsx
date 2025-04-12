function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col justify-center items-center p-4">

      <div className="absolute inset-0 opacity-30 z-0">
        {/* You can add an animated SVG or any canvas effect here */}
      </div>

   
      <div className="z-10 flex flex-col items-center space-y-6">
  
        <div className="w-40 h-40 mb-4 border-4 border-white rounded-full overflow-hidden shadow-lg">
          <img
            src="/images/rishi.jpg" // Replace with your image path in the public/assets folder
            alt="Rishi Patil Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading and Subheading */}
        <h1 className="text-5xl font-extrabold text-center text-purple-200">Rishi Patil</h1>
        <p className="text-xl text-center text-purple-100">
          Computer Engineering Student & Developer
        </p>

        {/* Tagline or Introduction */}
        <p className="max-w-xl text-center text-purple-200">
          Building innovative solutions and creating digital experiences one code snippet at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="./Resume_Rishi.pdf" // Ensure the resume is placed in public/assets
            download
            className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-md shadow-md"
          >
            Download Resume
          </a>
          
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://www.instagram.com/rishipatil.45"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-10 h-10 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rishi-patil-553b7631a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-10 h-10 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
