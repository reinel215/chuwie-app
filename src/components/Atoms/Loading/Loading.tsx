import { ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';


interface LoadingProps {
    style: ViewStyle;
}

export const Loading = ({ style }: LoadingProps) => {
    return <ActivityIndicator animating={true} color={"#097e5c"} size="large" style={style} />
}