import {Button, Card, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'px': '$6',
               '@sm': {
                  px: '$16',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h3 css={{textAlign: 'center'}}>
               Специализированные решения для вашего бизнеса
            </Text>

            <Grid.Container gap={2} justify="center">
               <Grid xs={12} sm={6} md={3}>
                  <Card>
                     <Card.Header css={{justifyContent: 'center'}}>
                        <Text b>E-commerce</Text>
                     </Card.Header>
                     <Card.Body>
                        <Box as={'ul'}>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Автоматизация заказов
                              </Text>
                           </Flex>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Динамическое ценообразование
                              </Text>
                           </Flex>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Синхронизация остатков
                              </Text>
                           </Flex>
                        </Box>
                     </Card.Body>
                  </Card>
               </Grid>
               <Grid xs={12} sm={6} md={3}>
                  <Card>
                     <Card.Header css={{justifyContent: 'center'}}>
                        <Text b>Маркетплейсы</Text>
                     </Card.Header>
                     <Card.Body>
                        <Box as={'ul'}>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Автобронирование слотов
                              </Text>
                           </Flex>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Аналитика позиций
                              </Text>
                           </Flex>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Интеграция склада
                              </Text>
                           </Flex>
                        </Box>
                     </Card.Body>
                  </Card>
               </Grid>
               <Grid xs={12} sm={6} md={3}>
                  <Card>
                     <Card.Header css={{justifyContent: 'center'}}>
                        <Text b>Производство</Text>
                     </Card.Header>
                     <Card.Body>
                        <Box as={'ul'}>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Контроль оборудования
                              </Text>
                           </Flex>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Планирование цехов
                              </Text>
                           </Flex>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Прогноз поломок
                              </Text>
                           </Flex>
                        </Box>
                     </Card.Body>
                  </Card>
               </Grid>
               <Grid xs={12} sm={6} md={3}>
                  <Card>
                     <Card.Header css={{justifyContent: 'center'}}>
                        <Text b>Строительство</Text>
                     </Card.Header>
                     <Card.Body>
                        <Box as={'ul'}>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Цифровое управление проектами
                              </Text>
                           </Flex>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Контроль сроков
                              </Text>
                           </Flex>
                           <Flex as={'li'} css={{py: '$2', gap: '$2'}} align={'center'}>
                              <CheckIcon />
                              <Text span css={{color: '$accents8'}}>
                                 Мобильная отчётность
                              </Text>
                           </Flex>
                        </Box>
                     </Card.Body>
                  </Card>
               </Grid>
            </Grid.Container>

            <Button css={{mt: '$10'}}>Получить аудит</Button>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
