import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/shadch/ui/ui/sheet";
import tablarFile from "../../../assets/icons/tabler_file-invoice.svg";
import { useEffect, useRef, useState } from "react";
import searchImg from "../../../assets/icons/Search.svg";
import { IoFilterSharp } from "react-icons/io5";
import ClaimFileCard from "./ClaimFileCard";
import { ScrollArea } from "../../../components/shadch/ui/ui/scroll-area";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/shadch/ui/ui/form";
import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/shadch/ui/ui/input";
import { auditDummyData, fileInfo } from "../../../constants/Constants";
import attachedFileIcon from "../../../assets/icons/attach.svg";
import { FiDelete } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/shadch/ui/ui/tooltip";
import { Button } from "../../../components/shadch/ui/ui/button";
import ClaimAudit from "./ClaimAudit";
import useClaimHook from "../../../hooks/useClaimHook";
import apiClient from "../../../http/common";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

// const messageSchema = z.object({
//   message: z.string(),
//   file: z.string(),
// });

const OpenfileModal = () => {
  const [tabs, setTabs] = useState(1);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const { handleChanges } = useClaimHook();
  const form = useForm({
    defaultValues: {
      message: "",
      file: null,
    },
  });

  // const claimFileFunction = () => {
  //   return apiClient.get(
  //     `/sponsor/GetFilesForManualClaim?manualClaimId=${claimId}`
  //   );
  // };
  // const claimAuditFunction = () => {
  //   return apiClient.get(`/sponsor/GetAuditTrailForClaim?insurerId=${claimId}`);
  // };

  // const { data: claimFile, isLoading: claimIsLoading } = useQuery(
  //   "claimFile",
  //   claimFileFunction
  // );
  // const { data: claimAudit, isLoading: claimAuditIsLoading } = useQuery(
  //   "claimAudit",
  //   claimAuditFunction
  // );

  // useEffect(() => {
  // apiClient.get(`/sponsor/GetFilesForManualClaim[?manualClaimId]`)
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  // }, [])

  // console.log(claimFile, claimAudit);

  const onSubmit = (data) => {
    console.log(data);
  };

  const fileInputRef = useRef(null);

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    form.setValue("file", file);
    if (file) {
      setSelectedFileName(file.name);
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-white flex bg-[#2CBCEF] px-3 p-1 rounded-lg items-center gap-2">
          <img src={tablarFile} alt="" className="text w-5" />
          Open File
        </button>
      </SheetTrigger>
      <SheetContent className="p-0 pt-16 border-gray-700 min-w-[40%] max-w-1/2 rounded-tr-lg rounded-tl-lg">
        <SheetHeader className={"shadow-sm  p-3 border-b"}>
          <SheetTitle>
            <div className="text">
              <ul className="text-sm gap-3 flex">
                <li>
                  <button
                    onClick={() => setTabs(1)}
                    className={`${
                      tabs === 1
                        ? "underline decoration-2 underline-offset-4 decoration-[#2CBCEF]"
                        : "text-gray-500"
                    }`}
                  >
                    File
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTabs(2)}
                    className={`${
                      tabs === 2
                        ? "underline decoration-2 underline-offset-4 decoration-[#2CBCEF]"
                        : "text-gray-500"
                    }`}
                  >
                    Audit Trail
                  </button>
                </li>
              </ul>
            </div>
          </SheetTitle>
          <SheetDescription>
            {openSearch}
            <div
              className={`text flex justify-between items-center my-4 relative`}
            >
              <IoFilterSharp
                onClick={() => setOpenSearch(!openSearch)}
                className={` z-20 transition-all duration-1000 ease-in-out transform absolute ${
                  openSearch ? "translate-x-full right-8" : ""
                }`}
              />
              <img
                src={searchImg}
                alt=""
                onClick={() => setOpenSearch(!openSearch)}
                className={`absolute z-20 w-4 transition-all duration-1000 ease-in-out transform ${
                  openSearch ? "-translate-x-full left-8" : " right-0"
                }`}
              />
              <Input
                type="search"
                className={` bg-gray-50 transition-all duration-300 ease-in-out transform ${
                  openSearch ? "w-full px-8 rounded-lg" : " w-0 h-0 p-0"
                }`}
                onChange={handleChanges}
              />
            </div>
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[68vh] px-3 lg:px-6 min-h-[65vh] bg-gray-50 w-full">
          {tabs === 1 && (
            <div className="">
              {fileInfo.map((value) => (
                <ClaimFileCard key={value.name} data={value} />
              ))}
            </div>
          )}
          {tabs === 2 && (
            <div className="">
              {auditDummyData.map((value) => (
                <ClaimAudit key={value.name} data={value} />
              ))}
            </div>
          )}
        </ScrollArea>
        <div className="text p-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-9 border rounded-lg p-2"
            >
              <div
                className={`text ${
                  selectedFileName ? "col-span-4" : "col-span-6"
                } `}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Write a message"
                          className="border-0 shadow-none p-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {selectedFileName && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="text mx-1 rounded-lg col-span-2 gap-1 flex justify-center items-center bg-[#2CBCEF1A] relative">
                        {selectedFileName?.slice(0, 4)}...{" "}
                        <FiDelete
                          onClick={() => {
                            fileInputRef.current = null;
                            setSelectedFileName("");
                          }}
                          className="text-red-500 cursor-pointer"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{selectedFileName}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <div
                onClick={handleAttachClick}
                className="text flex cursor-pointer justify-center bg-[#F8F8FA] items-center  w-8 h-8 rounded-full relative"
              >
                <Input
                  placeholder=""
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="border-0 shadow-none p-0 hidden"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <img src={attachedFileIcon} alt="" className="text" />
              </div>
              <div className="text-white h-10 col-span-2 bg-[#2CBCEF] rounded-lg">
                <Button className="w-full h-full py-2">Send</Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OpenfileModal;
