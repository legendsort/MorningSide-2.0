import React, { useEffect } from "react";
import Card from "../components/Card";
import { services } from "../constants/services";

class Particle {
  constructor(x = 0, y = 0) {
    this.reset();
    this.fadingSpeed = Math.random();
  }

  update() {
    this.position.x += Math.random() * 2 - 1;
    this.position.y -= this.velocity.y;
    this.alpha -= this.fadingSpeed;

    if (this.alpha < 0) {
      this.reset();
    }
  }

  reset() {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: Math.random() - 0.4 };
    this.alpha = 1;
    this.fadingSpeed = Math.random() * 0.03 + 0.005;
  }
}

class ParticleEmitter {
  constructor(x = 0, y = 0) {
    this.position = { x: x, y: y };
    this.particles = [];
    this.particlesNumber = 6;

    for (let i = 0; i < this.particlesNumber; i++) {
      const particle = new Particle();
      this.particles.push(particle);
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }
}

class Experience {
  constructor(container) {
    this.canvas = document.createElement("canvas");
    container.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");

    const fps = 120;
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();

    this.particleEmitters = [];
    this.radius = 150;

    for (let i = 0; i < 360; i++) {
      const particleEmitter = new ParticleEmitter(0, this.radius);
      this.particleEmitters.push(particleEmitter);
    }

    this.resize();
    this.bind();
    this.loop();
  }

  bind() {
    window.addEventListener("resize", this.resize.bind(this), false);
  }

  render() {
    for (let particleEmitter of this.particleEmitters) {
      particleEmitter.update();

      this.context.save();
      this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.context.rotate(
        (this.particleEmitters.indexOf(particleEmitter) * Math.PI) / 180
      );
      for (let particle of particleEmitter.particles) {
        particle.update();

        this.context.globalAlpha = particle.alpha;
        this.context.beginPath();
        this.context.arc(
          particle.position.x,
          particleEmitter.position.y - particle.position.y,
          1,
          0,
          Math.PI * 2
        );
        this.context.fillStyle = "#000000";
        this.context.fill();
        this.context.closePath();
      }
      this.context.restore();
    }
  }

  loop() {
    this.raf = window.requestAnimationFrame(this.loop.bind(this));

    const now = Date.now();
    const delta = now - this.then;

    if (delta > this.fpsInterval) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.render();
      this.then = now;
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    console.log(window.innerWidth);

    this.canvas.height = window.innerWidth < 768 ? 777 : 777;
    this.screen = {
      center: { x: this.canvas.width / 2, y: this.canvas.height / 2 },
      hypotenuse: Math.sqrt(
        ((this.canvas.width / 2) * this.canvas.width) / 2 +
          ((this.canvas.height / 2) * this.canvas.height) / 2
      ),
    };

    this.reset();
  }

  reset() {
    window.cancelAnimationFrame(this.raf);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.loop();
  }
}

const getRandomColor = () => {
  const value = Math.floor(Math.random() * 255);
  return "#" + value.toString(16) + value.toString(16) + value.toString(16);
};

const Services = () => {
  useEffect(() => {
    const container = document.getElementById("canvas");
    if (container.innerHTML === "") {
      new Experience(container);
    }
  }, []);

  return (
    <div className="pt-10 mx-auto" id="services">
      <div className="flex flex-col justify-center items-center">
        <p className="text-primary uppercase m-5 font-light">Our Services</p>
        <h1 className="text-primary text-4xl md:text-5xl font-bold leading-80 tracking[-0.1875] mt-8">
          What We Do
        </h1>
        <div className="w-full">
          <div className="relative">
            <div className=" flex items-center justify-start">
              <div id="canvas" className="service-canvas absolute top-0" />
            </div>
          </div>
          <div className="container grid grid-cols-3 md:gap-y-24 p-5 md:p-20 text-center">
            <div className="card md:col-span-1 col-span-3">
              <div className="service-card">
                {services[0].name}
              </div>
              {services[0].services.map((item, index) => (
                <p key={index} className="service-card-item  ">
                  {item}
                </p>
              ))}
            </div>
            <div></div>
            <div className="card md:col-span-1 col-span-3">
              <div className="service-card">
                {services[1].name}
              </div>
              {services[1].services.map((item, index) => (
                <p key={index} className="service-card-item">
                  {item}
                </p>
              ))}
            </div>
            <div />
            <div className="card md:col-span-1 col-span-3">
              <div className="service-card">
                {services[2].name}
              </div>
              {services[2].services.map((item, index) => (
                <p key={index} className="service-card-item">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
