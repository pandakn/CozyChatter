import FormJoinRoom from "./FormJoinRoom";
import { MessageCircle } from "lucide-react";

const caption =
  "Chat in a snap with our real-time chat app! Instant convos, all day. Let's talk! 💬🚀";

const HeroSection = () => {
  return (
    <div className="min-h-screen hero ">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold md:text-7xl">
            Hey, guys
            <span className="inline-block ml-2">
              <MessageCircle className="w-16 h-16" />
            </span>
          </h1>

          <p className="py-6 md:text-lg">{caption}</p>

          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className="btn-wide btn btn-neutral hover:scale-110"
          >
            {"Let's talk"}
          </label>

          {/* modal */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="mb-4 text-2xl font-bold">Join Room</h3>
              <FormJoinRoom />
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
