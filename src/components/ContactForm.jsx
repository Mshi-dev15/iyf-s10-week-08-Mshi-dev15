import {useState} from 'react';
function ContactForm() {
    const [formData, setFormData] =useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted,setSubmitted] = useState(false);
    const handleChangle=(e) =>{
        const{name,value} =e.target;
        setFormData(prev =>({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Form data:',formData);
        setSubmitted(true);
        setFormData({name: '', email: '', message: ''});
    };
    if (submitted){
        return(
            <div>
                <h3>Thank you for your message! ✅</h3>
                <button onClick={() =>setSubmitted(false)}>
                    send another message
                </button>
            </div>
        );
    }
    return(
        <div>
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    name="name"
                    value={handleChangle}
                    onChange={handleChangle}
                    placeholder="Your name"
                    />
                    </div>
                    <div>
                        <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChangle}
                        placeholder="Your email"
                        />
                        </div>
                        <div>
                            <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChangle}
                            placeholder="Your message"
                            />
                        </div>
                        <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
export default ContactForm