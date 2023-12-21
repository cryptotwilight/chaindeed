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
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import IconBox from 'components/Icons/IconBox';
// Icons
import { CartIcon, DocumentIcon, GlobeIcon, RocketIcon, StatsIcon, WalletIcon } from 'components/Icons/Icons.js';
import DeedTableRow from 'components/Tables/DeedTableRow';

import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import { BsArrowRight } from 'react-icons/bs';
import { IoCheckmarkDoneCircleSharp, IoEllipsisHorizontal } from 'react-icons/io5';
// Data

import { deedTableData } from 'variables/deeds';
import { ethers, Contract, JsonRpcSigner, JsonRpcApiProvider } from 'ethers';

import { iOcdOpsRegisterAbi } from 'abi/IocdOpsRegister';
import { iOcdDeedRegisterAbi } from 'abi/IocdDeedRegister';

const opsRegisterAddress = "0xF95eE8d9661c928c782d61914C5533dbEA7DbDF3"; 

var iOcdOpsRegister;
var deedRegisterAddress; 
var iOcdDeedRegister;
var deeds = []; 
var deedIds; 
var signer;
var provider;

function addAndApprove( ){
}

function switchAsset() { 
	if(asset == 'ERC721'){

	}
	if(asset == 'ERC20'){

	}
}

async function runInitialization() {
	iOcdOpsRegister = new Contract(opsRegisterAddress, iOcdOpsRegisterAbi, signer);
	deedRegisterAddress = await iOcdOpsRegister.getAddress("RESERVED_DEED_REGISTER");
	deedRegisterAddress = "0x87fAc5e603A67014Bd1C60Cc597F3f7C9703978b";
	iOcdDeedRegister = new Contract(deedRegisterAddress, iOcdDeedRegisterAbi, signer);
	deedIds = await iOcdDeedRegister.getDeedOwnerIds();
	for(var x = 0; x < deedIds.length; x++){
		deeds[x] = await iOcdDeedRegister.getRegisteredDeed(deedIds[x]); 
		console.log(d.registrationId);
	}
	this.setState({Deeds : deeds})
	console.log("Deeds " + deeds);
}

