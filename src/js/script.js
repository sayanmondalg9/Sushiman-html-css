// Import images as relative image path won't work with vite/vercel.
import check from "../../assets/check.svg";
import star from "../../assets/star.svg";
import sushi12 from "../../assets/sushi-12.png";
import sushi11 from "../../assets/sushi-11.png";
import sushi10 from "../../assets/sushi-10.png";

// Init AOS (Animation On Scroll) animation
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});
