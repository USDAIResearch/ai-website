"use client";
const { createElement } = require("react");
const solid = require("@heroicons/react/24/solid");
const outline = require("@heroicons/react/24/outline");

function HeroIcon(props) {
  const { name, type, className: overrides } = props;
  const className = ["h-6", "w-6", "text-black"]
    .concat(overrides?.split(" ") || [])
    .join(" ");
  const icon = (type ? { solid, outline }[type] : solid)[name];
  return createElement(icon, { className });
}

export default HeroIcon;
