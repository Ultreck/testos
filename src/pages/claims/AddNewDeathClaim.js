import { TbFileUpload } from "react-icons/tb";
import ButtonLoader from "../../components/components-ui/ButtonLoader";
import { Button } from "../../components/shadcn/ui/button";
import { Checkbox } from "../../components/shadcn/ui/checkbox";
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
import { ScrollArea } from "../../components/shadcn/ui/scroll-area";
import { options } from "../../lib/helper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/shadcn/ui/popover";
import { cn } from "../../components/shadcn/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../components/shadcn/ui/calendar";
import { Textarea } from "../../components/shadcn/ui/textarea";

const AddNewDeathClaim = () => {
  const {
    fileInfo,
    form,
    onSubmit,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useClaimHook();

  return (
    <div className="grid grid-col items-center gap-5">
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
                          <SelectValue placeholder="Select title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Titles</SelectLabel>
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
              <FormField
                control={form.control}
                name="beneficiaryInfo.relative"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Relationship to Deceased
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border-0 outline-none  bg-[#F7F7F7]">
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Relationships</SelectLabel>
                            {options.relationship.map((type, index) => (
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
            </div>
            <h1 className="text-sm font-medium  mb-5 mt-10">
              DECEASED POLICYHOLDER INFORMATION
            </h1>
            <div className="text grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="deceasedPolicyHolderInfo.surname"
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
                name="deceasedPolicyHolderInfo.firstName"
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
                name="deceasedPolicyHolderInfo.middleName"
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
                name="deceasedPolicyHolderInfo.formalAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Last Known Address
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
                name="deceasedPolicyHolderInfo.currentLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Exact Location of Burial
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
                name="deceasedPolicyHolderInfo.placeOfDeath"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Place Of Death
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
                name="beneficiaryInfo.occupationAtDeath"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Occupation at Death
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border-0 outline-none  bg-[#F7F7F7]">
                          <SelectValue placeholder="Select occupation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Claims Type</SelectLabel>
                            {options.occupations.map((type, index) => (
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
            </div>
            <h1 className="text-sm font-medium  mb-5 mt-10">
              DETAILS FROM ATTENDING PHYSICIAN
            </h1>
            <div className="text grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="physicianInfo.gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Gender of Deceased
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border-0 outline-none  bg-[#F7F7F7]">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Gender</SelectLabel>
                            {options.gender.map((type, index) => (
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
                name="physicianInfo.dateOfDeath"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Date of Death
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "bg-[#f7f7f7] border-0 w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="text-[#2CBCEF] ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="physicianInfo.cadavarMarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Identification marks on Cadaver
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
                name="physicianInfo.causeOfDeath"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      Immediate Cause of Death
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border-0 outline-none  bg-[#F7F7F7]">
                          <SelectValue placeholder="Select cause of death" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Causes of Death</SelectLabel>
                            {options.immediateCausesOfDeath.map(
                              (type, index) => (
                                <SelectItem key={index} value={type}>
                                  {type}
                                </SelectItem>
                              )
                            )}
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
                name="physicianInfo.ailment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 font-medium text-xs">
                      From what other disease or impairment has the deceased
                      suffered and when?
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
            </div>
            <div className="texx">
              <FormField
                control={form.control}
                name="beneficiaryInfo.description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel  className="text-gray-500 font-medium text-xs">Additional information</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more"
                        className="resize-none border-0 bg-[#f7f7f7] h-32"
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

          <Button className="bg-[#2CBCEF] w-full py-6 mt-5" type="submit">
            <ButtonLoader />
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddNewDeathClaim;
