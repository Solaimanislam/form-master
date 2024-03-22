
import './App.css'
import GrandFa from './Components/GrandFa/GrandFa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import FefForm from './Components/FefForm/FefForm'
// import FullForm from './Components/FullForm/FullForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   // e.preventDefault();
  //   console.log('sign up data', data);

  // }

  // const handleUpdateProfile = data => {
  //   // e.preventDefault();
  //   console.log('update data', data);
  // }


  return (
    <>

      <h1>Form Master</h1>
      <GrandFa></GrandFa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FullForm></FullForm>    */}
      {/* <FefForm></FefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formTitle={'formTitle'} 
      handleSubmit={handleSignUpSubmit} >
        <div>
          <h2>Sign up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'profileUpdate'} 
      submitBtnText='update'
      handleSubmit={handleUpdateProfile} 
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
