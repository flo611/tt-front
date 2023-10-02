import Link from "next/link";

const NavbarMobile = () => {
  return (
    <header>
      <div className=" flex w-full bg-red-900 text-2xl py-6 justify-center font-bold text-white lg:hidden">
      <Link href="/admin">Administrateur </Link>
      </div>
    </header>
  );
};

export default NavbarMobile;
