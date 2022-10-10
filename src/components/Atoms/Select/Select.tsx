import React, { useState } from "react";
import { useRef } from "react";
import { Controller } from "react-hook-form";
import { LayoutChangeEvent, View } from "react-native";
import { Button, Divider, Menu, TextInput } from "react-native-paper";
import { ISelectData } from "../../../types/share/ISelectData";
import { ITextInput } from "../../../types/share/ITextInput/ITextInput";



interface ISelectProps extends ITextInput {
    data: ISelectData[]
}

export const Select = ({ name, label, control, rules, data }: ISelectProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [heightOffset, setHeightOffset] = useState(0);
    const [width, setInputWidth] = useState(0);




    const closeMenu = () => {
        setIsOpen(false);
    }

    const openMenu = () => {
        setIsOpen(true);
        // console.log(textInput.current);

    }


    <View onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
    }} />


    const setValue = (item: ISelectData, onChange: (...event: any[]) => void) => {
        onChange(item)
        closeMenu();
    }


    const onLayout = (event: LayoutChangeEvent) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        setHeightOffset(height);
        setInputWidth(width);
    }


    return (

        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
                <View
                    onLayout={onLayout}
                >
                    <Menu
                        visible={isOpen}
                        onDismiss={closeMenu}
                        anchor={
                            <TextInput
                                label={label}
                                mode="outlined"
                                right={<TextInput.Icon name={isOpen ? "chevron-up" : "chevron-down"} onPress={openMenu} />}
                                editable={false}
                                value={field.value?.label}
                            />
                        }
                        style={{ marginTop: heightOffset, width: width }}
                    >
                        {
                            data.map((item, index) => (
                                <Menu.Item key={index} onPress={() => setValue(item, field.onChange)} title={item.label} />
                            ))
                        }
                    </Menu>
                </View>
            )}
        />

    )
}