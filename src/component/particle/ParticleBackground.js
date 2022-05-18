import React from "react";
import Particles from "react-tsparticles"
import ParticleConfig from "./config/particle-config copy"

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}></Particles>
    );
}

