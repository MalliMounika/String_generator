import React from 'react'
function App() {

  let[password, setPassword ] =React.useState("")
  let[passwordLength,setPasswordLength] = React.useState(1)

  const handleLengthIncrease = (e) => {

    e.preventDefault()
    setPasswordLength(passwordLength + 1)
  }

  const handleLengthDecrease = (e) => {
    e.preventDefault()

    if(passwordLength === 1) return;
    setPasswordLength(passwordLength - 1)
 }

 const handlePasswordGenerate = React.useCallback(() => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let pass = ""
  for(let i=0; i<passwordLength; i++){
    pass= pass + chars[Math.floor(Math.random() * chars.length)]
  }
  setPassword(pass)},[passwordLength])

  React.useEffect(() => {
  handlePasswordGenerate()

 },[passwordLength])

return(
  
  
  
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200 via-indigo-400 to-fuchsia-50
    
    h-screen w-screen flex items-center justify-center flex-col gap-y-6">
      
      <div className="flex items-center justify-center flex-col gap-y-10">
      <h2 className="text-3xl text-blue-700 font-bold">String Generator</h2>
      </div>
     
        <input type="text" className="h-10 w-96 outline-none border border-blue-900 rounded-lg px-5
        text-center hover:bg-white-600 shadow-lg shadow-indigo-600"  value = {password} readOnly/>
      
      <div className="flex items-center justify-center gap-x-3"> 
       
        <button className='h-10 px-5 text-2xl font-bold bg-indigo-600 text-slate-200 rounded-lg
        outline-none hover:bg-indigo-800 shadow-lg shadow-blue-950/100' onClick={handleLengthIncrease}>+</button>
        
        <input type="text" className="h-10 px-5 text-center outline-none border border-indigo-800
        rounded-lg hover:bg-indigo-200 shadow-lg shadow-indigo-700"  value = {passwordLength} readOnly/>
        <button className='h-10 px-5 text-3xl font-bold bg-indigo-600 text-slate-200 rounded-lg 
        outline-none hover:bg-indigo-800 shadow-lg shadow-blue-950/100' onClick = {handleLengthDecrease}>-</button>


      </div>
      </div>

      
    
      
      
      
     
  
    
  )
}

export default App