import { validateEmail } from '../../utils/helpers';
//from what iv'e seen making this function to actually send email in our current format is not secure so i don't feel safe finishing this
import { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('No name entered or Email is invalid');
            return;
        }

        alert(`Message has been sent \nEmail: ${email} \nName: ${name}\nMessage ${message}`);

        setName('');
        setMessage('');
        setEmail('');
    };

    return (
        <div className="container text-center formCont">
            <form className="form cusForm" onSubmit={handleFormSubmit}>
                <h3 className='formTitle'>Contact Form</h3>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    // className='inpF'
                />
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    className='inpF'
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="Message"
                    className='inpF'
                />
                <button className='inpBtn' type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            {/* <h1>COMING SOON</h1> */}
        </div>
    );
}

export default Contact;