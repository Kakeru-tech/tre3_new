import { Box, Button, Center, Container, HStack, Text, VStack, } from "native-base";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddSlots from "../../Component/Admin/AddSlots";
import AllBookings from "./AllBookings";
import ChangeSlots from "./ChangeSlots";
import firebase from 'firebase/app';


const AdminDashboard = () => {
  const navigation=useNavigate();
  const auth = firebase.auth();
  const user = auth.currentUser;
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    if(user && user?.uid !== '60UCDF2biAdLsbVtPodocfaUqby2') {
      // navigation('/')
      setIsAdmin(false);
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  },[])

  const logoutUser=()=>{
    localStorage.clear()
    navigation('/')
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <VStack flex="1">
      <HStack alignSelf="flex-end" mx="20" my="10">
        <Button colorScheme="danger" mx='2' onPress={logoutUser}>Logout</Button>
        <Button colorScheme="primary" onPress={()=>{
          navigation('/')
        }}>Home</Button>
      </HStack>
      { isAdmin &&
      <Center>
        <HStack space={3} justifyContent="center" mt="20">
          <Box w="20vw">
            <Button onPress={() => setActive(0)}>All Bookings</Button>
          </Box>
          <Box w="20vw">
            <Button onPress={() => setActive(1)}>Edit Slots</Button>
          </Box>
          <Box w="20vw">
            <Button onPress={() => setActive(2)}>Add Slots</Button>
          </Box>
        </HStack>
        {active === 0 && <AllBookings />}
        {active === 1 && <ChangeSlots />}
        {active === 2 && <AddSlots />}
      </Center>
      }
    </VStack>
  );
};

export default AdminDashboard;
