import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./shadcn/ui/ui/button";
import WorldMap from "./components/WorldMap";
import { payload } from "./lib/helpers";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./shadcn/ui/ui/dialog";

function App() {
  return (
    <>
      <div className="text bg-gray-50">
        <div className="text flex w-full min-h-screen">
          <div className="text w-1/4 border-r border-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corrupti, nihil quis quo unde beatae? Rerum natus tenetur
            recusandae. Natus soluta sequi iure veritatis dolore consectetur sit
            minus et animi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Mollitia corrupti, nihil quis quo unde beatae? Rerum natus
            tenetur recusandae. Natus soluta sequi iure veritatis dolore
            consectetur sit minus et animi.
            <div className="text w-full">
              <Dialog  className="w-full" >
                <DialogTrigger >Open</DialogTrigger>
                <DialogContent className="sm:max-w-[425px] lg:max-w-[1000px] h-screen">
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription className="flex">
                      <div className="text border w-1/2 min-h-screen flex justify-center items-center">
                      <WorldMap payload={payload} />
                      </div>
                      <div className="text border w-1/2 min-h-screen flex justify-center items-center">

                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="text w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            cupiditate provident impedit dolor itaque atque sequi ratione
            nostrum quia aut quidem est quaerat ducimus repudiandae labore illo,
            laborum amet nam? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nulla, cupiditate provident impedit dolor itaque atque sequi
            ratione nostrum quia aut quidem est quaerat ducimus repudiandae
            labore illo, laborum amet nam?
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
