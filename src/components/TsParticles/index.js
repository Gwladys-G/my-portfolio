import './index.scss'

import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

const ParticleHomeBackground = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
          options={{
        background: {
          color: '#FDF6E3',
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          resize: true,
        },
        particles: {
          move: {
            bounce: false,
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 1,
            straight: false
          },
          number: { density: { enable: true, area: 1080 }, value: 10 },
          opacity: {
            value: 0.1
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 20, max: 50 }
          }
        },
        themes: [
          {
            name: "light",
            default: {
              value: true,
              mode: "light"
            },
            options: {
              background: {
                color: "#FDF6E3"
              },
              particles: {
                color: {
                  value: "#3a2737"
                }
              }
            }
          },
          {
            name: "dark",
            default: {
              value: true,
              mode: "dark"
            },
            options: {
              background: {
                color: "#000"
              },
              particles: {
                color: {
                  value: "3a2737"
                }
              }
            }
          }
        ]
      }}
      />
  )
}

export default ParticleHomeBackground
