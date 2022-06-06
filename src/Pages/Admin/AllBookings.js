import { CenterFocusWeakSharp } from "@mui/icons-material";
import { Box, Container, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingsCard from "../../Component/Admin/BookingsCard";
import { db } from "../../firebase";
import "../../Styles/AllBookings.css";
const AllBookings = () => {
  const navigation = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    let addData = [];
    db.collection("Bookings")
      .orderBy("timestamp", "desc")
      .onSnapshot((e) => {
        e.docs.map((doc) => addData.push({ ...doc.data(), id: doc.id }))
        setData(addData)

      });
  }, [navigation]);

  console.log("ALLLBOOKING---", data, data.length)

  return (
    <Container flex="1" mt="10" width={"100vw"} p="4">
      <Box shadow={8} width={"80vw"} p="5" className="glassHead">
        <Text fontSize="xl">All bookings</Text>
      </Box>
      {data.length > 0 ? (
        data.map((item) => <BookingsCard data={item} key={data?.id} />)
      ) : (
        <Text fontSize="3xl" color={"danger.500"}>
          No Bookings Found
        </Text>
      )}
    </Container>
  );
};

export default AllBookings;
