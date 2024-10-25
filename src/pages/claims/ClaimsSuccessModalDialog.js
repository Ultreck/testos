import Button from "../../components/components-ui/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../../components/shadcn/ui/dialog";
import sucessImg from "../../assets/icons/successIcon.png"

const ClaimsSuccessModalDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <div className="flex justify-end">
          <button className="text-white text-xs px-3 py-1 rounded bg-pink-500">Claim submitted</button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="gap-4 py-4 flex justify-center">
            <img src={sucessImg} alt="" className="text" />
        </div>
        <div className="text-center">
            <h1 className="text font-semibold">Claim Submitted!</h1>
            <p className="text-gray-500 text-xs">You will be notified when the claim status is changed</p>
        </div>
        <div className="text-center">
            <button onClick={() => {
                window.location.reload();
            }} className="text-sm border w-full py-3 rounded-md font-medium">Continue</button>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClaimsSuccessModalDialog;
