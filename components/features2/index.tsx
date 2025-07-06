import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

const steps = [
  {
    icon: '🔍',
    title: 'Бесплатная диагностика',
    text: 'Анализ 1-2 процессов, оценка потенциала',
  },
  {
    icon: '⚡',
    title: 'Прототипирование',
    text: 'Рабочий MVP за 3 дня',
  },
  {
    icon: '💻',
    title: 'Разработка',
    text: 'Поэтапное внедрение модулей',
  },
  {
    icon: '🚀',
    title: 'Запуск',
    text: 'Обучение сотрудников и поддержка',
  },
  {
    icon: '📈',
    title: 'Анализ эффективности',
    text: 'Отчёт по достижению KPI',
  },
];

export const Features2 = () => {
  return (
    <>
      <Flex
        direction={'column'}
        css={{
          'gap': '$10',
          'pt': '$20',
          'px': '$6',
          'alignItems': 'center',
          '@sm': { px: '$16' },
        }}
      >
        <Flex direction="column" align={'center'} css={{gap: '$2'}}>
          <Text span css={{color: '$blue600'}}>5 шагов к результату</Text>
          <Text h3 css={{textAlign: 'center'}}>Как мы работаем</Text>
        </Flex>

        <Flex
          justify={'between'}
          wrap={'wrap'}
          css={{
            'gap': '$10',
            'position': 'relative',
            'px': '$2',
            'maxWidth': '1000px',
            'width': '100%',
            '@md': {
              '&::before': {
                content: '',
                position: 'absolute',
                top: '36px',
                left: '5%',
                right: '5%',
                height: '1px',
                background: '$accents3',
              },
            },
          }}
        >
          {steps.map(({icon, title, text}, i) => (
            <React.Fragment key={i}>
              <Flex
                direction={'column'}
                align={'center'}
                css={{
                  'textAlign': 'center',
                  'maxWidth': '160px',
                  'gap': '$4',
                  'position': 'relative',
                  'flexBasis': '20%',
                  '@md': {flexBasis: '33.33%'},
                  '@sm': {flexBasis: '100%'},
                }}
              >
                <Text css={{fontSize: '1.75rem'}}>{icon}</Text>
                <Text h4 weight={'medium'}>{title}</Text>
                <Text span css={{color: '$accents8'}}>{text}</Text>
              </Flex>
              {i === 2 && (
                <Flex
                  css={{
                    'flexBasis': '100%',
                    'justifyContent': 'center',
                    'display': 'none',
                    '@md': {display: 'flex'},
                    '@sm': {display: 'none'},
                  }}
                >
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRight: '1px solid',
                      borderBottom: '1px solid',
                      borderColor: 'var(--nextui-colors-accents3)',
                      transform: 'rotate(45deg)',
                    }}
                  />
                </Flex>
              )}
            </React.Fragment>
          ))}
        </Flex>

        <Button css={{mt: '$8'}}>Получить бесплатный аудит</Button>
      </Flex>
      <Divider css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}} />
    </>
  );
};
