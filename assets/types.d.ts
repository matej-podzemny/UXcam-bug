declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FunctionComponent<SvgProps>;
  export default content;
}

declare module '*.png' {
  import { ImageRequireSource } from 'react-native';
  const image: ImageRequireSource;
  export default image;
}
