import { useCallback, useState } from "react";
import { randomIndexGenerator } from "../lib/utils";
import { blobGenerator } from "../lib/blobGenerator";
import { CIRCLE_COLORS, HEIGHT_SIZE, EYES, WIDTH_SIZE } from "../lib/constants";

export default function RandomBlob() {
  const [randomRadius, setRandomRadius] = useState(Math.floor(Math.random() * (100 - 40 + 1)) + 40);
  const [randomEyes, setRandomEyes] = useState(EYES[randomIndexGenerator(EYES)]);
  const [randomCircleColor, setRandomCircleColor] = useState(
    CIRCLE_COLORS[randomIndexGenerator(CIRCLE_COLORS)],
  );
  const [blobPath, setBlobPath] = useState(blobGenerator(WIDTH_SIZE, HEIGHT_SIZE));

  const changeBlob = useCallback(() => {
    setRandomRadius(Math.floor(Math.random() * (100 - 40 + 1)) + 40); // 60% aleatório, 40% constante
    setRandomCircleColor(CIRCLE_COLORS[randomIndexGenerator(CIRCLE_COLORS)]);
    setBlobPath(blobGenerator(WIDTH_SIZE, HEIGHT_SIZE));
    setRandomEyes(EYES[randomIndexGenerator(EYES)]);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <svg width={WIDTH_SIZE} height={HEIGHT_SIZE}>
        <circle
          cx={WIDTH_SIZE / 2}
          cy={HEIGHT_SIZE / 2}
          r={randomRadius}
          fill={randomCircleColor}
        />
        <g>
          <path d={blobPath} fill="pink" />
          <image x={150} y={150} height={70} xlinkHref={randomEyes} />
        </g>
      </svg>
      <span className="sr-only">
        <a href="https://www.vecteezy.com/free-vector/eyes">Eyes Vectors by Vecteezy</a>
      </span>
      <button onClick={changeBlob}>Click</button>
    </div>
  );
}
