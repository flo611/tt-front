import Main from "@/app/components/layouts/main";
import Navbar from "@/app/components/layouts/navbar";
import ShowPosts from "@/app/home/sections/showPosts";
import Footer from "@/app/components/layouts/footer";

const Home = () => {
  return (
        <Main>
          <Navbar/>
          <ShowPosts />
          <Footer/>
        </Main>
  );
};

export default Home;
