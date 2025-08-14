import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image1 from '../assets/image_1.jpeg'
import image2 from '../assets/image_2.jpeg'
import image3 from '../assets/image_3.jpeg'
import image4 from '../assets/image_4.jpeg'
import image5 from '../assets/image_5.jpeg'
import image6 from '../assets/image_7.jpeg'
import image7 from '../assets/image_7.jpeg'
import image8 from '../assets/image_8.jpeg'
import image9 from '../assets/image_9.jpeg'
import image10 from '../assets/image_10.jpeg'
import image11 from '../assets/image_11.jpeg'
import image12 from '../assets/image_12.jpeg'
import image13 from '../assets/image_13.jpeg'
import image14 from '../assets/image_14.jpeg'
import image15 from '../assets/image_15.jpeg'
import image16 from '../assets/image_16.jpeg'
import image17 from '../assets/image_17.jpeg'
import image18 from '../assets/image_18.jpeg'
import image19 from '../assets/image_19.jpeg'

const Homepage = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19]
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sendStatus, setSendStatus] = useState('Send Message')
  const [isDisabled, setIsDisabled] = useState(false)

  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const handleCloseModal = () => {
    setName('')
    setEmail('')
    setMessage('')
    setIsModalOpen(false)
  }

  const handleSubmit = () => {
    console.log('submitting')
    // send email logic here...
  }
  return (
    <div className="font-poppins mt-20">

      {/* Hero Section */}
      <section className="relative h-screen bg-blue-950 pt-2 text-white bg-cover bg-fixed bg-center bg-blend-multiply" style={{ backgroundImage: `url(${image1})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 font-Sniglet">
              Welcome to Kasangati Greater Lions Club!
            </h1>
            <p className="text-lg mb-8">
              Join the community, feel the vibe, and be a part of the serving club.
            </p>
            <a
              href="#join"
              className="px-6 py-3 text-xl font-semibold text-white bg-yellow-600 hover:bg-yellow-400 rounded-lg transition duration-300"
            >
              Join Us Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-36 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-gray-900 mb-8 underline">About Our Club</h2>
          <p className="text-lg mb-6 font-roboto">
            Kasangati Greater Lions Club has been a proud part of the community for over three years. Our passion for service drives us to provide a platform where lions and community members can come together to serve those in need. With commitment to excellence, we’re always striving for greatness.
          </p>
          <a
            href="#gallery"
            className="text-lg font-semibold text-yellow-600 hover:text-yellow-500 transition duration-300"
          >
            View Gallery
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 bg-gray-800 bg-cover bg-fixed bg-center bg-blend-multiply text-white" style={{ backgroundImage: `url(${image5})` }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 underline">Ways we serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">DIABETES</h3>
              <p className="text-gray-600 mb-4">
                We work to reduce the prevalence of diabetes and improve quality of life for those who live with diabetes. 
              </p>
              <a href="#join" className="text-yellow-600 hover:text-yellow-500">Learn More</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">CHILDHOOD CANCER</h3>
              <p className="text-gray-600 mb-4">
                We provide support for the needs of children and families affected childhood cancer.
              </p>
              <a href="#contact" className="text-yellow-600 hover:text-yellow-500">Get Tickets</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">FUNDRAISING</h3>
              <p className="text-gray-600 mb-4">
                We are a non profitable organisation we always carry out fundraising and donations to those in need and also to run our service activities. .
              </p>
              <a href="#join" className="text-yellow-600 hover:text-yellow-500">Donate</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-300 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 underline font-sniglet">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              images.map((image, index) => (
                <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg p-3">
                  <img src={image} alt={`image_${index}`} className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110" />
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-40 text-white bg-sky-950 text-center bg-cover bg-no-repeat bg-center bg-blend-multiply" style={{ backgroundImage: `url(${image2})` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 underline my-5">Join The Team</h2>
          <p className="text-lg mb-12">Become a member of Kasangati Greater Lions Club today! Whether you want to serve, support, or be a part of our community, we welcome you with open arms.</p>
          <Link
            to="/register"
            className="px-8 py-3 text-xl font-semibold text-gray-900 bg-white hover:bg-gray-200 rounded-lg transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have questions or want to get in touch? Reach out to us and we’ll get back to you as soon as possible!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 text-xl font-semibold text-yellow-600 hover:text-yellow-500 border-2 border-yellow-600 rounded-lg transition duration-300"
          >
            Send an Email
          </button>
        </div>
      </section>


      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-25 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
            <form className="bg-white p-6 rounded-lg shadow-md w-full">
              <h2 className="text-xl font-bold mb-4 text-black font-lato">Send us an Email</h2>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                  name='name'
                  onChange={e => setName(e.target.value)}
                  maxLength={25}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                  name='email'
                  onChange={e => setEmail(e.target.value)}
                  maxLength={40}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                  name='message'
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="flex justify-around mt-4 space-x-2">
                <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500" onClick={handleCloseModal}>Cancel</button>
                <button
                  type="submit"
                  disabled={isDisabled}
                  onClick={handleSubmit}
                  className={`${isDisabled ? 'opacity-75' : 'opacity-100'}  bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition`}
                >
                  {sendStatus}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}


    </div>
  );
}

export default Homepage;
