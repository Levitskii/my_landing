import {Button, Link, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from './logo';

export const Nav = () => {
   const collapseItems = ['Услуги', 'Решения', 'Кейсы', 'Процесс', 'Контакты'];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
               CORE
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               {collapseItems.map((item) => (
                  <Navbar.Link key={item} href="#">
                     {item}
                  </Navbar.Link>
               ))}
               </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            
         </Navbar.Collapse>
         <Navbar.Content>
            <Navbar.Item>
               <Button auto flat href="#">
                  Бесплатный аудит
               </Button>
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
