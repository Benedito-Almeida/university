import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a926229f-cfc4-42b3-a8ad-06340aeed014");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("sua mensagem foi eviado com exito");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Emvie uma mensagem   <img src={msg_icon} alt='' /></h3>
                <p>
                    Sinta-se à vontade para entrar em contato através do formulário de contato ou encontre nosso contato
                    informações abaixo. Seus comentários, perguntas e sugestões são importantes para nós e nos esforçamos para fornecer um serviço excepcional
                    para a nossa comunidade universitária.
                </p>
                <ul>
                    <li><img src={mail_icon} alt='' />exceroger@gmail.comentários</li>
                    <li><img src={phone_icon} alt='' />+3 123-456-78906</li>
                    <li> <img src={location_icon} alt='' />69 Fantastics Av,basket Sp Brazilian</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Seu Nome</label>
                    <input type='text' name='name' placeholder='Entre com seu nome' required />
                    <label>Telefone:</label>
                    <input type='tel' name='phone' placeholder='Entre com seu numero' required />
                    <label>Comentários</label>
                    <textarea name='messsage' rows="6" placeholder='Entre com sua mensagem' required>

                    </textarea>
                    <button type='subnit' className='btn dark-btn'>
                        <img className='imgs' src={white_arrow} alt='' />   Enviar
                    </button>
                </form>
                <span>{result}</span>


            </div>

        </div>
    )
}

export default Contact
