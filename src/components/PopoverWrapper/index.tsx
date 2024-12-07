import { usePopoverStore } from "@/stores/popover";
import React from "react";

interface PopoverWrapperProps {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger: "click" | "hover";
}

const PopoverWrapper: React.FC<PopoverWrapperProps> = ({
  children,
  content,
  trigger,
}) => {
  const { show, setShow } = usePopoverStore();
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => {
    if (trigger === "hover") setShow(true);
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") setShow(false);
  };

  const onChildrenClick = () => {
    setShow(!show);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target))
        setShow(false);
    };
    if (show) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex flex-col justify-center"
    >
      <div onClick={onChildrenClick}>{children}</div>
      <div
        hidden={!show}
        className="z-[999] min-w-fit w-full h-fit transition-all"
      >
        <div className="z-[9999] bg-white w-fit rounded-xl absolute p-3 shadow-[3px_6px_12px_rgba(46,38,92,0.25)] mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PopoverWrapper;
