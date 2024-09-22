import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="home">
                    <h1>A.S.T.R.A - Osmania University</h1>
                    <p>ARTIFICIAL INTELLIGENCE, SYSTEMS THREAT AND RECOGNITION ANALYSIS</p>
                    <button>Learn More</button>
                    <img src="robot1.png" alt="Robot 1" class="robot">
                </section>
                <section id="about">
                    <h2>About A.S.T.R.A</h2>
                    <p>A.S.T.R.A is a college club focused on technology, AI, and cyber security. Our mission is to provide a platform for students to learn, innovate, and grow in the field of artificial intelligence and cyber security.</p>
                    <img src="robot2.png" alt="Robot 2" class="robot">
                </section>
                <section id="events">
                    <h2>Upcoming Events</h2>
                    <ul>
                        <li>Event 1: AI Workshop</li>
                        <li>Event 2: Cyber Security Seminar</li>
                        <li>Event 3: Hackathon</li>
                    </ul>
                    <img src="robot3.png" alt="Robot 3" class="robot">
                </section>
                <section id="team">
                    <h2>Our Team</h2>
                    <ul>
                        <li>Member 1: John Doe</li>
                        <li>Member 2: Jane Doe</li>
                        <li>Member 3: Bob Smith</li>
                    </ul>
                    <img src="robot4.png" alt="Robot 4" class="robot">
                </section>
                <section id="contact">
                    <h2>Get in Touch</h2>
                    <p>Contact us at <a href="mailto:astrauo@gmail.com">astrauo@gmail.com</a> or follow us on social media:</p>
                    <ul>
                        <li><a href="#" target="_blank">Facebook</a></li>
                        <li><a href="#" target="_blank">Twitter</a></li>
                        <li><a href="#" target="_blank">Instagram</a></li>
                    </ul>
                    <img src="robot5.png" alt="Robot 5" class="robot">
                </section>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
