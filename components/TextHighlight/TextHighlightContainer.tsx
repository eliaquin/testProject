import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export interface TextHighlightContainerProps {
    children: any
}

const TextHighlightContainer: React.FC<TextHighlightContainerProps> = ({ children }) => {
    return (
        <View style={style.container}>
            {children}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});

export default TextHighlightContainer;