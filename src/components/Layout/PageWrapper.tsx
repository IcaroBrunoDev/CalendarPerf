import {styled, useTheme} from '@stitches.config';
import {ReactNode} from 'react';

interface IPageWrapper {
  children: ReactNode;
}

const PageWrapper: React.FC<IPageWrapper> = ({children}) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.backgroundColor}}>
      {children}
    </SafeAreaView>
  );
};

const SafeAreaView = styled('SafeAreaView', {
  flex: 1,
});

export default PageWrapper;
