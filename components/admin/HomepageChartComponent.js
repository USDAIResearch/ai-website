"use client";
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { useRouter } from "next/navigation";

const HomepageChartComponent = ({ researchThemes }) => {
  const svgRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 300 });
  const router = useRouter();

  // Get container dimensions and update on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        setDimensions({
          width: containerWidth,
          height: Math.min(containerWidth * 0.75, 300) // Maintain aspect ratio with max height
        });
      }
    };

    // Initial measurement
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const colors = [
    "#87CEEB",
    "#90EE90",
    "#98FB98",
    "#FFD700",
    "#FFA500",
    "#FFB6C1",
    "#DDA0DD",
  ];

  useEffect(() => {
    if (dimensions.width === 0) return; // Don't render until we have dimensions

    const radius = Math.min(dimensions.width, dimensions.height) / 2;
    const innerRadius = radius * 0.3;
    const baseOuterRadius = radius * 0.75;
    const peakHeight = radius * 0.1;

    const data = researchThemes.slice(0, 7).map((theme, index) => ({
      label: theme.label,
      value: 1,
      url: theme.id,
      color: colors[index % colors.length],
    }));

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .append("g")
      .attr("transform", `translate(${dimensions.width / 2},${dimensions.height / 2})`);

    const totalAngle = 2 * Math.PI;
    const angleStep = totalAngle / data.length;

    const sectionsData = data.map((item, index) => {
      const startAngle = index * angleStep;
      const endAngle = startAngle + angleStep;
      const numPoints = 50;
      const points = [];

      for (let i = 0; i < numPoints; i++) {
        const angle = startAngle + (i / (numPoints - 1)) * (endAngle - startAngle);
        const normalizedPosition = i / (numPoints - 1);
        const currentRadius = baseOuterRadius + normalizedPosition * peakHeight;
        points.push({ angle, radius: currentRadius });
      }

      return { ...item, startAngle, endAngle, points };
    });

    function polarToCartesian(radius, angle) {
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      };
    }

    const customArc = (d) => {
      let path = d3.path();
      const firstPoint = polarToCartesian(d.points[0].radius, d.points[0].angle);
      path.moveTo(firstPoint.x, firstPoint.y);

      for (let i = 1; i < d.points.length; i++) {
        const point = polarToCartesian(d.points[i].radius, d.points[i].angle);
        path.lineTo(point.x, point.y);
      }

      const innerStart = polarToCartesian(innerRadius, d.endAngle);
      path.lineTo(innerStart.x, innerStart.y);
      path.arc(0, 0, innerRadius, d.endAngle, d.startAngle, true);
      path.closePath();

      return path.toString();
    };

    const pathsGroup = svg.append("g").attr("class", "paths-group");
    const labelsGroup = svg.append("g").attr("class", "labels-group");

    const sections = pathsGroup
      .selectAll(".section")
      .data(sectionsData)
      .enter()
      .append("g")
      .attr("class", "section");

    sections
      .append("path")
      .attr("d", customArc)
      .attr("fill", (d) => d.color)
      .style("stroke", "white")
      .style("stroke-width", 4)
      .style("cursor", "pointer")
      .attr("opacity", 0.8)
      .on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 1)
          .style("transform", "scale(1.02)");
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 0.8)
          .style("transform", "scale(1)");
      })
      .on("click", (event, d) => {
        router.push(d.url);
      });

    sectionsData.forEach((d) => {
      const angle = (d.startAngle + d.endAngle) / 2;
      const radius = baseOuterRadius + peakHeight / 2;
      const x = radius * Math.cos(angle - Math.PI / 2);
      const y = radius * Math.sin(angle - Math.PI / 2);

      const labelGroup = labelsGroup
        .append("g")
        .attr("transform", `translate(${x},${y})`);

      const words = d.label.split(" ");
      
      // Calculate font size based on radius
      const fontSize = Math.max(12, Math.min(15, radius * 0.1));

      if (words.length > 2) {
        const firstLine = words.slice(0, 2).join(" ");
        const secondLine = words.slice(2).join(" ");

        // Background for first line
        labelGroup
          .append("text")
          .attr("text-anchor", "middle")
          .attr("font-size", `${fontSize}px`)
          .attr("dy", "-0.5em")
          .attr("fill", "white")
          .attr("stroke", "white")
          .attr("stroke-width", "3px")
          .text(firstLine);

        // Background for second line
        labelGroup
          .append("text")
          .attr("text-anchor", "middle")
          .attr("font-size", `${fontSize}px`)
          .attr("dy", "1em")
          .attr("fill", "white")
          .attr("stroke", "white")
          .attr("stroke-width", "3px")
          .text(secondLine);

        // Actual text
        labelGroup
          .append("text")
          .attr("text-anchor", "middle")
          .attr("font-size", `${fontSize}px`)
          .attr("dy", "-0.5em")
          .attr("fill", "#333")
          .text(firstLine);

        labelGroup
          .append("text")
          .attr("text-anchor", "middle")
          .attr("font-size", `${fontSize}px`)
          .attr("dy", "1em")
          .attr("fill", "#333")
          .text(secondLine);
      } else {
        // Background for single line
        labelGroup
          .append("text")
          .attr("text-anchor", "middle")
          .attr("font-size", `${fontSize}px`)
          .attr("dy", "0.35em")
          .attr("fill", "white")
          .attr("stroke", "white")
          .attr("stroke-width", "3px")
          .text(d.label);

        // Actual text
        labelGroup
          .append("text")
          .attr("text-anchor", "middle")
          .attr("font-size", `${fontSize}px`)
          .attr("dy", "0.35em")
          .attr("fill", "#333")
          .text(d.label);
      }
    });
  }, [researchThemes, dimensions]); // Added dimensions to dependencies

  return (
    <div ref={containerRef} className="flex justify-center items-center w-full">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default HomepageChartComponent;