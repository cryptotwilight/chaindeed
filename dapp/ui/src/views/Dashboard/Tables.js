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

// Chakra imports
import {
	Box,
	Button,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Grid,
	Icon,
	Input,
	Select,
	SelectField,
	SelectFieldProps,
	SelectProps,
	InputGroup,
	Progress,
	SimpleGrid,
	Spacer,
	Stack,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr
} from '@chakra-ui/react';
// Styles for the circular progressbar
import medusa from 'assets/img/cardimgfree.png';
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// Table Components
import LoanTableRow from "components/Tables/LoanTableRow";
import CollateralTableRow from "components/Tables/CollateralTableRow";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData, tablesTableData } from "variables/general";
import { loanTableData, collateralTableData } from "variables/loans";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from 'react-icons/bs';
function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 2fr' }} my='26px' gap='18px'>
				{/* Welcome Card */}
				<Card
					p='0px'
					gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
					bgImage={medusa}
					bgSize='cover'
					bgPosition='50%'>
					<CardBody w='100%' h='100%'>
						<Flex flexDirection={{ sm: 'column', lg: 'row' }} w='100%' h='100%'>
							<Flex flexDirection='column' h='100%' p='22px' minW='60%' lineHeight='1.6'>
								<Text fontSize='sm' color='gray.400' fontWeight='bold'>
									Collateral
								</Text>
						
								<Text color='gray.400'>Collateralize Deed to Borrow</Text>
								
								
								<InputGroup>
								<Text  fontSize='md' color='gray.400'>Select Deed</Text>
								
								<Select color='gray.400' placeholder="Select Deed" >
									<option value='0'>100000 USDC</option>
									<option value='1'>3 ETH</option>
									<option value='2'>500000 USDT</option>
									<option value='3'>40 OCDT</option>
								</Select>
		
								</InputGroup>
								<Text fontSize='md' color='gray.400'>NOTE: This turns the deed into Collateral</Text>

								<Spacer />
								<Button>
									<Text>Collateralize</Text>
								</Button>
								
							</Flex>
						</Flex>
					</CardBody>
				</Card>
				{/* Deed Card */}
				<Card
					p='0px'
					gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
					bgImage={medusa}
					bgSize='cover'
					bgPosition='50%'>
					<CardBody w='100%' h='100%'>
						<Flex flexDirection={{ sm: 'column', lg: 'row' }} w='100%' h='100%'>
							<Flex flexDirection='column' h='100%' p='22px' minW='100%' lineHeight='1.6'>
				
                <Text fontSize='sm' color='gray.400' fontWeight='bold'>
									Borrow Tokens
								</Text>
								<Spacer />
                <Text>
                  Select collateral against which to secure your borrow
                </Text>
								<InputGroup>
								<Text  fontSize='md' color='gray.400'>Collateral</Text>
								<Select color='gray.400' placeholder="Select Collateral (market value / leanable value)" >
									<option value='0'>10000 / 7000 USDC</option>
									<option value='1'>100000 / 70000 USDT</option>
                  <option value='2'> 3 / 2 ETH</option>
								</Select>
								</InputGroup>
                
                <Spacer/>
								<InputGroup>
								<Text  fontSize='md' color='gray.400'>Borrowing Requirement</Text>
								<Input fontSize='md'
										py='11px'
									    color='gray.400'
										placeholder='Type here...'
										borderRadius='inherit'/>
								</InputGroup>
                <Spacer/>
                <InputGroup>
								<Text  fontSize='md' color='gray.400'>Currency</Text>
								<Select color='gray.400' placeholder="Select borrow currency" >
									<option value='0'>USDC</option>
									<option value='1'>USDT</option>
                  <option value='2'>ETH</option>
                  <option value='2'>WBTC</option>
								</Select>
								</InputGroup>
                <Spacer/>
                <InputGroup>
								<Text  fontSize='md' color='gray.400'>Term</Text>
								<Select color='gray.400' placeholder="Select borrow term (months)" >
									<option value='0'>3</option>
									<option value='1'>6</option>
                  <option value='2'>9</option>
                  <option value='2'>12</option>
								</Select>
								</InputGroup>
								<Button>
									<Text>Borrow</Text>
								</Button>
								
							
								<Spacer />
							
							</Flex>
						</Flex>
					</CardBody>
				</Card>

			</Grid>
      {/* Authors Table */}
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
        <CardHeader p='6px 0px 22px 0px'>
          <Text fontSize='lg' color='#fff' fontWeight='bold'>
            Outstanding Loans
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px' color='gray.400'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                 Id
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Collateral (Deed Id)
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Borrowing
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Balance
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Currency
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Completion Date
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {loanTableData.map((row, index, arr) => {
                return (
                  <LoanTableRow
                    id={row.id}
                    deedId={row.deedId}
                    borrowing={row.borrowing}
                    balance={row.balance}
                    currency={row.currency}
                    completionDate={row.completionDate}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      {/* Projects Table */}
      <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
        <CardHeader p='6px 0px 22px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color='#fff' fontWeight='bold' mb='.5rem'>
              Collateral 
            </Text>
            <Flex align='center'>
              <Icon
                as={AiFillCheckCircle}
                color='green.500'
                w='15px'
                h='15px'
                me='5px'
              />
              <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                <Text fontWeight='bold' as='span' color='gray.400'>
                  +30%
                </Text>{" "}
                this month
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Collateral Id
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Deed Id
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Market Value
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Leanable Value
                </Th>
                <Th color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Status
                </Th>
                
              </Tr>
            </Thead>
            <Tbody>
              {collateralTableData.map((row, index, arr) => {
                return (
                  <CollateralTableRow
                    id={row.id}
                    deedId={row.deedId}
                    marketValue={row.marketValue}
                    leanableValue={row.leanableValue}
                    status={row.status}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
