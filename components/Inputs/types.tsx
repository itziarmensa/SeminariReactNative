import { ReactNode } from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';

export interface StyledTextInputProps {
    children?: ReactNode;
    placeholder?: string;
    style?: StyleProp<TextStyle>;
}