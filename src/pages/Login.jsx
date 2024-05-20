import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyleTextInput from '../components/StyleTextInput'
const Login = () => {

  const initialValues = {
    email: '',
    password: ''
  }

  const styles = StyleSheet.create({
    form: {
      margin: 12
    }
  });

  const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
      <StyleTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
    )

  }

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.form}>
          <FormikInputValue
            name='email'
            placeholder='E-mail'
          />
          <FormikInputValue
            name='s'
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