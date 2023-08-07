import React, { ReactElement } from 'react'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper'
import { theme } from '../../../config/theme-config'

type ConfiramtionModalProps = {
    show: boolean
    onDismiss: () => void
    title?: string
    content?: ReactElement | string
    actions?: ReactElement
    acceptButtonLabel?: string
    cancelButtonLable?: string
    onAccept: () => void
}

export const ConfirmationModal = ({
    show,
    onDismiss,
    title = '¿ Esta seguro que desea realizar esta acción ?',
    content = 'Seleccione una de las opciones mostradas para continuar.',
    actions,
    acceptButtonLabel = 'Aceptar',
    cancelButtonLable = 'Cancelar',
    onAccept,
}: ConfiramtionModalProps) => {
    const buttonAction = actions || (
        <>
            <Button color={theme.colors.error} onPress={onDismiss}>
                {cancelButtonLable}
            </Button>
            <Button onPress={onAccept}>{acceptButtonLabel}</Button>
        </>
    )

    return (
        <Portal>
            <Dialog visible={show} onDismiss={onDismiss}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{content}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>{buttonAction}</Dialog.Actions>
            </Dialog>
        </Portal>
    )
}
