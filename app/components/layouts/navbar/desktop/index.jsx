import Link from "next/link";

const NavbarDesktop = () => {
  return (
    <header>
      <div className=" hidden w-full bg-red-900 lg:flex lg:flex-row text-4xl py-6 justify-center  ">
      <Link href="/admin">Admin</Link>
        <div className="px-4"></div>
      </div>
    </header>
  );
};

export default NavbarDesktop;
