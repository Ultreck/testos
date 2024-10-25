import {
  Dialog,
  DialogContent,
  //   DialogFooter,
  DialogTrigger,
} from "../../components/shadcn/ui/dialog";
import failedFundIcon from "../../assets/icons/failedFundIcon.png";

const InsufficientFundModalDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <div className="flex justify-end">
          <button className="text-white text-xs px-3 py-1 rounded bg-orange-500">
            Insufficient Fund!
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="gap-4 py-4 flex justify-center">
          <img src={failedFundIcon} alt="" className="text" />
        </div>
        <div className="text-center">
          <h1 className="text font-semibold">Insufficient Fund!!</h1>
          <p className="text-gray-500 text-xs">
            Fund your wallet and try again
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="text-sm border w-full py-3 rounded-md font-medium"
          >
            Fund wallet
          </button>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default InsufficientFundModalDialog;
