import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "../../styles/FooterStyles";

const Footer = () => {
	return (
		<Box>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							Mission
						</FooterLink>
						<FooterLink href="#">
							Features
						</FooterLink>
					</Column>
                    <Column>
						<Heading>Partnership</Heading>
						<FooterLink href="#">
							Jabatan Alam Sekitar Malaysia
						</FooterLink>
					</Column>
                    <Column>
						<Heading>Office Address</Heading>
						<FooterLink href="#">
							Bangunan Ecogreen, Jalan Hang Ace 2/5A, Bangi, Selangor
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink>
							03-45672788
						</FooterLink>
						<FooterLink>
							011-5666255
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};

export default Footer;