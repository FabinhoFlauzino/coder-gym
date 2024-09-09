import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const EquipamentData = [
  {
    id: 1,
    title: "Yoga Equipaments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
    link: "/",
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <FaDumbbell />,
    delay: 0.6,
    link: "/",
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GiGymBag />,
    delay: 0.9,
    link: "/",
  },
];

export function Equipaments() {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl lg:text-4xl font-bold">
              What we offer for you
            </h1>
            <p className="text-gray-500">
              It is a long estalished fact that a reader readable.
            </p>
          </div>
          {EquipamentData.map((item) => (
            <motion.div
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView="visible"
              key={item.id}
              className="space-y-4 p-6 bg-[#f9f9f9] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] "
            >
              <div className="text-4xl">{item.icon}</div>
              <p className="text-2xl font-semibold">{item.title}</p>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
