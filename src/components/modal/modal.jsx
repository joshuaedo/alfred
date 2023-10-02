/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import styles from "./modal.module.css";
import { HelpCircle } from "lucide-react";
// import Alfred from "../glb-model/alfred";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

// eslint-disable-next-line react/prop-types
export default function Modal({ modal, tasks }) {
  // eslint-disable-next-line react/prop-types
  const { active, index } = modal;

  const modalContainer = useRef(null);

  const cursor = useRef(null);

  useEffect(() => {
    //Move Container

    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX - 120);

      yMoveContainer(pageY - 80);

      xMoveCursor(pageX);

      yMoveCursor(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={`hidden md:flex ${styles.modalContainer}`}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className={`${styles.modalSlider}`}
        >
          {tasks.map((task, index) => {
            const { title, description, color } = task;
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <div className="space-y-1 overflow-hidden text-black font-semibold px-5 py-3 relative">
                  <HelpCircle className="h-4 w-4 absolute top-2 right-2" />{" "}
                  <div className="">
                    <p className="text-base uppercase">{title}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs">{description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        {/* <Alfred /> */}
        <img src="/model.png" height={800} width={800} />
      </motion.div>
    </>
  );
}
