import { ReactNode, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TableContainer,
  Table,
  Tbody,
  Th,
  Thead,
  Td,
  Tr,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { fetchVehicles } from "../features/getVehicles";
import { IVehicle } from "../Interfaces/vehicle";
export const VehicleList = () => {
  const { vehicles, isLoading, isError, error } = useSelector(
    (state: any) => state.getVehicles
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVehicles() as any);
  }, [dispatch]);


  const editVehicleInfo = ( id: string | undefined ) => {
    navigate(`/edit/${id}`);
  }

  let content: any;
  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p>{error}</p>;
  else if (vehicles.length === 0) content = <p>No vehicles found</p>;
  else
    content = 
      <TableContainer ml="10dvw" w="100%">
        <Table variant="simple">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead backgroundColor="#B9CEFD">
            <Tr>
              <Th>SL.</Th>
              <Th>Owner name</Th>
              <Th>Vehicle type</Th>
              <Th>License no</Th>
              <Th>Entry time</Th>
              <Th>Exit time</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody backgroundColor={"#EFF8FF"}>
            {vehicles.map((vehicle: IVehicle, index: number) => (
              <Tr key={vehicle.id}>
                <Td>{index + 1}</Td>
                <Td>{vehicle.ownerName}</Td>
                <Td>{vehicle.type}</Td>
                <Td>{vehicle.license}</Td>
                <Td>{new Date(vehicle.entryTime as string)?.toLocaleString()}</Td>
                <Td>{new Date(vehicle.exitTime as string)?.toLocaleString()  as ReactNode}</Td>
                <Td>{vehicle.status}</Td>
                <Td> <EditIcon style = {{cursor: 'pointer'}} onClick =  {() => editVehicleInfo(vehicle.id) } /></Td>
                {/* <Td ><DeleteIcon style = {{cursor: 'pointer'}} onClick =  { () => deletePeople(person.id) } /></Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    ;

  return (
    <>
      <Box>
      <Button colorScheme="blue" ml = "70dvw" mb = "5dvh" onClick={() => navigate("/add-vehicle")}>
          Add Vehicle
        </Button>
        {content}
      </Box>
    </>
  );
};
