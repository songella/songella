import React, { useState } from "react";
import ParticlesComponent from "../particles/Particles";
import Components from "./Components";

export default function Home() {
  const [particles, setParticles] = useState(true);

  const onClickParticles = () => {
    if (particles) {
      setParticles(false);
    } else {
      setParticles(true);
    }
  };
  //  have to seperate the components from particles or else useEffect causes the particles to get re-rendered
  // this happens because useEffect tracks the scroll, so particles will freak out on every scroll

  return (
    <div className="home">
      <Components onClickParticles={onClickParticles} />
      <ParticlesComponent particles={particles} />
    </div>
  );
}
