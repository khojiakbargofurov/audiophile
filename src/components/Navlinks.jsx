import { NavLink } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "HOME" },
  { id: 2, url: "/headphones", text: "HEADPHONES" },
  { id: 3, url: "/speakers", text: "SPEAKERS" },
  { id: 4, url: "/earphones", text: "EARPHONES" },
];
function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize font-bold lg:text-white md:text-black hover:text-[#D87D4A]">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
export default NavLinks;
