import * as React from 'react';
import { Text } from 'react-native';
import TextHighlightContainer from './TextHighlightContainer';

export interface TextHighlightProps {
    text: string,
    search: string,
    minimumCharacters?: number
}

const TextHighlight: React.FC<TextHighlightProps> = ({ text, search, minimumCharacters = 3 }) => {
    function processText() {
        if (text.length < minimumCharacters) return <Text>{text}</Text>;
        const index = text.toLowerCase().indexOf(search.toLowerCase());
        console.log(index);
        if (index < 0) {
            return <Text>{text}</Text>;
        } else if (index === 0) {
            return <><Text>{text}</Text><Text>{text}</Text></>;
        } else {
            return <Text>{text}</Text>;
        }
    }

    return (
        <TextHighlightContainer>
            {processText()}
        </TextHighlightContainer>
    );

}

export default TextHighlight;