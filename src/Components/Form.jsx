import { useRef } from "react"
import emailjs from '@emailjs/browser';

const Form = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7s4dfii', 'template_safzxcr', form.current, {
            publicKey: 'EsA3YMhFBzvQpFcxQ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" id="name" placeholder="Name" className="md:w-[50%] bg-transparent border-b border-b-black pb-4 pc mb-8 outline-none" />
        <input type="text" name="email" id="email" placeholder="Email" className="md:w-[50%] bg-transparent border-b border-b-black pb-4 pc mb-8 outline-none" />
        <textarea name="" id="" cols="30" rows="10" className="md:w-[50%] bg-gray-300 rounded-xl px-4 py-4 pb-4 mb-8 outline-none"></textarea>
        <button className="bg-black text-white px-8 py-4 md:w-[50%] rounded-lg font-bold max-md:mb-10">Submit</button>
    </form>
  )
}

export default Form