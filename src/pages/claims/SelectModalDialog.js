import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/shadch/ui/ui/dialog";
import { Button } from "../../../components/shadch/ui/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/shadch/ui/ui/form";
import { Textarea } from "../../../components/shadch/ui/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { Input } from "../../../components/shadch/ui/ui/input";
import attachedFileIcon from "../../../assets/icons/attach.svg";
import { IoMdAttach } from "react-icons/io";

const formSchema = z.object({
  message: z
    .string()
    .min(5, { message: "Message should be at least 5 letters" }),
});

const SelectModalDialog = ({ text, isOpen, setIsOpen }) => {
    const fileInputRef = useRef(null);
    const [selectedFileName, setSelectedFileName] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
      file: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsOpen(false);
  };

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
    <Dialog className="" open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="min-w-[40%]">
        <DialogHeader>
          <DialogTitle className="p-5 text-3xl font-semibold">
            Add a Comment
          </DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="border-0 px-5 text-lg outline-none relative  space-y-6"
              >
                <FormField
                  control={form.control}
                  name=""
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Enter Message"
                          className="resize-none bg-[#f8faff] border-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div
                onClick={handleAttachClick}
                className="text flex cursor-pointer justify-center bg-[#2CBCEF] items-center bottom-28 right-10 w-10 h-10 rounded-full absolute"
              >
                <Input
                  placeholder=""
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="border-0 shadow-none p-0 hidden"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {/* <img src={attachedFileIcon} alt="" className="text" /> */}
                <IoMdAttach className="text-white" />
              </div>
                <button
                  type="submit"
                  className={`py-3 bg-gray-100 rounded-lg flex items-center gap-2 justify-center`}
                >
                  Submit
                  <IoIosSend className={``} />
                </button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SelectModalDialog;
