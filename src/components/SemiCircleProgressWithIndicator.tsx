import {Indicator} from "~/components/Indicator";

export type ISemiCircleProgressWithIndicator = {
  strokeWidth: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  percentage: number;
  indicatorPercentage?: number;
  percentageSeparator?: string;
  size: {
    width: number;
    height: number;
  };
  strokeColor?: string;
  indicatorColor?: string;
  indicatorRelativeSize: number;
  includeText?: boolean;
  fontStyle?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight: string;
    fill: string;
  };
  hasBackground?: boolean;
  bgStrokeColor?: string;
};

export const SemiCircleProgressWithIndicator = ({
                                                  strokeWidth,
                                                  percentage,
                                                  indicatorPercentage,
                                                  strokeColor,
                                                  indicatorColor,
                                                  size,
                                                  indicatorRelativeSize,
                                                  strokeLinecap,
                                                  percentageSeparator,
                                                  includeText = false,
                                                  fontStyle,
                                                  hasBackground = true,
                                                  bgStrokeColor,
                                                }: ISemiCircleProgressWithIndicator) => {
  const defaultStrokeColor = "#04001b";
  const defaultBackgroundColor = "#d3d3d3";

  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  if (indicatorPercentage != undefined && (indicatorPercentage < 0 || indicatorPercentage > 100)) {
    throw new Error("Indicator percentage must be between 0 and 100");
  }

  if (isNaN(strokeWidth) || strokeWidth <= 0) {
    throw new Error("Stroke width must be a positive number");
  }

  if (
    isNaN(size.width) ||
    size.width <= 0 ||
    isNaN(size.height) ||
    size.height <= 0
  ) {
    throw new Error("Size must be a positive number");
  }

  const radius = 50 - strokeWidth / 2;
  const circumference = 1.1 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const bgStrokeDashoffset = 0;
  const pathStartX = 5;
  const pathStartY = 64;
  const pathDiameter = 90;
  const pathCenterX = pathStartX + pathDiameter / 2;
  const pathDescription = `M${pathStartX},${pathStartY} a1,1 0 0,1 ${pathDiameter},0`;


  // Calculate the position of the indicator
  const indicatorWidth = strokeWidth * (indicatorRelativeSize || 0.6);
  const indicatorStyle = 'equilateral';
  const strokeIndicatorGap = 1;
  const translateX = pathDiameter/2 + strokeWidth/2 + strokeIndicatorGap;
  const indicatorRotationAngle = (indicatorPercentage || 0) / 100 * 180;


  const indicator = (<Indicator width={indicatorWidth} color={indicatorColor} style={indicatorStyle}/>);
  // Wrap the Indicator component in a g and apply the transform attribute
  const placedIndicator = (
    <g
      transform={`rotate(${indicatorRotationAngle}, ${pathCenterX}, ${pathStartY}) translate(-${translateX})`}> {/*rotate the indicator and move outside the arc*/}
      <g transform={`translate(${pathCenterX}, ${pathStartY - indicatorWidth/2}) rotate(90)`}> {/*set start position of indicator to point at dead center*/}
        {indicator}
      </g>
    </g>
  );

  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="_half-circular-progress"
    >
      {hasBackground && (
        <path
          d={pathDescription}
          style={{
            transition: "stroke-dashoffset 0.35s",
            stroke: bgStrokeColor || defaultBackgroundColor,
            strokeLinecap: strokeLinecap || "round",
            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${bgStrokeDashoffset}`,
            strokeWidth: `${strokeWidth}`,
          }}
          fill="none"
        />
      )}
      <path
        d={pathDescription}
        style={{
          transition: "stroke-dashoffset 0.35s",
          stroke: strokeColor || defaultStrokeColor,
          strokeLinecap: strokeLinecap || "round",
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${strokeDashoffset}`,
          strokeWidth: `${strokeWidth}`,
        }}
        fill="none"
      />

      {indicatorPercentage !== undefined && placedIndicator}

      <animate
        attributeName="stroke-dashoffset"
        from="283"
        to="0"
        dur="1s"
        fill="freeze"
      />

      {includeText && <text
          x="52%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fontFamily="Arial"
          fill="#04001b"
          style={{
            ...fontStyle,
          }}
      >
        {percentage}
        {percentageSeparator || "%"}
      </text>}
    </svg>
  );
};
