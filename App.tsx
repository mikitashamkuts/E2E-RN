/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <View style={{backgroundColor: 'tomato', justifyContent: 'center'}}>
      <Text style={{padding: 6, margin: 6}}>Login</Text>
      <TextInput
        // accessibilityLabel="login"
        testID="login"
        onChangeText={setLogin}
        style={{borderColor: 'black', borderWidth: 1, padding: 6, margin: 6}}
      />
      <Text style={{padding: 6, margin: 6}}>Password</Text>
      <TextInput
        testID="password"
        onChangeText={setPassword}
        style={{borderColor: 'black', borderWidth: 1, padding: 6, margin: 6}}
      />
      <View accessibilityLabel="apply-password-login">
        <Button
          accessibilityLabel="apply-password-login"
          testID="apply-password-login"
          style={{
            borderColor: 'black',
            borderWidth: 1,
            padding: 6,
            margin: 6,
          }}
          title="apply-password-login"
          onPress={() => {
            setIsLoggedIn(login && password);
          }}
        />
      </View>
      {isLoggedIn && (
        <Text
          testID="User test logged in"
          accessibilityLabel="User test logged in">
          User test logged in
        </Text>
      )}
    </View>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        disableScrollViewPanResponder
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <LoginForm />
          <Section title="Step One">
            Edit{' '}
            <Text
              testID="App.tsx"
              accessibilityLabel="App.tsx"
              style={styles.highlight}>
              App.tsx
            </Text>{' '}
            to change this screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
