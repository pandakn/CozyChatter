import Image from "next/image";

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="rounded-full w-14">
        <Image
          src="https://source.unsplash.com/random/?cat,dog"
          alt="profile"
          className="object-cover"
          width={14}
          height={14}
          unoptimized
        />
      </div>
    </div>
  );
};

export default Avatar;
