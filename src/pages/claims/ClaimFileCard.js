import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/shadch/ui/ui/card";
import pdf from "../../../assets/icons/pdf.svg";
import { SlOptions } from "react-icons/sl";


const ClaimFileCard = ({ data }) => {
  const splitedWords = data?.name.split(" ")[0].slice(0, 1);
console.log(data);

  return (
    <Card className="shadow-none bg-inherit my-4 border-0">
      <div className="text bg-white rounded-lg">
        <CardHeader>
          <CardTitle>
            <div className="text flex items-center justify-between">
              <div className="text flex items-center gap-3">
                <div className="text-white flex justify-center items-center rounded-full text-xs w-6 h-6 bg-[#EF4343]">
                  {splitedWords}
                </div>
                <div className="tex">{data.name}</div>
              </div>
              <SlOptions/>
            </div>
          </CardTitle>
          <CardDescription>
            <div className="text mt-2">
              {data.file && (
                <div className="text bg-[#2CBCEF14] rounded-lg p-2 flex items-center gap-2">
                  <img src={pdf} alt="pdf file" className="text w-8" />
                  <span className="text">Resources.pdf</span>
                </div>
              )}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm">Please attend to this quickly</div>
        </CardContent>
      </div>
      <div className="text-end my-1 text-sm">{data.time}</div>
      <CardFooter className="flex justify-between">
        <button className="text"> </button>
      </CardFooter>
    </Card>
  );
};
export default ClaimFileCard;
