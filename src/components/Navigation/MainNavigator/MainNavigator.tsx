import React from "react";
import { useTokenStore } from "../../../store/token/useTokenStore";
import { useUserStore } from "../../../store/useUserStore";
import { AuthNavigator } from "../AuthNavigator/AuthNavigator";
import { MenuDrawerNavigator } from "../MenuDrawerNavigator/MenuDrawerNavigator";




export const MainNavigator = () => {

    const isAuth = useTokenStore(state => state.isAuth);    

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