import React, {useCallback, useRef, useState} from 'react';
import {Container, Overlay, Content, Title} from './styles';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import theme from '@theme';
import {DateData, MarkedDates} from 'react-native-calendars/src/types';
import {
  addDays,
  differenceInDays,
  endOfDay,
  format,
  isAfter,
  startOfDay,
  subDays,
} from 'date-fns';
import {PrimaryButton} from '@components/PrimaryButton';

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb'],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'pt-BR';

interface CalendarModalProps {
  onConfirm: (initialDate: Date, endDate: Date) => void;
  visible: boolean;
}

export const CalendarModal = ({onConfirm, visible}: CalendarModalProps) => {
  const [initialDate, setInitialDate] = useState<MarkedDates | null>(null);
  const [endDate, setEndDate] = useState<MarkedDates | null>(null);
  const atualDate = useRef(format(new Date(), 'yyyy-MM-dd'));

  const selectedDates = Object.assign({}, initialDate, endDate);

  const handlePressDay = useCallback(
    (day: DateData) => {
      if (!initialDate) {
        return setInitialDate({
          [day.dateString]: {
            startingDay: true,
            color: theme.colors.title,
            textColor: theme.colors.cardBackground,
          },
        });
      }
      const end_date = new Date(day.dateString);
      const initial_date = new Date(Object.keys(initialDate)[0]);

      const isAfterFirstDate = isAfter(end_date, initial_date);
      if (!endDate && isAfterFirstDate) {
        const diffDays = differenceInDays(end_date, initial_date);

        let days = [];

        for (let i = 0; i <= diffDays - 2; i++) {
          const subDate = subDays(end_date, i);

          days.push(format(subDate, 'yyyy-MM-dd'));
        }

        days.forEach(date => {
          return setEndDate(state => ({
            ...state,
            [date]: {
              selected: true,
              color: '#E9BC32',
              textColor: theme.colors.cardBackground,
            },
          }));
        });

        return setEndDate(state => ({
          ...state,
          [day.dateString]: {
            selected: true,
            endingDay: true,
            color: theme.colors.title,
            textColor: theme.colors.cardBackground,
          },
        }));
      }

      setInitialDate({
        [day.dateString]: {
          startingDay: true,
          color: theme.colors.title,
          textColor: theme.colors.cardBackground,
        },
      });
      setEndDate(null);
    },
    [endDate, initialDate, setEndDate, setInitialDate],
  );

  function handleConfirm() {
    if (initialDate && endDate) {
      const initial_date = startOfDay(
        addDays(new Date(Object.keys(initialDate)[0]), 1),
      );
      const endDateArray = Object.keys(endDate);
      const end_date = endOfDay(
        addDays(new Date(endDateArray[endDateArray.length - 1]), 1),
      );

      console.log({initial_date, end_date});

      onConfirm(initial_date, end_date);
    }
  }

  return (
    <Container visible={visible} transparent>
      <Overlay>
        <Content>
          <Title>ESCOLHA 2 DIAS</Title>
          <Calendar
            theme={{
              calendarBackground: theme.colors.cardBackground,
              textDayFontFamily: theme.fontFamily.medium,
              textMonthFontFamily: theme.fontFamily.medium,
              textDayHeaderFontFamily: theme.fontFamily.bold,
              dayTextColor: theme.colors.subtitle,
              selectedDayTextColor: theme.colors.cardBackground,
              selectedDayBackgroundColor: theme.colors.buttonBackground,
              todayTextColor: theme.colors.title,
              monthTextColor: theme.colors.title,
              arrowColor: theme.colors.title,
              textSectionTitleDisabledColor: theme.colors.grey,
              textDisabledColor: theme.colors.grey,
            }}
            markingType="period"
            hideExtraDays
            maxDate={atualDate.current}
            markedDates={selectedDates}
            onDayPress={handlePressDay}
          />

          <PrimaryButton disabled={!endDate} onPress={handleConfirm}>
            Confirmar
          </PrimaryButton>
        </Content>
      </Overlay>
    </Container>
  );
};
