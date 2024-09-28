import { Formik } from 'formik'
import React, { FC } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { setAuth } from '../redux/signinSlice'




const SignInPage: FC = props => {
     const dispatch  =useDispatch()
     const {isAuth} =useSelector((state:any)=>state.isAuth)
     const loginSimulation = (email:string,password:string)=>{
           if (email=="123@mail.com" && password=="123123") {
                dispatch(setAuth(true))
           }
     }
     console.log(isAuth);
     
     
     return((
          <View style={styles.container}>
               <Text>isAuth:{isAuth?'true':'false'}</Text>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={values => loginSimulation(values.email,values.password)}
              validationSchema={signinValidationSceheme}
            >
              {({ handleChange, handleSubmit,handleBlur, values, errors,touched,dirty }) => (
                <View style={styles.form}>
                  <TextInput
                    selectionColor={'gray'}
                    style={styles.input}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    placeholder='email giriniz'
                    keyboardType='email-address'
                    value={values.email}
                  />
                  {touched.email&& errors.email &&(<Text style={styles.error}>{errors.email}</Text>)}
                  <TextInput
                    style={styles.input}
                    selectionColor={'gray'}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    placeholder='password giriniz'
                    value={values.password}
                  />
                  {touched.password&& errors.password &&<Text style={styles.error}>{errors.password}</Text>}
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.submit}
                  >
                    <Text style={styles.submitText}>Gönder</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        ))
}

const signinValidationSceheme = Yup.object().shape({
  email: Yup.string()
    .required('email alanı gereklidir')
    .email('email formatında giriniz'),
  password: Yup.string()
    .required("şifre alanı gereklidir")
    .min(6, 'şifre minimum 6 karakterde olmalı')
    .max(30, 'şifre max 30 karakterde olabilir')
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  form: {
    margin: 10,
    backgroundColor: '#e1e1e1',
    padding: 15,
    borderRadius: 10
  },
  input: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#ffff'
  },
  submit: {
    padding: 7,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'purple'
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff'
  },
  error:{
     padding:7,
     paddingTop:0,
     paddingBottom:3,
     color:'red'
  }
})

export default SignInPage
