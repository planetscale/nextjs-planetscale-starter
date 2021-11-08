import classNames from "classnames";

type LoaderProps = {
  className?: string;
  absoluteFill?: string;
};
const Loader = ({ className, absoluteFill }: LoaderProps) => {
  return (
    <div
      className={classNames(
        absoluteFill &&
          "absolute w-full h-full flex flex-col justify-center content-center items-center"
      )}
    >
      <img
        className={classNames("absolute w-6 h-6", className)}
        src="/assets/loading.svg"
      />
    </div>
  );
};

export default Loader;
