// import React from 'react'
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { useEffect, useState } from "react";
import apiClient from "../../../http/common";
import useClaimHook from "../../../hooks/useClaimHook";
import { FaChevronDown } from "react-icons/fa";

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

const tableHeader = [
  // "Claim ID",
  "Beneficiary Name",
  "Claim Type",
  "Claim Status",
  "Date of Event",
  "Actions",
];

const Claims = () => {
  const length = tableHeader.length;
  const {
    claims,
    isLoading,
    setIsOpen,
    isOpen,
    selectedItem,
    handleSelect,
  } = useClaimHook();
  const navigate = useNavigate();

  return (
    <div className="pt-10 w-full">
      <div className="text flex justify-between">
        <div className="text  bg-[#F7F7F7] w-1/3 flex items-center  rounded-full px-3 gap-4 mt-4">
          {/*<img src={searchImg} alt="" className="text w-4" />*/}
          <input
            type="search"
            placeholder="Search for surgery claims"
            className="tex-xs bg-[#F7F7F7] w-full rounded-full py-1 border-0 outline-none"
          />
        </div>
      </div>
      <div className="text mt-8">
        <div
          className={`text-xs grid bg-[#F8F8FA] py-3 ${
            length === 4
              ? "grid-cols-4"
              : length === 5
              ? "grid-cols-5"
              : length === 6
              ? "grid-cols-6"
              : length === 7
              ? "grid-cols-7"
              : length === 8
              ? "grid-cols-8"
              : "grid-cols-3"
          } font-bold text-start pl-3`}
        >
          {tableHeader.map((header, index) => (
            <>
              <div key={index} className={`text border bg-gray-200 p-4`}>
                {header}
              </div>
            </>
          ))}
        </div>
        {!isLoading &&
          claims?.data?.map((item) => (
            <>
              <div
                key={item.name}
                className={`text-xs grid py-5 border-b ${
                  length === 4
                    ? "grid-cols-4"
                    : length === 5
                    ? "grid-cols-5"
                    : length === 6
                    ? "grid-cols-6"
                    : length === 7
                    ? "grid-cols-7"
                    : length === 8
                    ? "grid-cols-8"
                    : "grid-cols-3"
                } text-start pl-3`}
              >
                {/* <div className="text">{item.claimId}</div> */}
                <div className="text px-4">{item.beneficiaryFirstName}</div>
                <div className="text px-4">
                  {item.manualClaimStatus === 0 ? "Surgery" : "Death"}
                </div>
                <div className="text px-4">
                  <div
                    className={` px-3 py-2 rounded w-[100px] text-center  ${
                      item.manualClaimType === 3
                        ? "bg-[#04C5511A]"
                        : item.manualClaimType === 2
                        ? "bg-[#EB57571A]"
                        : item.manualClaimType === 0
                        ? "bg-[#2CBCEF1A]"
                        : "bg-[#FAB5131A]"
                    }`}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex gap-2 items-center">
                        <div className="text flex gap-2 items-center justify-between">
                          {selectedItem ||
                            (item.manualClaimType === 3
                              ? "Valid"
                              : item.manualClaimType === 2
                              ? "Invalid"
                              : item.manualClaimType === 0
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
                <div className="text px-4">{item.dateOfEvent}</div>
                <div className="text px-4">
                  <button
                    onClick={() =>
                      navigate(`/heirs/claims-details/${item.id}`, {
                        state: item,
                      })
                    }
                    className="text-[#2CBCEF] font-medium"
                  >
                    View
                  </button>
                </div>
              </div>
            </>
          ))}
        {isLoading && (
          <div className="text w-full h-[50vh] flex justify-center items-center ">
            <PropagateLoader />
          </div>
        )}
        <div className="text flex justify-start mt-5">
          {/* <PaginationComponents
            currentPage={1}
            totalPages={5}
            setCurrentPage={""}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Claims;
