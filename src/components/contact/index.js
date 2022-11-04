import React, {useState} from 'react';
import {validateEmail, capitalizeFirstLetter} from '../../utils/helpers';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    
    
    function handleSubmit(e) {
        setFormState({ name: '', email: '', message: '' })
        e.preventDefault();
    }

    return (
      <section className="p-4">
        <div className="flex flex-col bg-white rounded-lg p-8 items-center mx-auto md:max-w-4xl md:-mt-32">
          <h1
            data-testid="h1tag"
            className="text-cyan-900 font-extrabold text-center mb-4"
          >
            Contact Me
          </h1>
          <form
            id="contact-form"
            className="bg-gradient-to-b from-sky-800 to-cyan-600  p-6 mb-8 rounded-md w-full drop-shadow-md max-w-md"
            onSubmit={handleSubmit}
          >
            <div className="mt-4 grid grid-cols-1 gap-y-4 font-medium text-gray-700">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    defaultValue={formState.name}
                    onBlur={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email address:
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    defaultValue={formState.email}
                    onBlur={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className='text-white'>Message:</label>
                <div>
                  <textarea
                    name="message"
                    rows="5"
                    defaultValue={formState.message}
                    onBlur={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
              </div>
              {errorMessage && (
                <p className="text-white text-left italic text-sm">
                  **{capitalizeFirstLetter(errorMessage)}**
                </p>
              )}
              <button
                type="submit"
                data-testid="submit"
                className="rounded-md w-full border border-transparent bg-sky-800 py-2 mt-4 text-md font-medium text-white shadow-sm hover:bg-white hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
}


