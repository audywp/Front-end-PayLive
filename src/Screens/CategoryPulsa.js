import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Icon, Picker, Form } from 'native-base'
import { TextInput } from 'react-native-gesture-handler'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

const { width: WIDTH } = Dimensions.get('window')

class CategoryPulsa extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: undefined
    }
  }

  onValueChange (value) {
    this.setState({
      selected: value
    })
  }

  render () {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <View style={{ backgroundColor: '#fff' }}>
          <Text style={{ fontSize: 20, marginTop: 10, color: '#5f27cd', textAlign: 'center' }}>Operator</Text>
          <Form>
            <Picker
              mode='modal'
              placeholder='Select your SIM'
              iosIcon={<Icon name='arrow-down' />}
              textStyle={{ color: '#fff' }}
              itemStyle={{
                backgroundColor: '#d3d3d3',
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >

              <Picker.Item label='Axis' value='key0' />
              <Picker.Item label='Indosat' value='key1' />
              <Picker.Item label='Telkomsel' value='key2' />
              <Picker.Item label='XL' value='key3' />
              <Picker.Item label='3' value='key4' />
            </Picker>
          </Form>
        </View>
        <RadioForm
          buttonSize={10}
          buttonColor='#5f27cd'
          style={styles.radio}
          // radio_props={radio_props}
          initial={0}
          formHorizontal
          onPress={(value) => { this.setState({ value: value }) }}
        />
        <View style={styles.container}>
          <View>
            <Text>Nomor Ponsel</Text>
            <TextInput
              style={styles.input} placeholder='Nomor Ponsel'
              keyboardType='phone-pad'
            />
          </View>
          <View>
            <Text>Nominal</Text>
            <Form>

              <Picker
                mode='modal'
                placeholder='Select your SIM'
                iosIcon={<Icon name='arrow-down' />}
                textStyle={{ color: '#5cb85c' }}
                itemStyle={{
                  backgroundColor: '#d3d3d3',
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                itemTextStyle={{ color: '#788ad2' }}
                style={{ width: undefined }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >

                <Picker.Item label='Rp 5.000' value='key0' />
                <Picker.Item label='Rp 15.000' value='key1' />
                <Picker.Item label='Rp 25.000' value='key2' />
                <Picker.Item label='Rp 50.000' value='key3' />
                <Picker.Item label='Rp 100.000' value='key4' />
              </Picker>
            </Form>
          </View>
          <View>
            <Text>Metode Pembayaran</Text>
            <Form>

              <Picker
                mode='modal'
                placeholder='Select your SIM'
                iosIcon={<Icon name='arrow-down' />}
                textStyle={{ color: '#5cb85c' }}
                itemStyle={{
                  backgroundColor: '#d3d3d3',
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                itemTextStyle={{ color: '#788ad2' }}
                style={{ width: undefined }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label='PayLive Cash' value='key0' />
                <Picker.Item label='PayLive Points' value='key1' />
              </Picker>
            </Form>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: 'white' }}>BERIKUTNYA</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 25
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20
  },
  input: {
    width: WIDTH - 65,
    height: 45,
    fontSize: 16,
    color: 'black',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 15
  },
  inputgender: {
    width: WIDTH - 65,
    height: 45,
    fontSize: 16,
    color: 'black',
    // borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 15
  },
  radio: {
    justifyContent: 'space-around',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20
  },
  btn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    marginVertical: 20,
    backgroundColor: '#00d2d3',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CategoryPulsa
