import React, {createContext, useState} from 'react';

import { definedStyles } from '../theme/styles';

export const Themes = ['ThemeONE', 'ThemeTWO', 'ThemeTHREE']

export const AppContext = createContext()

export const AppProvider = props => {
    const [defaultTheme, setDefaultTheme] = useState('ThemeONE')
    const [styleGuide, setStyleGuide] = useState(definedStyles[defaultTheme])
    const [brandData, setBrandDataState] = useState(null)
    const setBrandData = (newState = {}) => {
        const brandTheme = 'ThemeONE'
        const primaryColor1 = newState && newState.features && newState.features.primaryColor1 || definedStyles[brandTheme].primaryColor1
        const primaryColor2 = newState && newState.features && newState.features.primaryColor2 || definedStyles[brandTheme].primaryColor2
        const secondaryColor1 = newState && newState.features && newState.features.secondaryColor1 || definedStyles[brandTheme].secondaryColor1
        const secondaryColor2 = newState && newState.features && newState.features.secondaryColor2 || definedStyles[brandTheme].secondaryColor2
        setBrandDataState(newState)
        setDefaultTheme(brandTheme)
        setStyleGuide({...definedStyles[brandTheme], primaryColor1, primaryColor2, secondaryColor1, secondaryColor2})
    }
    const value = {
        defaultTheme,
        styleGuide,
        brandData,
        setBrandData,
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}