import { useState } from 'react'

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const initialFormState: ContactFormData = {
    name: '',
    email: '',
    message: '',
};

export default function ContactForm() {

    const [formData, setFormData] = useState<ContactFormData>(initialFormState);

    


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setFormData(initialFormState);
    }

  return (

    <div className="p-6 mx-auto rounded-lg shadow-xl bg-neutral lg:w-1/2 w-full">
                    <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary bg-neutral"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary bg-neutral"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-1 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary bg-neutral"
                                placeholder="Your Message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full py-2 text-white font-semibold"
                        >
                            Submit
                        </button>
                    </form>
                </div>
  )
}
