import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/shadcn/ui/dialog";
import plusIcon from "../../assets/icons/Add.svg";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/shadcn/ui/select";
import { Label } from "../../components/shadcn/ui/label";
import ClaimsSuccessModalDialog from "./ClaimsSuccessModalDialog";
import InsufficientFundModalDialog from "./InsufficientFundModalDialog";
import useClaimHook from "../../hooks/useClaimHook";
import AddNewSurgeryClaim from "./AddNewSurgeryClaim";
import AddNewDeathClaim from "./AddNewDeathClaim";
import { options } from "../../lib/helper";


const AddNewClaimModal = () => {
  const {
    form,
    selectedClaimType,
  } = useClaimHook();

  return (
    <div>
      <Dialog>
        <DialogTrigger
          asChild
          className="text-white text-xs flex items-center bg-[#2CBCEF] px-2 py-1 rounded-md"
        >
          <button className="text">
            <img src={plusIcon} alt="" className="text-xs w-5" />
            Add New Claim
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[50%]">
          <DialogHeader>
            <DialogTitle>Add New Claim</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="text">
              <Label className="text-gray-500 font-medium text-xs">
                Claim Type
              </Label>
              <Controller
                name="claimsType"
                control={form.control}
                defaultValue="" 
                render={({ field }) => (
                  <>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full border-0 outline-none  bg-[#F7F7F7]">
                        <SelectValue placeholder="Select a claim type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Claims Type</SelectLabel>
                          {options.claimType.map((type, index) => (
                            <SelectItem key={index} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </>
                )}
              />
            </div>
            {selectedClaimType === "Surgery" && <AddNewSurgeryClaim />}
            {selectedClaimType === "Death" && <AddNewDeathClaim />}
            <div className="text flex gap-1 justify-end">
              <ClaimsSuccessModalDialog />
              <InsufficientFundModalDialog />
            </div>
          </div>
          <DialogFooter>
            {/* <Button type="submit">Save changes</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewClaimModal;
