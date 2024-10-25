import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../components/shadch/ui/ui/select"
import SelectModalDialog from './SelectModalDialog'

const ClaimStatusChange = ({item}) => {
  return (
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="Submitted">
        <SelectModalDialog text={"Submitted"}/>
      </SelectItem>
      <SelectItem value="In Review">
        <SelectModalDialog text={"In Review"}/>
      </SelectItem>
      <SelectItem value="Valid">
        <SelectModalDialog text={"Valid"}/>
      </SelectItem>
      <SelectItem value="Invalid">
        <SelectModalDialog text={"Invalid"}/>
      </SelectItem>
    </SelectContent>
  </Select>
  
  )
}

export default ClaimStatusChange