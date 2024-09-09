import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

export function Hero() {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[650px] relative">
          <div className="flex flex-col justify-center py-14 lg:py-0 font-playfair">
            <div className="text-center lg:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                Gym Gives you the perfect{" "}
                <span className="text-primary">Health</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(0.9)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px]"
              >
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </motion.p>
              <motion.div
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="flex justify-center gap-8 lg:justify-start !mt-4"
              >
                <button className="primary-btn">Order Now</button>
                <button className="flex justify-center items-center gap-2">
                  <FaPlay /> Watch Now
                </button>
              </motion.div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, x: 100, rotate: 400 }}
              animate={{ opacity: 1, x: 0, rotate: 360 }}
              transition={{ duration: 0.7, ease: "linear", delay: 0.9 }}
              src={HeroImg}
              alt="Imagem Hero"
              className="w-[350px] lg:w-[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
}
