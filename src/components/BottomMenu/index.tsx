import React, {useState} from 'react';
import {styles} from './styles';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@theme';

const options = {
  url: 'https://blog.logrocket.com/sharing-content-react-native-apps-using-react-native-share/',
  message: 'Use meu código de vendedor!',
};
export const BottomMenu = () => {
  const [loading, setLoading] = useState(false);
  const handleShare = async (customOptions = options) => {
    setLoading(true);
    try {
      await Share.share(customOptions);
      setLoading(false);
    } catch (error: any) {
      Alert.alert(error);
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Facilite suas vendas</Text>
      <Text style={styles.subtitle}>
        Envie seu link para seus clientes e realize suas vendas digitais.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await handleShare();
        }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <MaterialCommunity
              name="share-outline"
              size={20}
              color={theme.colors.buttonText}
            />

            <Text style={styles.button.text}> Compartilhar</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};
