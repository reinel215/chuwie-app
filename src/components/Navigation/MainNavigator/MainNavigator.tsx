import React from "react";
import { useUserStore } from "../../../store/useUserStore";
import { AuthNavigator } from "../AuthNavigator/AuthNavigator";
import { MenuDrawerNavigator } from "../MenuDrawerNavigator/MenuDrawerNavigator";




export const MainNavigator = () => {

    const isAuth = useUserStore(state => state.isAuth);    

    return (
        <>
            {
                isAuth ?
                    <MenuDrawerNavigator />
                    :
                    <AuthNavigator />
            }
        </>
    )
}