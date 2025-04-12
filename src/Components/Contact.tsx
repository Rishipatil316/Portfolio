import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 flex flex-col md:flex-row gap-10">
      {/* Left - Contact Info */}
      <div className="bg-white text-black rounded-xl shadow-lg p-8 md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500 text-white p-3 rounded-full">
              <FaPhone />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+91 7276155972</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-purple-500 text-white p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>patilrishi316@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-purple-500 text-white p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p>Shahada, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="bg-white text-black rounded-xl shadow-lg p-8 md:w-1/2 space-y-4">
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
