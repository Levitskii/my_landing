import { Button, Card, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>Раздел услуг</Text>
          <Text h2>Наши ключевые направления</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Разработка ПО
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Разрабатываем индивидуальные системы под ваши задачи
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents', color: '$accents8' }}>от </Text>
              <Text css={{ display: 'contents' }} h2>
                3
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}> х дней</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Подробнее</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Веб-приложения и мобильные решения
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Интеграции с Wildberries, Ozon, 1С
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Чат-боты для автоматизации продаж
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Бизнес-аналитика
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Данные превращаем в решения, усиливая рост прибыли и
                    конкурентные преимущества
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents', color: '$accents8' }}>от </Text>
              <Text css={{ display: 'contents' }} h2>
                1
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}> дня</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Подробнее</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Дашборды для контроля KPI
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Прогнозирование спроса и остатков
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Анализ эффективности маркетинга
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Техническая поддержка
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Поддерживаем инфраструктуру, чтобы бизнес работал стабильно
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents', color: '$accents8' }}>от </Text>
              <Text css={{ display: 'contents' }} h2>
                1
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}> месяца</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Подробнее</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Круглосуточный мониторинг систем
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Резервное копирование данных
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Оптимизация работы серверов
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Спецпредложение
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ color: '$accents8', mb: '$8' }}>
                Бесплатный экспресс-аудит 1-2 процессов с отчетом о точках роста и
                расчетом экономии.
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>от </Text>
              <Text css={{ display: 'contents' }} h2>
                1
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}> дня</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Заказать аудит</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Анализ 1-2 процессов
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Оценка потенциала
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Проект решения
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