export default async function Dashboard() {
	if (window.ethereum == null) {
	
		// If MetaMask is not installed, we use the default provider,
		// which is backed by a variety of third-party services (such
		// as INFURA). They do not have private keys installed,
		// so they only have read-only access
		console.log("MetaMask not installed; using read-only defaults")
		provider = ethers.getDefaultProvider()
	
	} 
	else {
	
		// Connect to the MetaMask EIP-1193 object. This is a standard
		// protocol that allows Ethers access to make all read-only
		// requests through MetaMask.
		provider = new ethers.BrowserProvider(window.ethereum)
	
		// It also provides an opportunity to request access to write
		// operations, which will be performed by the private key
		// that MetaMask manages for the user.
		signer = await provider.getSigner();
		await runInitialization();

	}



	return (
		<Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
			<SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
				{/* MiniStatistics Card */}
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
									Today's Money
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										$53,000
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										+55%
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<WalletIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
				{/* MiniStatistics Card */}
				<Card minH='83px'>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
									Today's Users
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										2,300
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										+5%
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<GlobeIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
				{/* MiniStatistics Card */}
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
									New Clients
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff'>
										+3,020
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='red.500'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										-14%
									</StatHelpText>
								</Flex>
							</Stat>
							<Spacer />
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<DocumentIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
				{/* MiniStatistics Card */}
				<Card>
					<CardBody>
						<Flex flexDirection='row' align='center' justify='center' w='100%'>
							<Stat me='auto'>
								<StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='2px'>
									Total Sales
								</StatLabel>
								<Flex>
									<StatNumber fontSize='lg' color='#fff' fontWeight='bold'>
										$173,000
									</StatNumber>
									<StatHelpText
										alignSelf='flex-end'
										justifySelf='flex-end'
										m='0px'
										color='green.400'
										fontWeight='bold'
										ps='3px'
										fontSize='md'>
										+8%
									</StatHelpText>
								</Flex>
							</Stat>
							<IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
								<CartIcon h={'24px'} w={'24px'} color='#fff' />
							</IconBox>
						</Flex>
					</CardBody>
				</Card>
			</SimpleGrid>
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
									Welcome back,
								</Text>
								<Text fontSize='sm' color='gray.400' fontWeight='bold'>
									Create New Deed
								</Text>
								<Text color='gray.400'>To Create a New deed select the denomination of your deed</Text>
								
								
								<InputGroup>
								<Text  fontSize='md' color='gray.400'>Deed Denomination</Text>
								
								<Select color='gray.400' placeholder="Select Cryptocurrency Denomination">
									<option value='USDC'>USDC</option>
									<option value='ETH'>ETH</option>
									<option value='USDT'>USDT</option>
									<option value='OCDT'>OCDT</option>
								</Select>
							
								<Button> 
									<Text>Create Deed </Text>
								</Button>
								
								</InputGroup>
								<Text fontSize='md' color='gray.400'>NOTE: This deed is not on the blockchain</Text>

								<Spacer />
								<Button>
									<Text>Register Deed</Text>
								</Button>
								<Flex align='center'>
									<Button
										p='0px'
										variant='no-hover'
										bg='transparent'
										my={{ sm: '1.5rem', lg: '0px' }}>
										<Text
											fontSize='sm'
											color='#fff'
											fontWeight='bold'
											cursor='pointer'
											transition='all .3s ease'
											my={{ sm: '1.5rem', lg: '0px' }}
											_hover={{ me: '4px' }}>
											Tab to record
										</Text>
										<Icon
											as={BsArrowRight}
											w='20px'
											h='20px'
											color='#fff'
											fontSize='2xl'
											transition='all .3s ease'
											mx='.3rem'
											cursor='pointer'
											pt='4px'
											_hover={{ transform: 'translateX(20%)' }}
										/>
									</Button>
								</Flex>
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
				
								
								<Spacer />
								<Text fontSize='sm' color='gray.400' fontWeight='bold'>
									Add Deed Asset
								</Text>
								<InputGroup>
								<Text  fontSize='md' color='gray.400'>Asset Type</Text>
								<Select color='gray.400' placeholder="Select Cryptocurrency Denomination" onChange={newText => setAsset(newText)} >
									<option value='ERC721'>NFT</option>
									<option value='ERC20'>Cryptocurrency</option>
								</Select>
								</InputGroup>
								<InputGroup>
								<Text  fontSize='md' color='gray.400'>Asset Contract</Text>
								<Input fontSize='md'
										py='11px'
									    color='gray.400'
										placeholder='Type here...'
										borderRadius='inherit'/>
								</InputGroup>
								<InputGroup>
								<Text  fontSize='md' color='gray.400'>Id on Asset Contract</Text>
								<Input fontSize='md'
										py='11px'
									    color='gray.400'
										placeholder='Type here...'
										borderRadius='inherit'/>
								</InputGroup>
								<InputGroup>
								<Text  fontSize='md' color='gray.400'>Asset Amount</Text>
								<Input fontSize='md'
										py='11px'
									    color='gray.400'
										placeholder='Type here...'
										borderRadius='inherit'/>
								</InputGroup>
								<Button onClick={addAndApprove()}>
									<Text>Approve Deed Register & Add To Deed</Text>
								</Button>
								
							
								<Spacer />
							
							</Flex>
						</Flex>
					</CardBody>
				</Card>

			</Grid>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }} gap='24px'>
				{/* Projects */}
				<Card p='16px' overflowX={{ sm: 'scroll', xl: 'hidden' }}>
					<CardHeader p='12px 0px 28px 0px'>
						<Flex direction='column'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' pb='8px'>
								Your Deeds
							</Text>
							<Flex align='center'>
								<Icon as={IoCheckmarkDoneCircleSharp} color='teal.300' w={4} h={4} pe='3px' />
								<Text fontSize='sm' color='gray.400' fontWeight='normal'>
									<Text fontWeight='bold' as='span'>
										30 done
									</Text>{' '}
									this month.
								</Text>
							</Flex>
						</Flex>
					</CardHeader>
					<Table variant='simple' color='#fff'>
						<Thead>
							<Tr my='.8rem' ps='0px'>
								<Th
									ps='0px'
									color='gray.400'
									fontFamily='Plus Jakarta Display'
									borderBottomColor='#56577A'>
									Deed Id
								</Th>
								<Th color='gray.400' fontFamily='Plus Jakarta Display' borderBottomColor='#56577A'>
									Denomination
								</Th>
								<Th color='gray.400' fontFamily='Plus Jakarta Display' borderBottomColor='#56577A'>
									Vault
								</Th>
								<Th color='gray.400' fontFamily='Plus Jakarta Display' borderBottomColor='#56577A'>
									Value
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{sdeeds.map((row, index, arr) => {
								return (
									<DeedTableRow
										registrationId={row.registrationId}
										deedDenomination={row.deedDenomination}
										vault={row.vault}
										valueOnIssueDate={row.valueOnIssueDate}
									/>
								);
							})}
						</Tbody>
					</Table>
				</Card>
				{/* Orders Overview */}
				<Card>
					<CardHeader mb='32px'>
						<Flex direction='column'>
							<Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
								Deed Data
							</Text>
							<Flex align='center'>
								<Icon as={AiFillCheckCircle} color='green.500' w='15px' h='15px' me='5px' />
								<Text fontSize='sm' color='gray.400' fontWeight='normal'>
									<Text fontWeight='bold' as='span' color='gray.400'>
										+30%
									</Text>{' '}
									this month
								</Text>
							</Flex>
						</Flex>
					</CardHeader>
					<CardBody>
						<Flex direction='column' lineHeight='21px'>
					
						</Flex>
					</CardBody>
				</Card>
			</Grid>
		</Flex>
	);
}
