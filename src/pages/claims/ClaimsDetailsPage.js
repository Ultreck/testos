import chevronLeft from "../../../assets/icons/chevron-left.svg";
import { useLocation, useNavigate } from "react-router-dom";
import OpenfileModal from "./OpenfileModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/shadch/ui/ui/dropdown-menu";
import SelectModalDialog from "./SelectModalDialog";
import submitted from "../../../assets/icons/submitted.svg";
import inreview from "../../../assets/icons/inreview.svg";
import valid from "../../../assets/icons/valid.svg";
import invalid from "../../../assets/icons/invalid.svg";
import { FaChevronDown } from "react-icons/fa";
import useClaimHook from "../../../hooks/useClaimHook";

const ClaimsDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    claims,
    isLoading,
    setIsOpen,
    isOpen,
    selectedItem,
    handleSelect,
  } = useClaimHook();

  return (
    <div className="w-full">
      <section className="text w-full mt-10 border rounded-lg px-4 pt-4 pb-7 mb-10">
        <div className="text-xs font-semibold mb-3">
          <button
            onClick={() => navigate(-1)}
            className="text hover:bg-[#2CBCEF1A] px-1 rounded py-1 flex items-center"
          >
            <img src={chevronLeft} alt="" className="text w-4" /> Back
          </button>
        </div>
        <div className="text flex justify-between my-5 items-center w-full">
          <div className="text-lg font-semibold">Claim Details</div>
          <OpenfileModal claimId={state.manualClaimId} />
        </div>
        <div className="text-xs flex justify-between items-center my-2">
          <div className="text">
            <div className="text mb-2">Claim Status</div>
            <div
              className={`text-center px-3 py-1 rounded  ${
                state.manualClaimStatus === 3
                  ? "bg-[#04C5511A]"
                  : state.manualClaimStatus === 2
                  ? "bg-[#EB57571A]"
                  : state.manualClaimStatus === 0
                  ? "bg-[#2CBCEF1A]"
                  : "bg-[#FAB5131A]"
              }`}
            >
              <DropdownMenu>
                      <DropdownMenuTrigger className="flex gap-2 items-center">
                        <div className="text flex gap-2 items-center justify-between">
                          {selectedItem ||
                            (state.manualClaimType === 3
                              ? "Valid"
                              : state.manualClaimType === 2
                              ? "Invalid"
                              : state.manualClaimType === 0
                              ? "Submitted"
                              : "In Review")}
                          <FaChevronDown />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleSelect("Submitted")}
                        >
                          <img
                            className="mr-1"
                            src={submitted}
                            alt={"submitted"}
                          />
                          Submitted
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleSelect("In review")}
                        >
                          <img
                            className="mr-1"
                            src={inreview}
                            alt={"inreview"}
                          />
                          In review
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleSelect("Valid")}>
                          <img className="mr-1" src={valid} alt={"valid"} />
                          Valid
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleSelect("Invalid")}
                        >
                          <img className="mr-1" src={invalid} alt={"invalid"} />
                          Invalid
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <SelectModalDialog
                    text={selectedItem}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
          </div>

          <div className="text">
            <div className="text mb-2">Payment Status</div>
            <div className="text-center px-2  py-1 rounded bg-[#EF43431A]">
              Unpaid
            </div>
          </div>
        </div>
        {state.manualClaimType === 0 && (
          <section className="text">
            <div className="text-xs flex items-center justify-between">
              <div className="text">Claim Type</div>
              <div className="text">
                {state.manualClaimType === 0 ? "Surgery" : "Death"}
              </div>
            </div>
            <h1 className="text-xs font-semibold mt-5">
              Beneficiary Information
            </h1>
            <div className="text border rounded-lg p-2 mt-2">
              <div className="text-xs flex my-1 text-gray-500 items-center justify-between">
                <div className="text">Policy Number</div>
                <div className="text">{state.policyNumber}</div>
              </div>
              <div className="text-xs flex my-3  text-gray-500 items-center justify-between">
                <div className="text">Product</div>
                <div className="text">{state.product}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Title</div>
                <div className="text">{state.title}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Phone Number</div>
                <div className="text">{state.phoneNumber}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Surname</div>
                <div className="text">{state.surName}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">First Name</div>
                <div className="text">{state.beneficiaryFirstName}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Middle Name</div>
                <div className="text">{state.beneficiaryMiddleName}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Email Address</div>
                <div className="text">{state.beneficiaryEmailAddress}</div>
              </div>
            </div>
          </section>
        )}
        {state.manualClaimType === 1 && (
          <section className="text">
            <div className="text-xs flex items-center justify-between">
              <div className="text">Claim Type</div>
              <div className="text">
                {state.manualClaimType === 0 ? "Surgery" : "Death"}
              </div>
            </div>
            <h1 className="text-xs font-semibold mt-5">
              Beneficiary Information
            </h1>
            <div className="text border rounded-lg p-2 mt-2">
              <div className="text-xs flex my-1 text-gray-500 items-center justify-between">
                <div className="text">Policy Number</div>
                <div className="text">{state.policyNumber}</div>
              </div>
              <div className="text-xs flex my-3  text-gray-500 items-center justify-between">
                <div className="text">Product</div>
                <div className="text">{state.product}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Title</div>
                <div className="text">{state.title}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Phone Number</div>
                <div className="text">{state.phoneNumber}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Surname</div>
                <div className="text">{state.surName}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">First Name</div>
                <div className="text">{state.beneficiaryFirstName}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Middle Name</div>
                <div className="text">{state.beneficiaryMiddleName}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Email Address</div>
                <div className="text">{state.beneficiaryEmailAddress}</div>
              </div>
            </div>
            <h1 className="text-xs font-semibold mt-5">
              Deceased Policyholder Information
            </h1>
            <div className="text border rounded-lg p-2 mt-2">
              <div className="text-xs flex my-1 text-gray-500 items-center justify-between">
                <div className="text">Surname</div>
                <div className="text">{state.policyHolderSurName}</div>
              </div>
              <div className="text-xs flex my-3  text-gray-500 items-center justify-between">
                <div className="text">First Name</div>
                <div className="text">{state.policyHolderFirstName}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Middle Name</div>
                <div className="text">{state.policyHolderMiddleName}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Last Known Address</div>
                <div className="text">{state.address}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Exact Location of Burial</div>
                <div className="text">{state.locationOfBurial}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Place of Death</div>
                <div className="text">{state.placeOfDeath}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Occupation at death</div>
                <div className="text">
                  {state.occupation}
                </div>
              </div>
            </div>
            <h1 className="text-xs font-semibold mt-5">
              Details From Attending Physician
            </h1>
            <div className="text border rounded-lg p-2 mt-2">
              <div className="text-xs flex my-1 text-gray-500 items-center justify-between">
                <div className="text">Gender of Deceased</div>
                <div className="text">{state?.gender || " ...."}</div>
              </div>
              <div className="text-xs flex my-3  text-gray-500 items-center justify-between">
                <div className="text">Date of Death</div>
                <div className="text">{state?.dateOfEvent}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Identification Marks on Cadaver</div>
                <div className="text">{state?.cadaver}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Immediate Cause of Death</div>
                <div className="text">{state?.causeOfDeath}</div>
              </div>
              <div className="text-xs flex my-3 text-gray-500 items-center justify-between">
                <div className="text">Other Desease or impairment</div>
                <div className="text">{state?.impairment}</div>
              </div>
              <div className="text-xs my-3 text-gray-500">
                <div className="text">Additional Informations</div>
                <div className="text">{state?.additionalInformatioon}</div>
              </div>
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default ClaimsDetailsPage;
