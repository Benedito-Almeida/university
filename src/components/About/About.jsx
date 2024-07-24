import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} alt='' className='about-img' />
                <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}} />
            </div>
            <div className='about-right'>
                <h3>Sobre a Universidade</h3>
                <h2>Transformar em excelentes profissionais</h2>
                <p>
                    Embarque em uma jornada educacional transformadora com os programas educacionais abrangentes da nossa universidade.
                    currículo é projetado para capacitar os alunos com o conhecimento,
                    habilidades e experiências precisam se destacar no campo dinâmico de
                    Educação.
                </p>


                <p>
                    Com foco na inovação, aprendizado prático e personalização
                    mentoria, nossos programas preparam aspirantes a educadores para fazerem uma
                    impacto significativo em salas de aula, escolas e comunidades.
                </p>


                <p>
                    Se você deseja se tornar um professor, administrador, conselheiro ou líder educacional, nossa diversificada gama de
                    programas têm todo o potencial para moldar o futuro da educação.
                </p>

            </div>

        </div>
    )
}

export default About
