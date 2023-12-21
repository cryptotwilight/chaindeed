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
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function DeedTableRow(props) {
  const { id, denomination, vault, value } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        borderBottomColor='#56577A'
        border='none'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
            {registrationId}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor='#56577A' border='none'>
      <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
            {deedDenomination}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor='#56577A' border='none'>
      <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
            {vault}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor='#56577A' border='none'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
            {valueOnIssueDate}
          </Text>
        </Flex>
      </Td>
    </Tr>
  );
}

export default DeedTableRow;

