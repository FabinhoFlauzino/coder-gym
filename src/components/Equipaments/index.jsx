import { FaDumbbell } from "react-icons/fa"
import { GiGymBag } from "react-icons/gi"
import { GrYoga } from "react-icons/gr"

const EquipamentData = [
  {
    id: 1,
    title: "Yoga Equipaments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
    link: "/"
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <FaDumbbell />,
    delay: 0.6,
    link: "/"
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GiGymBag />,
    delay: 0.9,
    link: "/"
  },
]

export function Equipaments() {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl lg:text-4xl font-bold">What we offer for you</h1>
            <p className="text-gray-500">It is a long estalished fact that a reader readable.</p>
          </div>
          {
            EquipamentData.map((item) => (
              <div key={item.id} className="space-y-4 p-6 bg-gray-100">
                <div>{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}