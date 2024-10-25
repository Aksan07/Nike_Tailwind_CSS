import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="max-container flex justify-center gap-9 flex-wrap">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}
