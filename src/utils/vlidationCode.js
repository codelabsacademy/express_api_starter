
import { uid } from 'uid';

export const createValidationCode = () => {
    return uid(16);
}