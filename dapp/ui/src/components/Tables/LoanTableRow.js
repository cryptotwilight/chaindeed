/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function LoanTableRow(props) {
  const {
    id, deedId, borrowing, balance, currency, completionDate
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        border='none'
        borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
            {id}
          </Text>
      </Td>
      <Td
        border='none'
        borderBottomColor='#56577A'
        minW='150px'>
        <Flex direction='column'>
          <Text fontSize='sm' color='#fff' fontWeight='normal'>
            {deedId}
          </Text>
        </Flex>
      </Td>
      <Td  border='none' borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {borrowing}
        </Text>
      </Td>
      <Td  border='none' borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {balance}
        </Text>
      </Td>
      <Td border='none' borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {currency}
        </Text>
      </Td>
      <Td border='none' borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {completionDate}
        </Text>
      </Td>
    </Tr>
  );
}

export default LoanTableRow
