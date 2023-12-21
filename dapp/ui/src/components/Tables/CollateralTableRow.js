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

import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function DashboardTableRow(props) {
  const { id, deedId, marketValue, leanableValue, status} = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        borderBottomColor='#56577A'
        border='none'>
        <Flex alignItems='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Text fontSize='sm' color='#fff' minWidth='100%'>
            {id}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor='#56577A' border='none'>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {deedId}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border='none'>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {marketValue}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border='none'>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {leanableValue}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border='none'>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {status}
        </Text>
      </Td>

    </Tr>
  );
}

export default DashboardTableRow;
