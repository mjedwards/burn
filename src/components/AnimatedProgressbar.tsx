import React from "react";
import {
  IonProgressBar,
} from "@ionic/react";


const AnimatedProgressbar: React.FC = () => {
  const caloricGoal = 2000;
  const totalCaloricIntake = [400,250,400,250,400].reduce((a,b) => a + b)
  const caloricProgress = totalCaloricIntake/caloricGoal
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    setValue(caloricProgress)
  }, [value,totalCaloricIntake])
  return (
    <IonProgressBar color="primary" value={value}></IonProgressBar>
  )
};

export default AnimatedProgressbar;
