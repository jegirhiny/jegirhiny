import './landing.styles.css';

const Landing = () => {
    return(
        <section className='landing-div'>
            <div className='center-div'>
                <h3 className='landing-my-name'>Hi, my name is</h3>
                <h1 className='landing-name'>Jake Girhiny.</h1>
                <h2 className='landing-job'>Software Engineer.</h2>
                <p className='landing-about'>
                    A Massachusetts student deeply passionate about software development. I'm immersed in all aspects of applications, including design, testing, and the use of code to address real-life challenges. Feel free to explore - you're likely to find something that sparks your interest.</p>
                <a href='#about' className='landing-more'>Get to know me!</a>
            </div>
        </section>
    );
}

export default Landing;