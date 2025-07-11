import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column" css={{alignItems: 'flex-start'}}>
               <Text span css={{color: '$blue600'}}>
                  Специализированные решения
               </Text>
               <Text h3>Для вашего бизнеса</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  От e-commerce до строительства. Мы быстро адаптируем каждое
                  решение под конкретные процессы вашей компании.
               </Text>

               <Flex direction="column">
                  <Flex css={{py: '$10', gap: '$5'}}>
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>E-commerce</Text>
                        <Text span css={{maxWidth: '400px', color: '$accents8'}}>
                           Автоматизация заказов, Динамическое ценообразование,
                           Синхронизация остатков
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex css={{py: '$10', gap: '$5'}}>
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>Маркетплейсы</Text>
                        <Text span css={{maxWidth: '400px', color: '$accents8'}}>
                           Автобронирование слотов, Аналитика позиций,
                           Интеграция склада
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex css={{py: '$10', gap: '$5'}}>
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>Производство</Text>
                        <Text span css={{maxWidth: '400px', color: '$accents8'}}>
                           Контроль оборудования, Планирование цехов,
                           Прогноз поломок
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex css={{py: '$10', gap: '$5'}}>
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>Строительство</Text>
                        <Text span css={{maxWidth: '400px', color: '$accents8'}}>
                           Цифровое управление проектами, Контроль сроков,
                           Мобильная отчётность
                        </Text>
                     </Flex>
                  </Flex>
               </Flex>

            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
