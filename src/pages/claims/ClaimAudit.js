import bullet from "../../../assets/icons/bullet.svg";

const ClaimAudit = ({ data }) => {
  return (
    <div className="flex text-gray-500 text-xs gap-2 my-5 items-center">
      <div className="text">
        <img src={bullet} alt="bullet" className="text" />
      </div>
      <div className="text flex justify-between w-full items-center">
        <div className="text">{data.text}</div>
        <div className="text font-medium">{data.time}</div>
      </div>
    </div>
  );
};
export default ClaimAudit;
