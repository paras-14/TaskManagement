import { toast } from 'react-toastify'

const Notify = () => {

    const notify = () =>{
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };


    const loginFailed = () =>{
        toast.error(('Login Failed'), {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    };


    const loginSuccesful = () =>{
        toast.success('Login Successful', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
    };

  return (
    <>
    
    <button  onClick={notify}>
      Click
    </button>
    <br/>
    <button  onClick={loginFailed}>
      Click
    </button>
    <br/>
    <button  onClick={loginSuccesful}>
      Click
    </button>

    </>
  )
}

export default Notify