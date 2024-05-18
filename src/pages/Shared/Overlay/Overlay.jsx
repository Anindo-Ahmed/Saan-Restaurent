import { Parallax, Background } from "react-parallax";
import img1 from "../../../assets/home/chef-service.jpg";

const Overlay = () => {
  return (
    <div>
      <Parallax strength={300} bgImage={img1}>
        <div className="h-[570px] flex lg:flex-row justify-center items-center">
          <div className="bg-white text-center flex flex-col justify-center items-center h-[300px] w-[1080px] p-8">
            <h2 className="text-3xl mb-4">Bistro Boss</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, accusamus? Accusantium quaerat provident perspiciatis consectetur quisquam iste eos tenetur dolorum?
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Overlay;
