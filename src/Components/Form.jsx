import { useContext, useRef } from "react"
import emailjs from '@emailjs/browser';
import { Context } from "./Context";

const Form = () => {
    
    const form = useRef();
    const {formState, setFormState} = useContext(Context);

    const sendEmail = (e) => {
        e.preventDefault();

        setFormState({error: false, loading: true});
        emailjs
          .sendForm('service_7s4dfii', 'template_safzxcr', form.current, {
            publicKey: 'EsA3YMhFBzvQpFcxQ',
            name: form.current.name.value,
            email: form.current.email.value,
            message: form.current.message.value
          })
          .then(
            () => {
              console.log('SUCCESS');
              setFormState({...formState, loading: false});
            },
            (error) => {
              console.log('FAILED...', error.text);
              setFormState({error: true, loading: false})
              setTimeout(() => {
                setFormState({...formState, error: false})
              })
            },
          );
    };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <input type="text" name="name" id="name" placeholder="Name" className="md:w-[50%] bg-transparent border-b border-b-black pb-4 pc mb-8 outline-none" />
        <input type="text" name="email" id="email" placeholder="Email" className="md:w-[50%] bg-transparent border-b border-b-black pb-4 pc mb-8 outline-none" />
        <textarea name="message" id="message" cols="30" rows="10" className="md:w-[50%] bg-gray-300 rounded-xl px-4 py-4 pb-4 mb-8 outline-none"></textarea>
        <input type="submit" value="Send" className="cursor-pointer bg-black text-white px-8 py-4 md:w-[50%] rounded-lg font-bold max-md:mb-10" />
    </form>
  )
}

export default Form