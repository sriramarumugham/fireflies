
import React, { useRef } from 'react'
// import { MailIcon } from '@heroicons/react/outline'


const Contact5 = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* 
    Do something here !
    */
  }

  return (
    <div className="relative mx-auto w-full max-w-7xl bg-white text-gray-700">
      <div className="grid grid-cols-2">
        
        {/* :MAP CONTAINER */}
        <div className="order-1 col-span-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8827.330741966553!2d2.308756110118289!3d48.87000842543867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0xcbb47407434935db!2s18%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1635492407441!5m2!1sfr!2sfr" 
            title="map" scrolling="no" frameborder="0"
            width="100%" height="300px"
            className="" 
            loading="lazy" 
          />
        </div>



        {/* :CONTACT FORM CONTAINER */}
        <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <form action="" className="mx-auto max-w-xl space-y-4" onSubmit={handleSubmit}>
            {/* ::Name Input */}
            <div>
              {/* :::label */}
              <label htmlFor="name" className="sr-only">Name</label>
              {/* :::input */}
              <input ref={nameRef} type="text" id="name" name="name"
                placeholder="Name"
                className="form-input w-full block shadow-sm rounded border-gray-300 bg-gray-100 text-base placeholder-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            {/* ::Email Input */}
            <div>
              {/* :::label */}
              <label htmlFor="email" className="sr-only">Email</label>
              {/* :::input */}
              <input ref={emailRef} type="email" id="email" name="email"
                placeholder="Email Address"
                className="form-input w-full block shadow-sm rounded border-gray-300 bg-gray-100 text-base placeholder-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            {/* ::Message Input */}
            <div className="col-span-full">
              {/* :::label */}
              <label htmlFor="message" className="sr-only">Message</label>
              {/* :::input */}
              <textarea ref={messageRef} name="message" id="message" cols="30" rows="4"
                placeholder="How can we help?"
                className="form-textarea resize-none w-full shadow-sm rounded border-gray-300 bg-gray-100 placeholder-gray-300 focus:border-green-400 focus:ring-green-400"
              ></textarea>
            </div>
            {/* ::Submit Button */}
            <div>
              <button type="submit" className="py-2 px-6 rounded bg-green-400 text-base text-white font-semibold uppercase hover:bg-green-500">Send Message</button>
            </div>
          </form>
        </div>



        {/* :CONTACT INFOS CONTAINER */}
        <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <div className="mx-auto max-w-xl flex flex-col space-y-5">
            {/* ::Title Contact Us */}
            <h2 className="text-4xl font-oswald uppercase">Contact us</h2>
            {/* ::Text */}
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde, voluptatibus nemo molestiae iure, repudiandae quaerat ipsam, labore sed dolorem nisi odit at esse ullam suscipit quidem necessitatibus aut modi.</p>
            {/* ::Email contact */}
            <a href="#mail" className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500">
              {/* <MailIcon className="mr-2 w-5 text-gray-400" /> */}
              mail-contact@fancycontact.com
            </a>
            {/* ::Address */}
            <p className="text-sm text-gray-500 leading-6">18 Avenue des Champs-Élysées, <br /> 75008 Paris <br /> France</p>
          
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact5
