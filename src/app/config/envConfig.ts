import { envSchemaValidator } from '../validators/_env/envSchemaValidator';

export const env = envSchemaValidator.parse(import.meta.env);
