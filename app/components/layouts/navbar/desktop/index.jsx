import Link from "next/link";


const NavbarDesktop = () => {
  return (
    <header>
      <div className=" hidden w-full bg-red-900 lg:flex  text-2xl py-6 justify-center font-bold text-white  ">
      <Link href="/admin">Administrateur </Link>
      </div>
    </header>
  );
};

export default NavbarDesktop;
