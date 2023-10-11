import {styled, useTheme} from '@stitches.config';

interface ITextProps {
  text: string | number;
}

const Text: React.FC<ITextProps> = ({text}) => {
  const theme = useTheme();

  return <StyledText style={{color: theme.colors.text}}>{text}</StyledText>;
};

const StyledText = styled('Text');

export default Text;
