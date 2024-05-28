import React, { useState } from "react";
import {
  RadioGroup,
  Radio,
  HStack,
  Select,
  FormLabel,
  Button,
  Input,
  Textarea,
  Text
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IVehicle } from "../Interfaces/vehicle";
import { useDispatch } from "react-redux";
import { postVehicle } from "../features/addVehicle";
import "../App.css";

export const VehicleForm = () => {
  const navigate = useNavigate();
const dispatch = useDispatch();
  const [ formData, setFormData ] = useState<IVehicle>({
    license: "",
    type: "",
    ownerName: "",
    ownerPhone: "",
    status: "Out",
    ownerAddress: "",
    entryTime: null,
    exitTime: null,
    parkingCharge: 0
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const getCurrentDateTime = (): string => {
    const now = new Date();
    return now.toISOString().slice(0, 16); 
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   if(formData.license) dispatch(postVehicle(formData) as any);
    navigate("/");
    console.log(formData);
  };
  return (
    <>
      <Text className="form-data" fontSize={"2xl"}>Vehicle Registration Form: </Text>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name = "license"
          placeholder="Enter vehicle number"
          className="form-data"
          onChange={handleInputChange}
        />
        <Select placeholder="Select vehicle type" name = "type" className="form-data" onChange={handleInputChange}>
          <option>Microbus</option>
          <option>Car</option>
          <option>Truck</option>
        </Select>
        <Input
          type="text"
          name = "ownerName"
          placeholder="Enter vehicle owner name"
          className="form-data"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name = "ownerPhone"
          placeholder="Enter vehicle owner phone"
          className="form-data"
          onChange={handleInputChange}
        />
        <FormLabel>Status</FormLabel>
        <RadioGroup defaultValue="Out" name = "status" className="form-data" onChange={(value: "In" | "Out") => setFormData({ ...formData, status: value })}>
          <HStack spacing="24px">
            <Radio value="Out">Out</Radio>
            <Radio value="In">In</Radio>
          </HStack>
        </RadioGroup>
        <Textarea
          name = "ownerAddress"
          placeholder="Enter vehicle owner address"
          className="form-data"
          onChange={handleInputChange}
        ></Textarea>
        <FormLabel>Entry time</FormLabel>
        <Input
          type="datetime-local"
          name = "entryTime"
          placeholder="Enter entry time"
          className="form-data"
        //   value={entryTime}
          min = {getCurrentDateTime()} // Set min attribute to current date and time
        //   onChange={(e) => setEntryTime(e.target.value)}
        onChange={handleInputChange}
        />
        <FormLabel>Exit time</FormLabel>
        <Input
          type="datetime-local"
          name = "exitTime"
          placeholder = "Enter exit time"
          className = "form-data"
        //   value={exitTime}
          min = {getCurrentDateTime()} // Set min attribute to current date and time
        //   onChange={(e) => setExitTime(e.target.value)}
        onChange={handleInputChange}
        />
        <Input
          type="number"
          name = "parkingCharge"
          placeholder="Enter parking charge"
          className="form-data"
          onChange={handleInputChange}
        />
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};
