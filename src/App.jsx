import { Button, TextField } from '@mui/material'
import './App.css'
import img1 from './assets/img2.png'
import underweight from './assets/underweight.png'
import { useState } from 'react'
import healthy from './assets/healthy.png'
import overweight from './assets/overweight.png'
import logo from './assets/logo.png'

function App() {
  const [Height, setHeight] = useState(0)
  const [Weight, setWeight] = useState(0)
  const [BMI, setBMI] = useState(0)
  // for rendering p conditionaly
  const [isHeight, setIsHeight] = useState(true)
  const [isWeight, setIsWeight] = useState(true)

  // content
  const [content, setContent] = useState(false)

  const validate = (e) => {
    // console.log(e.target.value);
    const name = e.target.name
    const value = e.target.value
    // console.log(name, value);
    if (!!value.match(/^[0-9.]*$/)) {
      if (name === 'weight') {
        setWeight(value)
        setIsWeight(true)
      }
      else if (name === 'height') {
        setHeight(value)
        setIsHeight(true)
      }
    }
    else {
      if (name === 'height') {
        setIsHeight(false)
        setHeight(value)
      }
      else if (name === 'weight') {
        setIsWeight(false)
        setWeight(value)
      }
    }
  }
  const reset = () => {
    setWeight(0)
    setHeight(0)
    setIsWeight(true)
    setIsHeight(true)
    setBMI(0)
    setContent(false)
  }
  const calculate = (e) => {
    e.preventDefault()
    if (Height == "" || Weight == "") {
      alert("Please Fill The Form Completely")
    }
    else {
      parseFloat(setBMI((Weight / (Height ** 2)).toFixed(1)))
      setContent(true)
    }
  }
  return (
    <>
      <div className="row p-5 mt-5">
      <div className="col-md-2"></div>
        <div className="blurred-background col-md-8 d-flex justify-content-center align-items-center border rounded border-secondary" >
          <div style={{ backgroundColor: "transparent", width: "900px",filter:"5px", }} className="p-4 rounded-3  shadow" >
            <div className="row w-100">
              <div className="col-md-6">
                <div className='d-flex  justify-content-center align-items-center '><img src={logo} alt="" className='w-25' /></div>
                {/* <h1 className='text-center'>BMI CALCULATOR</h1> */}
                <p className='text-center text-light'>Calculate Your Body Mass Index Easily</p>
                <div style={{height:"2px",backgroundColor:"white"}}></div>
                <form className='mt-3' onSubmit={calculate}>
                  <div >
                    <TextField  label="Enter Your Weight (Kg)" variant="outlined" className='custom-textfield-root w-100 mt-3' onChange={(e) => validate(e)} name='weight' value={Weight || ""}  InputLabelProps={{
        style: { color: 'white' },}} InputProps={{
          style: { color: 'white' }, // Change input text color to white
        }} />
                    {!isWeight && <p className='text-danger'>*Invalid Input</p>}
                  </div>
                  <div className="mb-3">
                    <TextField id="outlined-basic" label="Enter Your Height (Meters)" variant="outlined" className='custom-textfield-root w-100 mt-4' onChange={(e) => validate(e)} name='height' value={Height || ""}  InputLabelProps={{
        style: { color: 'white' },
      }} InputProps={{
        style: { color: 'white', }, // Change input text color to white
      }} />
                    {!isHeight && <p className='text-danger'>*Invalid Input</p>}
                  </div>
                  <div className="mb-3 mt-4 d-flex jusofty-content-between">
                    <Button variant="contained" color="success" className='w-100 me-4 p-3' disabled={isHeight && isWeight ? false : true} type='submit'>Calculate</Button>
                    <Button variant="contained" color="primary" style={{ color: 'white' }} className='w-100 p-3' onClick={reset}>Reset</Button>
                  </div>
                </form>
                <div className='d-flex justify-content-center align-items-center  bg-light rounded py'>
                  <h3 className='text-center text-dark mt-1'>Your BMI is : {BMI}</h3>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                {
                  !content ? (<div><h1 style={{ color: "White", fontWeight: "bold", textDecoration: "underline" }}>BMI</h1> <div className='d-flex justify-content-center align-items-center flex-column'>
                    <p style={{ textAlign: "justify", fontSize: "13px" }} className='mt-2 text-light'>BMI, short for Body Mass Index, is a widely used measure to assess body fat based on height and weight. It categorizes individuals into different weight categories like underweight, normal weight and overweight. A BMI below 18.5 indicates underweight, 18.5 to 24.9 is normal weight and greater than 25 is overweight. For a comprehensive health evaluation, BMI should be considered alongside other health indicators.</p>
                    <img src={img1} alt="" style={{ width: "100%" }} />
                  </div> </div>) :

                    BMI < 18.5 && BMI > 0 ? 
                    (<div className='d-flex justify-content-center align-items-center flex-column'>
                      <p className='text-center text-light'>You Are Underweight</p>
                      <img src={underweight} alt="" style={{ height: "300px" }} />
                      <p className='mt-3 text-center text-light'>Eat more frequently. Choose nutrient-rich foods. Drink smoothies and shakes. Add calories</p></div>)
                       :
                        BMI >= 18.5 && BMI <= 24.9 ? (<div className='d-flex justify-content-center align-items-center flex-column'><p className='text-center text-light'>You Are a Healthy</p>
                        <img src={healthy} alt="" style={{ height: "300px" }} />
                        <p className='mt-3 text-center text-light'>Maintain a balanced diet. Continue regular physical activity. Monitor your weight regularly.</p></div>) : BMI >= 18.5 && BMI <= 24.9 ? (<div><p className='text-center text-light'>You Are a Healthy</p>
                          <p className='text-light'>Maintain a balanced diet. Continue regular physical activity. Monitor your weight regularly.</p></div>) : BMI > 25 ? (<div className='d-flex justify-content-center align-items-center flex-column'>
                            <p className='text-center text-light'>You Are Overweight</p>
                            <img src={overweight} alt="" style={{ height: "300px" }} />
                            <p className='mt-3 text-center text-light'>Exercise regularly. Eat a balanced diet. Avoid sugary drinks and snacks. Monitor your weight.</p>
                          </div>) : null
                }
              </div>
            </div>

          </div>


        </div>
        <div className="col-md-2">
        </div>

      </div>
    </>
  )
}

export default App
