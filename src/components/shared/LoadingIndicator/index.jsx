import { Oval } from "react-loader-spinner";

function LoadingIndicator({
  width,
  height,
  color,
  secondaryColor,
  strokeWidth,
  strokeWidthSecondary,
  className,
}) {
  return (
    <Oval
      ariaLabel={"oval-loading"}
      width={width}
      height={height}
      color={color}
      secondaryColor={secondaryColor}
      strokeWidth={strokeWidth}
      strokeWidthSecondary={strokeWidthSecondary}
      wrapperClass={className}
    />
  );
}

LoadingIndicator.defaultProps = {
  color: "#007481",
  secondaryColor: "#007481",
  strokeWidth: 8,
  strokeWidthSecondary: 4,
  width: 40,
  height: 40,
};

export default LoadingIndicator;
