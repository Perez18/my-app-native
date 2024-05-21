import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyleTextInput from '../components/StyleTextInput'
import StyleText from '../components/StyleText'
import { loginValidationSchema } from '../validationSchemas/login'

const Login = () => {

  const initialValues = {
    email: '',
    password: ''
  }

  const styles = StyleSheet.create({
    form: {
      margin: 12
    },
    error: {
      fontSize: 12,
      color: 'red',
      marginBottom: 12,
      marginTop: -5
    }
  });

  const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
      <>
        <StyleTextInput
          value={field.value}
          error={meta.error}
          onChangeText={value => helpers.setValue(value)}
          {...props}
        />
        {meta.error && <StyleText style={styles.error}>{meta.error}</StyleText>}
      </>

    )

  }

  return (
    <Formik
      // validate={validate}
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}>
      {({handleSubmit }) => (
        <View style={styles.form}>
          <FormikInputValue
            name='email'
            placeholder='E-mail'
          />
          <FormikInputValue
            name='password'
            placeholder='Password'
            secureTextEntry
          />
          <Button onPress={handleSubmit} title='Log in' />
        </View>
      )}
    </Formik>
  )
}

export default Login