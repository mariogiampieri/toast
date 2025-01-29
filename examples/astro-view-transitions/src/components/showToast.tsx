import { toast } from "@pheralb/toast";

const ShowToast = () => {
  const handleClick = () => {
    toast.default({
      text: "✨ @pheralb/toast",
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      Show Toast
    </button>
  );
};

export default ShowToast;
