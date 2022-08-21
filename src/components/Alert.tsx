import { useAppSelector } from "hook";

const Alert = () => {

    const alert  = useAppSelector(state => state.alert.alertSlice);
  
    return (
        <div className={`absolute transition-all duration-500 delay-150 top-[41px] sm:top-[66px] left-0 right-0 h-0 opacity-0 ${alert.style} rounded-b-xl text-base flex flex-row items-center justify-center ${alert.open && "h-[41px] sm:h-[65px] opacity-100"}`} role="alert">
        {alert.message}
      </div>
    );
  }
  
  export default Alert;