import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { DrawerNavigationOptions } from '@react-navigation/drawer'
type HeaderOptionsProps = {
    title?: string
    headerShadowVisible?: boolean
    onPressBack: () => void
    showHeaderLeft?: boolean
    headerTitleAlign?: 'center' | 'left' | undefined
}

type HeaderOptions = {
    title?: string
    headerTitleAlign: 'center' | 'left' | undefined
    headerLeft?: () => ReactNode
    headerShadowVisible: boolean
}

const headerLeftComponent = ({ onPressBack }: { onPressBack: () => void }) => (
    <TouchableOpacity onPress={onPressBack}>
        <AntDesign name="left" size={20} />
    </TouchableOpacity>
)

const headerOptions = ({
    title,
    headerShadowVisible = false,
    onPressBack,
    showHeaderLeft = true,
    headerTitleAlign = 'center',
}: HeaderOptionsProps): HeaderOptions => {
    return {
        title,
        headerTitleAlign,
        headerLeft: showHeaderLeft
            ? () => headerLeftComponent({ onPressBack })
            : undefined,
        headerShadowVisible,
    }
}

export const stackheaderOptions = ({
    title = '',
    headerShadowVisible = false,
    onPressBack,
}: HeaderOptionsProps): NativeStackNavigationOptions => {
    return headerOptions({ title, headerShadowVisible, onPressBack })
}

export const DrawerHeaderOptions = ({
    title = '',
    headerShadowVisible = false,
    onPressBack,
}: HeaderOptionsProps): DrawerNavigationOptions => {
    return headerOptions({
        title,
        headerShadowVisible,
        onPressBack,
        headerTitleAlign: 'left',
        showHeaderLeft: false,
    })
}
