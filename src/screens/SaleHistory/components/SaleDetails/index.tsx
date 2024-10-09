import React from 'react';
import { PrimaryButton } from '@components/PrimaryButton';
import { Text } from '@components/Text';
import { Image, View } from 'react-native';
import { styles } from './styles';
import logo from '../../../../assets/logo.png';
import theme from '@theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TitleCard } from '../../SingleSale/components/TitleCard';
import { formatDate } from '@utils/formatValue';

export const SaleDetails = ({ titles, description }) => {
  return (
    <View style={styles.detail}>
      <Text style={styles.title}>Detalhes do produto</Text>
      <View style={styles.description}>
        <Image source={logo} style={styles.image} />
        <Text>{description}</Text>
      </View>
      <Text style={styles.title}>
        Edição: <Text>Edição {titles.edition?.name}</Text>
      </Text>
      <Text style={styles.title}>
        Chance: <Text>Simples</Text>
      </Text>
      <Text style={styles.title}>
        Data do Sorteio:{' '}
        <Text>{formatDate(titles.edition.draw_date).substring(0, 10)}</Text>
      </Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Títulos:</Text>
        <View style={styles.titles}>
          <TitleCard
            dozens={titles.dozens}
            name={titles.name}
            chance={titles.chances}
            price={titles.value}
          />
        </View>
        <View style={styles.buttons}>
          <PrimaryButton style={styles.button}>
            <Text>-</Text>
          </PrimaryButton>
          <PrimaryButton style={styles.button}>
            <Text>+</Text>
          </PrimaryButton>
          <PrimaryButton
            style={styles.printButton}
            icon={
              <Ionicons
                name="print-outline"
                size={20}
                color={theme.colors.buttonTitle}
              />
            }>
            Imprimir
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};
