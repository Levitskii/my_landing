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
          css={{
            'gap': '$10',
            'position': 'relative',
            'px': '$2',
            'maxWidth': '1000px',
            'width': '100%',
            'display': 'grid',
            'justifyItems': 'center',
            'gridTemplateColumns': '1fr',
            '@media (min-width: 612px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media (min-width: 1000px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            '@media (min-width: 1280px)': {
              gridTemplateColumns: 'repeat(5, 1fr)',
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
                }}
              >
                <Text css={{fontSize: '1.75rem'}}>{icon}</Text>
                <Text h4 weight={'medium'}>{title}</Text>
                <Text span css={{color: '$accents8'}}>{text}</Text>
              </Flex>
              {i === 2 && (
                <Flex
                  css={{
                    'gridColumn': '1 / -1',
                    'justifyContent': 'center',
                    'display': 'none',
                    '@media (min-width: 1000px)': {display: 'flex'},
                    '@media (min-width: 1280px)': {display: 'none'},
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
