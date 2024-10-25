import { TbFileUpload } from "react-icons/tb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/shadcn/ui/form";
import { Input } from "../../components/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/shadcn/ui/select";
import useClaimHook from "../../hooks/useClaimHook";
import { Checkbox } from "../../components/shadcn/ui/checkbox";
import ButtonLoader from "../../components/components-ui/ButtonLoader";
import { Button } from "../../components/shadcn/ui/button";
import { ScrollArea } from "../../components/shadcn/ui/scroll-area";
import { options } from "../../lib/helper";

const AddNewSurgeryClaim = () => {
  const {
    fileInfo,
    form,
    onSubmit,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useClaimHook();

  return (
    <div className="grid grid-col items-center gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <ScrollArea className="h-[60vh] w-full rounded-md ">
            <h1 className="text-sm font-medium  my-5">
              BENEFICIARY INFORMATION
            </h1>
            <div className="text grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="beneficiaryInfo.policyNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Policy Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="bg-[#f7f7f7] border-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="beneficiaryInfo.product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Product
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="bg-[#f7f7f7] border-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="beneficiaryInfo.title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Title (Mr/Mrs/Ms/Others)
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border-0 outline-none  bg-[#F7F7F7]">
                          <SelectValue placeholder="Select claim type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Claims Type</SelectLabel>
                            {options.title.map((type, index) => (
                              <SelectItem key={index} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="beneficiaryInfo.phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="bg-[#f7f7f7] border-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="beneficiaryInfo.surName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Surname
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="bg-[#f7f7f7] border-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="beneficiaryInfo.firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="bg-[#f7f7f7] border-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="beneficiaryInfo.middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Middle Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="bg-[#f7f7f7] border-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="beneficiaryInfo.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="email"
                        className="bg-[#f7f7f7] border-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <h1 className="text mt-6 text-gray-500">Documents</h1>
            <div
              {...getRootProps()}
              className="grid bg-sky-50 mb-5 border-dashed border border-spacing-3 border-sky-500 rounded-lg pb-5 text-sm text-center gap-5"
            >
              <input {...getInputProps()} />
              <h1 className="text-[#2CBCEF] flex justify-center mt-4">
                <TbFileUpload className="text-2xl" />
              </h1>
              <div className="text">
                {fileInfo ? (
                  <div className="text">
                    <h1 className="text-[#2CBCEF] font-semibold flex justify-center mt-4">
                      {`" ${fileInfo.name} " file is attached.`}
                    </h1>
                    <p
                      className={`text-base font-semibold mb-4 ${
                        Math.floor(fileInfo.size / 1000000) > 20
                          ? "text-[#ed2424]"
                          : "text-[#2CBCEF]"
                      } `}
                    >
                      Size:
                      {Math.ceil(fileInfo.size / 1000) >= 1000
                        ? " " + Math.floor(fileInfo.size / 1000000) + "MB"
                        : " " + Math.ceil(fileInfo.size / 1000) + "KB"}
                      <div className="text">
                        {Math.floor(fileInfo.size / 1000000) > 20 &&
                          "The file's size is larger than 20MB, Kindly change it."}
                      </div>
                    </p>
                  </div>
                ) : (
                  <button className="text">
                    {isDragActive ? (
                      <p className="text-sm mb-4 text-gray-500">
                        Drop the files here...
                      </p>
                    ) : (
                      <p className="text-sm mb-2 text-gray-500">
                        Click or drag to upload Surgery certificate
                      </p>
                    )}
                    <span className="text-[#2CBCEF]">
                      ( Max. file size: 20 MB )
                    </span>
                  </button>
                )}
              </div>
            </div>
            <FormField
              control={form.control}
              name="beneficiaryInfo.isConfirmed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className={`${
                        field.value
                          ? " bg-[#2CBCEF] text-white"
                          : "bg-transparent text-black"
                      }`}
                    />
                  </FormControl>
                  <div className="space-y-1 font-normal leading-none">
                    <FormLabel className="font-normal flex justify-center items-center text-xs">
                      I confirm that the information provided is accurate and
                      complete.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </ScrollArea>

          <Button className="bg-[#2CBCEF] mb-0 w-full py-5 mt-5" type="submit">
            <ButtonLoader />
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddNewSurgeryClaim;
