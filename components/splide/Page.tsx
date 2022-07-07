import React from "react";
import { motion, MotionStyle, MotionValue, PanInfo } from "framer-motion";

interface PageProps {
  index: number;
  renderPage: (props: { index: number }) => JSX.Element;
  x: MotionValue;
  onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
}

const pageStyle: MotionStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

const Page: React.FC<PageProps> = (props) => {
  const { index, renderPage, x, onDragEnd } = props;
  const child = React.useMemo(() => renderPage({ index }), [index, renderPage]);
  console.log(index);
  return (
    <motion.div
      style={{
        ...pageStyle,
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={onDragEnd}
    >
      {child}
    </motion.div>
  );
};

Page.displayName = "Page";

export default Page;
