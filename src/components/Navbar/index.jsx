import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavbarMenu } from "../../mockData/data";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* Seção Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>

          {/* Seção menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {
                NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} className="inline-blockpy-1 px-3 font-semibold hover:text-secondary">{item.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Seção de ícones */}
          <div className="flex items-center gap-1 flex-1 justify-end lg:gap-4 lg:flex-none lg:justify-center">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>

            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>

            <button className="border-2 border-primary px-6 py-2 text-primary font-semibold rounded-md duration-200 hover:bg-primary hover:text-white hidden lg:block">
              Login
            </button>
          </div>

          {/* Seção menu hamburguer */}
          <div className="lg:hidden px-2" onClick={() => setOpenMenu(!openMenu)}>
            <MdMenu className="text-4xl"/>
          </div>
        </div>
      </nav>

      {/* Menu responsivo */}
      <ResponsiveMenu openMenu={openMenu}/>
    </>
  )
}
