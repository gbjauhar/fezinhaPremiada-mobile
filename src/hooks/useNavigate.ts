import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../@types/routes';

export function useNavigate() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return navigation;
}
