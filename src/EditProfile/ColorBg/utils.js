export const bgStringToObject = (pString) => {
  const gradientType = pString.match(/^(linear|radial)-gradient/)[1];

  // extraire le degré (pour les dégradés linéaires seulement)
  let gradientDegree;
  if (gradientType === "linear") {
    const gradientDegreeMatch = pString.match(/\d+deg/);
    gradientDegree = gradientDegreeMatch ? gradientDegreeMatch[0] : null;
  } else {
    const shapeMatch = pString.match(/(circle|ellipse|at\s+center)/);
    gradientDegree = shapeMatch ? shapeMatch[1] : null;
  }

  // extraire les couleurs et les pourcentages
  const colorStops = pString
    .match(/#[0-9a-fA-F]{6}\b\s+\d+%/g)
    .map((colorStop) => {
      const [color, stop] = colorStop.split(/\s+/);
      return {
        color,
        stop: parseInt(stop),
      };
    });

  return {
    type: gradientType,
    degree: gradientDegree,
    colors: colorStops,
  };
};

export const bgObjectToString = (pBackground) => {
  const stopsString = pBackground.colors
    .map(({ color, stop }) => `${color} ${stop}%`)
    .join(", ");
  const degreeString = pBackground.degree ? `${pBackground.degree}, ` : "";
  return `${pBackground.type}-gradient(${degreeString}${stopsString})`;
};

export const degreeToInt = (pDegree) => {
  if (pDegree.includes("deg")) {
    const matches = pDegree.match(/\d+/);
    return matches ? parseInt(matches[0]) : 90;
  }
  return 90;
};