/* eslint-disable react-refresh/only-export-components */
import './styles/globals.css';

export { toast } from './components/toast-functions';
export { Toaster } from './components/toaster';
export type {
  Position as ToastPosition,
  ToastProps as ToastProperties,
  Variant as ToastVariant,
  Theme as ToastTheme,
  ToastOptions,
  ToasterProperties,
} from './types/toast.types';
