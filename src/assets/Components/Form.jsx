import React, { useState } from 'react';
import axios from 'axios';
 
export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    queries: '',
    mobile: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === 'mobile') {
      validateMobile(value);
    }
  };
 
  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: 'Mobile number must be 10 digits long and contain only numbers.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { mobile, ...rest } = prevErrors;
        return rest;
      });
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'contact.php',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true // if your backend requires cookies or authentication
        }
      );
      console.log('Response:', response.data);
      if (response.data === "SUCCESS") {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', queries: '', mobile: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };
 
 
 
  return (
    <div className=''> 
        <div className=" flex flex-col col-1  mt-0  bg-white  ">
        <h1 className='uppercase  text-xl text-center font-serif font-bold text-gray-900 mb-6 mt-5'>Connect Us for Products</h1>
        <div className="flex flex-wrap">
          <div className="mb-12 w-full lg:w-70 shrink-0 grow-0 basis-auto md:px-3 lg:mb-0  lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <input
                  type="text"
                  className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear ${errors.name ? 'border-red-500' : ''}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Products Name" />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>
              <div className="relative mb-6">
                <input
                  type="email"
                  className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear ${errors.email ? 'border-red-500' : ''}`}
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address" />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  className={`peer text-black block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear ${errors.mobile ? 'border-red-500' : ''}`}
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number" />
                {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}
              </div>
              <div className="relative mb-6">
                <textarea
                  className={`peer text-black block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear ${errors.queries ? 'border-red-500' : ''}`}
                  id="queries"
                  rows="3"
                  value={formData.queries}
                  onChange={handleChange}
                  placeholder="Enter Your Message : eg.Need 3 Qty of Left Mirror of Tata Nexon "
                ></textarea>
                {errors.queries && <p className="text-red-600 text-sm">{errors.queries}</p>}
              </div>
              <button
                type="submit"
                className="mb-6 w-full rounded bg-sky-500 text-black px-6 pt-2.5 pb-2 text-xl font-extrabold uppercase leading-normal lg:mb-5"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
       
  );
}
 