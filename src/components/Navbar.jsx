import {links} from '../data/navigation';

function Navbar({name}) {

    return (
    <nav className="bg-slate-900 text-white sticky top-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-xl font-semibold">
            {name}
        </h1>

        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

}

export default Navbar;