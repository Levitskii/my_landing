import {Button, Link, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from './logo';

export const Nav = () => {
   const items = [
      {label: 'Услуги', href: '#services'},
      {label: 'Решения', href: '#solutions'},
      {label: 'Кейсы', href: '#cases'},
      {label: 'Процесс', href: '#process'},
      {label: 'Контакты', href: '#contacts'},
   ];
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
               {items.map(({label, href}) => (
                  <Navbar.Link key={label} href={href} css={{cursor: 'pointer'}}>
                     {label}
                  </Navbar.Link>
               ))}
               </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {items.map(({label, href}) => (
               <Navbar.CollapseItem key={label}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href={href}
                  >
                     {label}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            
         </Navbar.Collapse>
         <Navbar.Content>
            <Navbar.Item>
               <Button auto flat href="#audit" css={{cursor: 'pointer'}}>
                  Бесплатный аудит
               </Button>
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
